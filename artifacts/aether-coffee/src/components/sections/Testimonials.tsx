import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Maya R.",
    role: "Architect, San Francisco",
    initials: "MR",
    quote: "I've had coffee in Tokyo, Copenhagen, and Melbourne. AETHER is the only place that made me stop mid-sip and close my eyes. The Nebula Light is transcendent.",
    stars: 5,
  },
  {
    id: "t2",
    name: "James K.",
    role: "Creative Director, NYC",
    initials: "JK",
    quote: "The branding alone drew me in, but the coffee kept me coming back every morning. The Cryo-Brew changed my understanding of what cold coffee could be.",
    stars: 5,
  },
  {
    id: "t3",
    name: "Sophia L.",
    role: "Founder, Austin",
    initials: "SL",
    quote: "As someone obsessed with precision and process, AETHER is the only coffee brand that operates at my level. The sourcing transparency is unmatched in the industry.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-32 bg-background relative" data-testid="section-testimonials">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mb-4">Community</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground" data-testid="heading-testimonials">
            Voices from the <span className="italic text-primary">Aether</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              data-testid={`card-testimonial-${t.id}`}
              className="relative p-8 bg-card/40 backdrop-blur-sm border border-border hover:border-primary/20 transition-colors"
            >
              {/* Gold quote mark */}
              <div className="text-6xl font-serif text-primary/20 absolute top-6 right-8 leading-none select-none">"</div>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" data-testid={`icon-star-${t.id}-${i}`} />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed mb-8 text-sm italic" data-testid={`text-quote-${t.id}`}>
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold tracking-wider" data-testid={`avatar-${t.id}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-medium text-sm text-foreground" data-testid={`text-reviewer-name-${t.id}`}>{t.name}</div>
                  <div className="text-xs text-foreground/50" data-testid={`text-reviewer-role-${t.id}`}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
