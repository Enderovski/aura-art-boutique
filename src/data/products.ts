import product1 from "@/assets/product-1.jpg";
import product1Alt1 from "@/assets/product-1-alt1.jpg";
import product1Alt2 from "@/assets/product-1-alt2.jpg";
import product2 from "@/assets/product-2.jpg";
import product2Alt1 from "@/assets/product-2-alt1.jpg";
import product2Alt2 from "@/assets/product-2-alt2.jpg";
import product3 from "@/assets/product-3.jpg";
import product3Alt1 from "@/assets/product-3-alt1.jpg";
import product4 from "@/assets/product-4.jpg";
import product4Alt1 from "@/assets/product-4-alt1.jpg";
import product5 from "@/assets/product-5.jpg";
import product5Alt1 from "@/assets/product-5-alt1.jpg";
import product6 from "@/assets/product-6.jpg";
import product6Alt1 from "@/assets/product-6-alt1.jpg";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  gallery: string[];
  tall?: boolean;
  includes: string[];
  description: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Organic Forms — Terracotta",
    category: "Visual Sanctuaries",
    price: "$12.00",
    image: product1,
    gallery: [product1, product1Alt1, product1Alt2],
    tall: true,
    includes: ["High-Res JPG (300 DPI)", "PDF Print-Ready", "Printing Guide"],
    description: "Abstract organic shapes in warm terracotta tones. Perfect for creating a cozy, grounded atmosphere in any space.",
    features: ["300 DPI çözünürlük", "A3 ve A4 boyutlarına uygun", "Anında indirme", "Ticari kullanım lisansı", "Baskı rehberi dahil"],
  },
  {
    id: 2,
    name: "Botanical Ritual Deck",
    category: "Spiritual Tools",
    price: "$24.00",
    image: product2,
    gallery: [product2, product2Alt1, product2Alt2],
    tall: true,
    includes: ["9 Card Designs (PDF)", "High-Res JPG Set", "Ritual Guide PDF"],
    description: "A set of 9 botanical-themed ritual cards with gold foil details. Use for daily intentions, meditation, or journaling.",
    features: ["9 benzersiz kart tasarımı", "Altın folyo detaylar", "Ritüel rehberi dahil", "Baskıya hazır PDF", "Dijital ve fiziksel kullanım"],
  },
  {
    id: 3,
    name: "Fern & Wildflower Botanical",
    category: "Visual Sanctuaries",
    price: "$10.00",
    image: product3,
    gallery: [product3, product3Alt1],
    includes: ["High-Res JPG (300 DPI)", "PDF Print-Ready", "Sizing Guide"],
    description: "Minimalist botanical line art featuring fern and wildflower illustrations in forest green.",
    features: ["Minimalist çizgi sanatı", "Doğal yeşil tonlar", "Çoklu boyut seçenekleri", "Anında indirme", "Boyutlandırma rehberi"],
  },
  {
    id: 4,
    name: "Celestial Moon Phases",
    category: "Visual Sanctuaries",
    price: "$14.00",
    image: product4,
    gallery: [product4, product4Alt1],
    includes: ["High-Res JPG (300 DPI)", "PDF Print-Ready", "Printing Guide"],
    description: "Gold and navy celestial art featuring moon phases. A mystical addition to your sacred space.",
    features: ["Altın ve lacivert palet", "Ay evreleri tasarımı", "300 DPI kalite", "A2-A4 boyut desteği", "Mistik atmosfer"],
  },
  {
    id: 5,
    name: "Daily Affirmation Cards",
    category: "Spiritual Tools",
    price: "$18.00",
    image: product5,
    gallery: [product5, product5Alt1],
    tall: true,
    includes: ["30 Card Designs (PDF)", "High-Res JPG Set", "Daily Practice Guide"],
    description: "30 beautifully designed affirmation cards in warm terracotta. Start each day with intention.",
    features: ["30 farklı olumlanma kartı", "Sıcak terrakota tonlar", "Günlük pratik rehberi", "Baskıya hazır format", "Meditasyon desteği"],
  },
  {
    id: 6,
    name: "Desert Horizon — Earth Tones",
    category: "Visual Sanctuaries",
    price: "$11.00",
    image: product6,
    gallery: [product6, product6Alt1],
    includes: ["High-Res JPG (300 DPI)", "PDF Print-Ready", "Printing Guide"],
    description: "A serene abstract desert landscape in layered earth tones. Brings warmth and tranquility to your walls.",
    features: ["Soyut çöl manzarası", "Katmanlı toprak tonları", "Huzurlu atmosfer", "300 DPI çözünürlük", "Baskı rehberi dahil"],
  },
];
