'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FadeUp, StaggerContainer, StaggerItem } from './animations'

export function HowItWorks() {
  const [paths, setPaths] = useState<string[]>([])

  const containerRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

 const steps = [
  { 
    number: '1', 
    title: 'Share your business details', 
    description: 'Tell us about your services, goals, and what you need from the website.' 
  },
  { 
    number: '2', 
    title: 'We design and build (5–10 days)', 
    description: 'We create a fast, minimal website tailored to your business.' 
  },
  { 
    number: '3', 
    title: 'Review and approve', 
    description: 'You check everything, request changes, and approve the final version.' 
  },
  { 
    number: '4', 
    title: 'Go live and own it', 
    description: 'Your website is deployed, fully yours, with no platform lock-in.' 
  }
];

  useEffect(() => {
    const updatePaths = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const containerRect = container.getBoundingClientRect()

      const newPaths: string[] = []

      for (let i = 0; i < stepRefs.current.length - 1; i++) {
        const a = stepRefs.current[i]
        const b = stepRefs.current[i + 1]

        if (!a || !b) continue

        const rectA = a.getBoundingClientRect()
        const rectB = b.getBoundingClientRect()

        const centerAX = rectA.left + rectA.width / 2 - containerRect.left
        const centerAY = rectA.top + rectA.height / 2 - containerRect.top

        const centerBX = rectB.left + rectB.width / 2 - containerRect.left
        const centerBY = rectB.top + rectB.height / 2 - containerRect.top

        const radius = 32

        // ✅ key fixes
        const strokeFix = 1.25   // half-ish of stroke width (2.5)
        const yOffset = -17      // visual centering tweak

        const startX = centerAX + radius - strokeFix
        const startY = centerAY + yOffset

        const endX = centerBX - radius + strokeFix
        const endY = centerBY + yOffset

        const d = `M ${startX} ${startY} L ${endX} ${endY}`

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
      <div className="max-w-8xl mx-auto text-center relative">

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
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 relative">

            {steps.map((step, idx) => (
              <StaggerItem key={idx}>
                <div className="flex flex-col items-center relative z-10">

                  {/* Circle */}
                  <motion.div
                    ref={(el) => {
                      if (el) stepRefs.current[idx] = el
                    }}
                    className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold mb-6 shadow-xl shadow-gray-900/10"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{
                      duration: 1.2,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      delay: idx * 0.4
                    }}
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

            {/* SVG FLOW */}
           <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none overflow-visible">
  <defs>
    <linearGradient 
      id="flowGradient" 
      gradientUnits="userSpaceOnUse" 
      x1="0" y1="0" x2="1000" y2="0" 
      spreadMethod="repeat" 
    >
      {/* The "pulse" of the flow. 
        It occupies the first 40% of the gradient width.
        The remaining 60% stays transparent to create a gap between flows.
      */}
      <stop offset="0%" stopColor="black" stopOpacity="0" />
      <stop offset="15%" stopColor="black" stopOpacity="1" />
      <stop offset="25%" stopColor="black" stopOpacity="1" />
      <stop offset="40%" stopColor="black" stopOpacity="0" />

      {/* The animation translates exactly from 0 to 1000 (matching x2).
        Because of spreadMethod="repeat", when it snaps back to 0, 
        the next repeated tile is already in the exact same visual position, 
        making the reset completely invisible.
      */}
      <animateTransform
        attributeName="gradientTransform"
        type="translate"
        from="0 0"
        to="1000 0" 
        dur="4s"
        repeatCount="indefinite"
      />
    </linearGradient>
  </defs>

  {paths.map((d, i) => (
    <g key={i}>
      {/* Base static path */}
      <path
        d={d}
        stroke="black"
        strokeWidth="2"
        opacity="0.12"
        fill="none"
        strokeLinecap="round"
      />
      {/* Animated flowing path */}
      <path
        d={d}
        stroke="url(#flowGradient)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </g>
  ))}
</svg>

          </div>
        </StaggerContainer>

      </div>
    </section>
  )
}