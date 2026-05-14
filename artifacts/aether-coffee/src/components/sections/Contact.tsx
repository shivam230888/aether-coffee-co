import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const LOCATIONS = [
  {
    id: "loc1",
    name: "East Austin Roastery",
    address: "2140 E 6th St, Austin, TX 78702",
    hours: "Mon–Fri 6am–6pm · Sat–Sun 7am–5pm",
    phone: "+1 (512) 000-0000",
    email: "hello@aethercoffee.co",
  },
  {
    id: "loc2",
    name: "Downtown Café",
    address: "501 Congress Ave, Austin, TX 78701",
    hours: "Daily 6am–8pm",
    phone: "+1 (512) 000-0001",
    email: "downtown@aethercoffee.co",
  },
];

export function Contact() {
  return (
    <section id="locations" className="py-32 bg-card/10 relative" data-testid="section-contact">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase font-semibold mb-4">Find Us</p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground" data-testid="heading-contact">
            Come visit the <span className="italic text-primary">source.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {LOCATIONS.map((loc, idx) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              data-testid={`card-location-${loc.id}`}
              className="p-10 border border-border/60 hover:border-primary/30 transition-colors bg-card/20"
            >
              <h3 className="font-serif text-2xl text-foreground mb-8 pb-6 border-b border-border/40" data-testid={`text-location-name-${loc.id}`}>
                {loc.name}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={16} className="text-primary shrink-0 mt-1" />
                  <span className="text-foreground/70 text-sm leading-relaxed">{loc.address}</span>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={16} className="text-primary shrink-0 mt-1" />
                  <span className="text-foreground/70 text-sm">{loc.hours}</span>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={16} className="text-primary shrink-0 mt-1" />
                  <a href={`tel:${loc.phone}`} className="text-foreground/70 text-sm hover:text-primary transition-colors" data-testid={`link-phone-${loc.id}`}>{loc.phone}</a>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={16} className="text-primary shrink-0 mt-1" />
                  <a href={`mailto:${loc.email}`} className="text-foreground/70 text-sm hover:text-primary transition-colors" data-testid={`link-email-${loc.id}`}>{loc.email}</a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 h-40 bg-card/60 border border-border/40 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(202,138,4,0.1) 20px, rgba(202,138,4,0.1) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(202,138,4,0.1) 20px, rgba(202,138,4,0.1) 21px)"
                  }} />
                </div>
                <div className="flex flex-col items-center gap-2 z-10">
                  <MapPin size={24} className="text-primary" />
                  <span className="text-xs tracking-wider uppercase text-foreground/40">View on Maps</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
