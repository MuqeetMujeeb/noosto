'use client';

import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Sparkles, LineChart, Globe } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-primary-500" />,
    title: 'Lightning Fast',
    description: 'Optimized performance that loads instantly, keeping your users engaged.'
  },
  {
    icon: <Shield className="h-6 w-6 text-primary-500" />,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance built-in from day one.'
  },
  {
    icon: <Layers className="h-6 w-6 text-primary-500" />,
    title: 'Seamless Integrations',
    description: 'Connect with your favorite tools via our powerful API ecosystem.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary-500" />,
    title: 'AI-Powered Insights',
    description: 'Leverage machine learning to understand your data better.'
  },
  {
    icon: <LineChart className="h-6 w-6 text-primary-500" />,
    title: 'Advanced Analytics',
    description: 'Real-time dashboards providing actionable metrics.'
  },
  {
    icon: <Globe className="h-6 w-6 text-primary-500" />,
    title: 'Global Scale',
    description: 'Deploy anywhere with our edge-optimized infrastructure.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } }
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-surface-950 mb-6">
            Everything you need to scale
          </h2>
          <p className="text-xl text-surface-600">
            Powerful features designed for modern teams. Built with performance and security in mind.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="p-8 rounded-2xl bg-surface-50 hover:bg-surface-100 transition-colors border border-surface-200"
            >
              <div className="h-12 w-12 rounded-xl bg-primary-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-surface-900 mb-3">{feature.title}</h3>
              <p className="text-surface-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
