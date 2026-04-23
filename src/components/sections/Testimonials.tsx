"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Owner, PlayZone Turf",
    content: "SellTrack transformed our cricket turf business. The booking system saves us 10+ hours weekly and reduced double-bookings to zero!",
    stars: 5,
  },
  {
    name: "Dr. Anjali Shah",
    role: "Founder, City Clinic",
    content: "The patient management system is intuitive and professional. Our patients love the automated SMS reminders for appointments.",
    stars: 5,
  },
  {
    name: "Vikram Mehta",
    role: "Manager, Iron Gym",
    content: "Finally a member management system that works. The attendance tracking and renewal alerts are game changers for our growth.",
    stars: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "CEO, Bloom Florals",
    content: "The custom digital storefront they built for us increased our online orders by 40% in just two months. Highly recommended!",
    stars: 5,
  },
  {
    name: "Michael Chang",
    role: "Director, AutoPro Hub",
    content: "SellTrack streamlined our entire repair workflow. From customer intake to final billing, everything is in one place.",
    stars: 5,
  },
  {
    name: "Elena Rossi",
    role: "Owner, Bella Boutique",
    content: "Our inventory management used to be a nightmare. Now, our online and offline sales are perfectly synced automatically.",
    stars: 5,
  },
  {
    name: "David O'Connor",
    role: "Partner, Legal Partners",
    content: "A secure, premium portal for our clients. The document management features have saved our firm countless administrative hours.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    role: "Manager, Spice Route",
    content: "The custom ordering app is flawless. We bypassed expensive third-party delivery apps and kept all our margins.",
    stars: 5,
  },
  {
    name: "James Wilson",
    role: "Founder, Peak Fitness",
    content: "Our trainer scheduling and class bookings are finally automated. The SellTrack platform is a must-have for any modern gym.",
    stars: 5,
  },
  {
    name: "Maria Garcia",
    role: "Owner, Sparkle Clean",
    content: "The field service management tools help me track all my employees in real-time. It completely changed how I run my business.",
    stars: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 -z-10" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[30%] bg-blue-50 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-semibold text-gray-900 mb-8 tracking-tighter"
          >
            Trusted by <span className="text-gradient">Local Leaders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 max-w-2xl mx-auto font-medium"
          >
            Join hundreds of businesses that have scaled their operations with SellTrack.
          </motion.p>
        </div>

        <div className="relative w-full overflow-hidden py-10 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          >
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div
                key={`${testimonial.name}-${i}`}
                className="w-[350px] md:w-[450px] mx-5 flex-shrink-0 card-premium p-10 bg-white relative group hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="flex space-x-1 mb-8">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <Quote size={60} className="absolute top-10 right-10 text-gray-50 group-hover:text-blue-700/5 transition-colors" />

                <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium italic relative z-10 line-clamp-4">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-5 pt-8 border-t border-gray-200 mt-auto">
                  <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600 font-black text-xl shadow-sm border border-gray-200">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className=" text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-[10px] md:text-xs text-gray-500 font-black uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
