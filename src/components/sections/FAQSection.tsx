"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How is Noosto different from other feedback tools?",
    answer: "Most tools force you into their workflow. Noosto connects to the tools you already use (Slack, Zendesk, Intercom) and automatically categorizes feedback using AI, so you spend zero time triaging."
  },
  {
    question: "Do I need developers to set it up?",
    answer: "Not at all. Our integrations with Slack, Intercom, and Zendesk take just 2 clicks to set up. You can be capturing feedback in less than 5 minutes."
  },
  {
    question: "Can I try it before paying?",
    answer: "Yes, we offer a 14-day free trial on all plans with full access to all features so you can experience the value before committing."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "You can easily export all your feedback and user data to CSV at any time, even after your subscription ends."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the product and billing.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-border rounded-xl bg-card overflow-hidden transition-all duration-200"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-200 shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
