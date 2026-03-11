import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Preview } from "@/components/sections/Preview";
import { Problems } from "@/components/sections/Problems";
import { Features } from "@/components/sections/Features";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 scroll-smooth flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <Preview />
        <Problems />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
