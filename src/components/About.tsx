import { Award, ThumbsUp, PoundSterling, Shield } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const features = [
  {
    icon: Award,
    title: "Professionally Certified",
    description: "Click to view - I have been trained by a former member of UK Standards Committee.",
    hasPdf: true,
    pdfPath: "/documents/certification.pdf",
    dialogTitle: "Professional Certification",
  },
  {
    icon: Shield,
    title: "Professionally Insured",
    description: "Click to view - Comprehensive public liability insurance for your peace of mind.",
    hasPdf: true,
    pdfPath: "/documents/insurance.pdf",
    dialogTitle: "Insurance Certificate",
  },
  {
    icon: ThumbsUp,
    title: "No Hidden Costs",
    description: "Transparent pricing. You only pay for what you need."
  },
  {
    icon: PoundSterling,
    title: "Competitive Rates",
    description: "Volume discounts available for larger quantities. Get in touch for a custom quote."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 font-heading">
              Why Choose Croydon PAT?
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              We're a local PAT testing company dedicated to helping businesses in Croydon and the surrounding areas stay safe and compliant. With years of experience and a commitment to excellent service, we make electrical safety testing simple and stress-free.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              PAT testing is a legal requirement for many businesses under the Electricity at Work Regulations 1989. Regular testing protects your employees, customers, and your business from electrical hazards.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                feature.hasPdf ? (
                  <Dialog key={index}>
                    <DialogTrigger asChild>
                      <button className="flex gap-4 text-left hover:bg-accent/50 rounded-lg p-2 -m-2 transition-colors cursor-pointer">
                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1 underline decoration-primary decoration-2 underline-offset-2">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh]">
                      <DialogHeader>
                        <DialogTitle>{feature.dialogTitle}</DialogTitle>
                      </DialogHeader>
                      <div className="w-full h-[70vh] mt-4">
                        <iframe
                          src={feature.pdfPath}
                          className="w-full h-full border-0 rounded-lg"
                          title={feature.dialogTitle}
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>

          <div className="bg-secondary rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-secondary-foreground mb-6 font-heading">
              What is PAT Testing?
            </h3>
            <div className="space-y-4 text-secondary-foreground/90">
              <p>
                <strong>Portable Appliance Testing (PAT)</strong> is the examination of electrical appliances and equipment to ensure they are safe to use.
              </p>
              <p>
                The test includes a visual inspection and electrical tests using specialist PAT testing equipment. Appliances that pass receive a dated label, and you'll receive a full report of all items tested.
              </p>
              <p>
                Common items that require PAT testing include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>Computers and monitors</li>
                <li>Kettles and microwaves</li>
                <li>Extension leads</li>
                <li>Printers and photocopiers</li>
                <li>Power tools</li>
                <li>Any portable electrical device</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
