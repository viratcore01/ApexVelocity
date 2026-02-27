import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const stats = [
  { end: 0.8, suffix: "s", label: "Lap Time Saved" },
  { end: 94, suffix: "%", label: "Pit Strategy Accuracy" },
  { end: 312, suffix: "", label: "Race Wins Predicted" },
  { end: 8, suffix: "", label: "Teams Using It" },
];

const LiveStats = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="relative py-6 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-y border-primary/30">
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

const StatItem = ({ end, suffix, label, isVisible, index, last }: {
  end: number; suffix: string; label: string; isVisible: boolean; index: number; last: boolean;
}) => {
  const value = useCountUp(end, 2000, isVisible, suffix);
  return (
    <div className={`text-center relative ${!last ? "md:border-r md:border-foreground/10" : ""}`}>
      <div className="font-display text-4xl md:text-5xl text-foreground" style={{ animationDelay: `${index * 100}ms` }}>
        {value}
      </div>
      <div className="font-body text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

export default LiveStats;
