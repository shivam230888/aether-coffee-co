import { motion } from "framer-motion";

const STATS = [
  { value: "12", label: "Origin Countries", suffix: "" },
  { value: "3", label: "Roast Profiles", suffix: "" },
  { value: "2M+", label: "Cups Served", suffix: "" },
  { value: "98", label: "Satisfaction Score", suffix: "%" },
];

export function Stats() {
  return (
    <section className="py-24 border-y border-border/50 relative overflow-hidden" data-testid="section-stats">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="text-center"
              data-testid={`stat-${idx}`}
            >
              <div className="font-serif text-5xl md:text-6xl text-primary mb-3" data-testid={`text-stat-value-${idx}`}>
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs tracking-[0.25em] uppercase text-foreground/50 font-medium" data-testid={`text-stat-label-${idx}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
