import logo from "@/assets/logo-croydonpat.png";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <img src={logo} alt="Croydon PAT Logo" className="h-18 md:h-[5.25rem]" />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection("areas")} className="text-foreground hover:text-primary transition-colors font-medium">
              Areas Covered
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:07845468030" className="flex items-center gap-2 text-secondary font-semibold">
              <Phone className="w-4 h-4" />
              07845 468030
            </a>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
              Services
            </button>
            <button onClick={() => scrollToSection("areas")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
              Areas Covered
            </button>
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
              About Us
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors font-medium text-left">
              Contact
            </button>
            <a href="tel:07845468030" className="flex items-center gap-2 text-secondary font-semibold">
              <Phone className="w-4 h-4" />
              07845 468030
            </a>
            <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full">
              Get a Quote
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
