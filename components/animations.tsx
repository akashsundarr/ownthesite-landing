'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

// FadeUp - Fade in + slide up animation
export function FadeUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

// StaggerContainer - Container for staggered animations
export function StaggerContainer({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

// StaggerItem - Individual item within stagger container
export function StaggerItem({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

// AnimatedButton - Button with hover effect
export function AnimatedButton({
  children,
  href,
  target,
  rel,
  className = '',
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={className}
      whileHover={{ y: -2, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' }}
      whileTap={{ y: 0 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.a>
  )
}

// AnimatedCard - Card with hover effect
export function AnimatedCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)' }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

// AnimatedLink - Link with underline animation
export function AnimatedLink({
  children,
  href,
  className = '',
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <motion.a
      href={href}
      className={`relative inline-block ${className}`}
      {...props}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-[#0a0a0a] origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  )
}
