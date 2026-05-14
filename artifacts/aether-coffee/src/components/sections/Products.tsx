import { motion } from "framer-motion";
import cupCleanPath from "@assets/pomelli_photoshoot-1_1778752854072.png";
import cupDarkPath from "@assets/pomelli_photoshoot-2_1778752854073.png";
import cupOfficePath from "@assets/pomelli_photoshoot-3_1778752854073.png";

const PRODUCTS = [
  {
    id: "p1",
    name: "Aether Black",
    subtitle: "Signature Blend",
    desc: "A meticulously calibrated dark roast sourced from three high-altitude micro-lots. Notes of bittersweet chocolate, toasted walnut, and a lingering cedar finish.",
    weight: "250g / 500g",
    price: "$28",
    tag: "Best Seller",
    img: cupCleanPath,
  },
  {
    id: "p2",
    name: "Nebula Light",
    subtitle: "Single Origin — Ethiopia",
    desc: "Washed Yirgacheffe. Bright florals, stone fruit, jasmine, and a tea-like clarity that makes every sip feel like a revelation.",
    weight: "250g / 500g",
    price: "$34",
    tag: "Reserve",
    img: cupDarkPath,
  },
  {
    id: "p3",
    name: "Orbital Blend Kit",
    subtitle: "The Complete Ritual",
    desc: "Our curated brew kit: 250g Aether Black, 250g Nebula Light, a precision ceramic dripper, and a hand-calibrated timer. Everything to start the ritual.",
    weight: "Complete Kit",
    price: "$89",
    tag: "Limited",
    img: cupOfficePath,
  },
];

export function Products() {
  return (
    <section id="products" className="py-32 bg-background relative" data-testid="section-products">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mb-4">The Collection</p>
          <h2 className="text-4xl md:text-6xl font-serif text-foreground" data-testid="heading-products">
            Rare Origins.<br /><span className="text-primary italic font-normal">Precision Roasted.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              data-testid={`card-product-${product.id}`}
              className="group relative"
            >
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  data-testid={`img-product-${product.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 text-[10px] tracking-[0.25em] uppercase px-3 py-1 bg-primary text-primary-foreground font-bold">
                  {product.tag}
                </span>
              </div>

              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors" data-testid={`text-product-name-${product.id}`}>{product.name}</h3>
                  <p className="text-xs tracking-widest uppercase text-primary/70 mt-1">{product.subtitle}</p>
                </div>
                <span className="font-serif text-2xl text-primary" data-testid={`text-product-price-${product.id}`}>{product.price}</span>
              </div>

              <p className="text-foreground/60 text-sm leading-relaxed mb-4">{product.desc}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-foreground/40 tracking-wider">{product.weight}</span>
                <button
                  className="text-xs tracking-widest uppercase border border-primary/40 text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  data-testid={`button-add-to-cart-${product.id}`}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
