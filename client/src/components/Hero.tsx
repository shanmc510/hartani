import { Button } from "@/components/ui/button";
import dressImage from "@assets/ChatGPT Image May 31, 2025, 11_08_06 AM_1754704813777.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 min-h-screen hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-12">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
                Sustainable Luxury
                <span className="block text-earthy">Redefined</span>
              </h1>
              <p className="text-lg md:text-xl text-soft-black/80 font-light leading-relaxed max-w-xl">
                Discover Asia's youngest fashion designers' vision for ethical couture. Made-to-order luxury that respects both craftsmanship and our planet.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('collection')}
                className="bg-charcoal text-cream px-8 py-4 font-medium hover:bg-earthy transition-all duration-300 transform hover:scale-105"
              >
                Explore Collection
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="border-2 border-charcoal text-charcoal px-8 py-4 font-medium hover:bg-charcoal hover:text-cream transition-all duration-300"
              >
                Our Story
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-charcoal">100%</div>
                <div className="text-sm text-soft-black/70">Sustainable</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-charcoal">Zero</div>
                <div className="text-sm text-soft-black/70">Waste</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-charcoal">Made</div>
                <div className="text-sm text-soft-black/70">to Order</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src={dressImage} 
                alt="Hartani signature tiered floral dress" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-cream/90 backdrop-blur-sm p-4 rounded">
                  <h3 className="font-playfair text-lg font-semibold text-charcoal">Signature Tiered Dress</h3>
                  <p className="text-soft-black/80 text-sm">Starting at US$50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
