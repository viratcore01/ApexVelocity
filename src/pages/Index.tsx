import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveStats from "@/components/LiveStats";
import StrategyEngine from "@/components/StrategyEngine";
import Technology from "@/components/Technology";
import Cockpit from "@/components/Cockpit";
import HowItWorks from "@/components/HowItWorks";
import Reserve from "@/components/Reserve";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <Hero />
    <LiveStats />
    <StrategyEngine />
    <Technology />
    <Cockpit />
    <HowItWorks />
    <Reserve />
    <Footer />
  </div>
);

export default Index;
