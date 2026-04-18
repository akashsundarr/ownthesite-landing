"use client";

import { motion } from "framer-motion";
import { FadeUp, AnimatedButton } from "./animations";

export function Hero() {
  return (
    <section className="pt-28 pb-24 px-5 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        {/* Tagline */}
        <FadeUp>
          <p className="text-xs sm:text-sm font-medium text-neutral-500 mb-5 tracking-wide">
            Don’t rent your website{" "}
            <span className="font-semibold text-neutral-900">— own it.</span>
          </p>
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-900 leading-[1.15] tracking-tight mb-6">
            Your website.
            <br className="hidden sm:block" />
            Fully yours.
          </h1>
        </FadeUp>

        {/* Subtext */}
        <FadeUp delay={0.2}>
          <p className="text-base sm:text-lg text-neutral-500 leading-relaxed max-w-md mx-auto mb-12">
            Fast, simple, and built to bring you enquiries — without the noise.
          </p>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <AnimatedButton
              href="https://wa.me/917306063033?text=Hi%20I%20want%20to%20build%20a%20website"
              className="w-full sm:w-auto px-7 py-3 bg-black text-white rounded-full text-sm sm:text-base font-medium"
            >
              Get a Quote
            </AnimatedButton>

            <motion.a
              href="#work"
              className="w-full sm:w-auto px-7 py-3 border border-neutral-200 text-neutral-900 rounded-full text-sm sm:text-base font-medium hover:bg-neutral-50 transition"
              whileHover={{
                y: -2,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.05)",
              }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
            >
              View Work
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}