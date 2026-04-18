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
    { number: '1', title: 'Tell us what you need', description: 'Share your business and requirements' },
    { number: '2', title: 'We build it', description: 'Designed and developed for your business' },
    { number: '3', title: 'It’s yours', description: 'Your website is ready to use' }
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

        // 2. Adjust to start/end at the edges of the 56px (w-14) circles
        const radius = 28
        const gap = 12 // slightly larger gap so the arrow doesn't overlap the circle
        
        const startX = centerAX + radius + gap
        const startY = centerAY
        
        const endX = centerBX - radius - gap
        const endY = centerBY

        // 3. Draw a straight line, then draw the arrow head
        // The arrow head goes back 10px on X, and up/down 6px on Y
        const d = `
          M ${startX} ${startY}
          L ${endX} ${endY}
          L ${endX - 10} ${endY - 6}
          M ${endX} ${endY}
          L ${endX - 10} ${endY + 6}
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
    <section className="py-24 px-6 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto text-center relative">

        {/* Header */}
        <FadeUp>
          <h2 className="text-2xl md:text-3xl font-semibold text-black mb-2">
            How it works
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-sm text-gray-500 mb-20">
            Simple and straightforward.
          </p>
        </FadeUp>

        <StaggerContainer delay={0.2}>
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">

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
                    className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium mb-5"
                    animate={{ scale: hovered === idx ? 1.08 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="text-base font-medium text-black mb-1">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-500 max-w-[220px]">
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
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round" // Makes the arrow tip nice and sharp
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