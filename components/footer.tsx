"use client";

import { motion } from "framer-motion";
import { AnimatedLink } from "./animations";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Left */}
          <div className="text-center md:text-left">
            <h3 className="text-base font-semibold mb-1">OwnTheSite</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Websites your business actually owns and controls.
            </p>
          </div>

          {/* Right */}
          <div className="flex gap-5 text-sm text-gray-400">
            <AnimatedLink
              href="mailto:akashsundarrr@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </AnimatedLink>
            <AnimatedLink
              href="https://wa.me/917306063033?text=Hi%20I%20want%20to%20build%20a%20website"
              className="hover:text-white transition"
            >
              WhatsApp
            </AnimatedLink>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} OwnTheSite</p>
        </div>
      </div>
    </footer>
  );
}
