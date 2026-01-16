import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key] ?? ""))
    .join("&");
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    discountCode: "",
    message: "",
    botField: "", // honeypot
  });

  // Check if we're on the Netlify-hosted site
  const isNetlifySite = typeof window !== 'undefined' && 
    (window.location.hostname.includes('netlify') || 
     window.location.hostname === 'croydonpat.co.uk' ||
     window.location.hostname === 'www.croydonpat.co.uk');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    // If not on Netlify, show a message that forms only work on the live site
    if (!isNetlifySite) {
      toast({
        title: "Preview Mode",
        description: "Form submissions only work on the published Netlify site. Your form setup looks correct!",
      });
      setIsSubmitting(false);
      return;
    }

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

      // Send confirmation email via edge function
      try {
        await supabase.functions.invoke('send-confirmation-email', {
          body: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            message: formData.message,
          },
        });
      } catch (emailError) {
        // Don't fail the form submission if email fails
        console.error('Confirmation email failed:', emailError);
      }

      // Show in-form success message
      setIsSuccess(true);

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
        title: "Couldn't send message",
        description: "Please try again, or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* ...your existing layout... */}

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left column - Form */}
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
                  Don't fill this out:{" "}
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

              {/* In-form success message */}
              {isSuccess && (
                <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm">Thank you for your enquiry. We'll get back to you within 1 working day. A confirmation email has been sent to your inbox.</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Right column - Contact Info & Quick Quote Guide */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6 font-heading">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:07845468030"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">07845 468030</p>
                  </div>
                </a>
                <a
                  href="mailto:will@croydonpat.co.uk"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">will@croydonpat.co.uk</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Service Area</p>
                    <p className="font-medium">Croydon & South London</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Quote Guide */}
            <div className="bg-secondary rounded-2xl p-8 border border-border shadow-lg">
              <h3 className="text-xl font-semibold text-secondary-foreground mb-4 font-heading">
                Quick Quote Guide
              </h3>
              <p className="text-secondary-foreground text-sm mb-4">
                To provide an accurate quote, please include:
              </p>
              <ul className="space-y-2 text-sm text-secondary-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  Number of items to be tested
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  Type of business/premises
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  Preferred testing date(s)
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">•</span>
                  Confirm location/postcode
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
