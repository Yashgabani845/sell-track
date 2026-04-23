"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "A typical solution is delivered within 10-14 days. This includes consultation, design, development, and testing phases."
  },
  {
    q: "What is the cost for a basic website?",
    a: "Our pricing starts from fair market rates for high-quality custom work. Each project is quoted based on specific industry needs and features."
  },
  {
    q: "Do you provide ongoing support?",
    a: "Yes, we provide 24/7 technical support and maintenance to ensure your system runs smoothly at all times."
  },
  {
    q: "Can I update the website myself?",
    a: "Absolutely! We build an easy-to-use admin dashboard for all our solutions, allowing you to manage bookings, inventory, and content."
  },
  {
    q: "Do you handle domain and hosting?",
    a: "Yes, we provide end-to-end services including domain registration, secure high-speed hosting, and SSL certificates."
  },
  {
    q: "What if I need changes after launch?",
    a: "We offer post-launch support and can implement updates or new features as your business grows."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 -z-10" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-semibold text-gray-900 mb-8 tracking-tighter"
          >
            Questions? <span className="text-gradient">Answers.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-medium"
          >
            Everything you need to know to get started with SellTrack.
          </motion.p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-[2.5rem] overflow-hidden transition-all duration-500 border ${
                openIndex === i ? "border-blue-400 bg-white shadow-2xl shadow-blue-200/10" : "border-gray-200 bg-gray-50 hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-10 text-left flex items-center justify-between group"
              >
                <span className={`text-xl md:text-2xl font-normal transition-colors tracking-tight ${openIndex === i ? "text-gray-900" : "text-gray-500 group-hover:text-gray-900"}`}>
                  {faq.q}
                </span>
                <div className={`p-3 rounded-full transition-all duration-300 ${openIndex === i ? "bg-blue-50 text-blue-600 rotate-180" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"}`}>
                  <ChevronDown size={24} />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
                  >
                    <div className="px-10 pb-10 text-gray-500 border-t border-gray-200 pt-8">
                      <p className="leading-relaxed text-lg font-medium">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
