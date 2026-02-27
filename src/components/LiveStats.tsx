import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const stats = [
  { end: 1.35, suffix: "M", label: "Deaths from Rider Fatigue/Year" },
  { end: 40, suffix: "%", label: "Reaction Delay at Fatigue" },
  { end: 1.2, suffix: "s", label: "Blackout Window at 120kmh" },
  { end: 0, suffix: "", label: "Current Solutions", pulse: true },
];

const LiveStats = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="relative py-6 bg-gradient-to-r from-destructive/20 via-destructive/10 to-destructive/20 border-y border-destructive/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} isVisible={isVisible} index={i} last={i === stats.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ end, suffix, label, isVisible, index, last, pulse }: {
  end: number; suffix: string; label: string; isVisible: boolean; index: number; last: boolean; pulse?: boolean;
}) => {
  const value = useCountUp(end, 2000, isVisible, suffix);
  return (
    <div className={`text-center relative ${!last ? "md:border-r md:border-foreground/10" : ""}`}>
      <div
        className={`font-display text-4xl md:text-5xl ${pulse ? "text-destructive pulse-red-stat" : "text-foreground"}`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {value}
      </div>
      <div className="font-body text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

export default LiveStats;
