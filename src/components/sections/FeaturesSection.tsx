"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Link as LinkIcon, Package, Database, Users, CheckCircle } from "lucide-react";

const LiveAutoReplyFeed = () => {
  const [messages, setMessages] = useState<{ id: number; text: string; sender: 'user' | 'bot' }[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let isActive = true;
    let sequenceIndex = 0;

    const chatSequences = [
      { q: "Do you ship to Canada?", a: "We do! Shipping takes 5-7 days via standard international." },
      { q: "Is the Blue Hoodie in stock?", a: "Yes! We have 3 left in Size XL. Want a link to order?" },
      { q: "Does the M run small?", a: "It's true to size! If you prefer an oversized fit, we suggest an L." },
      { q: "Got any discount codes?", a: "Use code HUSTLE10 at checkout for 10% off your first order! 🚀" }
    ];

    const runSequence = async () => {
      await new Promise(r => setTimeout(r, 1000));
      while (isActive) {
        const current = chatSequences[sequenceIndex];
        // User sends query
        setMessages(prev => [...prev.slice(-2), { id: Math.random(), text: current.q, sender: 'user' }]);
        await new Promise(r => setTimeout(r, 1200));
        if (!isActive) break;

        // Bot starts typing
        setIsTyping(true);
        await new Promise(r => setTimeout(r, 1500));
        if (!isActive) break;

        // Bot sends reply
        setIsTyping(false);
        setMessages(prev => [...prev.slice(-2), { id: Math.random(), text: current.a, sender: 'bot' }]);
        await new Promise(r => setTimeout(r, 4000));

        sequenceIndex = (sequenceIndex + 1) % chatSequences.length;
        if (!isActive) break;
      }
    };

    runSequence();
    return () => { isActive = false; };
  }, []);

  return (
    <div className="relative w-full h-[200px] mt-4 overflow-hidden flex flex-col justify-end">
      {/* Mask for fading out top messages */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-[#0c0c0e] via-transparent to-transparent h-12" />

      <div className="flex flex-col justify-end gap-3 p-1">
        <AnimatePresence mode="popLayout" initial={false}>
          {messages.map((msg) => (
            <motion.div
              layout
              key={msg.id}
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                mass: 1
              }}
              className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-lg ${msg.sender === 'user'
                ? 'bg-zinc-800/80 border border-white/10 text-white ml-auto rounded-tr-sm'
                : 'bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white mr-auto rounded-tl-sm border border-white/10'
                }`}
            >
              <div className="flex gap-2 items-start">
                {msg.sender === 'bot' && <Bot className="w-4 h-4 shrink-0 mt-0.5" />}
                <p className="leading-snug font-medium">{msg.text}</p>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              layout
              key="typing"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-zinc-800/80 border border-white/10 rounded-2xl rounded-tl-sm p-3 mr-auto w-16 h-10 flex items-center justify-center gap-1 shadow-md"
            >
              {[0, 0.2, 0.4].map((delay) => (
                <motion.div
                  key={delay}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8, delay }}
                  className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const SyncFeed = () => {
  const syncs = [
    { from: "Instagram", to: "Google Sheets" },
    { from: "WhatsApp", to: "Notion" },
    { from: "TikTok", to: "Shopify" }
  ];

  return (
    <div className="mt-8 space-y-3">
      {syncs.map((sync, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 + 0.3 }}
          className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1">
              <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10 overflow-hidden">
                <span className="text-[8px] font-bold">{sync.from[0]}</span>
              </div>
              <div className="w-6 h-6 rounded-full bg-zinc-700 flex items-center justify-center border border-white/10 overflow-hidden">
                <span className="text-[8px] font-bold">{sync.to[0]}</span>
              </div>
            </div>
            <span className="text-xs text-zinc-300 font-medium">{sync.from} → {sync.to}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-zinc-500">Synced</span>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const features = [
  {
    title: "AI Autoreply",
    description: "Our AI understands natural language. It doesn't just match keywords, it understands context and nuance to provide helpful answers instantly.",
    icon: Bot,
    gridClass: "md:col-span-2",
    visual: <LiveAutoReplyFeed />
  },
  {
    title: "Instant Checkout",
    description: "Send direct payment links instantly in any chat conversation.",
    icon: LinkIcon,
    gridClass: "md:col-span-1",
    visual: (
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-zinc-800/80 to-zinc-900 border border-white/5 relative overflow-hidden group-hover:border-white/10 transition-colors">
        <div className="flex justify-between items-center mb-4">
          <div className="w-8 h-5 bg-zinc-600/50 rounded-md" />
          <div className="w-10 h-6 bg-white/5 rounded-full flex space-x-[-10px]">
            <div className="w-6 h-6 rounded-full bg-[#fd1d1d]/60 mix-blend-screen" />
            <div className="w-6 h-6 rounded-full bg-[#fcb045]/60 mix-blend-screen" />
          </div>
        </div>
        <div className="text-zinc-500 font-mono text-sm mb-4">**** **** **** 4242</div>
        <div className="flex justify-between items-center">
          <div className="text-white font-medium">$49.00</div>
          <button className="px-3 py-1.5 bg-[#fd1d1d] text-white text-xs font-semibold rounded-lg shadow-[0_0_15px_rgba(253,29,29,0.3)] animate-pulse">
            Pay Now
          </button>
        </div>
      </div>
    )
  },
  {
    title: "CRM Auto-Sync",
    description: "Every conversation is automatically logged to your built-in CRM and favorite tools without lifting a finger.",
    icon: Database,
    gridClass: "md:col-span-2",
    visual: <SyncFeed />
  },
  {
    title: "Order Tracking",
    description: "Look up order statuses in real-time and reply with tracking links automatically.",
    icon: Package,
    gridClass: "md:col-span-1",
    visual: (
      <div className="mt-10 flex flex-col gap-3">
        <div className="flex justify-between items-end mb-1">
          <div>
            <div className="text-white text-sm font-medium mb-1">#8829 status</div>
            <div className="text-emerald-500 text-[10px] font-bold uppercase tracking-wider">In Transit</div>
          </div>
          <Package className="w-5 h-5 text-zinc-500" />
        </div>
        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#833ab4] to-[#fcb045]"
            initial={{ width: "0%" }}
            whileInView={{ width: "85%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          />
        </div>
      </div>
    )
  },
  // {
  //   title: "CRM Auto-Sync",
  //   description: "Every DM conversation is automatically logged to your built-in CRM.",
  //   icon: Database,
  //   className: "md:col-span-2 md:row-span-1 bg-[#0c0c0e] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md",
  // }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Everything you need,<br />
            <span className="text-zinc-500">in one automated inbox.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`flex flex-col h-full min-h-[400px] p-8 rounded-3xl bg-[#0c0c0e] border border-white/5 hover:border-white/10 transition-all overflow-hidden relative group ${feature.gridClass}`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#833ab4]/10 to-[#fcb045]/10 text-white flex items-center justify-center mb-6 border border-white/5 ring-4 ring-white/0 group-hover:ring-white/5 transition-all">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-[90%]">{feature.description}</p>

                {feature.visual && (
                  <div className="flex-1 flex flex-col justify-end">
                    {feature.visual}
                  </div>
                )}
              </div>

              {/* Card Glow */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="absolute -inset-[100%] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
