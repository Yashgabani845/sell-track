"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Logic for form submission would go here
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-white min-h-screen relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-5 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/[0.03] rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/[0.03] rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Let's Get Started</h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Ready to digitize your business? Fill out the form or reach out via our direct channels.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-10 tracking-tight">Contact Information</h2>
                
                <div className="space-y-10">
                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Phone size={22} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Phone</div>
                      <div className="text-lg font-bold text-gray-900">+91 70469 96816</div>
                      <div className="text-lg font-bold text-gray-900">+91 82641 07107</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Mail size={22} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Email</div>
                      <div className="text-lg font-bold text-gray-900">gabaniyash846@gmail.com</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Office</div>
                      <div className="text-lg font-bold text-gray-900">Surat, Gujarat, India</div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-gray-200">
                  <a 
                    href="https://wa.me/917046996816"
                    target="_blank"
                    className="flex items-center justify-center space-x-3 bg-[#25D366] text-gray-900 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-green-500/20"
                  >
                    <MessageCircle size={24} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-blue-50/50 rounded-[2.5rem] p-10 text-gray-900 overflow-hidden relative border border-blue-100 shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 opacity-10 blur-3xl" />
                <h3 className="text-2xl font-bold mb-4 relative z-10 tracking-tight">Fast Support</h3>
                <p className="text-gray-500 relative z-10 font-medium">Our team typically responds within 2 hours during business hours.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-200 h-full">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit} 
                      className="space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="John Doe" 
                            className="w-full bg-gray-50 border border-gray-100 focus:border-blue-600 focus:bg-white focus:ring-0 rounded-2xl px-6 py-4 transition-all outline-none font-medium text-gray-900"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Email Address</label>
                          <input 
                            required
                            type="email" 
                            placeholder="john@example.com" 
                            className="w-full bg-gray-50 border border-gray-100 focus:border-blue-600 focus:bg-white focus:ring-0 rounded-2xl px-6 py-4 transition-all outline-none font-medium text-gray-900"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Phone Number</label>
                          <input 
                            required
                            type="tel" 
                            placeholder="+91 00000 00000" 
                            className="w-full bg-gray-50 border border-gray-100 focus:border-blue-600 focus:bg-white focus:ring-0 rounded-2xl px-6 py-4 transition-all outline-none font-medium text-gray-900"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Industry</label>
                          <select className="w-full bg-gray-50 border border-gray-100 focus:border-blue-600 focus:bg-white focus:ring-0 rounded-2xl px-6 py-4 transition-all outline-none appearance-none font-medium text-gray-900">
                            <option>Box Cricket Turf</option>
                            <option>Medical Clinic</option>
                            <option>Gym / Fitness</option>
                            <option>Jewellery Shop</option>
                            <option>E-commerce Store</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest px-1">Your Message</label>
                        <textarea 
                          rows={5}
                          placeholder="Tell us about your business and what you're looking for..." 
                          className="w-full bg-gray-50 border border-gray-100 focus:border-blue-600 focus:bg-white focus:ring-0 rounded-2xl px-6 py-4 transition-all outline-none resize-none font-medium text-gray-900"
                        ></textarea>
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-gray-900 text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-3"
                      >
                        <Send size={20} />
                        <span>Send Message</span>
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-24 h-24 bg-teal-900/20 text-blue-500 rounded-full flex items-center justify-center mb-8">
                        <CheckCircle size={48} />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
                      <p className="text-gray-500 text-lg mb-10 max-w-xs">
                        Thank you for reaching out. Our team will contact you shortly.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="text-primary font-bold hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
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
