import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import coffeeCupPath from "@assets/gemini-2.5-flash-image_Create_an_ultra-realistic_premium_takea_1778669477965.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 overflow-hidden" data-testid="section-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src={coffeeCupPath}
          alt="AETHER Coffee Cup"
          className="w-full h-full object-cover object-right-top opacity-50 md:opacity-80"
          data-testid="img-hero-bg"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 border border-primary/30 rounded-full text-primary text-xs font-bold tracking-[0.2em] mb-6 uppercase" data-testid="badge-hero">
              Space-Age Precision
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] text-foreground mb-6"
            data-testid="heading-hero"
          >
            The Future <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary italic font-normal pr-4">
              of Extraction.
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/70 mb-10 max-w-xl leading-relaxed"
            data-testid="text-hero-desc"
          >
            Artisan coffee craft elevated by cinematic design and uncompromising quality. 
            Experience your morning ritual like never before.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif tracking-widest text-lg px-8 h-14 rounded-none shadow-[0_0_20px_rgba(202,138,4,0.3)] hover:shadow-[0_0_30px_rgba(202,138,4,0.5)] transition-all" data-testid="button-hero-explore">
              EXPLORE ORIGINS
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 text-primary hover:bg-primary/10 font-serif tracking-widest text-lg px-8 h-14 rounded-none" data-testid="button-hero-menu">
              VIEW MENU
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 z-20" />
      <div className="absolute top-0 right-12 w-[1px] h-32 bg-gradient-to-b from-primary to-primary/0 z-20 hidden md:block" />
    </section>
  );
}
