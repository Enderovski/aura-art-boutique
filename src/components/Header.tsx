import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X, Search, User } from "lucide-react";
import AuthModal from "@/components/AuthModal";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount] = useState(0);

  const links = [
    { label: "The Vault", href: "#vault" },
    { label: "Collection", href: "#shop" },
    { label: "Daily Intention", href: "#intention" },
    { label: "Our Mission", href: "#sustainability" },
  ];

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl font-semibold tracking-wide text-foreground">
              Aura
            </span>
            <span className="gold-shimmer font-serif text-2xl font-bold">&</span>
            <span className="font-serif text-2xl font-semibold tracking-wide text-foreground">
              Art
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-[11px] font-medium tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <button className="text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="Search">
              <Search className="h-[18px] w-[18px]" />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors duration-200 hidden sm:block" aria-label="Account">
              <User className="h-[18px] w-[18px]" />
            </button>
            <button className="relative text-muted-foreground hover:text-foreground transition-colors duration-200" aria-label="Shopping bag">
              <ShoppingBag className="h-[18px] w-[18px]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[9px] flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
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
            className="lg:hidden overflow-hidden"
          >
            <nav className="flex flex-col px-6 pb-8 gap-1 bg-background/95 backdrop-blur-xl">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-sm font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors py-3 border-b border-border/50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
