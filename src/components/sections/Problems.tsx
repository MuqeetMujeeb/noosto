"use client";

import { motion } from "framer-motion";
import { FileWarning, BrainCircuit, Users } from "lucide-react";

const problems = [
  {
    icon: <FileWarning className="w-6 h-6 text-red-500" />,
    title: "Scattered everywhere",
    description: "Feedback lives in Slack, email, Intercom, and sales calls. Important requests slip through the cracks daily."
  },
  {
    icon: <BrainCircuit className="w-6 h-6 text-amber-500" />,
    title: "No prioritization",
    description: "Your loudest users dictate the roadmap. You spend hours manually sorting spreadsheets instead of building."
  },
  {
    icon: <Users className="w-6 h-6 text-slate-500" />,
    title: "Users feel unheard",
    description: "When users request features, they go into a black hole. Churn increases as they wonder if you even care."
  }
];

export const Problems = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            The old way of tracking feedback is broken.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Product teams spend 40% of their time just managing requests. It doesn't have to be this way.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl bg-muted/40 border border-border/50 hover:border-white/20 hover:shadow-[0_0_30px_rgba(131,58,180,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center shadow-sm">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
