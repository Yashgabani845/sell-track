"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { 
  ArrowRight,
  Check
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Box Cricket Turf Systems",
    slug: "turf-booking",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000",
    description: "Complete slot booking, lighting automation, and payment tracking for sports arenas.",
    features: ["Real-time Slot Booking", "WhatsApp Notifications", "Advance Payment Tracking", "Lighting Control Integration"],
  },
  {
    title: "Clinic Management Systems",
    slug: "clinic-management",
    image: "https://images.unsplash.com/photo-1538108149393-cebb47acddb2?q=80&w=2000",
    description: "Streamline patient appointments, digital prescriptions, and billing for doctors.",
    features: ["Patient Records", "Digital Prescriptions", "Appointment Reminders", "Billing & Analytics"],
  },
  {
    title: "Gym Websites & Booking",
    slug: "gym-booking",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000",
    description: "Manage memberships, class schedules, and trainer assignments effortlessly.",
    features: ["Membership Management", "Class Scheduling", "Trainer App", "Payment Reminders"],
  },
  {
    title: "Jewellery Online Stores",
    slug: "jewellery-store",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000",
    description: "Premium e-commerce experience for high-value items with secure logistics.",
    features: ["Custom Product Viewer", "Live Gold Rate Sync", "Secure Checkout", "Inventory Tracking"],
  },
  {
    title: "E-commerce & Inventory",
    slug: "ecommerce",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000",
    description: "Scaling your local shop to a nationwide online presence with ease.",
    features: ["Mobile App Integration", "Order Management", "Stock Alerts", "Marketing Tools"],
  }
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Digital Solutions</h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We specialize in vertical-specific systems that solve the unique challenges of your business industry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-gray-200 flex flex-col h-full hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group"
              >
                {/* Image Header */}
                <div className="relative w-full h-72 overflow-hidden">
                   <Image src={cat.image} alt={cat.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                   <h2 className="absolute bottom-8 left-8 text-3xl font-bold !text-white z-10 max-w-[80%] leading-tight tracking-tight drop-shadow-lg">{cat.title}</h2>
                </div>
                
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <p className="text-gray-500 mb-8 leading-relaxed text-lg font-medium">
                    {cat.description}
                  </p>
                  <div className="space-y-4 mb-10 flex-grow">
                    {cat.features.map(f => (
                      <div key={f} className="flex items-center space-x-3 text-gray-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                           <Check size={14} strokeWidth={3} />
                        </div>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
