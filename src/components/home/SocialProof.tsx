'use client';

import { motion } from 'framer-motion';

const logos = [
  { name: 'Company 1', url: 'https://cdn.worldvectorlogo.com/logos/acme-corp.svg' },
  { name: 'Company 2', url: 'https://cdn.worldvectorlogo.com/logos/globex.svg' },
  { name: 'Company 3', url: 'https://cdn.worldvectorlogo.com/logos/soylent-corp.svg' },
  { name: 'Company 4', url: 'https://cdn.worldvectorlogo.com/logos/initech-2.svg' },
  { name: 'Company 5', url: 'https://cdn.worldvectorlogo.com/logos/umbrella-corporation.svg' },
];

export function SocialProof() {
  return (
    <section className="py-24 bg-surface-50 border-y border-surface-200 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm font-medium text-surface-500 uppercase tracking-widest mb-12">
          Trusted by innovative teams worldwide
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-center items-center h-12 w-32 relative"
            >
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="max-h-full max-w-full object-contain filter brightness-0 invert-[0.3]" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
