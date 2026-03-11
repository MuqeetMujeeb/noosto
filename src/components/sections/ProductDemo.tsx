"use client";

import { motion } from "framer-motion";

export function ProductDemo() {
  return (
    <section id="demo" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl aspect-video"
        >
          {/* Mock Browser Header */}
          <div className="absolute top-0 inset-x-0 h-12 bg-muted/50 border-b border-border flex items-center px-4 gap-2 z-20">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="mx-auto bg-background border border-border rounded-md px-3 py-1 text-xs text-muted-foreground w-1/3 text-center truncate shadow-sm">
              app.noosto.com
            </div>
          </div>
          
          {/* Mock Video Content */}
          <div className="w-full h-full pt-12 bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center relative">
            <div className="text-center z-10">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 backdrop-blur-md cursor-pointer hover:bg-primary/20 hover:scale-105 transition-all outline outline-1 outline-primary/20 shadow-xl">
                <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-muted-foreground font-medium text-lg">See Noosto in action</p>
            </div>

            {/* Decorative background grid */}
            <div 
              className="absolute inset-x-0 bottom-0 top-12 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle at center, var(--color-foreground) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
