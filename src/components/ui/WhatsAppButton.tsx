"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const whatsappNumber = "917046996816"; // Primary number from contact info

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-[#25D366] text-gray-900 rounded-full flex items-center justify-center shadow-2xl transition-shadow hover:shadow-green-500/30 group"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-gray-900 text-xs font-bold py-1.5 px-3 rounded-full shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us!
        <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white rotate-45 border-r border-b border-gray-200"></div>
      </div>
      <MessageCircle size={32} />
    </motion.a>
  );
}
