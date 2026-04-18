'use client'

import { motion } from 'framer-motion'
import { FadeUp, StaggerItem } from './animations'

export function ProblemSolution() {
  const problems = [
    'Slow Wix or template websites',
    'Expensive agencies',
    'Generic designs',
    'No control over your site'
  ]

  const solutions = [
    'Fast custom-built websites',
    'You fully own your site',
    'Designed for your business',
    'Built to load fast and rank'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problems */}
          <FadeUp>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8">The Problem</h2>
            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {problems.map((problem, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#fafafa] flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-[#6b7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-[#6b7280]">{problem}</span>
                </motion.li>
              ))}
            </motion.ul>
          </FadeUp>

          {/* Solutions */}
          <FadeUp delay={0.1}>
            <h2 className="text-2xl font-bold text-[#0a0a0a] mb-8">Our Solution</h2>
            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {solutions.map((solution, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#000000] flex items-center justify-center mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[#0a0a0a] font-medium">{solution}</span>
                </motion.li>
              ))}
            </motion.ul>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
