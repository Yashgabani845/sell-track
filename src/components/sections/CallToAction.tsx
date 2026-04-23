"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="py-24 bg-white px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 -z-10" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-white rounded-[4rem] p-12 md:p-24 text-center text-gray-900 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(37,99,235,0.15)] border border-gray-200"
      >
        <Image 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
          alt="CTA Background"
          fill
          className="object-cover opacity-60 mix-blend-multiply pointer-events-none"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-semibold mb-8 leading-[1.1] tracking-tighter text-gray-900"
          >
            Transform Your <span className="text-blue-600">Digital Presence</span> Today
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 mb-14 leading-relaxed font-medium max-w-3xl mx-auto"
          >
            Stop losing customers to outdated systems. Get a custom-built platform that drives real growth and automates your workflow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <Link
              href="/contact"
              className="btn-gradient h-20 px-16 rounded-[2.5rem] text-2xl flex items-center space-x-4 shadow-2xl group"
            >
              <span>Get Started Now</span>
              <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </Link>

            <div className="mt-20 flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-gray-500">
              <div className="flex items-center space-x-4">
                <CheckCircle2 size={24} className="text-blue-600" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle2 size={24} className="text-blue-600" />
                <span>No Hidden Costs</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle2 size={24} className="text-blue-600" />
                <span>7-Day Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
