"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Trophy, 
  Stethoscope, 
  Dumbbell, 
  Gem, 
  ShoppingBag, 
  Box, 
  Check, 
  ArrowRight,
  X,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const solutions = [
  {
    id: "turf",
    title: "Box Cricket Turf",
    icon: Trophy,
    image: "/images/industries/turf.png",
    shortDesc: "The ultimate turf booking platform",
    features: ["Slot Booking", "Payment Gateway", "Member Loyalty", "Real-time Stats"],
    longDesc: "Transform your sports facility with SellTrack's specialized booking engine. Handle peak hours, group bookings, and digital payments with zero friction.",
    demo: "https://box-cricket-demo.vercel.app"
  },
  {
    id: "clinic",
    title: "Medical Clinics",
    icon: Stethoscope,
    image: "/images/industries/clinic.png",
    shortDesc: "Smart patient management",
    features: ["E-Prescriptions", "OPD Scheduling", "Patient History", "Billing"],
    longDesc: "Digitize your medical practice. Reduce waiting times with smart scheduling and maintain secure digital records for all your patients.",
    demo: "#"
  },
  {
    id: "gym",
    title: "Gym & Fitness",
    icon: Dumbbell,
    image: "/images/industries/gym.png",
    shortDesc: "Membership & Entry tracking",
    features: ["QR Entry", "Subscription Plans", "Trainer Portal", "Progress Tracking"],
    longDesc: "A complete ecosystem for gym owners. Automate renewals, track attendance via QR, and manage trainer schedules effortlessly.",
    demo: "#"
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    icon: ShoppingBag,
    image: "/images/industries/ecommerce.png",
    shortDesc: "Sell anything, anywhere",
    features: ["Fast Checkout", "Order Management", "Inventory Sync", "Coupons"],
    longDesc: "Launch your brand online with a high-performance store. Optimized for mobile shopping and integrated with local delivery partners.",
    demo: "#"
  },
  {
    id: "inventory",
    title: "Inventory Systems",
    icon: Box,
    image: "/images/industries/clinic.png", // Reusing clinic for now or can use another
    shortDesc: "Precision stock tracking",
    features: ["Stock Alerts", "Multi-warehouse", "Sales Reports", "Supplier CRM"],
    longDesc: "Scale your retail or wholesale business with absolute control over your stock. Real-time insights that prevent overstocking and shortages.",
    demo: "#"
  }
];

export default function SolutionsShowcase() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="solutions">
      <div className="absolute inset-0 bg-grid opacity-20 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-semibold text-gray-900 mb-8 tracking-tighter"
          >
            Custom Built <span className="text-gradient">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            We don't believe in one-size-fits-all. Explore how SellTrack transforms specific industries.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {solutions.map((item, i) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setExpandedId(item.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer bg-white rounded-[2.5rem] border border-gray-200 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(37,99,235,0.15)] transition-all duration-500 overflow-hidden"
            >
              <div className="h-64 relative overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />

              </div>

              <div className="p-10 -mt-10 relative z-10 bg-white">
                <h3 className="text-3xl text-gray-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed font-medium">{item.shortDesc}</p>
                
                <div className="flex flex-wrap gap-3">
                  {item.features.slice(0, 2).map((feature) => (
                    <span key={feature} className="px-4 py-1.5 bg-gray-50 text-gray-500 rounded-full text-xs font-black uppercase tracking-widest border border-gray-200">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex items-center text-xs font-black text-blue-700 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Explore Details <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {expandedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedId(null)}
              className="fixed inset-0 bg-white/60 backdrop-blur-xl z-[100]"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
              <motion.div
                layoutId={expandedId}
                className="bg-white rounded-[3.5rem] w-full max-w-5xl max-h-[90vh] overflow-y-auto custom-scrollbar pointer-events-auto relative shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-gray-300"
              >
                <button 
                  onClick={() => setExpandedId(null)}
                  className="absolute top-8 right-8 p-4 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-all z-20"
                >
                  <X size={24} />
                </button>

                {(() => {
                  const data = solutions.find(s => s.id === expandedId)!;
                  return (
                    <div className="flex flex-col lg:flex-row">
                      <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative">
                        <Image src={data.image} alt={data.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white hidden lg:block" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />
                      </div>
                      <div className="p-10 md:p-16 flex-1">

                        <h3 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-8 leading-tight tracking-tighter">{data.title}</h3>
                        <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">
                          {data.longDesc}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                          {data.features.map((feature) => (
                            <div key={feature} className="flex items-center text-gray-700 bg-gray-50 p-5 rounded-2xl border border-gray-200">
                              <Check size={20} className="text-blue-700 mr-4 shrink-0" />
                              <span className="font-black text-sm uppercase tracking-widest">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                          <Link
                            href={data.demo}
                            target="_blank"
                            className="btn-gradient h-16 px-10 text-lg flex items-center justify-center text-center whitespace-nowrap rounded-[1.5rem]"
                          >
                            <span>View Live Demo</span>
                          </Link>

                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
