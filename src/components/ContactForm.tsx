import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key] ?? ""))
    .join("&");
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    discountCode: "",
    message: "",
    botField: "", // honeypot
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        "form-name": "contact",
        "bot-field": formData.botField,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        discountCode: formData.discountCode,
        message: formData.message,
      };

      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });

      if (!res.ok) {
        throw new Error(`Form submit failed: ${res.status}`);
      }

      toast({
        title: "Message sent!",
        description: "Thanks — we’ll get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        discountCode: "",
        message: "",
        botField: "",
      });
    } catch (err) {
      toast({
        title: "Couldn’t send message",
        description: "Please try again, or email us directly.",
        variant: "destructive",
      });
      // optionally console.log(err)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* ...your existing layout... */}

        <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
          <h3 className="text-xl font-semibold text-foreground mb-6 font-heading">
            Send us a message
          </h3>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Required for Netlify forms */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot (hidden from humans) */}
            <p className="hidden">
              <label>
                Don’t fill this out:{" "}
                <input
                  name="bot-field"
                  value={formData.botField}
                  onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                />
              </label>
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Smith"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@company.com"
                  className="bg-background"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="020 1234 5678"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Company Name
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Your Company Ltd"
                  className="bg-background"
                />
              </div>
            </div>

            <div>
              <label htmlFor="discountCode" className="block text-sm font-medium text-foreground mb-2">
                Discount Code
              </label>
              <Input
                id="discountCode"
                name="discountCode"
                value={formData.discountCode}
                onChange={(e) => setFormData({ ...formData, discountCode: e.target.value })}
                placeholder="If you have one, enter your discount code"
                className="bg-background"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                How can we help? *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your PAT testing requirements..."
                rows={5}
                className="bg-background resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>

        {/* ...rest of your right-hand info card... */}
      </div>
    </section>
  );
};

export default ContactForm;
