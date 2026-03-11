"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Link as LinkIcon, Package, Database } from "lucide-react";

const AI_EXCHANGES = [
  {
    user: "Does this run small? Im usually a M",
    bot: "Our hoodies are true to size! A Medium should fit you perfectly.",
  },
  {
    user: "Are there any discounts available right now?",
    bot: "Yes! Use code WELCOME10 at checkout for 10% off your entire order today.",
  },
  {
    user: "Do you ship to Canada? How long does it take?",
    bot: "We do! Shipping typically takes 5-7 business days via standard international shipping.",
  },
  {
    user: "Is the black out of stock?",
    bot: "The black is currently sold out, but we are restocking next Tuesday!",
  }
];

const LiveAutoReplyFeed = () => {
  const [messages, setMessages] = useState<{ id: number; text: string; sender: 'user' | 'bot' }[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let index = 0;
    let isActive = true;
    let messageId = 0;

    const runSequence = async () => {
      await new Promise(r => setTimeout(r, 800));
      
      while (isActive) {
        const userMsg = AI_EXCHANGES[index].user;
        setMessages(prev => [...prev.slice(-2), { id: messageId++, text: userMsg, sender: 'user' }]);

        await new Promise(r => setTimeout(r, 600));
        if (!isActive) break;

        setIsTyping(true);
        await new Promise(r => setTimeout(r, 1200));
        if (!isActive) break;

        setIsTyping(false);
        const botMsg = AI_EXCHANGES[index].bot;
        setMessages(prev => [...prev.slice(-2), { id: messageId++, text: botMsg, sender: 'bot' }]);

        await new Promise(r => setTimeout(r, 3500));
        if (!isActive) break;
        
        index = (index + 1) % AI_EXCHANGES.length;
      }
    };

    runSequence();
    return () => { isActive = false; };
  }, []);

  return (
    <div 
      className="absolute -bottom-4 -right-4 w-[110%] md:w-[95%] h-[320px] rounded-tl-2xl overflow-hidden pointer-events-none" 
      style={{ maskImage: 'linear-gradient(to bottom, transparent, black 25%, black)' }}
    >
      {/* Live Now Tag */}
      <div className="absolute top-4 right-8 bg-zinc-900/90 border border-white/10 rounded-full px-2.5 py-1 flex items-center gap-2 backdrop-blur-md z-20 shadow-lg">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[9px] uppercase font-bold text-emerald-500 tracking-wider">Live</span>
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end gap-3 z-10 w-full pr-8">
        <AnimatePresence mode="popLayout" initial={false}>
          {messages.map((msg) => (
            <motion.div
              layout
              key={msg.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`max-w-[85%] rounded-2xl p-3 text-sm shadow-md ${
                msg.sender === 'user' 
                  ? 'bg-zinc-800/80 border border-white/10 text-white ml-auto rounded-tr-sm' 
                  : 'bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white mr-auto rounded-tl-sm relative overflow-hidden group border border-white/10'
              }`}
            >
              {msg.sender === 'bot' && (
                <motion.div 
                  animate={{ left: ["-100%", "200%"] }} 
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear", delay: 1 }} 
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 z-0" 
                />
              )}
              {msg.sender === 'user' ? (
                <span className="relative z-10">{msg.text}</span>
              ) : (
                <div className="flex gap-2 items-start relative z-10">
                  <Bot className="w-4 h-4 shrink-0 mt-0.5 text-white/90" />
                  <p className="leading-snug text-white font-medium drop-shadow-sm">{msg.text}</p>
                </div>
              )}
            </motion.div>
          ))}
          {isTyping && (
             <motion.div
               layout
               initial={{ opacity: 0, y: 20, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: -20, scale: 0.95 }}
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
               className="bg-zinc-800/80 border border-white/10 rounded-2xl rounded-tl-sm p-3 mr-auto w-16 h-10 flex items-center justify-center gap-1 shadow-md"
             >
               <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
               <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
               <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-1.5 h-1.5 bg-zinc-400 rounded-full" />
             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const features = [
  {
    title: "AI Autoreply",
    description: "Understands natural language. It doesn't just match keywords, it understands context and nuance to provide helpful answers instantly.",
    icon: Bot,
    className: "md:col-span-2 md:row-span-2 bg-[#0c0c0e] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md",
    visual: <LiveAutoReplyFeed />
  },
  {
    title: "Instant Checkout Links",
    description: "Send payment links directly in the chat when they're ready to buy.",
    icon: LinkIcon,
    className: "md:col-span-1 md:row-span-1 bg-[#0c0c0e] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md",
    visual: (
      <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-zinc-800/80 to-zinc-900 border border-white/5 relative overflow-hidden">
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
          <button className="px-3 py-1.5 bg-[#fd1d1d] hover:bg-[#fd1d1d]/90 text-white text-xs font-semibold rounded-lg shadow-[0_0_15px_rgba(253,29,29,0.3)] hover:shadow-[0_0_20px_rgba(253,29,29,0.5)] transition-all animate-pulse">
            Pay Now
          </button>
        </div>
      </div>
    )
  },
  {
    title: "Auto Order Tracking",
    description: "Customers ask 'where is my order?', Noosto looks it up and replies automatically.",
    icon: Package,
    className: "md:col-span-1 md:row-span-1 bg-[#0c0c0e] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md",
    visual: (
      <div className="mt-6 flex flex-col gap-3">
        <div className="flex justify-between items-end mb-1">
          <div>
            <div className="text-white text-sm font-medium mb-1">Order #8829</div>
            <div className="text-[#fcb045] text-xs font-medium tracking-wide uppercase">Out for delivery</div>
          </div>
          <Package className="w-5 h-5 text-zinc-500" />
        </div>
        <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
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
  {
    title: "CRM Auto-Sync",
    description: "Every DM conversation is automatically logged to your built-in CRM.",
    icon: Database,
    className: "md:col-span-2 md:row-span-1 bg-[#0c0c0e] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-md",
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
