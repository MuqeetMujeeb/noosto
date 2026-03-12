"use client";

import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

export const ProblemSection = () => {
  const [feedItems, setFeedItems] = useState([
    { id: 1, text: "How much is this?", status: "pending" },
    { id: 2, text: "Do you ship to UK?", status: "pending" },
    { id: 3, text: "Link in bio is broken", status: "pending" },
    { id: 4, text: "I want to buy", status: "pending" },
  ]);

  useEffect(() => {
    // Simulate live feed automation
    const interval = setInterval(() => {
      setFeedItems(current => {
        const nextPending = current.findIndex(item => item.status === "pending");
        if (nextPending === -1) {
          // Reset after a delay
          return current.map(item => ({ ...item, status: "pending" }));
        }
        const updated = [...current];
        updated[nextPending] = { ...updated[nextPending], status: "replied" };
        return updated;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (
    <section id="problem" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Social selling is broken.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Running a business mainly through Instagram or WhatsApp means your growth is bottlenecked by how fast you can type.
          </motion.p>
        </div>

        {/* VS Comparison Card */}
        <div className="relative mx-auto rounded-3xl bg-[#0c0c0e] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] overflow-hidden">
          {/* Subtle glow behind the card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 blur-3xl rounded-full opacity-50 block md:hidden" />

          <div className="grid md:grid-cols-2 relative z-10">
            {/* The VS Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-black border border-white/20 text-white font-bold flex items-center justify-center shadow-[0_0_30px_rgba(253,29,29,0.5)] z-20">
                VS
              </div>
            </div>

            {/* Left: The Old Way */}
            <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-2xl font-semibold text-white">The Old Way</h3>
              </div>

              <div className="space-y-4">
                <div className="relative mb-12">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="p-4 rounded-xl bg-zinc-900 border border-white/5 flex flex-col gap-2 relative z-10 shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">Incoming DM</span>
                      <span className="text-xs text-red-400">Waiting 2 hrs...</span>
                    </div>
                    <p className="text-sm text-zinc-400">&quot;How much is this?&quot;</p>
                    <div className="h-8 rounded flex items-center justify-center text-xs font-medium bg-red-400/10 text-red-500 border border-red-500/20">
                      Lost Sale
                    </div>
                  </motion.div>

                  {/* Background dummy card */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 right-4 left-4 p-4 rounded-xl bg-zinc-900/50 border border-white/5 flex flex-col gap-2 -z-10 scale-95 opacity-50 blur-[1px]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">Incoming DM</span>
                      <span className="text-xs text-red-400/50">Waiting 5 hrs...</span>
                    </div>
                    <p className="text-sm text-zinc-400/50">&quot;Do you ship to UK?&quot;</p>
                  </motion.div>
                </div>

                <ul className="space-y-3 pt-6 border-t border-white/5">
                  {["Manually copy-pasting answers", "Ghosting customers while asleep", "Not enough time to run ads", "Sales lost to faster competitors"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-zinc-400">
                      <XCircle className="w-4 h-4 text-red-500/50 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: The Noosto Way (Live Automation Feed) */}
            <div className="p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center p-[1px]">
                  <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">The Noosto Way</h3>
              </div>

              {/* Live Automation Feed */}
              <div className="space-y-3 relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {feedItems.map((item, i) => (
                  <motion.div
                    layout
                    key={item.id}
                    className={`relative z-10 p-4 rounded-xl border flex items-center justify-between gap-4 transition-all duration-300 ${item.status === 'replied'
                      ? 'bg-green-500/10 border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]'
                      : 'bg-white/5 border-white/5'
                      }`}
                  >
                    <div className="flex items-center gap-3 truncate">
                      <MessageCircle className={`w-4 h-4 flex-shrink-0 ${item.status === 'replied' ? 'text-green-500' : 'text-zinc-500'}`} />
                      <p className={`text-sm truncate ${item.status === 'replied' ? 'text-green-100' : 'text-zinc-400'}`}>"{item.text}"</p>
                    </div>
                    {item.status === 'replied' ? (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-green-500 text-black flex-shrink-0"
                      >
                        Replied in 1s
                      </motion.span>
                    ) : (
                      <span className="px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-white/10 text-zinc-500 flex-shrink-0">
                        Typing...
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
