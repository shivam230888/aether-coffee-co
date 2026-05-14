import { motion } from "framer-motion";
import img1 from "@assets/pomelli_photoshoot_image_9_16_0514_(1)_1778752369872.png";
import img2 from "@assets/pomelli_photoshoot_image_9_16_0514_(2)_1778752369871.png";
import img3 from "@assets/pomelli_photoshoot_image_9_16_0514_(3)_1778752369869.png";
import img4 from "@assets/pomelli_photoshoot_image_9_16_0514_1778752369872.png";
import img5 from "@assets/pomelli_photoshoot-2_1778752854073.png";
import img6 from "@assets/pomelli_photoshoot-4_1778752854074.png";

const GALLERY_ITEMS = [
  { id: "g1", src: img1, alt: "Guests enjoying Aether Coffee inside the café", span: "col-span-1 row-span-2" },
  { id: "g2", src: img2, alt: "Couple at AETHER modern café exterior", span: "col-span-2 row-span-1" },
  { id: "g3", src: img5, alt: "Aether Black — signature blend with coffee beans", span: "col-span-1 row-span-1" },
  { id: "g4", src: img3, alt: "Morning ritual at AETHER Coffee Co.", span: "col-span-1 row-span-1" },
  { id: "g5", src: img6, alt: "AETHER cup in hand — precision crafted", span: "col-span-1 row-span-1" },
  { id: "g6", src: img4, alt: "The AETHER experience — quiet focus", span: "col-span-2 row-span-1" },
];

export function Gallery() {
  return (
    <section className="py-32 bg-card/20 relative" data-testid="section-gallery">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6"
        >
          <div>
            <p className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mb-4">Follow the Ritual</p>
            <h2 className="text-4xl md:text-5xl font-serif text-foreground" data-testid="heading-gallery">
              @aethercoffeeco
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase border border-primary/40 text-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 whitespace-nowrap"
            data-testid="link-instagram"
          >
            Follow on Instagram
          </a>
        </motion.div>

        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[600px]">
          {GALLERY_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`${item.span} overflow-hidden relative group cursor-pointer`}
              data-testid={`img-gallery-${item.id}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
