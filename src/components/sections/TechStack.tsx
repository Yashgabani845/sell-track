"use client";

import { motion } from "framer-motion";

const tech = [
  "React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", 
  "Express", "MongoDB", "PostgreSQL", "AWS", "Vercel", 
  "Firebase", "Cloudflare"
];

export default function TechStack() {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-xs text-gray-200 uppercase tracking-[0.4em]">
          Our Core Technology Stack
        </h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex space-x-20 whitespace-nowrap items-center"
        >
          {[...tech, ...tech].map((name, i) => (
            <div
              key={i}
              className="text-4xl md:text-6xl font-semibold text-white/5 hover:text-blue-700 transition-all duration-500 cursor-default select-none hover:scale-110 px-4"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
