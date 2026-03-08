import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ShoppingBag, X, Download, FileText, Image as ImageIcon, Leaf, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  tall?: boolean;
  includes: string[];
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Organic Forms — Terracotta",
    category: "Visual Sanctuaries",
    price: "$12.00",
    image: product1,
    tall: true,
    includes: ["High-Res JPG (300 DPI)", "PDF Print-Ready", "Printing Guide"],
    description: "Abstract organic shapes in warm terracotta tones. Perfect for creating a cozy, grounded atmosphere in any space.",
  },
  {
    id: 2,
    name: "Botanical Ritual Deck",
    category: "Spiritual Tools",
    price: "$24.00",
    image: product2,
    tall: true,
    includes: ["9 Card Designs (PDF)", "High-Res JPG Set", "Ritual Guide PDF"],
    description: "A set of 9 botanical-themed ritual cards with gold foil details. Use for daily intentions, meditation, or journaling.",
  },
  {
    id: 3,
    name: "Fern & Wildflower Botanical",
    category: "Visual Sanctuaries",
    price: "$10.00",
    image: product3,
    includes: ["High-Res JPG (300 DPI)", "PDF Print-Ready", "Sizing Guide"],
    description: "Minimalist botanical line art featuring fern and wildflower illustrations in forest green.",
  },
  {
    id: 4,
    name: "Celestial Moon Phases",
    category: "Visual Sanctuaries",
    price: "$14.00",
    image: product4,
    includes: ["High-Res JPG (300 DPI)", "PDF Print-Ready", "Printing Guide"],
    description: "Gold and navy celestial art featuring moon phases. A mystical addition to your sacred space.",
  },
  {
    id: 5,
    name: "Daily Affirmation Cards",
    category: "Spiritual Tools",
    price: "$18.00",
    image: product5,
    tall: true,
    includes: ["30 Card Designs (PDF)", "High-Res JPG Set", "Daily Practice Guide"],
    description: "30 beautifully designed affirmation cards in warm terracotta. Start each day with intention.",
  },
  {
    id: 6,
    name: "Desert Horizon — Earth Tones",
    category: "Visual Sanctuaries",
    price: "$11.00",
    image: product6,
    includes: ["High-Res JPG (300 DPI)", "PDF Print-Ready", "Printing Guide"],
    description: "A serene abstract desert landscape in layered earth tones. Brings warmth and tranquility to your walls.",
  },
];

const ProductGrid = () => {
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [addedId, setAddedId] = useState<number | null>(null);
  const [openAccordion, setOpenAccordion] = useState(false);

  const handleAddToBag = (id: number) => {
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section id="shop" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans font-medium">
          The Staggered Gallery
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3 italic">
          Curated Digital Art
        </h2>
        <div className="h-[1px] w-12 bg-gold mx-auto mt-5" />
      </motion.div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
            className="break-inside-avoid group relative overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-xl transition-shadow duration-500 tactile-press"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setQuickView(product)}
                  className="h-11 w-11 rounded-full bg-background/95 flex items-center justify-center shadow-lg"
                  aria-label="Quick view"
                >
                  <Eye className="h-4 w-4 text-foreground" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAddToBag(product.id)}
                  className="h-11 w-11 rounded-full bg-primary flex items-center justify-center shadow-lg"
                  aria-label="Quick Add"
                >
                  <ShoppingBag className="h-4 w-4 text-primary-foreground" />
                </motion.button>
              </div>

              {/* Badges */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <Badge className="bg-secondary/90 text-secondary-foreground text-[9px] tracking-[0.15em] uppercase border-none backdrop-blur-sm">
                  <Download className="h-3 w-3 mr-1" />
                  Instant Download
                </Badge>
              </div>

              {/* Sustainability badge */}
              <div className="absolute top-3 left-3">
                <div className="h-7 w-7 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center" title="Zero Footprint Digital Product">
                  <Leaf className="h-3.5 w-3.5 text-secondary-foreground" />
                </div>
              </div>

              {/* Add to bag animation */}
              <AnimatePresence>
                {addedId === product.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-secondary/95 backdrop-blur-sm flex flex-col items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="h-12 w-12 rounded-full bg-secondary-foreground/20 flex items-center justify-center mb-3"
                    >
                      <ShoppingBag className="h-5 w-5 text-secondary-foreground" />
                    </motion.div>
                    <p className="font-serif text-lg text-secondary-foreground italic">Added to Bag</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="p-5">
              <span className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground font-sans font-medium">
                {product.category}
              </span>
              <h3 className="font-serif text-lg text-foreground mt-1.5 leading-snug">{product.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-primary font-semibold font-sans">{product.price}</p>
                <button
                  onClick={() => handleAddToBag(product.id)}
                  className="text-[9px] tracking-[0.2em] uppercase font-sans font-semibold text-muted-foreground hover:text-primary transition-colors"
                >
                  Quick Add +
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => { setQuickView(null); setOpenAccordion(false); }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-background rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 relative">
                  <img
                    src={quickView.image}
                    alt={quickView.name}
                    className="w-full h-72 md:h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                  />
                  {/* Sustainability badge on modal */}
                  <div className="absolute bottom-4 left-4 glass-card rounded-lg px-3 py-2 flex items-center gap-2">
                    <Leaf className="h-3.5 w-3.5 text-secondary" />
                    <span className="text-[9px] tracking-[0.15em] uppercase font-sans font-medium text-foreground">
                      Digital Sustainability
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 p-7 flex flex-col">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="text-[9px] tracking-[0.15em] uppercase border-none">
                      {quickView.category}
                    </Badge>
                    <button onClick={() => { setQuickView(null); setOpenAccordion(false); }} className="text-muted-foreground hover:text-foreground transition-colors">
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <h3 className="font-serif text-2xl text-foreground mt-5 italic">{quickView.name}</h3>
                  <p className="text-2xl text-primary font-semibold mt-2 font-sans">{quickView.price}</p>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed font-sans">{quickView.description}</p>

                  {/* What's Inside Accordion */}
                  <div className="mt-6 border-t border-border pt-4">
                    <button
                      onClick={() => setOpenAccordion(!openAccordion)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <h4 className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-sans font-medium">
                        What's Inside
                      </h4>
                      <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${openAccordion ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {openAccordion && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden space-y-2.5 mt-3"
                        >
                          {quickView.includes.map((item, i) => (
                            <li key={i} className="flex items-center gap-2.5 text-sm text-foreground font-sans">
                              {item.includes("JPG") ? (
                                <ImageIcon className="h-4 w-4 text-gold" />
                              ) : (
                                <FileText className="h-4 w-4 text-gold" />
                              )}
                              {item}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      handleAddToBag(quickView.id);
                      setTimeout(() => { setQuickView(null); setOpenAccordion(false); }, 800);
                    }}
                    className="mt-6 w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-sans text-xs tracking-[0.25em] uppercase font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Bag
                  </motion.button>

                  <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground font-sans">
                    <Download className="h-3 w-3" />
                    Instant digital download after purchase
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProductGrid;
