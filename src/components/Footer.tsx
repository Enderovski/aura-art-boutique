const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl text-foreground">
              Aura <span className="text-primary">&</span> Art
            </h3>
            <p className="text-sm text-muted-foreground mt-3 max-w-sm leading-relaxed font-sans">
              Curated digital art and ritual tools for the modern bohemian. 
              Every piece is designed to bring intention, beauty, and mindfulness into your daily life.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-4">Shop</h4>
            <ul className="space-y-2">
              {["Wall Art", "Ritual Cards", "Affirmation Decks", "Bundles"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-foreground hover:text-primary transition-colors font-sans">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-4">Support</h4>
            <ul className="space-y-2">
              {["FAQ", "Printing Guide", "Contact", "Terms"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-foreground hover:text-primary transition-colors font-sans">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-xs text-muted-foreground font-sans">
            © 2026 Aura & Art. All rights reserved. Digital art for conscious living.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
