"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Heart, Users, Target, Zap, ShieldCheck, Smile, Check } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
                <div className="flex items-center space-x-12">
                  <div className="text-left">
                    <div className="text-4xl font-bold text-gray-900 mb-1">50+</div>
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Clients Served</div>
                  </div>
                  <div className="text-left">
                    <div className="text-4xl font-bold text-gray-900 mb-1">100k+</div>
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Bookings Handled</div>
                  </div>
                  <div className="text-left">
                    <div className="text-4xl font-bold text-gray-900 mb-1">24/7</div>
                    <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Support</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-blue-600/10 rounded-[3rem] rotate-3 -z-10 blur-2xl" />
                <div className="relative aspect-square w-full rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 bg-blue-50">
                  <Image 
                    src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&q=80&w=1200" 
                    alt="SellTrack Team" 
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent" />
                  <div className="absolute bottom-10 left-10 text-white z-10">
                    <div className="text-xs font-black uppercase tracking-[0.3em] mb-2 opacity-80">Our Team</div>
                    <div className="text-2xl font-bold tracking-tight">The Minds Behind SellTrack</div>
                  </div>
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
