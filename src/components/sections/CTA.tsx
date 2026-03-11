"use client";

import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
        >
          Stop ignoring your users.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground mb-10"
        >
          Join 500+ product teams building better software with Noosto. Start your 14-day free trial today.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full h-14 pl-6 pr-36 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm text-base"
              required
            />
            <button 
              type="submit" 
              className="absolute right-1.5 top-1.5 bottom-1.5 bg-primary text-primary-foreground font-medium px-6 rounded-full hover:bg-primary/90 transition-colors shadow-sm"
            >
              Join Waitlist
            </button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
