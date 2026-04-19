'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem } from './animations'

export function HowItWorks() {
  const [hovered, setHovered] = useState<number | null>(null)
  const [paths, setPaths] = useState<string[]>([])

  const containerRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const steps = [
    { number: '1', title: 'Tell us what you need', description: 'Share your business goals and project requirements.' },
    { number: '2', title: 'We build it', description: 'Expertly designed and developed for your specific needs.' },
    { number: '3', title: 'It’s yours', description: 'Your high-performance website is ready to deploy and use.' }
  ]

  useEffect(() => {
    const updatePaths = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const containerRect = container.getBoundingClientRect()

      const newPaths = []

      for (let i = 0; i < stepRefs.current.length - 1; i++) {
        const a = stepRefs.current[i]
        const b = stepRefs.current[i + 1]

        if (!a || !b) continue

        const rectA = a.getBoundingClientRect()
        const rectB = b.getBoundingClientRect()

        // 1. Calculate centers
        const centerAX = rectA.left + rectA.width / 2 - containerRect.left
        const centerAY = rectA.top + rectA.height / 2 - containerRect.top

        const centerBX = rectB.left + rectB.width / 2 - containerRect.left
        const centerBY = rectB.top + rectB.height / 2 - containerRect.top

        // 2. Adjust to start/end at the edges of the 64px (w-16) circles
        const radius = 32
        const gap = 16 // Gap so the arrow doesn't overlap the circle
        
        const startX = centerAX + radius + gap
        const startY = centerAY
        
        const endX = centerBX - radius - gap
        const endY = centerBY

        // 3. Draw a straight line, then draw the arrow head
        // The arrow head goes back 12px on X, and up/down 8px on Y
        const d = `
          M ${startX} ${startY}
          L ${endX} ${endY}
          L ${endX - 12} ${endY - 8}
          M ${endX} ${endY}
          L ${endX - 12} ${endY + 8}
        `

        newPaths.push(d)
      }

      setPaths(newPaths)
    }

    const timeout = setTimeout(updatePaths, 50)
    window.addEventListener('resize', updatePaths)
    
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('resize', updatePaths)
    }
  }, [])

  return (
    <section className="py-28 px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto text-center relative">

        {/* Header */}
        <div className="mb-24">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
              How it works
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-base text-gray-500 max-w-md mx-auto font-medium">
              A simple, transparent, and straightforward process.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer delay={0.2}>
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative">

            {steps.map((step, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="flex flex-col items-center relative z-10"
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Circle */}
                  <motion.div
                    ref={(el) => {
                      if (el) stepRefs.current[idx] = el
                    }}
                    className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold mb-6 shadow-xl shadow-gray-900/10"
                    animate={{ scale: hovered === idx ? 1.08 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="text-xl font-bold tracking-tight text-black mb-3">
                    {step.title}
                  </h3>

                  <p className="text-base text-gray-500 max-w-[260px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}

            {/* SVG OVERLAY */}
            <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              {paths.map((d, i) => (
                <motion.path
                  key={i}
                  d={d}
                  stroke="black"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: hovered === i ? 1 : 0,
                    opacity: hovered === i ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              ))}
            </svg>

          </div>
        </StaggerContainer>

      </div>
    </section>
  )
}