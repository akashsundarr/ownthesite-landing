"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FadeUp, AnimatedButton } from "./animations";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 px-5 sm:px-6 bg-[#fafafa] overflow-hidden">
      
      {/* Subtle Background Glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Tagline */}
        <FadeUp>
          <p className="text-xs sm:text-sm font-medium text-neutral-500 mb-6 tracking-wide">
            Don’t rent your website{" "}
            <span className="font-semibold text-neutral-900">— own it.</span>
          </p>
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={0.1}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold text-black leading-[1.05] tracking-tighter mb-8">
            Your website.
            <br className="hidden sm:block" />
            <span className="text-neutral-400">Fully yours.</span>
          </h1>
        </FadeUp>

        {/* Subtext */}
        <FadeUp delay={0.2}>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-500 leading-relaxed max-w-2xl mx-auto mb-12 font-medium">
              No templates. Just a fast website built for your business.
          </p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
            <AnimatedButton
              href="https://wa.me/917306063033?text=Hi%20Akash,%20I%20want%20to%20discuss%20a%20website%20project"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full text-base font-bold hover:scale-105 transition-all duration-300 shadow-xl shadow-neutral-900/20"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </AnimatedButton>

            <motion.a
              href="#work"
              className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white border border-neutral-200 text-black rounded-full text-base font-bold hover:bg-neutral-50 transition-colors"
              whileHover={{
                y: -2,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
            >
              View Selected Work
            </motion.a>
          </div>
        </FadeUp>
        
      </div>
    </section>
  );
}