import { Card, CardContent } from "@/components/ui/card";
import { Zap, Building2, ClipboardCheck, FileText, Wrench, Users } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "PAT Testing",
    description: "Comprehensive portable appliance testing for all your electrical equipment. We test and certify kettles, computers, power tools, and more."
  },
  {
    icon: Building2,
    title: "Commercial Testing",
    description: "Tailored PAT testing solutions for offices, shops, restaurants, and commercial premises. Flexible scheduling to minimize disruption."
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Certificates",
    description: "Receive detailed certificates and pass/fail labels for all tested appliances. Full documentation for your records and insurance."
  },
  {
    icon: FileText,
    title: "Asset Register",
    description: "Complete inventory management with unique asset IDs. Track all your electrical equipment and maintain compliance records."
  },
  {
    icon: Wrench,
    title: "Minor Repairs",
    description: "On-site minor repairs including plug and fuse replacements. Get your equipment back in service quickly and safely."
  },
  {
    icon: Users,
    title: "Landlord Services",
    description: "Specialized PAT testing for landlords and letting agents. Ensure your rental properties meet safety standards."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading">
            Our PAT Testing Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We offer comprehensive electrical safety testing to keep your business compliant and your employees safe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-border bg-card group">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-heading">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
