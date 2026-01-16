import { MapPin } from "lucide-react";

const areas = [
  "Croydon",
  "Sutton", 
  "Norbury",
  "Coulsdon",
  "Banstead",
  "Caterham",
  "Bromley",
  "Purley",
  "Thornton Heath",
  "Mitcham",
  "Wallington",
  "Addington"
];

const AreasServed = () => {
  return (
    <section id="areas" className="py-20 bg-muted scroll-mt-32 md:scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading">
            Areas We Cover
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Providing professional PAT testing services across South London and Surrey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                {area}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-muted-foreground">
          Don't see your area? <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="text-primary font-semibold hover:underline">Contact us</button> – we may still be able to help!
        </p>
      </div>
    </section>
  );
};

export default AreasServed;
