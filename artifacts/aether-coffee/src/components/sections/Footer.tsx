import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logoPath from "@assets/Firefly_Create_a_premium_modern_minimalist_logo_for_a_futurist_1778669477967.png";

const NAV_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Products", href: "#products" },
  { label: "Story", href: "#story" },
  { label: "Locations", href: "#locations" },
  { label: "Membership", href: "#loyalty" },
];

const SOCIAL_LINKS = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://x.com", label: "Twitter / X" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: SiTiktok, href: "https://tiktok.com", label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background pt-20 pb-10" data-testid="footer">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src={logoPath} alt="AETHER COFFEE CO." className="h-9 w-9 object-contain" />
              <span className="font-serif font-bold text-lg tracking-widest text-primary">AETHER</span>
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed max-w-xs">
              Space-age precision. Artisan craft. The future of extraction, roasted in Austin, TX.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-foreground/40 font-semibold mb-6">Explore</h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-foreground/60 hover:text-primary transition-colors w-fit"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.25em] uppercase text-foreground/40 font-semibold mb-6">Follow the Ritual</h4>
            <div className="flex gap-5">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-border/60 flex items-center justify-center text-foreground/50 hover:border-primary/60 hover:text-primary transition-all"
                  data-testid={`social-link-${label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xs tracking-[0.25em] uppercase text-foreground/40 font-semibold mb-3">Contact</h4>
              <a href="mailto:hello@aethercoffee.co" className="text-sm text-foreground/60 hover:text-primary transition-colors" data-testid="footer-email">
                hello@aethercoffee.co
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/30 tracking-wider">
            &copy; {new Date().getFullYear()} AETHER COFFEE CO. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors tracking-wider"
                data-testid={`footer-legal-${item.toLowerCase().replace(/\s/g, "-")}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
