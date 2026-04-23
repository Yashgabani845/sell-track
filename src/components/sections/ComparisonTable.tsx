"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  { name: "Custom Strategy", us: true, template: false, freelancer: "partial" },
  { name: "Priority Support", us: true, template: false, freelancer: false },
  { name: "Proprietary Code", us: true, template: false, freelancer: "partial" },
  { name: "Industry Dashboards", us: true, template: false, freelancer: false },
  { name: "Free Consultation", us: true, template: true, freelancer: true },
  { name: "Direct WhatsApp Line", us: true, template: false, freelancer: false },
];

export default function ComparisonTable() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-2 px-6 rounded-full bg-blue-50 border border-blue-400/10 mb-8"
          >
             <span className="text-xs font-black tracking-widest text-blue-700 uppercase">Why Us?</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-semibold text-gray-900 mb-8 tracking-tighter"
          >
            How We <span className="text-gradient">Compare</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            See why SellTrack is the preferred choice for scaling local businesses.
          </motion.p>
        </div>

        <div className="overflow-x-auto rounded-[3rem] border border-gray-200 shadow-[0_40px_100px_-20px_rgba(37,99,235,0.1)] bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-10 text-[10px] font-black text-gray-500 uppercase tracking-[0.4em]">Feature Set</th>
                <th className="p-10 text-center bg-blue-600/[0.02]">
                  <div className="text-2xl font-black text-blue-700 tracking-tighter">SellTrack</div>
                  <div className="text-[9px] text-blue-700/60 uppercase font-black tracking-[0.2em] mt-1">Our Solution</div>
                </th>
                <th className="p-10 text-center text-[10px] font-black text-gray-500 uppercase tracking-widest">Generic Templates</th>
                <th className="p-10 text-center text-[10px] font-black text-gray-500 uppercase tracking-widest">Typical Freelancer</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <motion.tr
                  key={f.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-b border-gray-200 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="p-10 font-black text-gray-900 text-lg tracking-tight">{f.name}</td>
                  <td className="p-10 text-center bg-blue-600/[0.02]">
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mx-auto shadow-inner glow-gold">
                      <Check size={28} strokeWidth={3} />
                    </div>
                  </td>
                  <td className="p-10 text-center">
                    {f.template === true ? (
                      <Check className="mx-auto text-green-400" size={24} />
                    ) : (
                      <X className="mx-auto text-red-300" size={24} />
                    )}
                  </td>
                  <td className="p-10 text-center">
                    {f.freelancer === true ? (
                      <Check className="mx-auto text-green-400" size={24} />
                    ) : f.freelancer === "partial" ? (
                      <div className="mx-auto w-8 h-1 bg-gray-100 rounded-full" />
                    ) : (
                      <X className="mx-auto text-red-300" size={24} />
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
