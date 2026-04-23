"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { ExternalLink, Layout, Smartphone, Globe, ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const demos = [
  {
    title: "Luxe Turf Booking",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop",
    link: "https://box-cricket-demo.vercel.app", // Using the one we cloned earlier as a placeholder link
    type: "Web App"
  },
  {
    title: "City Clinic Portal",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
    link: "#",
    type: "Dashboard"
  },
  {
    title: "Iron Gym Fitness",
    category: "Gym",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    link: "#",
    type: "Booking App"
  },
  {
    title: "Royal Jewellery",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
    link: "#",
    type: "E-commerce"
  }
];

export default function DemosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Experience Our Systems</h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Test drive our live demos to see how our automation and premium design can transform your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {demos.map((demo, i) => (
              <motion.div
                key={demo.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-200 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image 
                    src={demo.image} 
                    alt={demo.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
                  
                  <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-[10px] font-black text-white shadow-sm uppercase tracking-widest z-10">
                    {demo.category}
                  </div>

                  <div className="absolute bottom-8 left-8 z-10">
                    <h3 className="text-3xl font-bold !text-white mb-2 tracking-tight drop-shadow-lg">{demo.title}</h3>
                    <div className="flex items-center space-x-2 !text-white/80 text-xs font-bold uppercase tracking-widest">
                      <Globe size={14} />
                      <span>{demo.type}</span>
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gray-900/20 backdrop-blur-[2px]">
                    <Link 
                      href={demo.link}
                      target="_blank"
                      className="bg-white text-gray-900 px-8 py-4 rounded-2xl shadow-2xl font-bold flex items-center space-x-3 hover:scale-105 transition-transform"
                    >
                      <Play size={18} fill="currentColor" />
                      <span>Live Preview</span>
                    </Link>
                  </div>
                </div>
                <div className="p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <p className="text-gray-500 font-medium max-w-xs">
                    Explore the full potential of {demo.title.toLowerCase()} for your industry.
                  </p>
                  <div className="flex items-center space-x-4">
                    <Link 
                      href={demo.link}
                      target="_blank"
                      className="whitespace-nowrap bg-gray-900 text-white px-8 py-4 rounded-[1.25rem] font-bold hover:bg-gray-800 transition-all shadow-lg flex items-center space-x-2"
                    >
                      <span>Launch</span>
                      <ExternalLink size={18} />
                    </Link>
                    <Link 
                      href="/contact"
                      className="whitespace-nowrap bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-[1.25rem] font-bold hover:bg-white hover:border-gray-300 transition-all"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 bg-white rounded-[3rem] p-12 md:p-16 border border-gray-200 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-5 -z-10" />
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Layout size={40} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Need a Custom Demo?</h2>
            <p className="text-gray-500 text-xl mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              If your industry isn't listed here, we can build a specialized prototype for your unique business needs in just 48 hours.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-gray-900 text-white px-12 py-5 rounded-[1.5rem] font-bold text-lg shadow-xl hover:bg-gray-800 hover:scale-105 transition-all"
            >
              Request Custom Prototype
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
