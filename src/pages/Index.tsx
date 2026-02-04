import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyFree } from "@/components/landing/WhyFree";
import { Slide } from "@/components/landing/Slide";
import { About } from "@/components/landing/About";
import { CTA } from "@/components/landing/CTA";
import { Trade } from "@/components/landing/Trade";
import { Side } from "@/components/landing/Side";
import Card from "@/components/landing/Card";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
       
        <Hero />
        <WhyFree />
        <Slide />
        <Testimonials />
        <About />
        <CTA />
        <Trade />
        <Side />
         <Card />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
