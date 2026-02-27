import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fs from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 3001);
const jwtSecret = process.env.JWT_SECRET || "dev-only-secret";
const adminEmail = process.env.ADMIN_EMAIL || "viratcore01@gmail.com";
const allowedOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:8080";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataDir = path.join(__dirname, "data");
const usersFile = path.join(dataDir, "users.json");

app.use(cors({ origin: allowedOrigin, credentials: false }));
app.use(express.json());

const ensureStore = async () => {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(usersFile);
  } catch {
    await fs.writeFile(usersFile, "[]", "utf8");
  }
};

const readUsers = async () => {
  await ensureStore();
  const raw = await fs.readFile(usersFile, "utf8");
  return JSON.parse(raw);
};

const writeUsers = async (users) => {
  await fs.writeFile(usersFile, JSON.stringify(users, null, 2), "utf8");
};

const getTransporter = () => {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
};

const sendAdminEmail = async (user) => {
  const transporter = getTransporter();
  if (!transporter) {
    console.warn("SMTP is not configured. Skipping admin email.");
    return;
  }

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: adminEmail,
    subject: "New ApexVelocity rider registration",
    text: `New rider joined.\n\nName: ${user.name}\nEmail: ${user.email}\nRider Type: ${user.riderType}\nCreated At: ${user.createdAt}`,
  });
};

const sanitizeUser = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  riderType: user.riderType,
  createdAt: user.createdAt,
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/auth/register", async (req, res) => {
  try {
    const { name, email, password, riderType } = req.body ?? {};
    const normalizedEmail = String(email || "").trim().toLowerCase();

    if (!name || !normalizedEmail || !password || !riderType) {
      return res.status(400).json({ error: "name, email, password, and riderType are required." });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return res.status(400).json({ error: "Invalid email address." });
    }

    if (String(password).length < 8) {
      return res.status(400).json({ error: "Password must be at least 8 characters." });
    }

    const users = await readUsers();
    if (users.some((u) => u.email === normalizedEmail)) {
      return res.status(409).json({ error: "An account with this email already exists." });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = {
      id: randomUUID(),
      name: String(name).trim(),
      email: normalizedEmail,
      riderType: String(riderType).trim(),
      passwordHash,
      createdAt: new Date().toISOString(),
    };

    users.push(user);
    await writeUsers(users);
    await sendAdminEmail(user);

    const token = jwt.sign({ sub: user.id, email: user.email }, jwtSecret, { expiresIn: "7d" });

    return res.status(201).json({ token, user: sanitizeUser(user) });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to register." });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body ?? {};
    const normalizedEmail = String(email || "").trim().toLowerCase();
    const users = await readUsers();
    const user = users.find((u) => u.email === normalizedEmail);

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const ok = await bcrypt.compare(String(password || ""), user.passwordHash);
    if (!ok) {
      return res.status(401).json({ error: "Invalid credentials." });
    }

    const token = jwt.sign({ sub: user.id, email: user.email }, jwtSecret, { expiresIn: "7d" });
    return res.json({ token, user: sanitizeUser(user) });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to login." });
  }
});

app.listen(port, async () => {
  await ensureStore();
  console.log(`Auth server running on http://localhost:${port}`);
});
