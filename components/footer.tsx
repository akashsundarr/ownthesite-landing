'use client'

import { motion } from 'framer-motion'
import { AnimatedLink } from './animations'

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-1">OwnTheSite</h3>
            <p className="text-sm text-gray-400">
              Modern static websites for small businesses.
            </p>
          </div>

          <div className="flex gap-6">
            <AnimatedLink href="mailto:hello@ownthesite.com" className="text-sm text-gray-400 hover:text-white">
              Email
            </AnimatedLink>
            <AnimatedLink href="https://wa.me/message" className="text-sm text-gray-400 hover:text-white">
              WhatsApp
            </AnimatedLink>
            <AnimatedLink href="#" className="text-sm text-gray-400 hover:text-white">
              Twitter
            </AnimatedLink>
          </div>
        </motion.div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} OwnTheSite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
