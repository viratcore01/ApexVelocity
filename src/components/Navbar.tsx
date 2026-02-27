import { useState, useEffect } from "react";

const links = ["Home", "How It Works", "Technology", "Impact", "Get ApexPulse"];
const sectionIds = ["hero", "howitworks", "technology", "impact", "reserve"];

const PulseIcon = () => (
  <svg width="20" height="16" viewBox="0 0 24 16" fill="none" className="inline-block ml-1">
    <polyline
      points="0,8 4,8 6,2 9,14 12,4 14,10 16,8 24,8"
      stroke="hsl(20 100% 60%)"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (i: number) => {
    setActive(i);
    setMobileOpen(false);
    document.getElementById(sectionIds[i])?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-2xl tracking-wider text-foreground flex items-center gap-0">
          APEX<span className="text-primary">PULSE</span>
          <PulseIcon />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <button
              key={l}
              onClick={() => scrollTo(i)}
              className={`relative font-body text-sm tracking-wide uppercase transition-colors duration-200 pb-1 ${
                active === i ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-transform duration-300 origin-left ${
                  active === i ? "w-full scale-x-100" : "w-full scale-x-0"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="flex flex-col p-6 gap-4">
            {links.map((l, i) => (
              <button key={l} onClick={() => scrollTo(i)} className="font-body text-sm uppercase tracking-wide text-muted-foreground hover:text-primary text-left">
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
