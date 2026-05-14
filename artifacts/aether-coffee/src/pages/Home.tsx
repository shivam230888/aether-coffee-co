import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { Menu } from "@/components/sections/Menu";
import { Products } from "@/components/sections/Products";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { OrderCTA } from "@/components/sections/OrderCTA";
import { Loyalty } from "@/components/sections/Loyalty";
import { Newsletter } from "@/components/sections/Newsletter";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <Stats />
        <Menu />
        <Products />
        <About />
        <Testimonials />
        <Gallery />
        <OrderCTA />
        <Loyalty />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
