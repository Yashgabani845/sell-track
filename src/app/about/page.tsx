"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Heart, Users, Target, Zap, ShieldCheck, Smile, Check } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const values = [
  { icon: Target, title: "Mission Driven", desc: "Our goal is to bring the power of high-end tech to every local business." },
  { icon: Users, title: "Client First", desc: "We don't just deliver code; we deliver solutions that solve real business pain points." },
  { icon: Zap, title: "Fast Execution", desc: "We build and launch rapidly, so you can start seeing ROI from week one." },
  { icon: ShieldCheck, title: "Reliability", desc: "Bank-grade security and 99.9% uptime for all our digital systems." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story Section */}
          <section className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4 inline-block">Our Story</span>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tighter">Digitizing Local Businesses, <span className="text-gradient">One System</span> at a Time</h1>
                <p className="text-xl text-gray-500 leading-relaxed mb-6 font-medium">
                  SellTrack was born out of a simple observation: while big tech was busy serving giants, local businesses—the backbone of our economy—were being left behind with outdated tools.
                </p>
                <p className="text-lg text-gray-500 leading-relaxed mb-10 font-medium">
                  We started with a mission to bridge this gap. Today, we empower businesses from sports arenas to medical clinics with premium websites, automated booking systems, and robust inventory management.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full rounded-[3.5rem] bg-gradient-to-br from-white/95 via-gray-50/95 to-blue-50/80 backdrop-blur-xl border border-white/80 p-6 md:p-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col justify-between"
              >
                {/* Soft moving background gradients */}
                <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/[0.03] rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/[0.03] rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

                {/* Header */}
                <div className="mb-8 px-2 text-center lg:text-left relative z-10">
                  <span className="text-[10px] text-blue-600 uppercase font-black tracking-[0.3em] bg-blue-50/80 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100/50 shadow-sm">
                    DIGITAL TRANSFORMATION
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-2 leading-tight">
                    From Traditional Operations <span className="text-gradient">To Digital Growth</span>
                  </h3>
                  <p className="text-gray-500 font-medium text-sm">
                    Transforming local businesses into modern digital experiences.
                  </p>
                </div>

                {/* Main Split Layout with Animated Center Beam */}
                <div className="grid grid-cols-1 lg:grid-cols-11 gap-6 items-stretch relative py-4 z-10">
                  
                  {/* LEFT COLUMN: Before SellTrack */}
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="lg:col-span-5 bg-gray-50/50 rounded-[2.25rem] p-6 border border-gray-200/50 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm group hover:border-gray-300 transition-colors duration-300"
                  >
                    {/* Subtle noise pattern overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(#9ca3af_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

                    <div>
                      <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-6 border border-gray-200/50 bg-gray-100/30 px-3 py-1 rounded-full inline-block">
                        BEFORE SELLTRACK
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          { emoji: "📒", title: "Manual Records", desc: "Paper tracking and spreadsheets" },
                          { emoji: "📞", title: "Phone Bookings", desc: "Manual customer handling" },
                          { emoji: "📦", title: "Inventory Issues", desc: "No real-time visibility" },
                          { emoji: "🌐", title: "No Digital Presence", desc: "Limited business reach" }
                        ].map((item, idx) => (
                          <div 
                            key={idx}
                            className="flex items-start space-x-3.5 p-3 rounded-2xl bg-white/40 border border-gray-100/60 saturate-[0.15] opacity-75 select-none hover:opacity-90 hover:saturate-[0.4] transition-all duration-300"
                          >
                            <span className="text-xl filter grayscale opacity-60 leading-none shrink-0">{item.emoji}</span>
                            <div>
                              <div className="text-xs font-bold text-gray-400 mb-0.5 leading-snug">{item.title}</div>
                              <div className="text-[10px] text-gray-400 leading-snug">{item.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* CENTER COLUMN: Transformation Beam */}
                  <div className="lg:col-span-1 flex flex-row lg:flex-col items-center justify-between lg:justify-center py-4 lg:py-0 px-2 lg:px-0 relative min-h-[60px] lg:min-h-full">
                    {/* Flowing connector beam (Desktop only) */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-gray-200 via-blue-500 to-gray-200 shadow-[0_0_10px_rgba(59,130,246,0.3)] hidden lg:block overflow-hidden">
                      {/* Flowing animated light particle */}
                      <motion.div 
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent shadow-[0_0_12px_#3b82f6]"
                      />
                    </div>

                    {/* Glowing transform steps */}
                    <div className="flex flex-row lg:flex-col items-center justify-between lg:justify-center w-full lg:h-full gap-4 relative z-10">
                      <span className="text-[8px] font-black text-gray-400 bg-gray-100 border border-gray-200/60 px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap">
                        TRADITIONAL
                      </span>
                      
                      <div className="flex flex-row lg:flex-col items-center gap-1.5 lg:my-2">
                        <span className="text-xs text-blue-500 font-bold animate-pulse hidden lg:inline">↓</span>
                        <div className="text-[9px] font-black text-white bg-blue-600 border border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.4)] px-3 py-1.5 rounded-2xl animate-pulse">
                          SELLTRACK
                        </div>
                        <span className="text-xs text-blue-500 font-bold animate-pulse hidden lg:inline">↓</span>
                      </div>

                      <span className="text-[8px] font-black text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full shadow-sm whitespace-nowrap">
                        MODERN
                      </span>
                    </div>
                  </div>

                  {/* RIGHT COLUMN: After SellTrack */}
                  <motion.div 
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="lg:col-span-5 bg-gradient-to-br from-blue-500/[0.04] via-blue-500/[0.01] to-white/90 rounded-[2.25rem] p-6 border border-blue-100/80 flex flex-col justify-between relative overflow-hidden backdrop-blur-sm shadow-[0_20px_40px_-15px_rgba(37,99,235,0.04)] group hover:border-blue-300 hover:shadow-blue-500/[0.05] transition-all duration-500"
                  >
                    {/* Glowing background highlights */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10" />

                    <div>
                      <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-6 border border-blue-100/60 bg-blue-50 px-3 py-1 rounded-full inline-block shadow-sm">
                        AFTER SELLTRACK
                      </div>
                      
                      <div className="space-y-4">
                        {[
                          { emoji: "📅", title: "Smart Booking System", desc: "Automated appointments" },
                          { emoji: "📊", title: "Analytics Dashboard", desc: "Business insights" },
                          { emoji: "⚡", title: "Process Automation", desc: "Reduced manual work" },
                          { emoji: "🚀", title: "Premium Digital Presence", desc: "Modern customer experience" }
                        ].map((item, idx) => (
                          <div 
                            key={idx}
                            className="flex items-start space-x-3.5 p-3 rounded-2xl bg-white/90 border border-blue-50/50 shadow-sm hover:border-blue-200 hover:bg-blue-50/20 hover:scale-[1.02] transition-all duration-300 cursor-default group/item"
                          >
                            <span className="text-xl leading-none shrink-0 group-hover/item:scale-110 transition-transform">{item.emoji}</span>
                            <div>
                              <div className="text-xs font-bold text-gray-900 mb-0.5 leading-snug group-hover/item:text-blue-600 transition-colors">{item.title}</div>
                              <div className="text-[10px] text-gray-500 leading-snug">{item.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                </div>


              </motion.div>
            </div>
          </section>

          {/* Why Trust Us */}
          <section className="py-24 bg-gray-50/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 rounded-[4rem] border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10 -z-10" />
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Why Local Businesses Trust Us</h2>
              <p className="text-lg text-gray-500 font-medium">
                We combine global design standards with local business understanding to deliver unmatched value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((val, i) => (
                <div key={val.title} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-200 text-left hover:shadow-xl transition-all duration-500 group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <val.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{val.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium text-sm">{val.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Visionary Section */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/[0.02] -z-10" />
            <div className="max-w-5xl mx-auto text-center px-4">
              <div className="inline-block p-4 rounded-3xl bg-blue-50 mb-8 text-blue-600">
                <Target size={40} />
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-10 tracking-tight">The Future of <span className="text-gradient">Local Commerce</span></h2>
              <p className="text-2xl md:text-3xl text-gray-600 leading-tight font-medium mb-12">
                "We don't just build software. We build the digital infrastructure that allows local heroes to compete on a global scale. Our vision is a world where every local business has the same technological firepower as the world's largest corporations."
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
                <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 rotate-2">
                  <Image 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2000" 
                    alt="Innovation Team" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white text-left">
                    <div className="text-sm font-black uppercase tracking-widest mb-1">Our Workspace</div>
                    <div className="text-lg font-bold">Innovation Hub</div>
                  </div>
                </div>
                <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 -rotate-2">
                  <Image 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000" 
                    alt="Strategic Planning" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white text-left">
                    <div className="text-sm font-black uppercase tracking-widest mb-1">Our Strategy</div>
                    <div className="text-lg font-bold">Scaling Your Business</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
