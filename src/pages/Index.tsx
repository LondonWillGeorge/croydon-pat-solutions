import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AreasServed from "@/components/AreasServed";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <AreasServed />
        <About />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
