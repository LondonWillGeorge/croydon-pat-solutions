import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Clock } from "lucide-react";
import heroBackground from "@/assets/Will_PAT_meter_photo_adobe_adjusted.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left side - Text content on plain background */}
        <div className="flex-1 flex items-center py-16 lg:py-20 px-4 lg:px-12">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-secondary mb-6 font-heading animate-fade-up">
              Professional PAT Testing in <span className="text-primary">Croydon</span> and Surrounding Areas
            </h1>
            <p className="text-lg md:text-xl text-secondary/80 mb-8 animate-fade-up animation-delay-100">
              Keep your workplace safe and compliant with our expert Portable Appliance Testing services. Fast, reliable, and competitively priced.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up animation-delay-200">
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
                className="border-2 border-secondary/30 text-secondary hover:bg-secondary/10 font-semibold text-lg px-8 py-6"
              >
                Our Services
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-up animation-delay-300">
              <div className="flex items-center gap-3 bg-secondary/10 rounded-lg p-3">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-secondary font-medium text-sm">Fully Insured</span>
              </div>
              <div className="flex items-center gap-3 bg-secondary/10 rounded-lg p-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-secondary font-medium text-sm">Certified Tester</span>
              </div>
              <div className="flex items-center gap-3 bg-secondary/10 rounded-lg p-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-secondary font-medium text-sm">Fast Turnaround</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex-1 relative min-h-[300px] lg:min-h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBackground})` }}
          />
          {/* Warm tint overlay */}
          <div className="absolute inset-0 bg-amber-900/20" />
          {/* Left edge fade to blend with text section */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent lg:w-32" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
