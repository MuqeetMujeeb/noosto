"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Send, Bot, RotateCcw } from "lucide-react";

const messages = [
  {
    id: 1,
    role: "customer",
    text: "Hi! Is the Blue hoodie still in stock?",
    delay: 1,
  },
  {
    id: 2,
    role: "bot",
    text: "Yes! 3 left in XL. Want to order one?",
    delay: 2.5,
  },
  {
    id: 3,
    role: "customer",
    text: "Yes please!",
    delay: 4,
  },
  {
    id: 4,
    role: "bot",
    text: "Great! Use this link to checkout: noosto.kr/pay 🚀",
    delay: 5.5,
  },
];

export const Hero = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    
    const runAnimation = () => {
      setVisibleMessages([]);
      setIsTyping(false);
      
      messages.forEach((msg) => {
        if (msg.role === "bot") {
          // Show typing indicator before bot message appears
          timeouts.push(
            setTimeout(() => {
              setIsTyping(true);
            }, (msg.delay - 1.5) * 1000)
          );
        }

        // Hide typing and show message
        timeouts.push(
          setTimeout(() => {
            if (msg.role === "bot") {
              setIsTyping(false);
            }
            setVisibleMessages((prev) => [...prev, msg.id]);
          }, msg.delay * 1000)
        );
      });
    };

    runAnimation();

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [key]);

  const replay = () => setKey(k => k + 1);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#833ab4]/15 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fd1d1d]/5 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mx-auto lg:mx-0 border border-primary/20 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Noosto Chat Automation
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Turn your DMs into a <span className="text-instagram">24/7 Sales Machine.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Stop losing sales to slow replies. Noosto automatically answers customer questions, sends payment links, and confirms orders—so you can focus on growing, not chatting.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-full font-medium text-lg hover:opacity-90 transition-all shadow-[0_0_20px_rgba(253,29,29,0.3)] hover:shadow-[0_0_30px_rgba(253,29,29,0.5)] hover:scale-105 active:scale-95">
                Start Selling Automatically
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-medium text-lg hover:bg-secondary/80 transition-all">
                See How It Works
              </button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-4 mt-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i + 10}`} alt="avatar" width={32} height={32} />
                  </div>
                ))}
              </div>
              <p>Trusted by 500+ social sellers</p>
            </div>
          </motion.div>

          {/* Phone Frame Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[320px] lg:max-w-[360px] perspective-1000"
          >
            {/* Phone Body */}
            <div className="relative rounded-[2.5rem] bg-background border-[8px] border-zinc-900 shadow-2xl overflow-hidden aspect-[9/19] flex flex-col">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                <div className="w-32 h-6 bg-zinc-900 rounded-b-3xl"></div>
              </div>

              {/* Chat Header */}
              <div className="bg-background/80 backdrop-blur-md pt-12 pb-4 px-6 border-b border-white/10 z-10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 flex items-center justify-center text-[#fd1d1d] border border-[#fd1d1d]/30">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">Noosto Store</h3>
                    <p className="text-xs text-white/60 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Online
                    </p>
                  </div>
                </div>
                <button 
                  onClick={replay}
                  className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                  title="Replay Animation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 flex flex-col justify-end gap-0 overflow-y-auto bg-background/50 relative hide-scrollbar pb-6">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    visibleMessages.includes(msg.id) && (
                      <motion.div
                        key={`msg-${key}-${msg.id}`}
                        layout
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className={`flex mb-4 ${msg.role === "customer" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                            msg.role === "customer"
                            ? "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-tr-sm"
                              : "bg-zinc-800 text-zinc-100 rounded-tl-sm border border-white/5"
                          }`}
                        >
                          {msg.role === "bot" && (
                            <div className="flex items-center gap-1.5 mb-1 opacity-70">
                              <Bot className="w-3 h-3" />
                              <span className="text-[10px] font-medium uppercase tracking-wider">Automated</span>
                            </div>
                          )}
                          {msg.text}
                          {msg.role === "bot" && msg.id === 4 && (
                            <div className="mt-2 p-2 bg-zinc-900 rounded-lg border border-white/10 flex items-center justify-center">
                              <span className="text-[#fcb045] font-medium">Pay $55.00</span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      key="typing-indicator"
                      layout
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="flex justify-start mb-4"
                    >
                      <div className="bg-zinc-800 rounded-2xl rounded-tl-sm px-4 py-3 border border-white/5 w-fit shadow-sm">
                        <div className="flex gap-1.5 items-center">
                          <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
                          />
                          <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            className="w-1.5 h-1.5 bg-zinc-400 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Chat Input */}
              <div className="p-3 bg-zinc-900/60 backdrop-blur-md border border-white/10 mx-2 mb-2 rounded-2xl flex items-center gap-2 relative z-10 bottom-0 shadow-lg">
                <div className="flex-1 bg-zinc-800/80 rounded-xl h-10 px-3 flex items-center border border-white/5">
                  <span className="text-zinc-500 text-xs">Message...</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-tr from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 rounded-xl flex items-center justify-center text-[#fd1d1d]">
                  <Send className="w-4 h-4 ml-0.5" />
                </div>
              </div>
            </div>
            
            {/* Decorative blurs behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#833ab4]/20 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
