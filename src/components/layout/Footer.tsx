import Link from "next/link";
import { Rocket, Mail, Phone, MapPin, Globe, Send, Users, MessageCircle, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer({ showNewsletter = false }: { showNewsletter?: boolean }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-32 pb-12 text-gray-900 overflow-hidden relative border-t border-gray-200">
      {/* Decorative Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/[0.03] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showNewsletter && (
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 pb-24 border-b border-gray-200">
            <div>
              <h3 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tighter leading-[0.9]">Stay Ahead of the <br /><span className="text-gradient">Digital Curve</span></h3>
              <p className="text-xl text-gray-500 font-medium max-w-md">Get exclusive digital growth tips and industry updates delivered to your inbox.</p>
            </div>
            <div className="relative group">
              <form className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-gray-50 border border-gray-300 rounded-[2.5rem] h-20 pl-10 pr-52 outline-none focus:border-blue-400 transition-all font-bold text-lg focus:bg-white focus:shadow-xl focus:shadow-blue-200/5"
                />
                <button className="absolute right-3 btn-gradient h-14 px-10 rounded-[1.75rem] font-black text-sm flex items-center space-x-3 group-hover:scale-105 active:scale-95 transition-all shadow-xl">
                  <span>Subscribe</span>
                  <ArrowRight size={20} />
                </button>
              </form>
              <p className="mt-6 text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] px-10">We respect your privacy. No spam, ever.</p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="space-y-10">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-14 h-14 relative flex items-center justify-center">
                <Image src="/logo.png" alt="SellTrack Logo" fill className="object-contain" />
              </div>
              <span className="text-3xl font-black tracking-tighter">
                Sell<span className="text-gradient">Track</span>
              </span>
            </Link>
            <p className="text-gray-500 leading-relaxed text-lg font-medium">
              Empowering local businesses with high-end booking systems, automation, and a premium digital presence that converts.
            </p>
            <div className="flex space-x-5">
              {[Send, Globe, Users, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-blue-700 hover:border-blue-400 hover:bg-white hover:shadow-xl transition-all duration-500 group"
                >
                  <Icon size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-12">
            <h3 className="text-[10px] text-gray-500 uppercase tracking-[0.4em] mb-10">Solutions</h3>
            <ul className="space-y-6">
              {["Box Cricket Turf", "Clinic Management", "Gym & Fitness", "E-commerce Stores", "Inventory Systems"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-500 hover:text-gray-900 transition-all font-bold text-lg flex items-center group">
                    <span className="w-0 h-1 bg-blue-600 transition-all group-hover:w-8 mr-0 group-hover:mr-4 rounded-full" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:ml-12">
            <h3 className="text-[10px] text-gray-500 uppercase tracking-[0.4em] mb-10">Company</h3>
            <ul className="space-y-6">
              {["Our Story", "Live Demos", "Contact Us", "Terms & Conditions"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-500 hover:text-gray-900 transition-all font-bold text-lg flex items-center group">
                    <span className="w-0 h-1 bg-blue-600 transition-all group-hover:w-8 mr-0 group-hover:mr-4 rounded-full" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[10px] text-gray-500 uppercase tracking-[0.4em] mb-10">Get in Touch</h3>
            <ul className="space-y-8">
              <li>
                <a 
                  href="https://wa.me/917046996816" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-all duration-300 shadow-inner shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">WhatsApp Us</div>
                    <div className="text-gray-900 font-black text-xl group-hover:text-blue-600 transition-colors duration-300">+91 70469 96816</div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:gabaniyash846@gmail.com" 
                  className="flex items-center space-x-6 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 transition-all duration-300 shadow-inner shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Email Us</div>
                    <div className="text-gray-900 font-black text-xl group-hover:text-blue-600 transition-colors duration-300">gabaniyash846@gmail.com</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-gray-100 group-hover:text-gray-700 group-hover:border-gray-200 transition-all duration-300 shadow-inner shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Office</div>
                    <div className="text-gray-900 font-black text-xl">Ahmedabad, Gujarat, India</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-gray-500 text-xs font-black uppercase tracking-[0.3em]">
            © {currentYear} <span className="text-gray-900">SellTrack.in</span>. All Rights Reserved.
          </p>
          <div className="flex space-x-12 text-[10px] font-black uppercase tracking-[0.3em]">
            <Link href="#" className="text-gray-500 hover:text-blue-700 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-blue-700 transition-colors">TOS</Link>
            <Link href="#" className="text-gray-500 hover:text-blue-700 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
