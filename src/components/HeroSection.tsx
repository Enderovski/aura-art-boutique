import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroLeft from "@/assets/hero-left.jpg";
import heroRight from "@/assets/hero-right.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Panel */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={heroLeft}
          alt="Modern bohemian room with wall art in gallery frame"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          className="absolute bottom-16 left-8 right-8 md:left-12 md:right-12"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-charcoal-foreground/70 font-sans font-medium">
            Visual Sanctuaries
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-charcoal-foreground mt-3 leading-[1.1] italic">
            Modern Wall Art
          </h2>
          <div className="h-[1px] w-16 bg-gold mt-4" />
        </motion.div>
      </div>

      {/* Right Panel */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          src={heroRight}
          alt="Digital ritual and intention cards with gold foil textures"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/25 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
          className="absolute bottom-16 left-8 right-8 md:left-12 md:right-12"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-charcoal-foreground/70 font-sans font-medium">
            Spiritual Tools
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-charcoal-foreground mt-3 leading-[1.1] italic">
            Ritual & Intention Cards
          </h2>
          <div className="h-[1px] w-16 bg-gold mt-4" />
        </motion.div>
      </div>

      {/* Center CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.1, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center hidden md:block"
      >
        <div className="glass-card rounded-xl px-12 py-10 shadow-2xl">
          <h1 className="font-serif text-5xl lg:text-7xl text-foreground leading-tight">
            Aura <span className="gold-shimmer font-bold">&</span> Art
          </h1>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mt-4 font-sans font-medium">
            Digital Atelier — Where Ritual Meets Aesthetic
          </p>
          <a
            href="#shop"
            className="mt-8 inline-flex items-center gap-2 glass-card rounded-full px-8 py-3 text-xs tracking-[0.25em] uppercase font-sans font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-500 group pointer-events-auto"
          >
            Explore the Collection
            <ArrowDown className="h-3.5 w-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>

      {/* Mobile CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="md:hidden absolute top-8 left-0 right-0 z-10 text-center"
      >
        <div className="glass-card inline-block rounded-xl px-8 py-5 shadow-xl mx-4">
          <h1 className="font-serif text-3xl text-foreground">
            Aura <span className="gold-shimmer font-bold">&</span> Art
          </h1>
          <p className="text-muted-foreground text-[10px] tracking-[0.25em] uppercase mt-2 font-sans">
            Digital Atelier
          </p>
          <a
            href="#shop"
            className="mt-4 inline-flex items-center gap-2 glass-card rounded-full px-6 py-2.5 text-[10px] tracking-[0.2em] uppercase font-sans font-semibold text-foreground active:bg-primary active:text-primary-foreground transition-all duration-300 tactile-press"
          >
            Explore
            <ArrowDown className="h-3 w-3" />
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-charcoal-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
