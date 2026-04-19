'use client'

import { FadeUp, AnimatedButton } from './animations'

export function CTASection() {
  return (
    <section id="contact" className="py-24 px-5 sm:px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        
        {/* High-Contrast CTA Card */}
        <div className="relative bg-black rounded-[2.5rem] py-24 px-6 md:px-16 text-center overflow-hidden shadow-2xl shadow-gray-900/20">
          
          {/* Subtle Ambient Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Heading */}
            <FadeUp>
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
                Have a project in mind?
              </h2>
            </FadeUp>

            {/* Subtext */}
            <FadeUp delay={0.1}>
              <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed font-medium">
                Whether you need a complete ground-up build or a strategic redesign, let's discuss how we can bring your vision to life.
              </p>
            </FadeUp>

            {/* CTA Button */}
            <FadeUp delay={0.2}>
              <AnimatedButton 
                href="https://wa.me/917306063033?text=Hi%20Akash,%20I%20want%20to%20discuss%20a%20website%20project"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-xl text-base font-bold hover:scale-105 hover:bg-gray-100 transition-all duration-300"
              >
                <span>Chat on WhatsApp</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </AnimatedButton>
            </FadeUp>
            
            {/* Trust Indicator / Microcopy */}
            <FadeUp delay={0.3}>
              <p className="mt-6 text-sm text-gray-500 font-medium">
                Typically replies within a few hours.
              </p>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  )
}