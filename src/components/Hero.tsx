import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Clock } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpeg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="py-20 md:py-32 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      {/* White fade at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 font-heading animate-fade-up">
            Professional PAT Testing in <span className="text-primary">Croydon</span> & Surrounding Areas
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-up animation-delay-100">
            Keep your workplace safe and compliant with our expert Portable Appliance Testing services. Fast, reliable, and competitively priced.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up animation-delay-200">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 animate-pulse-glow"
            >
              Get a Free Quote
            </Button>
            <Button 
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6"
            >
              Our Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up animation-delay-300">
            <div className="flex items-center justify-center gap-3 bg-primary-foreground/10 rounded-lg p-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-primary-foreground font-medium">Fully Insured</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-primary-foreground/10 rounded-lg p-4">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <span className="text-primary-foreground font-medium">Certified Engineers</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-primary-foreground/10 rounded-lg p-4">
              <Clock className="w-6 h-6 text-primary" />
              <span className="text-primary-foreground font-medium">Fast Turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
