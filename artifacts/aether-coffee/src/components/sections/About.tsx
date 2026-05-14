import { motion } from "framer-motion";
import storefrontPath from "@assets/gemini-2.5-flash-image_Seedance_is_a_strong_choice_for_cinemat_1778669477966.jpg";

export function About() {
  return (
    <section id="story" className="py-32 bg-card/20 relative overflow-hidden" data-testid="section-about">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={storefrontPath}
                alt="AETHER COFFEE CO. Storefront"
                className="w-full object-cover aspect-[3/4] grayscale-[20%]"
                data-testid="img-about-storefront"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-primary/10" />
            </div>
            {/* Gold accent line */}
            <div className="absolute -left-6 top-16 bottom-16 w-[2px] bg-gradient-to-b from-primary/0 via-primary to-primary/0 hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mb-6">Our Origin</p>

            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8 leading-tight" data-testid="heading-about">
              Born from a<br />
              <span className="italic text-primary">refusal to settle</span><br />
              for ordinary.
            </h2>

            <div className="space-y-5 text-foreground/70 leading-relaxed">
              <p>
                AETHER COFFEE CO. was founded in 2019 by a team of aerospace engineers and specialty coffee obsessives who believed the two worlds had more in common than anyone realized: precision, patience, and the relentless pursuit of an ideal.
              </p>
              <p>
                Our roastery is a converted aircraft hangar in East Austin. Our green buyers travel to origin three times a year — not to purchase, but to listen. Every lot we acquire comes with a story, a farmer, and a reason.
              </p>
              <p>
                We don't roast to a profile. We roast to a feeling. The feeling that the first sip of the day deserves to be an event.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="h-[1px] w-12 bg-primary" />
              <p className="text-primary text-xs tracking-[0.25em] uppercase font-semibold">Est. 2019 — Austin, TX</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
