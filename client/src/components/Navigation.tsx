import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-sm z-50 border-b border-earthy/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="handwritten-logo text-2xl md:text-3xl text-charcoal cursor-pointer" onClick={() => scrollToSection('home')}>
              Hartani
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-soft-black hover:text-earthy transition-colors duration-200 font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('collection')} className="text-soft-black hover:text-earthy transition-colors duration-200 font-medium">
                Collection
              </button>
              <button onClick={() => scrollToSection('about')} className="text-soft-black hover:text-earthy transition-colors duration-200 font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('sustainability')} className="text-soft-black hover:text-earthy transition-colors duration-200 font-medium">
                Sustainability
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-soft-black hover:text-earthy transition-colors duration-200 font-medium">
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-charcoal hover:text-earthy"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-cream border-t border-earthy/20">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-soft-black hover:text-earthy font-medium w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('collection')} className="block px-3 py-2 text-soft-black hover:text-earthy font-medium w-full text-left">
                Collection
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-soft-black hover:text-earthy font-medium w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('sustainability')} className="block px-3 py-2 text-soft-black hover:text-earthy font-medium w-full text-left">
                Sustainability
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-soft-black hover:text-earthy font-medium w-full text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
