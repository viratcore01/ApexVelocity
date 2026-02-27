import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const scenarios = [
  {
    icon: "🏍",
    title: "HIGHWAY RIDER",
    story: "3AM. 800km tour. Microsleep at 110kmh.",
  },
  {
    icon: "🏁",
    title: "ENDURANCE RACER",
    story: "Lap 47. Core temp 39°C. Focus gone.",
  },
  {
    icon: "📦",
    title: "DELIVERY RIDER",
    story: "14hr shift. Heat. Dehydration. No warning.",
  },
];

const DangerSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 carbon-fiber relative overflow-hidden">
      <div className="container mx-auto px-6">
        <h2
          className={`font-display text-5xl md:text-6xl lg:text-7xl text-center text-foreground mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          ONE SECOND. <span className="text-destructive">NO SECOND CHANCES.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {scenarios.map((s, i) => (
            <div
              key={s.title}
              className={`border-orange-left bg-card p-8 rounded-sm transition-all duration-600 glow-orange-hover ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <span className="text-4xl">{s.icon}</span>
              <h3 className="font-display text-2xl tracking-wide text-foreground mt-4">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground mt-2 italic">{s.story}</p>
            </div>
          ))}
        </div>

        <p
          className={`font-display text-6xl md:text-8xl text-center text-foreground/5 mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          FATIGUE IS SILENT.
        </p>
      </div>
    </section>
  );
};

export default DangerSection;
