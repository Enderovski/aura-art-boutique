import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, ShoppingBag, X, Download, FileText, Image as ImageIcon } from "lucide-react";
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
    category: "Wall Art",
    price: "$12.00",
    image: product1,
    tall: true,
    includes: ["High-Res JPG (300 DPI)", "PDF Print-Ready", "Printing Guide"],
    description: "Abstract organic shapes in warm terracotta tones. Perfect for creating a cozy, grounded atmosphere in any space.",
  },
  {
    id: 2,
    name: "Botanical Ritual Deck",
    category: "Ritual Cards",
    price: "$24.00",
    image: product2,
    tall: true,
    includes: ["9 Card Designs (PDF)", "High-Res JPG Set", "Ritual Guide PDF"],
    description: "A set of 9 botanical-themed ritual cards with gold foil details. Use for daily intentions, meditation, or journaling.",
  },
  {
    id: 3,
    name: "Fern & Wildflower Botanical",
    category: "Wall Art",
    price: "$10.00",
    image: product3,
    includes: ["High-Res JPG (300 DPI)", "PDF Print-Ready", "Sizing Guide"],
    description: "Minimalist botanical line art featuring fern and wildflower illustrations in forest green.",
  },
  {
    id: 4,
    name: "Celestial Moon Phases",
    category: "Wall Art",
    price: "$14.00",
    image: product4,
    includes: ["High-Res JPG (300 DPI)", "PDF Print-Ready", "Printing Guide"],
    description: "Gold and navy celestial art featuring moon phases. A mystical addition to your sacred space.",
  },
  {
    id: 5,
    name: "Daily Affirmation Cards",
    category: "Ritual Cards",
    price: "$18.00",
    image: product5,
    tall: true,
    includes: ["30 Card Designs (PDF)", "High-Res JPG Set", "Daily Practice Guide"],
    description: "30 beautifully designed affirmation cards in warm terracotta. Start each day with intention.",
  },
  {
    id: 6,
    name: "Desert Horizon — Earth Tones",
    category: "Wall Art",
    price: "$11.00",
    image: product6,
    includes: ["High-Res JPG (300 DPI)", "PDF Print-Ready", "Printing Guide"],
    description: "A serene abstract desert landscape in layered earth tones. Brings warmth and tranquility to your walls.",
  },
];

const ProductGrid = () => {
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [addedId, setAddedId] = useState<number | null>(null);

  const handleAddToBag = (id: number) => {
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1200);
  };

  return (
    <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans">
          The Collection
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mt-3">
          Curated Digital Art
        </h2>
      </motion.div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="break-inside-avoid group relative overflow-hidden rounded-md bg-card"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-500 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                <button
                  onClick={() => setQuickView(product)}
                  className="h-10 w-10 rounded-full bg-background/90 flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Quick view"
                >
                  <Eye className="h-4 w-4 text-foreground" />
                </button>
                <button
                  onClick={() => handleAddToBag(product.id)}
                  className="h-10 w-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                  aria-label="Add to bag"
                >
                  <ShoppingBag className="h-4 w-4 text-primary-foreground" />
                </button>
              </div>

              {/* Instant Download Badge */}
              <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-[10px] tracking-wider uppercase border-none">
                <Download className="h-3 w-3 mr-1" />
                Instant Download
              </Badge>

              {/* Add to bag animation */}
              <AnimatePresence>
                {addedId === product.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 bg-secondary/90 flex items-center justify-center"
                  >
                    <p className="font-serif text-xl text-secondary-foreground">Added to Bag ✓</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="p-4">
              <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-sans">
                {product.category}
              </span>
              <h3 className="font-serif text-lg text-foreground mt-1">{product.name}</h3>
              <p className="text-sm text-primary font-semibold mt-1">{product.price}</p>
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
            className="fixed inset-0 z-50 bg-foreground/50 flex items-center justify-center p-4"
            onClick={() => setQuickView(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img
                    src={quickView.image}
                    alt={quickView.name}
                    className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="text-[10px] tracking-wider uppercase border-none">
                      {quickView.category}
                    </Badge>
                    <button onClick={() => setQuickView(null)} className="text-muted-foreground hover:text-foreground">
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <h3 className="font-serif text-2xl text-foreground mt-4">{quickView.name}</h3>
                  <p className="text-xl text-primary font-semibold mt-2">{quickView.price}</p>
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{quickView.description}</p>

                  {/* What's Included */}
                  <div className="mt-6 border-t border-border pt-4">
                    <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-sans mb-3">
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      {quickView.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                          {item.includes("JPG") ? (
                            <ImageIcon className="h-4 w-4 text-primary" />
                          ) : (
                            <FileText className="h-4 w-4 text-primary" />
                          )}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      handleAddToBag(quickView.id);
                      setTimeout(() => setQuickView(null), 800);
                    }}
                    className="mt-6 w-full bg-primary text-primary-foreground py-3 rounded-md font-sans text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to Bag
                  </button>

                  <div className="mt-3 flex items-center justify-center gap-1 text-xs text-muted-foreground">
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
