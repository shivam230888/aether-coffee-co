import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    toast({
      title: "Welcome to the Aether Circle",
      description: "You'll receive our first communiqué shortly.",
    });
    setEmail("");
  }

  return (
    <section className="py-32 bg-background border-t border-border/40 relative" data-testid="section-newsletter">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mb-4">Stay in Orbit</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4" data-testid="heading-newsletter">
            First access.<br /><span className="italic text-primary">Every time.</span>
          </h2>
          <p className="text-foreground/60 mb-10 leading-relaxed">
            Limited micro-lot drops, exclusive tasting notes, seasonal menus, and invitations before anyone else. No noise. Just signal.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-card/40 border-border/60 focus:border-primary/60 rounded-none h-12 text-foreground placeholder:text-foreground/30"
              data-testid="input-newsletter-email"
            />
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif tracking-widest rounded-none h-12 px-8"
              data-testid="button-newsletter-submit"
            >
              SUBSCRIBE
            </Button>
          </form>

          <p className="text-foreground/30 text-xs mt-5 tracking-wider">
            Unsubscribe anytime. We respect your inbox like we respect your palate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
