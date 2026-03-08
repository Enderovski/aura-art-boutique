import { useRef } from "react";
import { motion } from "framer-motion";
import { Frame, Sparkles, Headphones, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    icon: Frame,
    name: "Visual Sanctuaries",
    subtitle: "Wall Art & Prints",
    href: "#shop",
  },
  {
    icon: Sparkles,
    name: "Spiritual Tools",
    subtitle: "Ritual Cards & Printable Mats",
    href: "#shop",
  },
  {
    icon: Headphones,
    name: "Atmospheric Essentials",
    subtitle: "Ambient Soundscapes & Notion Life OS",
    href: "#shop",
  },
];

const CategoryNav = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  return (
    <section id="vault" className="py-16 px-4 sm:px-6 lg:px-8 paper-texture">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans font-medium">
            Browse by Category
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mt-3 italic">
            The Vault
          </h2>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors hidden md:flex"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar px-2 md:px-14 snap-x snap-mandatory"
          >
            {categories.map((cat, index) => (
              <motion.a
                key={cat.name}
                href={cat.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 snap-center w-[280px] sm:w-[320px] group tactile-press"
              >
                <div className="glass-card rounded-xl p-8 h-full flex flex-col items-center text-center hover:shadow-lg transition-all duration-500 group-hover:border-primary/30">
                  <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <cat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-2 tracking-wide font-sans">
                    {cat.subtitle}
                  </p>
                  <div className="h-[1px] w-8 bg-gold/50 mt-5 group-hover:w-16 transition-all duration-500" />
                </div>
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors hidden md:flex"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryNav;
