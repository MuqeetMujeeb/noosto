"use client";

import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle, Instagram, Globe, Zap } from "lucide-react";

const logos = [
  { name: "Shopify", icon: ShoppingBag, color: "#96bf48" },
  { name: "Meta", icon: Globe, color: "#0668E1" },
  { name: "Instagram", icon: Instagram, color: "#E4405F" },
  { name: "WhatsApp", icon: MessageCircle, color: "#25D366" },
  { name: "Zapier", icon: Zap, color: "#FF4A00" },
];

export const LogosSection = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-zinc-500 text-sm font-medium mb-8 uppercase tracking-widest">
          Designed for social commerce
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {logos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 group"
            >
              <logo.icon className="w-6 h-6 transition-colors duration-300" style={{ color: logo.color }} />
              <span className="text-xl font-bold text-zinc-400 group-hover:text-white transition-colors">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
