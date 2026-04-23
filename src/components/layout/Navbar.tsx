"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Solutions", href: "/solutions" },
  { name: "Demos", href: "/demos" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-xl shadow-gray-200/40" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="w-12 h-12 relative flex items-center justify-center"
              >
                <Image src="/logo.png" alt="SellTrack Logo" fill className="object-contain" />
              </motion.div>
              <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-gray-900"}`}>
                Sell<span className="text-gradient">Track</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`relative px-5 py-2 text-sm font-bold transition-colors group ${
                    pathname === link.href ? "text-blue-700" : "text-gray-500 hover:text-blue-700"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-5 h-1 bg-blue-600 transition-all duration-300 rounded-full ${
                    pathname === link.href ? "w-6" : "w-0 group-hover:w-6"
                  }`}></span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="ml-6"
            >
              <Link
                href="/contact"
                className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3.5 flex items-center space-x-2 text-sm rounded-[1.25rem] transition-colors"
              >
                <span>Book Demo</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 p-2 focus:outline-none"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white flex flex-col md:hidden"
          >
            <div className="flex justify-between items-center p-8 border-b border-gray-200">
              <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
                <div className="w-12 h-12 relative flex items-center justify-center">
                  <Image src="/logo.png" alt="SellTrack Logo" fill className="object-contain" />
                </div>
                <span className="text-3xl font-black tracking-tighter text-gray-900">
                  Sell<span className="text-gradient">Track</span>
                </span>
              </Link>
              <button onClick={() => setIsOpen(false)} className="text-gray-900 p-2">
                <X size={32} />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center space-y-10 px-8 bg-grid">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl font-semibold transition-colors tracking-tight ${
                      pathname === link.href ? "text-blue-700" : "text-gray-900 hover:text-blue-700"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="w-full pt-10"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-gradient w-full block text-center py-5 text-xl rounded-[2rem]"
                >
                  Book Demo
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

