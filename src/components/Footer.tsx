import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-gold/10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl text-charcoal-foreground">
              Aura <span className="gold-shimmer font-bold">&</span> Art
            </h3>
            <p className="text-sm text-charcoal-foreground/50 mt-4 max-w-sm leading-relaxed font-sans">
              Curated digital art and ritual tools for the modern bohemian.
              Every piece is designed to bring intention, beauty, and mindfulness into your daily life.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="h-9 w-9 rounded-full bg-charcoal-foreground/5 flex items-center justify-center hover:bg-charcoal-foreground/10 transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4 text-charcoal-foreground/50" />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-charcoal-foreground/5 flex items-center justify-center hover:bg-charcoal-foreground/10 transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4 text-charcoal-foreground/50" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-charcoal-foreground/40 font-sans font-medium mb-5">
              The Vault
            </h4>
            <ul className="space-y-3">
              {["Visual Sanctuaries", "Spiritual Tools", "Atmospheric Essentials", "Curated Bundles"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-charcoal-foreground/60 hover:text-charcoal-foreground transition-colors font-sans">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.25em] uppercase text-charcoal-foreground/40 font-sans font-medium mb-5">
              Support
            </h4>
            <ul className="space-y-3">
              {["FAQ", "Printing Guide", "Contact Us", "Terms & Privacy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-charcoal-foreground/60 hover:text-charcoal-foreground transition-colors font-sans">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-charcoal-foreground/10 mt-14 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-charcoal-foreground/30 font-sans tracking-wider">
            © 2026 Aura & Art Digital Atelier. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-[10px] text-charcoal-foreground/30 font-sans">
            <span className="h-1.5 w-1.5 rounded-full bg-gold/40" />
            Digital art for conscious living
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
