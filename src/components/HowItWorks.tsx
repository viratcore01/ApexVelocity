import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { num: "01", title: "CONNECT", desc: "Connect your telemetry feed." },
  { num: "02", title: "ANALYZE", desc: "AI analyzes and builds your race strategy." },
  { num: "03", title: "EXECUTE", desc: "Execute. Adapt. Win." },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2
          className={`font-display text-5xl md:text-6xl text-center text-foreground mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          FROM GRID TO <span className="text-primary">GLORY</span> IN 3 STEPS
        </h2>

        <div className="relative">
          {/* Connecting line */}
          <svg className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 hidden md:block" preserveAspectRatio="none">
            <line
              x1="0.5" y1="0" x2="0.5" y2="100%"
              stroke="hsl(355 76% 55% / 0.4)"
              strokeWidth="2"
              strokeDasharray="8 8"
              className={`${isVisible ? "animate-[draw-line_2s_ease-out_forwards]" : ""}`}
            />
          </svg>

          <div className="space-y-20 md:space-y-24">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className={`relative transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: isVisible ? `${i * 300}ms` : "0ms" }}
              >
                <div className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-1 text-center md:text-right">
                    {i % 2 === 0 && (
                      <>
                        <h3 className="font-display text-3xl text-foreground">{s.title}</h3>
                        <p className="font-body text-muted-foreground mt-2">{s.desc}</p>
                      </>
                    )}
                  </div>

                  <div className="relative z-10 w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center glow-red">
                    <span className="font-display text-3xl text-primary">{s.num}</span>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    {i % 2 === 1 && (
                      <>
                        <h3 className="font-display text-3xl text-foreground">{s.title}</h3>
                        <p className="font-body text-muted-foreground mt-2">{s.desc}</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
