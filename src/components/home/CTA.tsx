"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Dynamic Grid Background Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-primary/30 blur-[100px] animate-pulse pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 rounded-full bg-blue-500/20 blur-[100px] animate-pulse pointer-events-none mix-blend-screen" style={{ animationDelay: '2s' }}/>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2.5rem] overflow-hidden"
        >
          {/* Glassmorphic Container for CTA */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 z-0" />
          
          <div className="relative z-10 px-8 py-16 md:py-20 md:px-16 text-center lg:flex lg:items-center lg:justify-between lg:text-left">
            <div className="lg:pr-8">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Ready to boost your productivity?</span>
                <span className="block text-2xl sm:text-3xl text-foreground/80 font-medium">Join thousands of teams already using our platform.</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl lg:max-w-none mx-auto">
                Stop wasting time on manual processes. Automate your workflows and focus on what truly matters to your business growth.
              </p>
            </div>
            
            <div className="mt-10 lg:mt-0 flex flex-col sm:flex-row gap-4 justify-center lg:shrink-0">
              <div className="inline-flex">
                <a
                  href="#"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-background bg-foreground rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
                  <span className="relative flex items-center gap-2">
                    Start your free trial
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
              <div className="inline-flex">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-sm transition-all hover:border-white/20"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
          
          {/* Decorative Corner Accents inside CTA */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent opacity-50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
