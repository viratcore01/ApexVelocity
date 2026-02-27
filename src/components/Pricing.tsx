import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "CORE",
    price: "₹2,999",
    desc: "Helmet sensor + basic app alerts",
    features: ["Pulse sensor module", "Basic fatigue alerts", "Mobile app access", "30-day analytics"],
    highlighted: false,
  },
  {
    name: "PRO",
    price: "₹4,999",
    desc: "Full sensor suite + wrist band + analytics",
    features: ["Full 3-sensor suite", "Wrist band connector", "Advanced AI analytics", "90-second prediction", "Emergency mesh network"],
    highlighted: true,
  },
  {
    name: "FLEET",
    price: "Custom",
    desc: "API access + fleet dashboard + white-label",
    features: ["Unlimited riders", "Fleet dashboard", "API access", "White-label option", "Dedicated support"],
    highlighted: false,
  },
];

const Pricing = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <h2
          className={`font-display text-5xl md:text-6xl text-center text-foreground mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          EVERY RIDER. <span className="text-primary">EVERY BUDGET.</span>
        </h2>
        <p className={`text-center text-muted-foreground font-body mb-16 transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          Premium analytics subscription: ₹149/month
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`relative bg-card rounded-sm p-8 transition-all duration-600 hover:-translate-y-2 ${
                p.highlighted
                  ? "border-2 border-primary glow-orange"
                  : "border border-border glow-orange-hover"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: isVisible ? `${i * 150}ms` : "0ms" }}
            >
              {p.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-display text-xs tracking-widest px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <h3 className="font-display text-2xl tracking-wide text-foreground">{p.name}</h3>
              <div className="font-display text-4xl text-primary mt-2">{p.price}</div>
              <p className="font-body text-sm text-muted-foreground mt-2">{p.desc}</p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="font-body text-sm text-foreground/80 flex items-center gap-2">
                    <span className="text-primary text-xs">⚡</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={`text-center font-body text-xs text-muted-foreground mt-12 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}>
          Integrates with helmet brands, racing leagues, delivery fleets
        </p>
      </div>
    </section>
  );
};

export default Pricing;
