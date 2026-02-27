import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveStats from "@/components/LiveStats";
import DangerSection from "@/components/DangerSection";
import ProductShowcase from "@/components/ProductShowcase";
import AlertSystem from "@/components/AlertSystem";
import Technology from "@/components/Technology";
import Impact from "@/components/Impact";
import Pricing from "@/components/Pricing";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <Hero />
    <LiveStats />
    <DangerSection />
    <ProductShowcase />
    <AlertSystem />
    <Technology />
    <Impact />
    <Pricing />
    <Reserve />
    <Footer />
  </div>
);

export default Index;
