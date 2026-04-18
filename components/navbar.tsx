'use client'

import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-[#e5e7eb]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-[#0a0a0a]">
          OwnTheSite
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="#work" className="text-sm text-[#6b7280] hover:text-[#0a0a0a] transition">
            Work
          </Link>
          <Link href="#pricing" className="text-sm text-[#6b7280] hover:text-[#0a0a0a] transition">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm text-[#6b7280] hover:text-[#0a0a0a] transition">
            Contact
          </Link>
          <a 
            href="https://wa.me/message"
            className="px-6 py-2 bg-[#000000] text-white rounded-full text-sm font-medium hover:opacity-80 transition"
          >
            Get a Quote
          </a>
        </div>

        <div className="md:hidden">
          <a 
            href="https://wa.me/message"
            className="px-4 py-2 bg-[#000000] text-white rounded-full text-sm font-medium hover:opacity-80 transition"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  )
}
