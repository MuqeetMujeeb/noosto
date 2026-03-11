"use client";

import { motion } from "framer-motion";
import { Sparkles, Map, Network, Bell } from "lucide-react";

export const Features = () => {
  return (
    <section className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
          >
            Everything you need. Nothing you don't.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Purpose-built tools to turn customer feedback into an actionable, prioritized roadmap.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Card 1: AI Categorization (Spans 2 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-1 rounded-3xl bg-card border border-border/50 p-8 flex flex-col relative overflow-hidden group shadow-sm hover:shadow-md transition-all"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors" />
            <Sparkles className="w-8 h-8 text-indigo-500 mb-6" />
            <h3 className="text-2xl font-bold mb-3 z-10">AI Categorization</h3>
            <p className="text-muted-foreground z-10 max-w-sm text-lg">Automatically cluster similar feedback, detect sentiment, and categorize requests perfectly without manual tagging.</p>
          </motion.div>

          {/* Card 2: Public Roadmap */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-2 rounded-3xl bg-card border border-border/50 p-8 flex flex-col relative overflow-hidden group shadow-sm hover:shadow-md transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors" />
            <Map className="w-8 h-8 text-emerald-500 mb-6" />
            <h3 className="text-2xl font-bold mb-3 z-10">Public Roadmap</h3>
            <p className="text-muted-foreground z-10 mb-8 max-w-sm text-lg">Close the loop with users. Share what's planned, show progress, and build trust instantly.</p>
            
            {/* Mock visual */}
            <div className="mt-auto rounded-xl border border-border bg-muted/30 p-4 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <div className="h-2 rounded bg-muted-foreground/20 w-1/2" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="h-2 rounded bg-muted-foreground/20 w-3/4" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Integrations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-card border border-border/50 p-8 flex flex-col shadow-sm hover:shadow-md transition-all"
          >
            <Network className="w-8 h-8 text-blue-500 mb-6" />
            <h3 className="text-xl font-bold mb-3">Integrations</h3>
            <p className="text-muted-foreground text-base">Connect seamlessly with Slack, Intercom, Zendesk, and GitHub to gather feedback where it happens.</p>
          </motion.div>

          {/* Card 4: Automated Follow-ups */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-card border border-border/50 p-8 flex flex-col shadow-sm hover:shadow-md transition-all relative overflow-hidden"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity z-0" />
            <Bell className="w-8 h-8 text-amber-500 mb-6 z-10" />
            <h3 className="text-xl font-bold mb-3 z-10">Automated Follow-ups</h3>
            <p className="text-muted-foreground text-base z-10">Automatically notify users when their requested feature is finally shipped.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
