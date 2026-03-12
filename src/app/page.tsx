import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogosSection } from "@/components/sections/LogosSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 scroll-smooth flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <LogosSection />
        <ProblemSection />
        <FeaturesSection />
        <StepsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
