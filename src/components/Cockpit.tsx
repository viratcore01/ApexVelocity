import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const features = [
  "Live Telemetry Feed",
  "Voice Command Strategy Shifts",
  "Multi-Team Comparative View",
  "Instant Pit Board Alerts",
];

const Speedometer = ({ isVisible }: { isVisible: boolean }) => {
  const [angle, setAngle] = useState(-135);

  useEffect(() => {
    if (!isVisible) return;
    const start = performance.now();
    const animate = (now: number) => {
      const p = Math.min((now - start) / 2000, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setAngle(-135 + 270 * eased);
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <svg viewBox="0 0 200 200" className="w-full max-w-xs mx-auto">
      {/* Outer ring */}
      <circle cx="100" cy="100" r="90" fill="none" stroke="hsl(0 0% 16%)" strokeWidth="4" />
      <circle cx="100" cy="100" r="85" fill="none" stroke="hsl(355 76% 55% / 0.2)" strokeWidth="8" strokeDasharray="4 6" />
      
      {/* RPM marks */}
      {[...Array(11)].map((_, i) => {
        const a = -135 + i * 27;
        const rad = (a * Math.PI) / 180;
        const x1 = 100 + 72 * Math.cos(rad);
        const y1 = 100 + 72 * Math.sin(rad);
        const x2 = 100 + 82 * Math.cos(rad);
        const y2 = 100 + 82 * Math.sin(rad);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={i > 7 ? "hsl(355 76% 55%)" : "hsl(0 0% 60%)"} strokeWidth="2" />
        );
      })}

      {/* Needle */}
      <line
        x1="100" y1="100"
        x2={100 + 65 * Math.cos((angle * Math.PI) / 180)}
        y2={100 + 65 * Math.sin((angle * Math.PI) / 180)}
        stroke="hsl(355 76% 55%)" strokeWidth="3" strokeLinecap="round"
      />
      <circle cx="100" cy="100" r="6" fill="hsl(355 76% 55%)" />
      <circle cx="100" cy="100" r="3" fill="hsl(0 0% 4%)" />

      {/* RPM text */}
      <text x="100" y="150" textAnchor="middle" fill="hsl(0 0% 60%)" fontSize="10" fontFamily="Inter">RPM × 1000</text>
      <text x="100" y="130" textAnchor="middle" fill="hsl(0 0% 96%)" fontSize="24" fontFamily="Bebas Neue">
        {isVisible ? Math.floor(((angle + 135) / 270) * 18000) : "0"}
      </text>
    </svg>
  );
};

const Cockpit = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="cockpit" ref={ref} className="py-24 md:py-32 carbon-fiber">
      <div className="container mx-auto px-6">
        <h2
          className={`font-display text-5xl md:text-6xl text-center text-foreground mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          YOUR COCKPIT. <span className="text-primary">YOUR COMMAND.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <Speedometer isVisible={isVisible} />
          </div>

          <div className="space-y-6">
            {features.map((f, i) => (
              <div
                key={f}
                className={`flex items-center gap-4 transition-all duration-600 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: isVisible ? `${400 + i * 200}ms` : "0ms" }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-sm">
                  ✓
                </span>
                <span className="font-body text-foreground">{f}</span>
                <span className="flex-grow border-t border-dashed border-primary/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cockpit;
