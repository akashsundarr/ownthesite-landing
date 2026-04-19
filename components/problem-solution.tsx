'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'
import { FadeUp, StaggerContainer, StaggerItem } from './animations'

export function ProblemSolution() {
  const comparisons = [
    {
      problem: "Generic templates that blend in with competitors",
      solution: "Custom-designed specifically for your brand"
    },
    {
      problem: "Paying monthly subscriptions for a site you don't control",
      solution: "You pay once, and you own the codebase forever"
    },
    {
      problem: "Bloated platforms that load slowly and hurt SEO",
      solution: "Clean, modern code built for maximum performance"
    }
  ]

  return (
    <section className="py-28 px-5 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center md:text-left">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tighter mb-4">
              Stop settling for the standard.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg text-neutral-500 max-w-xl font-medium">
                  Most websites today rely on templates and subscriptions. We build fast websites that you fully own.
            </p>
          </FadeUp>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">

          {/* The Old Way (Problem) */}
          <FadeUp delay={0.2}>
            <div className="p-8 md:p-10 rounded-3xl bg-neutral-50 border border-neutral-200 h-full flex flex-col">
              <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-8">
                The Old Way
              </h3>
              
              <StaggerContainer delay={0.3}>
                <ul className="space-y-6 flex-1">
                  {comparisons.map((item, idx) => (
                    <StaggerItem key={idx}>
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-neutral-200/60 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5 text-neutral-500" strokeWidth={3} />
                        </div>
                        <span className="text-base text-neutral-500 font-medium leading-relaxed">
                          {item.problem}
                        </span>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
            </div>
          </FadeUp>

          {/* The OwnTheSite Way (Solution) */}
          <FadeUp delay={0.3}>
            <div className="p-8 md:p-10 rounded-3xl bg-black text-white shadow-2xl shadow-gray-900/10 h-full flex flex-col relative overflow-hidden">
              
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />

              <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-8 relative z-10">
                The OwnTheSite Way
              </h3>
              
              <StaggerContainer delay={0.4}>
                <ul className="space-y-6 flex-1 relative z-10">
                  {comparisons.map((item, idx) => (
                    <StaggerItem key={idx}>
                      <li className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-black" strokeWidth={3} />
                        </div>
                        <span className="text-base text-white font-semibold leading-relaxed">
                          {item.solution}
                        </span>
                      </li>
                    </StaggerItem>
                  ))}
                </ul>
              </StaggerContainer>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}