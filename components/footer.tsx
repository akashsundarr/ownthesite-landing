"use client";

import { motion } from "framer-motion";
import { AnimatedLink } from "./animations";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-8 px-5 sm:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Section */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
          {/* Brand Info */}
          <div className="max-w-sm">
            <h3 className="text-xl font-bold tracking-tight mb-4 text-white">OwnTheSite</h3>
            <p className="text-base text-neutral-400 leading-relaxed font-medium">
              High-performance web applications that your business actually owns, controls, and scales with.
            </p>
          </div>

          {/* Nav & Info Grid */}
          <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
            
            {/* Contact Column */}
            <div className="flex flex-col gap-5">
              <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest">
                Contact
              </span>
              <AnimatedLink 
                href="mailto:akashsundarrr@gmail.com" 
                className="text-base font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                Email
              </AnimatedLink>
              <AnimatedLink 
                href="https://wa.me/917306063033?text=Hi%20Akash,%20I%20want%20to%20discuss%20a%20website%20project" 
                className="text-base font-semibold text-neutral-300 hover:text-white transition-colors"
              >
                WhatsApp
              </AnimatedLink>
            </div>
            
            {/* Location & Status Column */}
            <div className="flex flex-col gap-5">
              <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest">
                Location
              </span>
              <span className="text-base font-semibold text-neutral-300">
                Kerala, India
              </span>
              <span className="text-base font-semibold text-neutral-300 flex items-center gap-2.5 mt-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Available for work
              </span>
            </div>

          </div>
        </motion.div>

        {/* Massive Brand Typography */}
        <motion.div 
          className="w-full mb-8 border-b border-neutral-800 pb-8 select-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
           <h1 className="text-[15vw] md:text-[10.5rem] font-extrabold tracking-tighter leading-none text-white md:-ml-2">
             OWNTHESITE.
           </h1>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-neutral-500">
          <p>© {new Date().getFullYear()} OwnTheSite. All rights reserved.</p>
          
          <div className="flex gap-8">
            <AnimatedLink href="#" className="hover:text-white transition-colors">Privacy</AnimatedLink>
            <AnimatedLink href="#" className="hover:text-white transition-colors">Terms</AnimatedLink>
          </div>
        </div>

      </div>
    </footer>
  );
}