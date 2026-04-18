'use client'

import { FadeUp, StaggerContainer, StaggerItem, AnimatedCard } from './animations'

export function Services() {
  const services = [
    'Business websites',
    'Service websites',
    'Landing pages',
    'Portfolio websites',
    'Website redesign'
  ]

  return (
    <section className="py-20 px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">
              What We Build
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[#6b7280]">
              Tailored solutions for every business need
            </p>
          </FadeUp>
        </div>

        <StaggerContainer delay={0.2}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <StaggerItem key={idx}>
                <AnimatedCard className="bg-white p-8 rounded-lg border border-[#e5e7eb]">
                  <div className="w-12 h-12 bg-[#000000] rounded-full flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-[#0a0a0a]">{service}</h3>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
