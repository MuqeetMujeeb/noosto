"use client";

import { motion } from "framer-motion";
import { Bot, Link as LinkIcon, Package, Database } from "lucide-react";

const features = [
  {
    title: "AI Autoreply",
    description: "Understands natural language. It doesn't just match keywords, it understands context and nuance to provide helpful answers instantly.",
    icon: Bot,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-md",
    visual: (
      <div className="mt-6 flex flex-col gap-3">
        <div className="bg-zinc-800 p-3 rounded-lg text-sm text-zinc-300 ml-auto max-w-[80%]">Does this run small? Im usually a M</div>
        <div className="bg-gradient-to-tr from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 text-[#white] p-3 rounded-lg text-sm mr-auto max-w-[80%] border border-[#fd1d1d]/30 flex items-start gap-2">
          <Bot className="w-4 h-4 mt-0.5 shrink-0 text-[#fd1d1d]" />
          <p>Our hoodies are true to size! A Medium should fit you perfectly, but if you want an oversized look, size up to a L.</p>
        </div>
      </div>
    )
  },
  {
    title: "Instant Checkout Links",
    description: "Send payment links directly in the chat when they're ready to buy.",
    icon: LinkIcon,
    className: "md:col-span-1 md:row-span-1 bg-white/[0.02] backdrop-blur-md",
  },
  {
    title: "Auto Order Tracking",
    description: "Customers ask 'where is my order?', Noosto looks it up and replies automatically.",
    icon: Package,
    className: "md:col-span-1 md:row-span-1 bg-white/[0.02] backdrop-blur-md",
  },
  {
    title: "CRM Auto-Sync",
    description: "Every DM conversation is automatically logged to your built-in CRM.",
    icon: Database,
    className: "md:col-span-2 md:row-span-1 bg-white/[0.02] backdrop-blur-md",
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Everything you need,<br />
            <span className="text-muted-foreground">in one automated inbox.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:grid-rows-3 min-h-[600px]">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all overflow-hidden relative group ${feature.className}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 text-[#fd1d1d] flex items-center justify-center mb-6">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>

                {feature.visual && (
                  <div className="mt-8 flex-1">
                    {feature.visual}
                  </div>
                )}
              </div>

              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#fd1d1d]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
