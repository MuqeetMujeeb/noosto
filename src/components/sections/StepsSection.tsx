"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Instagram, Settings, Sparkles, LucideIcon } from "lucide-react";

interface Step {
  num: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const StepItem = ({ step, index }: { step: Step; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center 50%"]
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex flex-col items-center text-center pt-16 md:pt-24"
    >
      {/* Large Background Number */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center flex justify-center text-[8rem] md:text-[12rem] lg:text-[14rem] font-black leading-none select-none -z-10 tracking-tighter">
        <span className="text-zinc-900 absolute top-0">{step.num}</span>
        <motion.div 
          className="absolute top-0 overflow-hidden" 
          style={{ height }}
        >
          <motion.span 
            className="block text-transparent bg-clip-text bg-gradient-to-b from-[#833ab4]/40 via-[#fd1d1d]/30 to-[#fcb045]/20"
            style={{ opacity }}
          >
            {step.num}
          </motion.span>
        </motion.div>
      </div>

      <div className="w-16 h-16 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] relative z-10 transition-transform duration-300 hover:scale-110 hover:border-white/20 hover:shadow-[0_0_30px_rgba(131,58,180,0.3)]">
        <step.icon className="w-8 h-8 text-white opacity-90" />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-4 relative z-10">{step.title}</h3>
      <p className="text-zinc-400 text-lg leading-relaxed max-w-[280px] relative z-10">{step.description}</p>
    </motion.div>
  );
};

export const StepsSection = () => {
  const steps: Step[] = [
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
    <section id="how-it-works" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative gradient lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#fd1d1d]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-zinc-300 w-fit mx-auto mb-6 text-sm font-medium border border-white/10"
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
            From overwhelmed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]">automated.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-20 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[8.5rem] lg:top-[10.5rem] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-zinc-900 via-[#fd1d1d]/30 to-zinc-900 z-0" />

          {steps.map((step, i) => (
            <StepItem key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
