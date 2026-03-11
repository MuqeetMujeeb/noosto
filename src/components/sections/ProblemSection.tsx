"use client";

import { motion } from "framer-motion";
import { MessageSquareWarning, TrendingDown, Moon } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      title: "Drowning in DMs",
      description: "Answering the same 'how much?' and 'is this in stock?' questions 50 times a day limits how much you can sell.",
      icon: MessageSquareWarning,
    },
    {
      title: "Lost Sales & Ghosting",
      description: "Customers who don't get a reply within 5 minutes buy from a competitor instead.",
      icon: TrendingDown,
    },
    {
      title: "No Sleep, No Scale",
      description: "You're manually replying to customers at 2AM. You can't run ads because you can't handle the influx of messages.",
      icon: Moon,
    },
  ];

  return (
    <section id="problem" className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
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

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary/50 transition-colors backdrop-blur-md"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{problem.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
