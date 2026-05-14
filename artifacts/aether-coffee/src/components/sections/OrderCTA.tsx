import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function OrderCTA() {
  return (
    <section className="relative py-36 overflow-hidden" data-testid="section-order-cta">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-primary blur-[100px]" />
      </div>
      <div className="absolute inset-0 border-y border-primary/10" />

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-primary text-xs tracking-[0.35em] uppercase font-semibold mb-6">Online Order</p>
          <h2 className="text-5xl md:text-7xl font-serif text-foreground mb-6 leading-tight" data-testid="heading-cta">
            Your ritual,<br />
            <span className="italic text-primary">delivered.</span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Free shipping on all orders over $50. Roasted to order and shipped within 48 hours. No subscriptions, no lock-in — just exceptional coffee at your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif tracking-widest text-lg px-10 h-14 rounded-none shadow-[0_0_30px_rgba(202,138,4,0.3)] hover:shadow-[0_0_50px_rgba(202,138,4,0.5)] transition-all"
              data-testid="button-shop-now"
            >
              SHOP NOW
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 font-serif tracking-widest text-lg px-10 h-14 rounded-none"
              data-testid="button-view-subscriptions"
            >
              GIFT SETS
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
