"use client";

import { motion } from "framer-motion";
import { PlayCircle, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50 -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left: Copy */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/70">
              Customer feedback
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-indigo-700 dark:from-indigo-400 dark:to-indigo-300">
              made simple.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            Collect, organize, and act on user feedback in one place. Stop guessing what your users want and start building what they need.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <button className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all shadow-lg flex items-center justify-center w-full sm:w-auto">
              Join Waitlist
            </button>
            <button className="h-12 px-8 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 flex items-center gap-2 transition-all w-full sm:w-auto justify-center">
              <PlayCircle className="w-5 h-5" />
              Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Right: Abstract animation visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 w-full max-w-md relative"
        >
          {/* Decorative floating elements container */}
          <div className="bg-card border border-border/50 rounded-2xl shadow-xl w-full p-6 space-y-4">
            
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="flex justify-end"
            >
              <div className="bg-secondary/80 backdrop-blur-sm rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] text-sm font-medium shadow-sm border border-border/30">
                Can we export to CSV?
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex justify-start"
            >
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                  <div className="w-4 h-4 bg-indigo-500 rounded-full animate-pulse" />
                </div>
                <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] text-sm shadow-sm border border-border/30">
                  Logged as <span className="font-semibold text-indigo-600 dark:text-indigo-400">CSV Export Request</span>.
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.8, type: "spring" }}
              className="flex justify-center pt-2"
            >
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" /> Added to Roadmap!
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
