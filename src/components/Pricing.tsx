import { Building2, Home, Clock, Wrench, Plug } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted scroll-mt-32 md:scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 font-heading">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            At your business premises - parking included! All tests include easy-read PDF results emailed to you within 24 hours.
          </p>
        </div>

        <div className="mb-8 bg-card rounded-xl p-6 border border-border">
          <h3 className="font-semibold text-foreground mb-3">All tests include:</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              Unique asset numbers and descriptions of each item
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              For any failed appliances, reason for failure
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              Replacement of fuse or entire plug for failed appliance, when this will be adequate to make it fully pass the PAT test (see replacement charge/item below)
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Business Pricing */}
          <Card className="border-border shadow-lg">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-heading">Shops, Offices, Warehouses</CardTitle>
              <p className="text-sm text-muted-foreground">Musicians and Mobile DJs</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Up to 25 items</span>
                  <span className="font-bold text-primary text-lg">£60</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Extra items</span>
                  <span className="font-bold text-primary">£1.50/item</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground"><em>Or</em> up to 100 items</span>
                  <span className="font-bold text-primary text-lg">£115</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground">100+ items</span>
                  <span className="font-semibold text-muted-foreground">Ask for quote</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Landlord Pricing */}
          <Card className="border-border shadow-lg">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-heading">Landlords</CardTitle>
              <p className="text-sm text-muted-foreground">Any type of property</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Call-out charge</span>
                  <span className="font-bold text-primary text-lg">£50</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Per item</span>
                  <span className="font-bold text-primary">+ £1/item</span>
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  e.g. 30 items = £50 + £30 = <strong className="text-foreground">£80</strong>
                </p>
              </div>
              <p className="text-xs text-muted-foreground italic">
                NB: If any plug for a built-in appliance cannot be accessed, unfortunately the appliance cannot be tested.
              </p>
            </CardContent>
          </Card>

          {/* Drop-off Service */}
          <Card className="border-border shadow-lg">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl font-heading">While-U-Wait Drop Off</CardTitle>
              <p className="text-sm text-muted-foreground">At my office in Croydon</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                Express Service - drop off at arranged time, tested while you wait
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Up to 10 items</span>
                  <span className="font-bold text-primary text-lg">£40</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground">Extra items</span>
                  <span className="font-bold text-primary">+ £2/item</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-border shadow-lg">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg font-heading">Changing Plug or Fuse</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-3">
                <span className="text-foreground">Per item</span>
                <span className="font-bold text-primary text-lg">£1</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Only if this can change a Fail to a Pass. Most likely, your appliance failure rate will be low or possibly even zero, but when needed, changing a plug is more economical than buying a new appliance!
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-lg">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Plug className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg font-heading">Wall Socket Testing</CardTitle>
              <p className="text-sm text-muted-foreground">Optional - not part of PAT testing requirements</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Confirm your wall sockets are safe and correctly wired.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-foreground">Up to 6 sockets</span>
                  <span className="font-bold text-primary">FREE</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-foreground">Additional sockets</span>
                  <span className="font-bold text-primary">£1 / 2 sockets</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
