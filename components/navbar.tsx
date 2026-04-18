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
        transition={{ duration: 0.4 }}
        // The nav itself acts as the floating pill, restoring pointer events
        className={`pointer-events-auto flex items-center gap-4 px-3 py-2 rounded-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 shadow-lg backdrop-blur-md border border-gray-200' 
            : 'bg-white/50 backdrop-blur-sm border border-transparent'
        }`}
      >
        {/* Brand Name */}
        <Link href="/" className="text-sm font-extrabold text-[#0a0a0a] pl-3 pr-1 tracking-tight">
          Own<span className="font-semibold">TheSite</span>
        </Link>

        {/* Subtle divider */}
        <div className="w-px h-4 bg-gray-300 hidden sm:block"></div>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center gap-5 text-sm font-medium px-2">
          <AnimatedLink href="#work" className="text-gray-500 hover:text-black transition-colors">
            Work
          </AnimatedLink>
          <AnimatedLink href="#pricing" className="text-gray-500 hover:text-black transition-colors">
            Pricing
          </AnimatedLink>
          <AnimatedLink href="#contact" className="text-gray-500 hover:text-black transition-colors">
            Contact
          </AnimatedLink>
        </div>

        {/* CTA Button */}
        <AnimatedButton
          href="https://wa.me/917306063033?text=Hi%20I%20want%20to%20build%20a%20website"
          className="px-5 py-2 bg-black text-white rounded-full text-xs sm:text-sm font-medium hover:bg-gray-800 transition-colors ml-1"
        >
          Get a Quote
        </AnimatedButton>
      </motion.nav>
      
    </div>
  )
}