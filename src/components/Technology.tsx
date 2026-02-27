import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const techs = [
  {
    front: { icon: "🧠", title: "NEURAL LAP PREDICTOR" },
    back: "Machine learning model that learns circuit patterns in real time, predicting lap performance before it happens.",
  },
  {
    front: { icon: "📡", title: "TELEMETRY FUSION ENGINE" },
    back: "Merges 200+ data points per second from sensors, creating a unified strategic picture instantly.",
  },
  {
    front: { icon: "👁", title: "COMPETITOR SHADOW AI" },
    back: "Tracks rival strategy in real time, simulating their decisions to keep you one step ahead.",
  },
];

const Technology = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" ref={ref} className="py-24 md:py-32 blueprint-grid relative">
      <div className="container mx-auto px-6">
        <h2
          className={`font-display text-5xl md:text-6xl text-center text-foreground mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          RACE-GRADE <span className="text-primary">INTELLIGENCE</span>
        </h2>
        <p className={`text-center text-muted-foreground font-body mb-16 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          Under the hood — technology built for the fastest sport on earth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {techs.map((t, i) => (
            <div
              key={t.front.title}
              className={`group [perspective:1000px] h-64 transition-all duration-600 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-card border border-border rounded-sm flex flex-col items-center justify-center p-6 glow-red-hover">
                  <span className="text-4xl mb-4">{t.front.icon}</span>
                  <h3 className="font-display text-2xl tracking-wide text-foreground text-center">{t.front.title}</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-primary rounded-sm flex items-center justify-center p-8">
                  <p className="font-body text-sm text-primary-foreground text-center leading-relaxed">{t.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
