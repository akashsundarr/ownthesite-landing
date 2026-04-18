'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedLink, AnimatedButton } from './animations'

export function Navbar() {
  return (
    <motion.nav 
      className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-[#e5e7eb]"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-[#0a0a0a]">
          OwnTheSite
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <AnimatedLink href="#work" className="text-sm text-[#6b7280] hover:text-[#0a0a0a]">
            Work
          </AnimatedLink>
          <AnimatedLink href="#pricing" className="text-sm text-[#6b7280] hover:text-[#0a0a0a]">
            Pricing
          </AnimatedLink>
          <AnimatedLink href="#contact" className="text-sm text-[#6b7280] hover:text-[#0a0a0a]">
            Contact
          </AnimatedLink>
          <AnimatedButton 
            href="https://wa.me/message"
            className="px-6 py-2 bg-[#000000] text-white rounded-full text-sm font-medium"
          >
            Get a Quote
          </AnimatedButton>
        </div>

        <div className="md:hidden">
          <AnimatedButton 
            href="https://wa.me/message"
            className="px-4 py-2 bg-[#000000] text-white rounded-full text-sm font-medium"
          >
            Get a Quote
          </AnimatedButton>
        </div>
      </div>
    </motion.nav>
  )
}
