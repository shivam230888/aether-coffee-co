import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoPath from "@assets/Firefly_Create_a_premium_modern_minimalist_logo_for_a_futurist_1778669477967.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
      data-testid="navbar-header"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" data-testid="link-home">
          <img src={logoPath} alt="AETHER COFFEE CO." className="h-10 w-10 object-contain rounded-sm" />
          <span className="font-serif font-bold text-xl tracking-widest text-primary hidden sm:block">AETHER</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Menu", "Products", "Story", "Locations"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors"
              data-testid={`link-nav-${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-serif tracking-widest" data-testid="button-order-now">
            ORDER NOW
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-6 md:hidden"
          data-testid="mobile-menu-container"
        >
          {["Menu", "Products", "Story", "Locations"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              data-testid={`link-mobile-nav-${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
          <Button variant="default" className="bg-primary text-primary-foreground font-serif w-full mt-4" data-testid="button-mobile-order">
            ORDER NOW
          </Button>
        </motion.div>
      )}
    </motion.header>
  );
}
