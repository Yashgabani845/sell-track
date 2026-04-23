"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Calendar, Video, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BookDemoPage() {
  const [step, setStep] = useState(1);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 inline-block">Free Consultation</span>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">Book a Free Live Demo</h1>
              <p className="text-xl text-gray-500 leading-relaxed mb-10">
                See our systems in action. We'll show you exactly how our automation can save you 10+ hours a week and increase your bookings.
              </p>
              
              <div className="space-y-6">
                {[
                  "Personalized walkthrough of the system",
                  "Industry-specific ROI analysis",
                  "Technical Q&A session",
                  "Custom quote for your business"
                ].map(item => (
                  <div key={item} className="flex items-center space-x-3 text-gray-500 font-medium">
                    <CheckCircle2 size={24} className="text-blue-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gray-50 rounded-3xl border border-gray-200 flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Video size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Virtual Meeting</h3>
                  <p className="text-gray-500 text-sm">30-minute session via Google Meet / Zoom</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-200 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary" />
              
              {/* Calendly Placeholder or Custom Form */}
              <div className="text-center">
                <div className="inline-block p-4 rounded-full bg-teal-900/20 text-primary mb-6">
                  <Calendar size={32} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Select a Time Slot</h2>
                <p className="text-gray-500 mb-8">Our calendar is currently being synced. Please provide your details and we will call you to confirm a slot.</p>
                
                <form className="space-y-6 text-left">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Your Name</label>
                    <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/20" placeholder="Yash Gabani" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">WhatsApp Number</label>
                    <input type="tel" className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/20" placeholder="+91 70469 96816" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900">Preferred Date</label>
                    <input type="date" className="w-full bg-gray-50 border-none rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/20" />
                  </div>
                  <button className="w-full bg-gradient-primary text-gray-900 py-4 rounded-xl font-bold shadow-lg hover:scale-[1.02] transition-transform">
                    Confirm Demo Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
