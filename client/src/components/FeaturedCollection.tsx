import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import youngModelsImage from "@assets/IMG_20250802_182537_1754705320242.jpg";

export default function FeaturedCollection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collection" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Signature Collection
          </h2>
          <p className="text-xl text-soft-black/80 max-w-2xl mx-auto">
            Our debut collection celebrates Indonesian craftsmanship with contemporary design sensibilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal">
                Tiered Floral Dress
              </h3>
              <p className="text-lg text-soft-black/80 leading-relaxed">
                Our signature piece features hand-selected floral prints from traditional Indonesian textiles, 
                reimagined in a contemporary tiered silhouette. Each dress tells a story of cultural heritage 
                meeting modern elegance.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-soft-black">Starting Price</span>
                <span className="font-playfair text-2xl font-bold text-earthy">US$50</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-soft-black">Production Time</span>
                <span className="text-soft-black/80">2-3 weeks</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-soft-black">Sizing</span>
                <span className="text-soft-black/80">Custom measurements</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-charcoal">Key Features:</h4>
              <ul className="space-y-2 text-soft-black/80">
                <li className="flex items-center">
                  <Check className="text-earthy mr-3" size={16} />
                  Hand-sewn tiered construction
                </li>
                <li className="flex items-center">
                  <Check className="text-earthy mr-3" size={16} />
                  Traditional Indonesian floral prints
                </li>
                <li className="flex items-center">
                  <Check className="text-earthy mr-3" size={16} />
                  Adjustable waist tie
                </li>
                <li className="flex items-center">
                  <Check className="text-earthy mr-3" size={16} />
                  Organic cotton lining
                </li>
              </ul>
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="bg-charcoal text-cream px-8 py-4 font-medium hover:bg-earthy transition-all duration-300 w-full sm:w-auto"
            >
              Order Custom Piece
            </Button>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={youngModelsImage} 
                alt="Young models wearing Hartani custom dresses" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-champagne p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm text-charcoal/80 font-medium mb-2">Customer Review</p>
              <p className="text-charcoal italic">
                "The perfect fit and beautiful craftsmanship. It's luxury with a conscience."
              </p>
              <div className="flex text-earthy mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
