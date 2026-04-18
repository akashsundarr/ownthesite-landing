'use client'

import { motion } from 'framer-motion'
import { FadeUp } from './animations'

export function ProblemSolution() {
  const problems = [
    "A template site that looks like everyone else",
    "Paying for something you don’t control",
    "A design that doesn’t reflect your business"
  ]

  const solutions = [
    "A custom-built website for your business",
    "Fast, clean, and built to perform",
    "A website you actually own"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-24 px-5 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          {/* Problems */}
          <FadeUp>
            <h2 className="text-xs sm:text-sm font-medium text-neutral-400 mb-6 uppercase tracking-wider">
              What you're dealing with
            </h2>

            <motion.ul
              className="space-y-4 sm:space-y-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {problems.map((problem, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3 group"
                  variants={itemVariants}
                >
                  <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center mt-0.5 transition group-hover:bg-neutral-200">
                    <svg className="w-3 h-3 text-neutral-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>

                  <span className="text-sm sm:text-base text-neutral-500 leading-relaxed group-hover:text-neutral-900 transition">
                    {problem}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </FadeUp>

          {/* Solutions */}
          <FadeUp delay={0.1}>
            <h2 className="text-xs sm:text-sm font-medium text-neutral-400 mb-6 uppercase tracking-wider">
              What you get instead
            </h2>

            <motion.ul
              className="space-y-4 sm:space-y-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {solutions.map((solution, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-3 group"
                  variants={itemVariants}
                >
                  <div className="w-5 h-5 rounded-full bg-neutral-900 flex items-center justify-center mt-0.5 transition group-hover:scale-105">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <span className="text-sm sm:text-base text-neutral-900 font-medium leading-relaxed">
                    {solution}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}