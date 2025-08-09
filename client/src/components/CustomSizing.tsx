import { Check } from "lucide-react";

export default function CustomSizing() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-6">
            Perfect Fit, Every Time
          </h2>
          <p className="text-xl text-soft-black/80 max-w-2xl mx-auto">
            Our made-to-order process ensures every dress is crafted specifically for you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-charcoal text-cream rounded-full flex items-center justify-center mx-auto font-playfair text-xl font-bold">
              1
            </div>
            <h3 className="font-playfair text-xl font-semibold text-charcoal">Consultation</h3>
            <p className="text-soft-black/80">
              Schedule a virtual fitting consultation to discuss your preferences and measurements.
            </p>
          </div>
          
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-charcoal text-cream rounded-full flex items-center justify-center mx-auto font-playfair text-xl font-bold">
              2
            </div>
            <h3 className="font-playfair text-xl font-semibold text-charcoal">Measurements</h3>
            <p className="text-soft-black/80">
              Receive detailed measurement guide and submit your custom sizing requirements.
            </p>
          </div>
          
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-charcoal text-cream rounded-full flex items-center justify-center mx-auto font-playfair text-xl font-bold">
              3
            </div>
            <h3 className="font-playfair text-xl font-semibold text-charcoal">Crafting</h3>
            <p className="text-soft-black/80">
              Our Indonesian artisans hand-craft your dress using traditional techniques.
            </p>
          </div>
          
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-charcoal text-cream rounded-full flex items-center justify-center mx-auto font-playfair text-xl font-bold">
              4
            </div>
            <h3 className="font-playfair text-xl font-semibold text-charcoal">Delivery</h3>
            <p className="text-soft-black/80">
              Receive your perfectly fitted dress with carbon-neutral shipping.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl font-bold text-charcoal">Why Made-to-Order?</h3>
              <ul className="space-y-4 text-soft-black/80">
                <li className="flex items-start">
                  <Check className="text-earthy mr-3 mt-1" size={16} />
                  <div>
                    <strong>Zero Waste:</strong> No overproduction or unsold inventory
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-earthy mr-3 mt-1" size={16} />
                  <div>
                    <strong>Perfect Fit:</strong> Every dress tailored to your exact measurements
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-earthy mr-3 mt-1" size={16} />
                  <div>
                    <strong>Quality Assurance:</strong> Individual attention to each garment
                  </div>
                </li>
                <li className="flex items-start">
                  <Check className="text-earthy mr-3 mt-1" size={16} />
                  <div>
                    <strong>Artisan Support:</strong> Direct employment for traditional craftspeople
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400" 
                alt="Fashion consultation and measurement session" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
