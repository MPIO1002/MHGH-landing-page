import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import SidebarAds from "./components/SidebarAds";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ContentSection />
      <Footer />
      <SidebarAds />
    </div>
  );
}
