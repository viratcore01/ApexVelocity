import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  {
    icon: "◉",
    title: "REAL-TIME TIRE ANALYSIS",
    desc: "Compound degradation prediction across every stint, lap by lap.",
  },
  {
    icon: "⏱",
    title: "PIT WINDOW AI",
    desc: "Optimal stop timing calculated within ±1 lap accuracy.",
  },
  {
    icon: "☁",
    title: "WEATHER ADAPTATION",
    desc: "Instant strategy shift the moment rain is detected on track.",
  },
];

const StrategyEngine = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="strategy" ref={ref} className="py-24 md:py-32 carbon-fiber relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2
              className={`font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-none transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              YOUR STRATEGY.
              <br />
              <span className="text-primary">YOUR CHAMPIONSHIP.</span>
            </h2>
          </div>
          <div className="space-y-6">
            {cards.map((c, i) => (
              <div
                key={c.title}
                className={`border-red-left bg-card p-6 rounded-sm transition-all duration-600 glow-red-hover ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
                }`}
                style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-primary text-2xl">{c.icon}</span>
                  <div>
                    <h3 className="font-display text-xl tracking-wide text-foreground">{c.title}</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">{c.desc}</p>
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

export default StrategyEngine;
