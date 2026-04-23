"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface IndustryCardProps {
  title: string;
  slug: string;
  image: string;
  delay?: number;
}

export default function IndustryCard({ title, slug, image, delay = 0 }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-3xl bg-gray-100 aspect-[4/5] sm:aspect-square"
    >
      {/* Placeholder for Industry Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <Link 
          href={`/solutions/${slug}`}
          className="flex items-center space-x-2 text-blue-400 font-semibold group/link"
        >
          <span>Explore Solution</span>
          <div className="w-8 h-8 rounded-full bg-teal-400/20 flex items-center justify-center transition-all group-hover/link:bg-blue-500 group-hover/link:text-gray-900">
            <ArrowUpRight size={16} />
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
