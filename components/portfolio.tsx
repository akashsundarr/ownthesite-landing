"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

export function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
const projects = [
  {
    title: "Premium Ladies Fitness",
    category: "Fitness Studio",
    year: "2024",
    description:
      "Fast-loading website designed to drive local enquiries with a clear, conversion-focused layout.",
    tech: ["Next.js", "React", "Tailwind"],
    url: "https://www.premiumladiesfitnesscenter.com/",
  },
  {
    title: "Starwings Travel",
    category: "Travel & Tourism",
    year: "2024",
    description:
      "Optimized for WhatsApp enquiries with structured service sections and fast performance.",
    tech: ["Next.js", "React", "Tailwind"],
    url: "https://starwings-journey-redesign.vercel.app/",
  },
  {
    title: "Starwings HVAC",
    category: "Engineering",
    year: "2023",
    description:
      "Clean, professional website built to improve trust and clearly present services for better lead clarity.",
    tech: ["Next.js", "React", "Tailwind"],
    url: "https://starwings-website.vercel.app/",
  },
];

  return (
    <section id="work" className="py-32 px-5 sm:px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-200 pb-10">
          <div>
            <FadeUp>
              <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tighter mb-4">
                Selected Works
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-base text-neutral-500 max-w-md">
                High-performance web applications built for real businesses to drive real results.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="text-sm font-medium text-neutral-400 uppercase tracking-widest">
              2025 — Present
            </p>
          </FadeUp>
        </div>

        {/* List */}
        <StaggerContainer delay={0.2}>
          <div
            className="flex flex-col"
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
                    className="block group relative border-b border-neutral-200 py-10 md:py-14"
                    onMouseEnter={() => setHoveredIndex(idx)}
                  >
                    <motion.div
                      className="flex flex-col md:flex-row md:items-center justify-between gap-8 w-full"
                      animate={{
                        opacity: isAnotherHovered ? 0.3 : 1,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      {/* Left: Title & Tech */}
                      <div className="md:w-1/2 flex flex-col justify-center">
                        <motion.h3
                          className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-4"
                          animate={{ x: isHovered ? 12 : 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                          {project.title}
                        </motion.h3>

                        {/* Tech Stack Reveal */}
                        <div className="h-8 overflow-hidden">
                          <AnimatePresence mode="wait">
                            {isHovered ? (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-wrap gap-2"
                              >
                                {project.tech.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-semibold text-neutral-600 bg-white border border-neutral-200 rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </motion.div>
                            ) : (
                              <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-sm text-neutral-400 font-medium uppercase tracking-widest"
                              >
                                {project.category}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Middle: Description */}
                      <div className="hidden md:block md:w-1/3">
                        <p className="text-base text-neutral-500 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Right: Year & Arrow */}
                      <div className="flex items-center justify-between md:justify-end md:w-1/6 gap-6">
                        <span className="text-sm font-medium text-neutral-400 md:hidden">
                          {project.year}
                        </span>
                        
                        <motion.div
                          className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-neutral-200 text-black shrink-0 shadow-sm"
                          animate={{
                            backgroundColor: isHovered ? "#000" : "#fff",
                            color: isHovered ? "#fff" : "#000",
                            scale: isHovered ? 1.05 : 1,
                            rotate: isHovered ? -45 : 0,
                            borderColor: isHovered ? "#000" : "#e5e5e5",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg
                            className="w-5 h-5"
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