"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[#833ab4]/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fd1d1d]/20 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-[3rem] p-12 md:p-20 shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            Stop typing. <br />
            <span className="text-instagram">Start selling.</span>
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto lead-relaxed">
            Stop replying manually. Automate your DMs and turn every message into a potential sale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-full font-medium text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(253,29,29,0.3)] hover:shadow-[0_0_30px_rgba(253,29,29,0.5)] hover:scale-105 active:scale-95">
              Join Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm text-zinc-500 mt-4 sm:hidden">No credit card required</p>
          </div>
          <p className="hidden sm:block text-sm text-zinc-500 mt-6">14-day free trial. No credit card required.</p>
        </motion.div>
      </div>
    </section>
  );
};
