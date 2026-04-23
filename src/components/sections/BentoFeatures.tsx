"use client";

import { motion } from "framer-motion";
import { Code2, Headset, ShieldCheck, Smartphone, LineChart, Zap } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Custom Development",
    desc: "Tailored to your specific workflows.",
    icon: Code2,
  },
  {
    id: 2,
    title: "24/7 Support",
    desc: "Always here for you.",
    icon: Headset,
  },
  {
    id: 3,
    title: "Bank-Level Security",
    desc: "Safe & Secure data.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Mobile-First",
    desc: "Responsive on all screens.",
    icon: Smartphone,
  },
  {
    id: 5,
    title: "Real-Time Analytics",
    desc: "Insights that drive growth.",
    icon: LineChart,
  },
];

export default function BentoFeatures() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 tracking-tight"
          >
            Built for <span className="text-gradient">Performance</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Everything you need to run your business efficiently, all in one place.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 h-auto md:h-[650px]">
          {/* Custom Dev - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-1 rounded-[3rem] bg-white p-12 flex flex-col justify-between overflow-hidden relative group border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-10 shadow-inner">
                <Code2 size={32} />
              </div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">Custom Software Development</h3>
              <p className="text-base md:text-lg text-gray-500 max-w-sm font-medium leading-relaxed">
                We build proprietary systems designed specifically for your industry. 
                No generic templates, just high-performance code.
              </p>
            </div>
            
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-50/50 to-transparent -z-10" />
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full blur-[100px] transition-colors" />
          </motion.div>

          {/* Support - Medium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 rounded-[3rem] bg-white p-12 flex flex-col justify-center border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-2xl text-gray-900 mb-4 tracking-tight">Secure & Scalable</h3>
            <p className="text-gray-500 font-medium leading-relaxed">Your data is protected with bank-level encryption and secure cloud hosting.</p>
          </motion.div>

          {/* Mobile-First - Small */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 rounded-[3rem] bg-white p-12 flex flex-col justify-center border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-8 group-hover:scale-110 transition-transform">
              <Smartphone size={32} />
            </div>
            <h3 className="text-2xl text-gray-900 mb-4 tracking-tight">Mobile Optimized</h3>
            <p className="text-gray-500 font-medium leading-relaxed">Perfect performance on smartphones, tablets, and desktops.</p>
          </motion.div>

          {/* Analytics - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 rounded-[3rem] bg-white p-12 flex flex-col md:flex-row items-center justify-between overflow-hidden relative shadow-2xl"
          >
            <div className="relative z-10 mb-8 md:mb-0">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-blue-700 mb-10">
                <LineChart size={32} />
              </div>
              <h3 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">Real-Time Insights</h3>
              <p className="text-lg text-gray-500 max-w-sm font-medium leading-relaxed">
                Track your bookings, revenue, and customer growth with intuitive dashboards.
              </p>
            </div>
            
            <div className="flex space-x-4 items-end h-48 pr-12">
              {[40, 70, 45, 90, 65, 80].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ delay: i * 0.1 + 0.5, duration: 1 }}
                  className="w-6 bg-gradient-to-t from-blue-400 to-blue-600 rounded-t-xl shadow-lg"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
