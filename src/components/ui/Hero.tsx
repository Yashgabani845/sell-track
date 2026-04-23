"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9] as any,
    },
  }),
};

export default function Hero() {
  const titleWords = "Scale Your Local Business with SellTrack".split(" ");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Patterns */}
      {/* Background Patterns & Glows */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" />
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[150px] -z-10 -translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content Left */}
          <div>
            <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tighter mb-10 leading-[0.9]">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block mr-4 ${
                    word === "SellTrack" ? "text-gradient" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-500 mb-12 leading-relaxed max-w-xl font-medium"
            >
              Scale your business with SellTrack. We build high-converting digital platforms 
              tailored for your specific industry needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
            >

              <Link
                href="/demos"
                className="w-full sm:w-auto h-16 px-8 rounded-[1.5rem] font-bold text-gray-900 bg-white border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-gray-300 transition-all flex items-center justify-center space-x-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Play size={18} fill="currentColor" />
                </div>
                <span>View Live Demos</span>
              </Link>
            </motion.div>


          </div>

          {/* Visual Right - High Quality Platform Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative lg:ml-10"
          >
            <div className="relative z-10 w-full max-w-xl mx-auto perspective-1000">
              <motion.div 
                animate={{ 
                  y: [-15, 15, -15],
                  rotateZ: [-1, 1, -1],
                  rotateY: [-5, 5, -5]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative aspect-[9/16] md:aspect-[3/4] w-full transform-gpu"
              >
                <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-[100px] -z-10 scale-90" />
                <Image 
                  src="/hero-mobile-new.png"
                  alt="Mobile App Dashboard"
                  fill
                  className="object-contain"
                  style={{ filter: "drop-shadow(0 40px 60px rgba(37,99,235,0.2)) drop-shadow(0 20px 30px rgba(0,0,0,0.1))" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <span className="text-[9px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4">Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border border-gray-300 rounded-full flex justify-center p-1.5"
        >
          <div className="w-1 h-2.5 bg-blue-600 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
