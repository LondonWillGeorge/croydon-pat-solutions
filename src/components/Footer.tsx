import logo from "@/assets/logo-croydonpat.png";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Croydon PAT Logo" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-secondary-foreground/80 text-sm">
              Professional PAT testing services for businesses in Croydon and South London. Keeping your workplace safe and compliant.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4 font-heading">Contact Me</h4>
            <div className="space-y-3">
              <a href="tel:07845468030" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                07845 468030
              </a>
              <a href="mailto:will@croydonpat.co.uk" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                will@croydonpat.co.uk
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {currentYear} MagicMyData Ltd trading as Croydon PAT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
