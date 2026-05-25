"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Monitor, 
  ArrowRight,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const solutionsData: Record<string, any> = {
  "turf-booking": {
    title: "Turf Booking System",
    problem: "Manual slot management leads to double bookings, missed calls, and revenue leakage from unpaid slots.",
    solution: "A fully automated booking platform where customers can see real-time availability and pay online to confirm slots.",
    features: [
      "Dynamic Pricing (Peak vs Off-peak)",
      "WhatsApp Confirmation with QR Code",
      "Lighting & Gate Automation Link",
      "Customer Membership & Credits",
      "Expense & Staff Management"
    ],
    demoLink: "/demos",
    image: "/images/industries/turf.png"
  },
  "clinic-management": {
    title: "Clinic Management System",
    problem: "Paper-based records are hard to track, patient waiting times are long, and prescription follow-ups are inconsistent.",
    solution: "A digital ecosystem for doctors to manage appointments, keep electronic health records, and send automated follow-ups.",
    features: [
      "Digital Prescription Pad",
      "Patient Medical History Tracking",
      "Automated Follow-up Reminders",
      "Online Appointment Portal",
      "Billing & Lab Report Integration"
    ],
    demoLink: "/demos",
    image: "/images/industries/clinic.png"
  },
  "gym-booking": {
    title: "Gym & Fitness Booking",
    problem: "Tracking gym memberships, attendance, and trainer schedules manually is prone to errors and loss of data.",
    solution: "An all-in-one gym management software with member app, attendance tracking, and workout plans.",
    features: [
      "Member Mobile App",
      "Biometric/QR Attendance",
      "Workout & Diet Plan Delivery",
      "Trainer Performance Tracking",
      "Subscription Auto-renewals"
    ],
    demoLink: "/demos",
    image: "/images/industries/gym.png"
  },
  "ecommerce": {
    title: "E-commerce & Inventory",
    problem: "Local retailers struggle to compete with big platforms due to lack of delivery systems and online visibility.",
    solution: "A custom e-commerce engine that gives you full control over your brand, customers, and data.",
    features: [
      "Multi-vendor Support",
      "Advanced Inventory Sync",
      "Local Delivery Integration",
      "Marketing Automation",
      "Loyalty Points System"
    ],
    demoLink: "/demos",
    image: "/images/industries/ecommerce.png"
  }
};

export default function IndividualSolutionPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = solutionsData[slug];

  if (!data) return <div>Solution not found</div>;

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-white">
        {/* Hero */}
        <section className="relative py-20 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <Link href="/solutions" className="text-primary font-bold text-sm uppercase tracking-wider mb-6 inline-block hover:underline">
                  ← Back to all solutions
                </Link>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{data.title}</h1>
                <p className="text-xl text-gray-500 leading-relaxed mb-8">
                  The ultimate digital solution designed specifically for your industry needs.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link 
                    href="/contact"
                    className="bg-gradient-primary text-gray-900 px-8 py-4 rounded-xl font-bold text-center hover:scale-105 transition-transform shadow-lg"
                  >
                    Request Similar Website
                  </Link>
                  <Link 
                    href={data.demoLink}
                    className="bg-white text-gray-900 border border-gray-300 px-8 py-4 rounded-xl font-bold text-center hover:bg-gray-50 transition-colors"
                  >
                    View Live Demo
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative"
              >
                <img 
                  src={data.image} 
                  alt={data.title}
                  className="rounded-[2.5rem] shadow-2xl border-8 border-gray-300"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-rose-50 rounded-[2rem] p-10 border border-rose-100">
                <div className="w-12 h-12 bg-rose-500 text-gray-900 rounded-xl flex items-center justify-center mb-6">
                  <AlertCircle size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h3>
                <p className="text-gray-500 leading-relaxed text-lg">
                  {data.problem}
                </p>
              </div>
              <div className="bg-teal-900/20 rounded-[2rem] p-10 border border-teal-100">
                <div className="w-12 h-12 bg-teal-500 text-gray-900 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-gray-500 leading-relaxed text-lg">
                  {data.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-16">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.features.map((feature: string) => (
                <div key={feature} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 flex items-start space-x-4 text-left">
                  <CheckCircle2 size={24} className="text-primary mt-1 shrink-0" />
                  <span className="text-lg font-semibold text-gray-500">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 text-center text-gray-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to scale your business?</h2>
                <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
                  Take the first step towards total business automation today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <Link 
                    href="/contact"
                    className="w-full sm:w-auto bg-primary text-gray-900 px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform"
                  >
                    Get Started
                  </Link>
                  <Link 
                    href="https://wa.me/917046996816"
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-gray-900 px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-all"
                  >
                    <MessageCircle size={20} />
                    <span>Talk to Expert</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
