import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  "Heart Rate Anomaly Detection",
  "Blood Oxygen Drop Alert",
  "Micro Head-Droop Recognition",
  "Reaction Delay Measurement",
  "Core Temperature Spike",
];

const sensorLabels = [
  { cx: 48, cy: 110, label: "Pulse Sensor", anchor: "end", lx: -30, ly: 0, delay: "1s" },
  { cx: 100, cy: 42, label: "Head Tilt Sensor", anchor: "middle", lx: 0, ly: -18, delay: "1.3s" },
  { cx: 100, cy: 68, label: "Temperature Sensor", anchor: "start", lx: 55, ly: 0, delay: "1.7s" },
  { cx: 152, cy: 110, label: "Wrist Connector", anchor: "start", lx: 30, ly: 0, delay: "2s" },
];

const ProductShowcase = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="howitworks" ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <h2
          className={`font-display text-5xl md:text-6xl text-center text-foreground mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          APEXPULSE DETECTS <span className="text-primary">WHAT YOU CAN'T FEEL</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Helmet diagram */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <svg viewBox="0 0 240 220" className="w-full max-w-sm mx-auto">
              {/* Helmet */}
              <path
                d="M50,140 Q50,55 120,38 Q190,55 190,140 L185,155 Q180,165 155,170 L85,170 Q60,165 55,155 Z"
                fill="none"
                stroke="hsl(0 0% 30%)"
                strokeWidth="2"
              />
              <path
                d="M65,100 Q65,85 120,80 Q175,85 175,100 Q175,115 120,120 Q65,115 65,100 Z"
                fill="hsl(0 0% 8%)"
                stroke="hsl(0 0% 25%)"
                strokeWidth="1"
              />

              {/* Sensor dots with labels */}
              {sensorLabels.map((s) => (
                <g key={s.label}>
                  <circle cx={s.cx} cy={s.cy} r="5" fill="hsl(20 100% 60%)" className="sensor-pulse" style={{ "--pulse-duration": s.delay } as React.CSSProperties} />
                  <circle cx={s.cx} cy={s.cy} r="5" fill="none" stroke="hsl(20 100% 60% / 0.3)" strokeWidth="1">
                    <animate attributeName="r" values="6;16;6" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0;0.5" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text
                    x={s.cx + s.lx}
                    y={s.cy + s.ly}
                    textAnchor={s.anchor}
                    fill="hsl(0 0% 60%)"
                    fontSize="8"
                    fontFamily="Inter"
                  >
                    {s.label}
                  </text>
                </g>
              ))}

              {/* Right ear sensor mirror */}
              <circle cx="192" cy="110" r="5" fill="hsl(20 100% 60%)" className="sensor-pulse" style={{ "--pulse-duration": "1.1s" } as React.CSSProperties} />
            </svg>
          </div>

          {/* Capabilities */}
          <div className="space-y-5">
            {capabilities.map((c, i) => (
              <div
                key={c}
                className={`flex items-center gap-4 transition-all duration-600 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                }`}
                style={{ transitionDelay: isVisible ? `${300 + i * 150}ms` : "0ms" }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-sm font-display">
                  ⚡
                </span>
                <span className="font-body text-foreground">{c}</span>
                <span className="flex-grow border-t border-dashed border-primary/30" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
