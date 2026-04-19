'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedLink, AnimatedButton } from './animations'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    // Outer wrapper handles the fixed positioning and perfect centering
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        // The nav itself acts as the floating pill, restoring pointer events
        className={`pointer-events-auto flex items-center gap-2 sm:gap-4 p-1.5 pl-6 rounded-full transition-all duration-500 ${
          scrolled 
            ? 'bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl border border-neutral-200/80' 
            : 'bg-white/40 shadow-sm backdrop-blur-md border border-white/50'
        }`}
      >
        {/* Brand Name */}
        <Link href="/" className="text-base font-extrabold text-black tracking-tighter mr-2 sm:mr-4">
          Own<span className="text-neutral-400 font-medium tracking-tight">TheSite</span>
        </Link>

        {/* Navigation Links - Wrapped in a subtle inner pill */}
        <div className="hidden md:flex items-center gap-1 bg-neutral-100/50 rounded-full px-1.5 py-1">
          <AnimatedLink href="#work" className="px-4 py-1.5 text-sm font-semibold text-neutral-500 hover:text-black transition-colors rounded-full hover:bg-white/80">
            Work
          </AnimatedLink>
          <AnimatedLink href="#pricing" className="px-4 py-1.5 text-sm font-semibold text-neutral-500 hover:text-black transition-colors rounded-full hover:bg-white/80">
            Pricing
          </AnimatedLink>
        </div>

        {/* CTA Button */}
        <AnimatedButton
          href="https://wa.me/917306063033?text=Hi%20Akash,%20I%20want%20to%20discuss%20a%20website%20project"
          className="px-6 py-2.5 bg-black text-white rounded-full text-xs sm:text-sm font-bold hover:scale-105 hover:shadow-lg hover:shadow-black/10 transition-all duration-300 ml-auto sm:ml-2"
        >
          Start Project
        </AnimatedButton>
      </motion.nav>
      
    </div>
  )
}