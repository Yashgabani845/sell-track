"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/ui/Hero";
import StatsCounter from "@/components/sections/StatsCounter";
import HowWeWork from "@/components/sections/HowWeWork";
import SolutionsShowcase from "@/components/sections/SolutionsShowcase";
import BentoFeatures from "@/components/sections/BentoFeatures";
import Testimonials from "@/components/sections/Testimonials";
import ComparisonTable from "@/components/sections/ComparisonTable";
import FAQ from "@/components/sections/FAQ";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Stats Counter Section */}
        <StatsCounter />

        {/* How We Work Section */}
        <HowWeWork />

        {/* Solutions Showcase Section */}
        <SolutionsShowcase />

        {/* Bento Features Section */}
        <BentoFeatures />


        {/* Testimonials Section */}
        <Testimonials />

        {/* Comparison Table Section */}
        <ComparisonTable />

        {/* FAQ Section */}
        <FAQ />

        {/* Call To Action Section */}
        <CallToAction />
      </main>
      <Footer showNewsletter={true} />
    </>
  );
}

