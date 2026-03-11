"use client";

import { motion } from "framer-motion";

export function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center px-4 py-3 bg-muted rounded-2xl rounded-tl-sm w-fit">
      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-2 h-2 rounded-full bg-muted-foreground/50" />
      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 rounded-full bg-muted-foreground/50" />
      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 rounded-full bg-muted-foreground/50" />
    </div>
  );
}

export function ChatSequence() {
  return (
    <div className="flex flex-col gap-4 max-w-md mx-auto pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1 }}
        className="self-end bg-primary text-primary-foreground px-5 py-3 rounded-2xl rounded-tr-sm text-sm shadow-sm"
      >
        I love the new dashboard, but can we export to CSV?
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 1 }}
        className="self-start"
      >
        <div className="bg-card border border-border px-5 py-4 rounded-2xl rounded-tl-sm shadow-sm space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-[10px] text-primary font-bold">N</span>
            </div>
            <span className="text-xs font-medium text-muted-foreground">Noosto AI</span>
          </div>
          <p className="text-sm text-foreground">
            I've logged this as "<span className="font-medium text-primary">CSV Export Request</span>" and linked it to your account.
          </p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 3 }}
        className="self-start mt-2"
      >
        <div className="bg-green-500/10 border border-green-500/20 px-4 py-3 rounded-2xl rounded-tl-sm text-sm text-green-700 dark:text-green-400 font-medium">
           ✨ 3 weeks later: Added to the latest release!
        </div>
      </motion.div>
    </div>
  );
}

export function SolutionSection() {
  return (
    <section className="py-24 bg-background overflow-hidden relative border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              The Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-foreground">
              Turn conversations into clarity.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Noosto connects to where your users already are. We automatically capture, categorize, and organize feedback so you can focus on building.
            </p>
            <ul className="space-y-4">
              {[
                "Connects with Intercom, Slack, and Zendesk",
                "AI-powered categorization and clustering",
                "Automated follow-ups when shipped",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-foreground font-medium">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 rounded-3xl -z-10 transform translate-x-4 translate-y-4 blur-xl" />
            <div className="bg-card border border-border hover:border-white/20 hover:shadow-[0_0_40px_rgba(131,58,180,0.15)] transition-all duration-500 rounded-3xl p-8 shadow-xl">
              <ChatSequence />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
