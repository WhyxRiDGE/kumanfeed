import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollChicken from "@/components/ScrollChicken";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ProductsSection />
    <TrustSection />
    <ContactSection />
    <Footer />
    <ScrollChicken />
  </div>
);

export default Index;
