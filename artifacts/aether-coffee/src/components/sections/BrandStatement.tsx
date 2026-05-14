import { motion } from "framer-motion";

export function BrandStatement() {
  return (
    <section className="py-32 bg-background relative overflow-hidden" data-testid="section-brand-statement">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight text-foreground" data-testid="heading-statement">
            We don't just brew coffee. <br className="hidden md:block" />
            We engineer <span className="italic text-primary">moments of clarity</span> <br className="hidden md:block" />
            in an accelerated world.
          </h2>
          
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="h-[1px] w-12 bg-primary/50" />
          </div>
        </motion.div>
      </div>
      
      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </section>
  );
}
