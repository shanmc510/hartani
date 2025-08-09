import { HandHeart, Sprout, Truck } from "lucide-react";

export default function SustainabilityFocus() {
  return (
    <section id="sustainability" className="py-24 bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Our Sustainable Promise
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed">
            We're building an alternative to fast fashion through transparency, 
            ethical partnerships, and environmental responsibility.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-cream/10 p-8 rounded-lg backdrop-blur-sm">
            <div className="w-12 h-12 bg-earthy rounded-lg flex items-center justify-center mb-6">
              <HandHeart className="text-cream" size={24} />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Artisan Partnership</h3>
            <p className="text-cream/80 leading-relaxed">
              Direct collaboration with Indonesian textile artisans, ensuring fair wages 
              and preserving traditional craftsmanship techniques.
            </p>
          </div>
          
          <div className="bg-cream/10 p-8 rounded-lg backdrop-blur-sm">
            <div className="w-12 h-12 bg-earthy rounded-lg flex items-center justify-center mb-6">
              <Sprout className="text-cream" size={24} />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Organic Materials</h3>
            <p className="text-cream/80 leading-relaxed">
              Exclusively using organic cotton, natural dyes, and sustainably sourced 
              materials for every garment we create.
            </p>
          </div>
          
          <div className="bg-cream/10 p-8 rounded-lg backdrop-blur-sm">
            <div className="w-12 h-12 bg-earthy rounded-lg flex items-center justify-center mb-6">
              <Truck className="text-cream" size={24} />
            </div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Carbon Neutral</h3>
            <p className="text-cream/80 leading-relaxed">
              All shipping is carbon-neutral, and we plant a tree for every dress 
              sold through our reforestation partnerships.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-bold">Indonesian Craftsmanship Heritage</h3>
            <p className="text-cream/80 leading-relaxed">
              Indonesia's rich textile tradition spans centuries, from intricate batik patterns 
              to hand-woven fabrics. We work directly with master artisans in Java and Bali, 
              supporting communities that have passed down these skills through generations.
            </p>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-earthy">50+</div>
                <div className="text-sm text-cream/70">Artisan Partners</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-earthy">3</div>
                <div className="text-sm text-cream/70">Generations</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-2xl font-bold text-earthy">100%</div>
                <div className="text-sm text-cream/70">Fair Trade</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Indonesian textile artisan working on traditional weaving" 
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent rounded-lg"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-cream/90 backdrop-blur-sm p-4 rounded">
                <p className="text-charcoal font-medium">Traditional batik artisan in Java</p>
                <p className="text-soft-black/70 text-sm">Part of our ethical sourcing network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
