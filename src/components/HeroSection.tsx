import { motion } from "framer-motion";
import heroLeft from "@/assets/hero-left.jpg";
import heroRight from "@/assets/hero-right.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen overflow-hidden">
        <img
          src={heroLeft}
          alt="Modern bohemian room with wall art"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute bottom-12 left-8 right-8 md:left-12 md:right-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/80 font-sans">
            Curated Collection
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground mt-2 leading-tight">
            Modern Wall Art
          </h2>
        </motion.div>
      </div>

      {/* Right Panel */}
      <div className="relative w-full md:w-1/2 h-[50vh] md:h-screen overflow-hidden">
        <img
          src={heroRight}
          alt="Digital ritual and intention cards with gold foil"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-12 left-8 right-8 md:left-12 md:right-12"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary-foreground/80 font-sans">
            Digital Downloads
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground mt-2 leading-tight">
            Ritual & Intention Cards
          </h2>
        </motion.div>
      </div>

      {/* Center Welcome Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center pointer-events-none hidden md:block"
      >
        <div className="glass rounded-lg px-10 py-8 shadow-2xl">
          <h1 className="font-serif text-4xl lg:text-6xl text-foreground leading-tight">
            Aura <span className="text-primary">&</span> Art
          </h1>
          <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase mt-3 font-sans">
            Where ritual meets aesthetic
          </p>
        </div>
      </motion.div>

      {/* Mobile Welcome */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="md:hidden absolute top-8 left-0 right-0 z-10 text-center"
      >
        <div className="glass inline-block rounded-lg px-8 py-4 shadow-xl mx-4">
          <h1 className="font-serif text-3xl text-foreground">
            Aura <span className="text-primary">&</span> Art
          </h1>
          <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mt-1 font-sans">
            Where ritual meets aesthetic
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
