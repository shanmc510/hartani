import { Leaf, Recycle, Ruler } from "lucide-react";

export default function BrandValues() {
  return (
    <section className="py-24 bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Redefining Fashion's Future
          </h2>
          <p className="text-xl text-cream/80 max-w-3xl mx-auto leading-relaxed">
            We believe luxury shouldn't come at the cost of our planet. Every piece is thoughtfully crafted with ethical sourcing, zero-waste production, and custom sizing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-6 p-8">
            <div className="w-16 h-16 bg-earthy rounded-full flex items-center justify-center mx-auto">
              <Leaf className="text-cream" size={32} />
            </div>
            <h3 className="font-playfair text-xl font-semibold">Ethical Sourcing</h3>
            <p className="text-cream/80 leading-relaxed">
              Direct partnerships with Indonesian artisans ensuring fair wages and traditional craftsmanship preservation.
            </p>
          </div>
          
          <div className="text-center space-y-6 p-8">
            <div className="w-16 h-16 bg-earthy rounded-full flex items-center justify-center mx-auto">
              <Recycle className="text-cream" size={32} />
            </div>
            <h3 className="font-playfair text-xl font-semibold">Zero Waste</h3>
            <p className="text-cream/80 leading-relaxed">
              Made-to-order production eliminates overstock and waste, creating only what is needed and loved.
            </p>
          </div>
          
          <div className="text-center space-y-6 p-8">
            <div className="w-16 h-16 bg-earthy rounded-full flex items-center justify-center mx-auto">
              <Ruler className="text-cream" size={32} />
            </div>
            <h3 className="font-playfair text-xl font-semibold">Custom Sizing</h3>
            <p className="text-cream/80 leading-relaxed">
              Perfect fit guaranteed with personalized measurements, ensuring comfort and confidence in every piece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
