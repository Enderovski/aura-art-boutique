import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import SustainabilitySection from "@/components/SustainabilitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="grain-overlay" />
      <Header />
      <main>
        <HeroSection />
        <ProductGrid />
        <SustainabilitySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
