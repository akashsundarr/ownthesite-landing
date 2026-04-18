'use client'

import { FadeUp, AnimatedButton } from './animations'

export function CTASection() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <FadeUp>
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-3">
            Let’s build your website
          </h2>
        </FadeUp>

        {/* Subtext */}
        <FadeUp delay={0.1}>
          <p className="text-sm text-gray-500 mb-10">
            Tell us about your business and we’ll take it from there.
          </p>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.2}>
          <AnimatedButton 
            href="https://wa.me/917306063033?text=Hi%20I%20want%20to%20build%20a%20website"
            className="inline-block px-6 py-3 bg-black text-white rounded-full text-sm font-medium"
          >
            Get started
          </AnimatedButton>
        </FadeUp>

      </div>
    </section>
  )
}