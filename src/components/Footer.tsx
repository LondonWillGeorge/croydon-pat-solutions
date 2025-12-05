import logo from "@/assets/logo-croydonpat.png";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
            <h4 className="font-semibold text-secondary-foreground mb-4 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("areas")?.scrollIntoView({ behavior: "smooth" })} className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Areas Covered
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  About PAT Testing
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4 font-heading">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:02012345678" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                020 1234 5678
              </a>
              <a href="mailto:info@croydonpat.co.uk" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@croydonpat.co.uk
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © {currentYear} Croydon PAT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
