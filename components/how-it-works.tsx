'use client'

import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem } from './animations'

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Tell us what you need',
      description: 'Share your vision and business requirements'
    },
    {
      number: '2',
      title: 'We build it in ~7 days',
      description: 'Fast, efficient development with quality focus'
    },
    {
      number: '3',
      title: 'Go live — no server cost',
      description: 'Launch your site with zero hosting expenses'
    }
  ]

  return (
    <section className="py-20 px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] text-center mb-16">
            How It Works
          </h2>
        </FadeUp>

        <StaggerContainer delay={0.1}>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <StaggerItem key={idx}>
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-[#000000] text-white flex items-center justify-center text-2xl font-bold mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-lg font-bold text-[#0a0a0a] mb-2">{step.title}</h3>
                  <p className="text-[#6b7280]">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
