'use client'

import { motion } from 'framer-motion'
import { FadeUp } from './animations'

export function Pricing() {
  const pricing = [
    { label: 'One-time build cost', value: '✓' },
    { label: 'Hosting', value: '₹0' },
    { label: 'Server', value: '₹0' },
    { label: 'Domain', value: 'Client-owned' }
  ]

  return (
    <section id="pricing" className="py-20 px-6 bg-[#fafafa]">
      <div className="max-w-3xl mx-auto text-center">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-4">
            Simple, transparent pricing
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-[#6b7280] mb-16">
            What you pay, and what you don&apos;t
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <motion.div 
            className="bg-white rounded-lg p-8 md:p-12 border border-[#e5e7eb]"
            whileHover={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {pricing.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className="flex items-center justify-between pb-6 border-b border-[#e5e7eb] last:border-b-0 md:last:border-b md:col-span-2 md:last:col-span-1 md:last:border-b-0"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  <span className="text-[#0a0a0a] font-medium">{item.label}</span>
                  <span className="text-[#0a0a0a] font-bold">{item.value}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-[#6b7280] mt-8 pt-6 border-t border-[#e5e7eb]">
              Only domain renewal applies unless advanced features are added later.
            </p>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  )
}
