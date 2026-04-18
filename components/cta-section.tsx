'use client'

import { FadeUp, AnimatedButton } from './animations'

export function CTASection() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">
            Get your website live this week
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-[#6b7280] mb-12">
            Tell us about your business and we&apos;ll get back within 24 hours.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <AnimatedButton 
            href="https://wa.me/message"
            className="inline-block px-8 py-3 bg-[#000000] text-white rounded-full font-medium"
          >
            Get a Quote
          </AnimatedButton>
        </FadeUp>
      </div>
    </section>
  )
}
