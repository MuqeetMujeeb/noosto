'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 top-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-lighten" />
      </div>
      <div className="absolute top-32 left-0 -translate-x-1/3">
        <div className="w-72 h-72 bg-blue-500/20 rounded-full blur-3xl opacity-50 mix-blend-multiply dark:mix-blend-lighten" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span>SaaSKit 2.0 is now live</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-foreground"
          >
            Build your SaaS <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
              faster than ever
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            The ultimate starting point for developers and founders. Everything you need to launch your next big idea in days, not months.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105"
            >
              Start Building Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border-2 border-input bg-background/50 backdrop-blur-sm px-8 text-base font-semibold shadow-sm transition-all hover:bg-accent hover:text-accent-foreground"
            >
              See How It Works
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground font-medium"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 md:mt-24 relative max-w-5xl mx-auto"
        >
          <div className="rounded-xl border border-border/50 bg-background/50 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-border/50">
            {/* Browser Header */}
            <div className="bg-muted/30 border-b border-border/50 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex-1" />
              <div className="bg-background/80 rounded-md text-xs text-muted-foreground px-3 py-1 font-mono flex items-center gap-2 border shadow-sm">
                <span>🔒</span> saaskit.io
              </div>
              <div className="flex-1" />
            </div>
            {/* Mockup Content */}
            <div className="relative aspect-[16/9] md:aspect-[2/1] w-full bg-background overflow-hidden flex">
               {/* Sidebar */}
               <div className="w-64 border-r bg-muted/10 hidden md:flex flex-col p-4 gap-2">
                 <div className="mb-6 px-2 flex items-center gap-2">
                   <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                     <div className="w-4 h-4 bg-primary rounded-sm" />
                   </div>
                   <div className="h-4 w-24 bg-muted-foreground/20 rounded" />
                 </div>
                 {[1, 2, 3, 4, 5].map((i) => (
                   <div key={i} className="h-9 rounded-md bg-muted/30 flex items-center px-3 gap-3">
                     <div className="w-4 h-4 rounded bg-muted-foreground/30" />
                     <div className="h-3 flex-1 bg-muted-foreground/20 rounded max-w-[120px]" />
                   </div>
                 ))}
                 <div className="mt-auto h-12 rounded-lg bg-muted/30 flex items-center px-3 gap-3">
                   <div className="w-8 h-8 rounded-full bg-muted-foreground/30" />
                   <div className="space-y-1.5 flex-1">
                     <div className="h-2.5 w-20 bg-muted-foreground/30 rounded" />
                     <div className="h-2 w-24 bg-muted-foreground/20 rounded" />
                   </div>
                 </div>
               </div>
               {/* Main content */}
               <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 bg-muted/5">
                 <div className="flex items-center justify-between">
                   <div className="space-y-2">
                     <div className="h-6 w-48 bg-foreground/80 rounded-md" />
                     <div className="h-4 w-64 bg-muted-foreground/40 rounded-md hidden sm:block" />
                   </div>
                   <div className="h-10 w-32 bg-primary rounded-full shadow-sm" />
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                   {[1, 2, 3].map((i) => (
                     <div key={i} className="h-32 rounded-xl border bg-background p-5 flex flex-col justify-between shadow-sm">
                       <div className="flex justify-between items-start">
                         <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                           <div className="w-5 h-5 bg-primary/40 rounded-sm" />
                         </div>
                         <div className="text-xs font-semibold text-green-500 bg-green-500/10 px-2 py-1 rounded-full">+12%</div>
                       </div>
                       <div className="space-y-1.5">
                         <div className="h-4 w-20 bg-muted-foreground/40 rounded" />
                         <div className="h-6 w-32 bg-foreground/80 rounded" />
                       </div>
                     </div>
                   ))}
                 </div>
                 <div className="flex-1 rounded-xl border bg-background p-5 shadow-sm overflow-hidden flex flex-col">
                   <div className="h-5 w-32 bg-muted-foreground/40 rounded mb-4" />
                   <div className="flex-1 w-full bg-gradient-to-t from-primary/5 via-primary/2 to-transparent rounded-lg border border-dashed flex items-end justify-between px-4 pb-0 pt-8 gap-2">
                     {[40, 70, 45, 90, 65, 85, 55, 100, 75, 45, 60, 80].map((height, i) => (
                        <div key={i} className="w-full bg-primary/20 rounded-t-sm relative group overflow-hidden" style={{ height: `${height}%` }}>
                          <div className="absolute bottom-0 left-0 w-full bg-primary/40 transition-all duration-500" style={{ height: `${height * 0.7}%` }} />
                        </div>
                     ))}
                   </div>
                 </div>
               </div>
            </div>
          </div>
          <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 to-blue-600/30 rounded-[1.5rem] blur-3xl opacity-50 -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
