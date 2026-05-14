import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const TIERS = [
  {
    id: "silver",
    name: "Silver",
    subtitle: "For the daily ritual",
    price: "Free",
    color: "border-foreground/20",
    textColor: "text-foreground/70",
    accentColor: "text-foreground",
    benefits: [
      "1 point per $1 spent",
      "Early access to seasonal drops",
      "Free birthday drink",
      "Members-only newsletter",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    subtitle: "For the devoted",
    price: "$12/mo",
    color: "border-primary",
    textColor: "text-primary/80",
    accentColor: "text-primary",
    featured: true,
    benefits: [
      "2x points on all orders",
      "Monthly surprise single origin",
      "Free standard shipping always",
      "Priority tasting event access",
      "10% off all merchandise",
    ],
  },
  {
    id: "aether-black",
    name: "Aether Black",
    subtitle: "For the obsessed",
    price: "$36/mo",
    color: "border-foreground/30",
    textColor: "text-foreground/70",
    accentColor: "text-foreground",
    benefits: [
      "3x points on all orders",
      "Reserve lot allocations",
      "Annual roastery visit invitation",
      "Direct line to our green buyers",
      "Exclusive limited edition releases",
      "Complimentary cupping sessions",
    ],
  },
];

export function Loyalty() {
  return (
    <section className="py-32 bg-card/20 relative" data-testid="section-loyalty">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mb-4">Membership</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6" data-testid="heading-loyalty">
            The <span className="italic text-primary">Aether Circle</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Join a community of people who believe a great cup of coffee is a non-negotiable. Every tier unlocks a deeper relationship with the ritual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              data-testid={`card-tier-${tier.id}`}
              className={`relative p-8 border ${tier.color} ${tier.featured ? "bg-card/60 shadow-[0_0_40px_rgba(202,138,4,0.1)]" : "bg-card/20"} flex flex-col`}
            >
              {tier.featured && (
                <div className="absolute -top-px left-0 right-0 h-[2px] bg-primary" />
              )}
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] tracking-[0.2em] uppercase px-4 py-1 font-bold whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <div className="mb-8">
                <div className={`text-xs tracking-[0.3em] uppercase font-semibold mb-2 ${tier.textColor}`}>{tier.subtitle}</div>
                <h3 className={`font-serif text-3xl ${tier.accentColor} mb-1`} data-testid={`text-tier-name-${tier.id}`}>{tier.name}</h3>
                <div className={`font-serif text-4xl mt-4 ${tier.featured ? "text-primary" : "text-foreground"}`} data-testid={`text-tier-price-${tier.id}`}>{tier.price}</div>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {tier.benefits.map((benefit, bi) => (
                  <li key={bi} className="flex items-start gap-3 text-sm text-foreground/70" data-testid={`text-benefit-${tier.id}-${bi}`}>
                    <Check size={14} className={`mt-0.5 shrink-0 ${tier.featured ? "text-primary" : "text-foreground/40"}`} />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.featured ? "default" : "outline"}
                className={`w-full rounded-none tracking-widest font-serif ${
                  tier.featured
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "border-foreground/20 text-foreground hover:border-primary/40 hover:text-primary"
                }`}
                data-testid={`button-join-${tier.id}`}
              >
                JOIN {tier.name.toUpperCase()}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
