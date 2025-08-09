import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandValues from "@/components/BrandValues";
import FeaturedCollection from "@/components/FeaturedCollection";
import FoundersStory from "@/components/FoundersStory";
import SustainabilityFocus from "@/components/SustainabilityFocus";
import CustomSizing from "@/components/CustomSizing";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <Hero />
      <BrandValues />
      <FeaturedCollection />
      <FoundersStory />
      <SustainabilityFocus />
      <CustomSizing />
      <ContactSection />
      <Footer />
    </div>
  );
}
