import { Instagram, Facebook } from "lucide-react";
import logoImage from "@assets/WhatsApp Image 2025-08-10 at 15.43.45_1754815443023.jpeg";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-6">
            <img 
              src={logoImage} 
              alt="Hartani Logo" 
              className="h-12 w-auto"
            />
            <p className="text-cream/80 leading-relaxed">
              Sustainable luxury couture by Asia's youngest fashion designers. 
              Ethical, beautiful, and made just for you.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cream/60 hover:text-earthy transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-cream/60 hover:text-earthy transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-cream/60 hover:text-earthy transition-colors duration-200">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.73 2.025a2.01 2.01 0 0 1 2.265 0l2.005 1.338 2.005-1.338a2.01 2.01 0 0 1 2.265 0l1.338 2.005 1.338-2.005a2.01 2.01 0 0 1 2.265 0l.669 1.338L22 4.025v16l-1.13-.562-.669 1.337a2.01 2.01 0 0 1-2.265 0l-1.338-2.005-1.338 2.005a2.01 2.01 0 0 1-2.265 0l-2.005-1.338-2.005 1.338a2.01 2.01 0 0 1-2.265 0L6.665 18.8 5.327 20.8a2.01 2.01 0 0 1-2.265 0L2 20.025v-16l1.062.537.669-1.337a2.01 2.01 0 0 1 2.265 0l1.338 2.005 1.396-2.005z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-playfair text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-3 text-cream/80">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-earthy transition-colors duration-200">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('collection')} className="hover:text-earthy transition-colors duration-200">
                  Collection
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-earthy transition-colors duration-200">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sustainability')} className="hover:text-earthy transition-colors duration-200">
                  Sustainability
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-earthy transition-colors duration-200">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-playfair text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-cream/80">
              <p>
                Email: <a href="mailto:shanmc510@gmail.com" className="text-earthy hover:underline">shanmc510@gmail.com</a>
              </p>
              <p>Production Time: 2-3 weeks</p>
              <p>Shipping: Carbon-neutral worldwide</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/60 text-sm">
              © 2024 Hartani. All rights reserved. Made with 💚 for the planet.
            </p>
            <div className="flex space-x-6 text-cream/60 text-sm">
              <a href="#" className="hover:text-earthy transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-earthy transition-colors duration-200">Terms of Service</a>
              <a href="#" className="hover:text-earthy transition-colors duration-200">Size Guide</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
