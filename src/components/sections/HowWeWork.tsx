"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, ArrowRight } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: Search,
    title: "Consult",
    desc: "We analyze your business goals and industry specific needs.",
    duration: "2-3 days",
    deliverable: "Strategy Roadmap",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
  },
  {
    icon: PenTool,
    title: "Design",
    desc: "Crafting a premium UI that resonates with your customers.",
    duration: "3-5 days",
    deliverable: "Visual Prototype",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000",
  },
  {
    icon: Code2,
    title: "Develop",
    desc: "Engineered with speed, security, and scalability in mind.",
    duration: "1-2 weeks",
    deliverable: "Staging URL",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070",
  },
  {
    icon: Rocket,
    title: "Deploy",
    desc: "Final optimization and seamless global launch.",
    duration: "1-2 days",
    deliverable: "Live Launch",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072",
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute inset-0 bg-grid opacity-10 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-semibold text-gray-900 mb-8 tracking-tighter"
          >
            How We <span className="text-gradient">Build It</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            A streamlined approach from initial concept to a fully operational digital asset.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-8 bottom-8 w-px bg-gray-200 md:-translate-x-1/2 z-0" />

          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-white rounded-full border border-gray-200 flex items-center justify-center -translate-x-1/2 z-10 shadow-sm">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <step.icon size={20} />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-24" : "md:pl-24"
                }`}>
                  <div className="card-premium p-10 bg-white group hover:-translate-y-2 transition-transform duration-500">
                    <div className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">
                      Step 0{i + 1}
                    </div>
                    <h3 className="text-3xl text-gray-900 mb-4 tracking-tight">{step.title}</h3>
                    <p className="text-gray-500 mb-8 leading-relaxed font-medium">
                      {step.desc}
                    </p>

                    <div className="pt-6 border-t border-gray-100 flex items-center text-[10px] font-black text-gray-500 uppercase tracking-widest">
                      <span className="w-8 h-1 bg-blue-200 rounded-full mr-3" />
                      Result: <span className="text-gray-900 ml-2">{step.deliverable}</span>
                    </div>
                  </div>
                </div>

                {/* Image Section */}
                <div className={`hidden md:block w-1/2 perspective-1000 ${
                  i % 2 === 0 ? "pl-24" : "pr-24"
                }`}>
                  <div className="relative">
                    {/* Glowing Blur Background */}
                    <motion.div 
                      animate={{ opacity: [0.4, 0.8, 0.4], scale: [1.05, 1.15, 1.05] }}
                      transition={{ duration: 4 + (i * 0.5), repeat: Infinity, ease: "easeInOut" }}
                      className={`absolute inset-0 rounded-[3rem] blur-3xl -z-10 ${i % 2 === 0 ? "bg-blue-600/20" : "bg-indigo-600/20"}`} 
                    />
                    
                    <div 
                      className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden drop-shadow-[0_40px_80px_rgba(37,99,235,0.2)] ring-1 ring-white/50 group cursor-pointer"
                    >
                      <Image src={step.image} alt={step.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      
                      {/* Interactive Overlay */}
                      <div className="absolute inset-0 bg-blue-900/30 opacity-100 group-hover:opacity-0 transition-opacity duration-700 mix-blend-multiply" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
