import foundersImage from "@assets/IMG_20250802_182537_1754705320242.jpg";

export default function FoundersStory() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal">
                Asia's Youngest Fashion Visionaries
              </h2>
              <p className="text-lg text-soft-black/80 leading-relaxed">
                Meet Emmeline Hart and Shan Mahtani, the dynamic duo behind Hartani. 
                At just 16 and 17 years old, they're revolutionizing luxury fashion with 
                their commitment to sustainability and ethical production.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-earthy pl-6">
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2">Emmeline Hart</h3>
                <p className="text-soft-black/80">
                  With a background in textile design and sustainable fashion, Emmeline brings 
                  innovative eco-friendly approaches to luxury couture. Her vision drives our 
                  zero-waste production philosophy.
                </p>
              </div>
              
              <div className="border-l-4 border-earthy pl-6">
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2">Shan Mahtani</h3>
                <p className="text-soft-black/80">
                  Shan's expertise in cultural preservation and artisan partnerships ensures 
                  authentic Indonesian craftsmanship in every piece. She leads our ethical 
                  sourcing initiatives across Southeast Asia.
                </p>
              </div>
            </div>
            
            <div className="bg-cream/50 p-6 rounded-lg">
              <blockquote className="text-charcoal italic text-lg">
                "We believe fashion should be a force for good. Every dress we create supports 
                traditional artisans while proving that luxury and sustainability can coexist beautifully."
              </blockquote>
              <cite className="text-earthy font-medium mt-4 block">- Emmeline & Shan, Co-Founders</cite>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="space-y-4 max-w-md">
              <img 
                src={foundersImage} 
                alt="Emmeline Hart and Shan Mahtani, Co-founders of Hartani" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="text-center">
                <h4 className="font-playfair text-lg font-semibold text-charcoal">Emmeline Hart & Shan Mahtani</h4>
                <p className="text-soft-black/70">Co-founders & Design Directors</p>
                <p className="text-soft-black/60 text-sm mt-2">Asia's youngest fashion entrepreneurs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
