"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Premium Ladies Fitness Center",
      category: "Fitness Studio",
      description:
        "Designed to attract and convert local clients with a clean, focused layout",
      tech: ["Next.js", "React", "Tailwind CSS"],
      url: "https://www.premiumladiesfitnesscenter.com/",
    },
    {
      title: "Starwings Travel",
      category: "Travel & Tourism",
      description:
        "Structured to showcase services clearly and drive direct enquiries",
      tech: ["Next.js", "React", "Tailwind CSS"],
      url: "https://starwings-website.vercel.app/",
    },
    {
      title: "Starwings HVAC",
      category: "Engineering Services",
      description:
        "Built to present services professionally and strengthen business credibility",
      tech: ["Next.js", "React", "Tailwind CSS"],
      url: "https://starwings-journey-redesign.vercel.app/",
    },
  ];

  return (
    <section id="work" className="py-24 px-5 sm:px-6 bg-neutral-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight mb-3">
              Work
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-sm sm:text-base text-neutral-500 max-w-md mx-auto leading-relaxed">
              Built for real businesses.
            </p>
          </FadeUp>
        </div>

        {/* List */}
        <StaggerContainer delay={0.2}>
          <div
            className="border-t border-neutral-200"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {projects.map((project, idx) => {
              const isHovered = hoveredIndex === idx;
              const isAnotherHovered =
                hoveredIndex !== null && hoveredIndex !== idx;

              return (
                <StaggerItem key={idx}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative border-b border-neutral-200 overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(idx)}
                  >
                    {/* Hover Background */}
                    <motion.div
                      className="absolute inset-0 bg-neutral-100/60 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovered ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />

                    <motion.div
                      className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8 py-8 sm:py-10 px-2 sm:px-4"
                      animate={{
                        opacity: isAnotherHovered ? 0.4 : 1,
                        x: isHovered ? 8 : 0,
                      }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* Left */}
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-900 mb-2 leading-snug">
                          {project.title}
                        </h3>

                        <p className="text-sm sm:text-base text-neutral-500 max-w-lg leading-relaxed mb-3">
                          {project.description}
                        </p>

                        {/* Tech */}
                        <div className="flex flex-wrap gap-2 overflow-hidden h-7">
                          <AnimatePresence>
                            {isHovered &&
                              project.tech.map((tech, i) => (
                                <motion.span
                                  key={tech}
                                  initial={{ opacity: 0, y: 12 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -12 }}
                                  transition={{
                                    duration: 0.2,
                                    delay: i * 0.04,
                                  }}
                                  className="px-2.5 py-1 text-xs font-medium text-neutral-600 bg-white border border-neutral-200 rounded-full"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Right */}
                      <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 mt-3 md:mt-0">
                        <p className="text-xs sm:text-sm font-medium text-neutral-400 uppercase tracking-wider">
                          {project.category}
                        </p>

                        <motion.div
                          className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-neutral-900 text-white shrink-0"
                          animate={{
                            scale: isHovered ? 1 : 0.92,
                            rotate: isHovered ? -45 : 0,
                          }}
                          transition={{
                            duration: 0.25,
                            type: "spring",
                            stiffness: 280,
                          }}
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 12h14M12 5l7 7-7 7"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                  </a>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}