import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";

const MENU_CATEGORIES = ["Espresso", "Cold", "Reserve"];

const MENU_ITEMS = {
  Espresso: [
    { id: "e1", name: "Aether Black", desc: "Our signature blend. Dark chocolate, obsidian, stardust.", price: "$6" },
    { id: "e2", name: "Nebula Cortado", desc: "Ristretto, textured micro-foam, edible gold dust.", price: "$7" },
    { id: "e3", name: "Void Flat White", desc: "Double shot, oat milk, activated charcoal.", price: "$6.5" },
    { id: "e4", name: "Solar Flare Macchiato", desc: "Single origin Ethiopian, steamed cream, citrus zest.", price: "$6" },
  ],
  Cold: [
    { id: "c1", name: "Cryo-Brew", desc: "24-hour slow drip over sub-zero stones.", price: "$8" },
    { id: "c2", name: "Lunar Nitro", desc: "Nitrogen-infused single origin, velvety cascade.", price: "$7.5" },
    { id: "c3", name: "Event Horizon", desc: "Cold brew, vanilla sweet cream foam, black sea salt.", price: "$8.5" },
  ],
  Reserve: [
    { id: "r1", name: "Panama Geisha 'Ozone'", desc: "Pour-over. Jasmine, bergamot, ethereal finish.", price: "$14" },
    { id: "r2", name: "Yemen Gesha 'Stellar'", desc: "Siphon brewed. Peach blossom, honey, unmatched clarity.", price: "$18" },
  ]
};

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof MENU_ITEMS>("Espresso");

  return (
    <section id="menu" className="py-32 bg-card/30 relative" data-testid="section-menu">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4" data-testid="heading-menu">Curated Extractions</h2>
            <p className="text-foreground/60 max-w-md">Every variable controlled. Every note perfectly expressed.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex gap-4 border-b border-border w-full md:w-auto overflow-x-auto pb-[-1px]"
          >
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as keyof typeof MENU_ITEMS)}
                className={`pb-4 px-2 text-sm uppercase tracking-widest font-medium transition-colors relative whitespace-nowrap ${
                  activeCategory === cat ? "text-primary" : "text-foreground/50 hover:text-foreground"
                }`}
                data-testid={`tab-menu-${cat.toLowerCase()}`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="menu-tab-indicator"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
              data-testid={`grid-menu-${activeCategory.toLowerCase()}`}
            >
              {MENU_ITEMS[activeCategory].map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Card className="p-6 bg-background/40 backdrop-blur-sm border-border hover:border-primary/30 transition-colors group cursor-pointer rounded-none">
                    <div className="flex justify-between items-start mb-2 gap-4">
                      <h3 className="font-serif text-xl group-hover:text-primary transition-colors">{item.name}</h3>
                      <span className="text-primary font-mono text-lg">{item.price}</span>
                    </div>
                    <p className="text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
