import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import { FloatingBubbles } from './FloatingBubbles';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      <FloatingBubbles />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          Noosto 2.0 is now live
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl mx-auto text-foreground">
          Customer feedback made simple.
        </h1>
        
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Collect, organize, and act on user feedback in one place. Stop guessing what your users want and start building what they need.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/start"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
          >
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <Link
            href="#demo"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all"
          >
            <Play className="w-4 h-4" />
            Watch Demo
          </Link>
        </div>
        <p className="mt-6 text-xs tracking-wide text-muted-foreground uppercase font-medium">
          No credit card required • 14-day free trial
        </p>
      </div>
    </section>
  );
}
