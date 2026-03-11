"use client";

import { motion } from "framer-motion";

export const Preview = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="rounded-xl border border-border/50 bg-background shadow-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10"
        >
          {/* Browser Header */}
          <div className="h-12 border-b border-border/50 bg-muted/50 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-amber-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <div className="mx-auto bg-background border border-border/40 rounded-md text-xs text-muted-foreground/60 px-24 py-1 flex items-center justify-center font-mono">
              app.noosto.com
            </div>
          </div>

          {/* Browser Content - 3 columns */}
          <div className="flex flex-col md:flex-row h-auto md:h-[500px] overflow-hidden bg-background">
            
            {/* Column 1: Feedback Inbox */}
            <div className="flex-1 border-r border-border/50 p-6">
              <h3 className="text-sm font-semibold mb-4 text-foreground/80 flex items-center justify-between">
                <span>Feedback Inbox</span>
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs">12 New</span>
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Dark mode setting", tags: ["UI", "Requested"], time: "2h ago" },
                  { title: "CSV Export missing", tags: ["Bug", "High"], time: "4h ago" },
                  { title: "SSO Login", tags: ["Auth", "Enterprise"], time: "1d ago" }
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border/40 bg-muted/20 hover:bg-muted/40 transition-colors cursor-pointer">
                    <p className="text-sm font-medium mb-2">{item.title}</p>
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-muted-foreground bg-muted hover:text-foreground px-1.5 py-0.5 rounded">{tag}</span>
                        ))}
                      </div>
                      <span className="text-muted-foreground/60">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Roadmap */}
            <div className="flex-1 border-r border-border/50 p-6 bg-muted/5">
              <h3 className="text-sm font-semibold mb-4 text-foreground/80 flex items-center justify-between">
                <span>Roadmap</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">In Progress</h4>
                  <div className="p-3 rounded-lg border-l-2 border-indigo-500 bg-background shadow-sm border border-border/40">
                    <p className="text-sm font-medium">SOC2 Compliance</p>
                    <div className="mt-2 w-full bg-muted rounded-full h-1.5 flex">
                      <div className="bg-indigo-500 w-2/3 rounded-full" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Up Next</h4>
                  <div className="p-3 rounded-lg bg-background shadow-sm border border-border/40 text-sm font-medium">
                    Slack Integration V2
                  </div>
                  <div className="p-3 mt-2 rounded-lg bg-background shadow-sm border border-border/40 text-sm font-medium">
                    CSV Imports
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Changelog */}
            <div className="flex-1 p-6">
              <h3 className="text-sm font-semibold mb-4 text-foreground/80 flex items-center justify-between">
                <span>Changelog</span>
              </h3>
              <div className="relative border-l border-border/50 ml-2 space-y-6">
                {[
                  { version: "v2.1.0", date: "Today", desc: "Added advanced filtering to inbox." },
                  { version: "v2.0.4", date: "Mar 10", desc: "Fixed issue with email notifications." },
                  { version: "v2.0.0", date: "Mar 1", desc: "Major UI overhaul and speed improvements." }
                ].map((item, i) => (
                  <div key={i} className="pl-4 relative">
                    <div className="w-2 h-2 rounded-full bg-primary absolute -left-[4.5px] top-1.5 ring-4 ring-background" />
                    <p className="text-sm font-semibold flex items-center gap-2">
                      {item.version}
                      <span className="text-xs font-normal text-muted-foreground">{item.date}</span>
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
