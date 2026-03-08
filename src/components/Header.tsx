import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Search } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(0);

  const links = ["Shop", "Wall Art", "Ritual Cards", "About"];

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-serif text-2xl font-semibold tracking-wide text-foreground">
            Aura <span className="text-primary">&</span> Art
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button className="relative text-muted-foreground hover:text-foreground transition-colors" aria-label="Shopping bag">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass"
          >
            <nav className="flex flex-col px-6 pb-6 gap-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
