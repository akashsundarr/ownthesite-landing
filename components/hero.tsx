'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeUp, AnimatedButton } from './animations'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <h1 className="text-5xl md:text-6xl font-bold text-[#0a0a0a] mb-6 leading-tight">
            Modern business websites. Zero hosting cost.
          </h1>
        </FadeUp>
        
        <FadeUp delay={0.1}>
          <p className="text-lg text-[#6b7280] mb-12 leading-relaxed max-w-2xl mx-auto">
            We design and build fast, mobile-friendly websites for small businesses that generate enquiries — without monthly server costs.
          </p>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton 
              href="https://wa.me/message"
              className="px-8 py-3 bg-[#000000] text-white rounded-full font-medium"
            >
              Get a Quote
            </AnimatedButton>
            <motion.a
              href="#work"
              className="px-8 py-3 border border-[#e5e7eb] text-[#0a0a0a] rounded-full font-medium hover:bg-[#fafafa] transition"
              whileHover={{ y: -2, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)' }}
              whileTap={{ y: 0 }}
              transition={{ duration: 0.2 }}
            >
              View Work
            </motion.a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
