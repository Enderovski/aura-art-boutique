import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ShoppingBag, Download, FileText, Image as ImageIcon, Leaf, ChevronDown, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(true);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Ürün Bulunamadı</h1>
          <Link to="/" className="text-primary hover:underline font-sans text-sm">← Ana Sayfaya Dön</Link>
        </div>
      </div>
    );
  }

  const handleAddToBag = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <div className="grain-overlay" />
      <Header />
      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <nav className="flex items-center gap-2 text-[11px] font-sans tracking-[0.15em] uppercase text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link to="/#shop" className="hover:text-foreground transition-colors">Koleksiyon</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Gallery */}
            <div className="lg:w-3/5">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-xl bg-card aspect-square"
              >
                <img
                  src={product.gallery[selectedImage]}
                  alt={`${product.name} - Görsel ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary/90 text-secondary-foreground text-[9px] tracking-[0.15em] uppercase border-none backdrop-blur-sm">
                    <Download className="h-3 w-3 mr-1" />
                    Instant Download
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="h-8 w-8 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center" title="Zero Footprint">
                    <Leaf className="h-4 w-4 text-secondary-foreground" />
                  </div>
                </div>
              </motion.div>

              {/* Thumbnails */}
              <div className="flex gap-3 mt-4 overflow-x-auto hide-scrollbar">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      selectedImage === i
                        ? "border-primary shadow-lg"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="lg:w-2/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Badge variant="secondary" className="text-[9px] tracking-[0.15em] uppercase border-none mb-4">
                  {product.category}
                </Badge>

                <h1 className="font-serif text-3xl md:text-4xl text-foreground italic leading-tight">
                  {product.name}
                </h1>

                <p className="text-3xl text-primary font-semibold mt-4 font-sans">{product.price}</p>

                <p className="text-sm text-muted-foreground mt-6 leading-relaxed font-sans">
                  {product.description}
                </p>

                {/* Digital Sustainability */}
                <div className="glass-card rounded-lg p-4 mt-6 flex items-start gap-3">
                  <Leaf className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-sans font-semibold text-foreground">
                      Digital Sustainability
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 font-sans">
                      Sıfır karbon ayak izi. Kargo yok, ambalaj yok — sadece saf dijital sanat.
                    </p>
                  </div>
                </div>

                {/* Add to Bag */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToBag}
                  className="mt-8 w-full bg-primary text-primary-foreground py-4 rounded-lg font-sans text-xs tracking-[0.25em] uppercase font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  {added ? (
                    <>
                      <Check className="h-4 w-4" />
                      Sepete Eklendi
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="h-4 w-4" />
                      Sepete Ekle
                    </>
                  )}
                </motion.button>

                <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground font-sans">
                  <Download className="h-3 w-3" />
                  Satın alma sonrası anında dijital indirme
                </div>

                {/* What's Inside */}
                <div className="mt-8 border-t border-border pt-6">
                  <button
                    onClick={() => setOpenAccordion(!openAccordion)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <h3 className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-sans font-medium">
                      İçerik
                    </h3>
                    <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${openAccordion ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openAccordion && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden space-y-3 mt-4"
                      >
                        {product.includes.map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-foreground font-sans">
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

                {/* Features */}
                <div className="mt-6 border-t border-border pt-6">
                  <h3 className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-sans font-medium mb-4">
                    Özellikler
                  </h3>
                  <ul className="space-y-2.5">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-foreground font-sans">
                        <div className="h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground font-sans font-medium">
              İlgili Ürünler
            </span>
            <h2 className="font-serif text-3xl text-foreground mt-3 italic">Bunları da Beğenebilirsiniz</h2>
            <div className="h-[1px] w-12 bg-gold mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="overflow-hidden aspect-square">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[9px] tracking-[0.25em] uppercase text-muted-foreground font-sans">{p.category}</span>
                    <h3 className="font-serif text-lg text-foreground mt-1.5">{p.name}</h3>
                    <p className="text-sm text-primary font-semibold font-sans mt-1">{p.price}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
