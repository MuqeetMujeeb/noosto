"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      id: "tier-starter",
      href: "#",
      priceMonthly: "$29",
      description: "Everything you need to get started with basic analytics.",
      features: [
        "Up to 5 team members",
        "Basic analytics dashboard",
        "24/7 email support",
        "1GB storage",
      ],
      mostPopular: false,
    },
    {
      name: "Pro",
      id: "tier-pro",
      href: "#",
      priceMonthly: "$79",
      description: "Advanced analytics and team management for growing teams.",
      features: [
        "Up to 20 team members",
        "Advanced analytics & reporting",
        "Priority email & chat support",
        "10GB storage",
        "Custom integrations",
        "API access",
      ],
      mostPopular: true,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "#",
      priceMonthly: "Custom",
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited team members",
        "Custom analytics dashboards",
        "24/7 dedicated phone support",
        "Unlimited storage",
        "Advanced security & compliance",
        "Custom AI models",
      ],
      mostPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            No hidden fees. No surprises. Choose the perfect plan for your business.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl backdrop-blur-sm border ${
                tier.mostPopular
                  ? "bg-primary/5 border-primary shadow-2xl shadow-primary/20 scale-105 z-10"
                  : "bg-card/50 border-white/10"
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{tier.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-extrabold text-foreground">{tier.priceMonthly}</span>
                {tier.priceMonthly !== "Custom" && <span className="text-muted-foreground">/mo</span>}
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle2 className={`h-5 w-5 shrink-0 ${tier.mostPopular ? 'text-primary' : 'text-primary/70'}`} />
                    <span className="ml-3 text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className={`w-full py-3 px-6 rounded-full font-medium text-center transition-all duration-300 ${
                  tier.mostPopular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40"
                    : "bg-white/10 text-foreground hover:bg-white/20 border border-white/10"
                }`}
              >
                Get started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
