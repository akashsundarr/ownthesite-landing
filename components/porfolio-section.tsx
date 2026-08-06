"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Shaheen Flowers",
    year: "2025",
    category: "Landscaping & Plants",
    description: "Professional landscaping company in the UAE offering garden design, annual maintenance contracts (AMC), indoor plants, outdoor landscaping, green walls, and irrigation solutions.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    image: "/shaheen.png",
    link: "https://www.shaheenflowers.ae/"
  },
  {
    title: "National Public School Kaloor",
    year: "2025",
    category: "Education",
    description: "Premium CBSE school website focused on admissions, academics, student life, facilities, and seamless communication with parents.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    image: "/school.png",
    link: "https://www.npskaloor.com/"
  },
  {
    title: "Starwings Tours & Travels",
    year: "2024",
    category: "Travel & Tourism",
    description: "Travel website showcasing vehicle rentals, customized tour packages, transparent pricing, and WhatsApp-first customer enquiries.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    image: "/travel.png",
    link: "https://starwings-journey-redesign.vercel.app/"
  },
  {
    title: "StarWings HVAC Solutions",
    year: "2023",
    category: "Engineering",
    description: "Corporate website presenting HVAC design, installation, maintenance services, and over 18 years of industry expertise.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    image: "/ac.png",
    link: "https://starwings-website.vercel.app/"
  }
];

export default function PortfolioSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Desktop: 3D Cover Flow
      const totalScroll = projects.length * 800; // 800px of scrolling per card

      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        start: "top top",
        end: `+=${totalScroll}`,
        scrub: 1, // smooth inertia
        onUpdate: (self) => {
          const p = self.progress * (projects.length - 1);

          cardsRef.current.forEach((card, i) => {
            if (!card) return;
            const pos = i - p;
            const absPos = Math.abs(pos);
            const sign = Math.sign(pos) || 1;

            let rotationY = 0;
            let translateX = 0;
            let translateZ = 0;
            let scale = 1;
            let opacity = 1;
            let blur = 0;

            if (absPos < 1) {
              // Interpolating between active and 1st side slot
              rotationY = pos * -65;
              translateX = pos * 280;
              translateZ = absPos * -180;
              scale = 1 - (absPos * (1 - 0.82));
              opacity = 1 - (absPos * (1 - 0.35));
              blur = absPos * 4; // up to 4px blur
            } else {
              // Beyond 1st side slot
              rotationY = sign * -65;
              translateX = sign * 280 + (pos - sign) * 50;
              translateZ = -180 - (absPos - 1) * 80;
              scale = 0.82 - (absPos - 1) * 0.05;
              opacity = Math.max(0, 0.35 - (absPos - 1) * 0.2);
              blur = 4;
            }

            // Subtle curved trajectory (smile curve)
            const translateY = Math.pow(absPos, 1.5) * 30;

            const zIndex = 100 - Math.round(absPos * 10);

            // Active Class Logic
            if (absPos < 0.5) {
              if (!card.classList.contains("is-active")) {
                card.classList.add("is-active");
              }
            } else {
              if (card.classList.contains("is-active")) {
                card.classList.remove("is-active");
              }
            }

            gsap.set(card, {
              xPercent: -50,
              yPercent: -50,
              rotationY: rotationY,
              x: translateX,
              y: translateY,
              z: translateZ,
              scale: scale,
              opacity: opacity,
              filter: `blur(${blur}px)`,
              zIndex: zIndex,
            });
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    });

    mm.add("(max-width: 1023px)", () => {
      // Mobile: Horizontal Scroll (Cleanup inline styles if any)
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.set(card, { clearProps: "all" });
          card.classList.add("is-active"); // always active on mobile so content is visible
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F8F6F2] relative overflow-hidden"
    >
      <div className="min-h-screen lg:h-screen w-full flex items-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-center w-full h-full lg:pt-16">

          {/* Left Column (Sticky info) */}
          <div className="lg:w-1/3 shrink-0 z-50">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#1c232b] opacity-60 mb-6">Our Work</p>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#1c232b] leading-[1.1] mb-6">
              We Build.<br />Businesses Grow.
            </h2>
            <p className="text-lg text-[#1c232b] opacity-70 mb-10 leading-relaxed max-w-sm">
              From educational institutions to landscaping, travel and engineering companies, we build digital experiences that convert visitors into customers.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-300 text-[#1c232b] font-bold text-sm uppercase tracking-wide hover:bg-[#1c232b] hover:text-white transition-all duration-300 group"
            >
              View All Projects
              <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Right Column (Interactive Stage) */}
          <div
            ref={stageRef}
            className="lg:w-2/3 h-full flex items-center justify-start lg:justify-center relative w-full lg:perspective-[1800px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Mobile Fallback Container */}
            <div className="flex lg:contents overflow-x-auto snap-x snap-mandatory gap-6 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-full pb-8 lg:pb-0 scrollbar-hide -ml-4 pl-4 pr-4 sm:-ml-6 sm:pl-6 sm:pr-6 lg:ml-0 lg:px-0">
              {projects.map((proj, idx) => (
                <Link
                  key={idx}
                  href={proj.link}
                  target="_blank"
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  className="card group block shrink-0 w-[85vw] sm:w-[60vw] lg:w-[460px] lg:absolute lg:top-1/2 lg:left-1/2 rounded-[32px] bg-white p-6 shadow-md border border-gray-100 snap-center
                             transition-all duration-500 ease-out
                             lg:pointer-events-none lg:[&.is-active]:pointer-events-auto
                             lg:[&.is-active]:hover:-translate-y-2 lg:[&.is-active]:hover:shadow-2xl"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-gray-100 relative">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out lg:scale-100 lg:group-[.is-active]:scale-[1.04] lg:group-[.is-active]:hover:scale-[1.07]"
                    />
                  </div>

                  {/* Content Container (fades in when active on desktop) */}
                  <div className="flex flex-col gap-4 px-2 lg:opacity-0 lg:group-[.is-active]:opacity-100 transition-opacity duration-700 ease-out">
                    <div>
                      <div className="flex items-center gap-3 mb-2 lg:translate-y-4 lg:group-[.is-active]:translate-y-0 transition-transform duration-700 ease-out delay-75">
                        <h3 className="text-xl font-bold text-[#1c232b]">{proj.title}</h3>
                        <span className="px-2 py-1 bg-gray-100 text-[#1c232b] text-[10px] font-bold rounded-full">{proj.year}</span>
                      </div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 lg:translate-y-4 lg:group-[.is-active]:translate-y-0 transition-transform duration-700 ease-out delay-100">{proj.category}</p>
                      <p className="text-[#1c232b] text-sm opacity-70 leading-relaxed lg:translate-y-4 lg:group-[.is-active]:translate-y-0 transition-transform duration-700 ease-out delay-150 line-clamp-2">
                        {proj.description}
                      </p>
                    </div>

                    <div className="flex items-end justify-between mt-2">
                      <div className="flex flex-wrap gap-2">
                        {proj.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 border border-gray-200 text-[10px] font-bold uppercase tracking-wider rounded-full text-gray-600 lg:opacity-0 lg:group-[.is-active]:opacity-100 transition-all duration-500"
                            style={{ transitionDelay: `${200 + i * 100}ms` }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="w-12 h-12 shrink-0 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#1c232b] group-hover:bg-[#1c232b] group-hover:text-white transition-all duration-300">
                        <span className="material-symbols-outlined text-[20px] transform lg:rotate-0 lg:group-[.is-active]:rotate-45 lg:group-[.is-active]:hover:rotate-[55deg] transition-transform duration-500">arrow_outward</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
