"use client";

import { motion } from "framer-motion";
import { Instagram, Settings, Sparkles } from "lucide-react";

export const StepsSection = () => {
  const steps = [
    {
      num: "01",
      title: "Connect Account",
      description: "Link your Instagram, WhatsApp, or Facebook Messenger in one click.",
      icon: Instagram,
    },
    {
      num: "02",
      title: "Provide Knowledge",
      description: "Upload your FAQs, product links, and shipping policies. Noosto learns instantly.",
      icon: Settings,
    },
    {
      num: "03",
      title: "Watch it Sell",
      description: "Turn on the autopilot and watch Noosto convert DMs into paid orders 24/7.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Decorative gradient lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mx-auto mb-6 text-sm font-medium border border-primary/20"
          >
            Setup in 5 minutes
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            From overwhelmed to automated.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-zinc-800 via-primary/30 to-zinc-800" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-2xl font-bold text-primary mb-8 relative z-10 shadow-xl">
                {step.num}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-[280px]">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
