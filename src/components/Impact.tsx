import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const personas = [
  { icon: "🏁", title: "F1 & Endurance Racers", desc: "Heat + fatigue on long stints", stat: "Core temp > 38°C in 60% of races" },
  { icon: "🏍", title: "Long Highway Tourers", desc: "Solo overnight rides", stat: "Microsleep risk spikes after hour 4" },
  { icon: "📦", title: "Delivery Fleet Riders", desc: "10-14hr daily shifts", stat: "3x more fatigue incidents in 10hr+ shifts" },
  { icon: "🎽", title: "Track Day Enthusiasts", desc: "Pushing limits without support crew", stat: "No crew monitoring vitals on track days" },
];

const Impact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="impact" ref={ref} className="py-24 md:py-32 carbon-fiber">
      <div className="container mx-auto px-6">
        <h2
          className={`font-display text-5xl md:text-6xl text-center text-foreground mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          BUILT FOR <span className="text-primary">EVERY RIDER</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {personas.map((p, i) => (
            <div
              key={p.title}
              className={`bg-card border border-border rounded-sm p-8 glow-orange-hover transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <span className="text-3xl">{p.icon}</span>
              <h3 className="font-display text-2xl tracking-wide text-foreground mt-3">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground mt-1">{p.desc}</p>
              <p className="font-body text-xs text-primary mt-3">{p.stat}</p>
            </div>
          ))}
        </div>

        <p className={`text-center font-body text-muted-foreground mt-16 max-w-2xl mx-auto transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          47% of single-vehicle crashes involve fatigue. ApexPulse is the first system designed to stop them.
        </p>
      </div>
    </section>
  );
};

export default Impact;
