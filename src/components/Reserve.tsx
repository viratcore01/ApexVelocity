import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef } from "react";

const ParticleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1,
      o: Math.random() * 0.5 + 0.2,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(20, 100%, 60%, ${p.o})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
};

const Reserve = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="reserve" ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(20_100%_18%)] to-background" />
      <ParticleCanvas />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2
          className={`font-display text-5xl md:text-7xl text-foreground mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          JOIN THE RIDERS WHO <span className="text-primary">CHOSE TO LIVE.</span>
        </h2>
        <p
          className={`font-body text-muted-foreground text-lg mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          First 500 units at launch price. No credit card needed.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className={`max-w-md mx-auto space-y-4 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <select
            className="w-full px-4 py-3 bg-card border border-border rounded-sm font-body text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">Rider Type</option>
            <option value="racer">Racer</option>
            <option value="tourer">Tourer</option>
            <option value="delivery">Delivery</option>
            <option value="other">Other</option>
          </select>
          <button
            type="submit"
            className="w-full px-8 py-4 font-display text-lg tracking-wider bg-card border-2 border-primary text-primary rounded-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-orange-hover"
          >
            SECURE MY APEXPULSE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reserve;
