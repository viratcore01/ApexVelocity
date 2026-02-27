import { useEffect, useState } from "react";

const EKGLine = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1200 200"
    preserveAspectRatio="none"
    style={{ filter: "drop-shadow(0 0 8px hsl(20 100% 60% / 0.5))" }}
  >
    <polyline
      points="0,100 100,100 140,100 160,30 180,170 200,60 220,100 400,100 440,100 460,30 480,170 500,60 520,100 700,100 740,100 760,30 780,170 800,60 820,100 1000,100 1040,100 1060,30 1080,170 1100,60 1120,100 1200,100"
      fill="none"
      stroke="hsl(20 100% 60%)"
      strokeWidth="2"
      strokeDasharray="2400"
      strokeDashoffset="2400"
      className="animate-[ekg-pulse_4s_linear_infinite]"
      opacity="0.5"
    />
  </svg>
);

const HelmetSilhouette = () => (
  <div className="relative w-64 h-64 md:w-80 md:h-80 float-helmet">
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Helmet shape */}
      <path
        d="M40,130 Q40,50 100,35 Q160,50 160,130 L155,145 Q150,155 130,160 L70,160 Q50,155 45,145 Z"
        fill="none"
        stroke="hsl(0 0% 30%)"
        strokeWidth="2"
      />
      <path
        d="M55,140 Q55,135 100,130 Q145,135 145,140 L140,150 Q135,155 100,155 Q65,155 60,150 Z"
        fill="none"
        stroke="hsl(0 0% 25%)"
        strokeWidth="1.5"
      />
      {/* Visor */}
      <path
        d="M55,95 Q55,80 100,75 Q145,80 145,95 Q145,110 100,115 Q55,110 55,95 Z"
        fill="hsl(0 0% 8%)"
        stroke="hsl(0 0% 30%)"
        strokeWidth="1"
      />
      {/* Sensor dots */}
      {/* Ear sensor */}
      <circle cx="48" cy="110" r="4" fill="hsl(20 100% 60%)" className="sensor-pulse" style={{ "--pulse-duration": "1s" } as React.CSSProperties}>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="48" cy="110" r="8" fill="none" stroke="hsl(20 100% 60% / 0.3)" strokeWidth="1">
        <animate attributeName="r" values="6;14;6" dur="1.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="1.5s" repeatCount="indefinite" />
      </circle>
      {/* Crown sensor */}
      <circle cx="100" cy="42" r="4" fill="hsl(20 100% 60%)" className="sensor-pulse" style={{ "--pulse-duration": "1.3s" } as React.CSSProperties}>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="42" r="8" fill="none" stroke="hsl(20 100% 60% / 0.3)" strokeWidth="1">
        <animate attributeName="r" values="6;14;6" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="1.8s" repeatCount="indefinite" />
      </circle>
      {/* Forehead sensor */}
      <circle cx="100" cy="68" r="3" fill="hsl(20 100% 60%)" className="sensor-pulse" style={{ "--pulse-duration": "1.7s" } as React.CSSProperties}>
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.7s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="68" r="7" fill="none" stroke="hsl(20 100% 60% / 0.3)" strokeWidth="1">
        <animate attributeName="r" values="5;12;5" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
);

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setLoaded(true); }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden carbon-fiber">
      <EKGLine />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
        <HelmetSilhouette />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="font-display text-foreground">
          <span className={`block text-5xl sm:text-7xl lg:text-9xl tracking-tight transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            BEFORE YOU BLACKOUT,
          </span>
          <span className={`block text-5xl sm:text-7xl lg:text-9xl tracking-tight text-primary transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            WE ALREADY KNEW.
          </span>
        </h1>

        <p className={`mt-6 text-lg sm:text-xl text-muted-foreground font-body max-w-2xl mx-auto transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          Real-time fatigue detection. Built for riders who refuse to stop — until their body forces them to.
        </p>

        <div className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a href="#howitworks" className="inline-flex items-center justify-center px-8 py-4 font-display text-lg tracking-wider bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-opacity glow-orange">
            SEE HOW IT WORKS
          </a>
          <a href="#technology" className="inline-flex items-center justify-center px-8 py-4 font-display text-lg tracking-wider border border-foreground/30 text-foreground rounded-sm hover:border-primary hover:text-primary transition-colors">
            VIEW THE SCIENCE
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator">
        <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
