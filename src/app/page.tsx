import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { Features } from "@/components/home/Features";
import Pricing from "@/components/home/Pricing";
import CTA from "@/components/home/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
