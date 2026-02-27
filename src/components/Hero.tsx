import { useEffect, useState } from "react";
import heroCarImg from "@/assets/hero-car.png";

const SpeedLines = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="absolute h-[2px] speed-line"
        style={{
          top: `${15 + i * 14}%`,
          left: 0,
          width: `${100 + i * 40}px`,
          background: `linear-gradient(90deg, transparent, hsl(355 76% 55% / ${0.3 + i * 0.1}), transparent)`,
          "--speed-duration": `${2 + i * 0.7}s`,
          "--speed-delay": `${i * 0.4}s`,
        } as React.CSSProperties}
      />
    ))}
  </div>
);

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden carbon-fiber">
      <SpeedLines />

      {/* Hero car image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={heroCarImg}
          alt="F1 Race Car"
          className="float-car w-full max-w-4xl opacity-40 object-contain"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-display text-foreground">
          <span
            className={`block text-6xl sm:text-8xl lg:text-9xl tracking-tight transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            RACE SMARTER.
          </span>
          <span
            className={`block text-6xl sm:text-8xl lg:text-9xl tracking-tight text-primary transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            WIN FASTER.
          </span>
        </h1>

        <p
          className={`mt-6 text-lg sm:text-xl text-muted-foreground font-body max-w-2xl mx-auto transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          AI-powered F1 race strategy. Real-time. Ruthless. Precise.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#reserve"
            className="inline-flex items-center justify-center px-8 py-4 font-display text-lg tracking-wider bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity glow-red"
          >
            ENTER THE PITS
          </a>
          <a
            href="#strategy"
            className="inline-flex items-center justify-center px-8 py-4 font-display text-lg tracking-wider border border-foreground/30 text-foreground rounded-sm hover:border-primary hover:text-primary transition-colors"
          >
            SEE IT LIVE
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
        <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
