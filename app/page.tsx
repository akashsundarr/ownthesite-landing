import Link from "next/link";
import React from "react";
import PortfolioSection from "@/components/portfolio-section";

export default function Home() {
  return (
    <main>
      <section className="relative pt-32 pb-32 overflow-hidden bg-[#faf9f6]">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Subtle Grid Pattern spanning entire page */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20L20 0z' fill-opacity='0.04' fill='%23147055' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            }}
          ></div>

          {/* Elegant Wavy Blurs to mimic the ribbon */}
          <div className="absolute top-[-25%] right-[-15%] w-[1200px] h-[800px] bg-gradient-to-br from-emerald-100/50 via-teal-50/40 to-transparent blur-3xl rounded-[100%] rotate-[-25deg] transform -scale-x-100 opacity-80"></div>
          <div className="absolute bottom-[-15%] left-[-15%] w-[1000px] h-[600px] bg-gradient-to-tr from-emerald-100/60 via-teal-100/30 to-transparent blur-3xl rounded-[100%] rotate-[20deg] opacity-80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight mb-6 text-[#1c232b]">
                We build
                <br />
                websites that
                <br />
                help businesses
                <br />
                <span className="italic text-[#147055]">grow online.</span>
              </h1>
              <p className="text-lg text-text-muted-light mb-10 max-w-md leading-relaxed"></p>
            </div>

            {/* Right Content (Images with Reflections) */}
            <div className="relative flex justify-center items-center mt-12 lg:mt-0 perspective-1000">
              <div className="relative w-full max-w-[600px] mx-auto transform transition-transform duration-700 hover:scale-[1.02]">
                {/* Laptop container with reflection */}
                <div
                  className="relative z-10"
                  style={{
                    WebkitBoxReflect:
                      "below 0px linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgba(0,0,0,0.15) 100%)",
                  }}
                >
                  <img
                    alt="Laptop showing modern website design"
                    className="w-full rounded-t-xl rounded-b-md shadow-2xl object-cover border-[6px] border-gray-800 bg-gray-800 aspect-video"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9vbcCs14uRRX8jdT6QT0M7VTJAwpvMPLoUjztwiEeg_i6xLnTU0go0gbIo-3KkXp_ZxqxZUyNj5iOtt48QzNQyyWw7N--Qjzgvg9bZQQPsoGaG9d7CYoFh2LGYpTwawERXl-aRl2flEeh0s8dLy0HVeuA2foU5inAFlg5YqjowmGLkPU-fYGv8UMM-DxzF50L6foA6uuTIf5h3cTvXbWOBc3fI3TOTwr0hKSQ40adeVZMof8yekGX"
                  />
                  {/* Laptop base stand */}
                  <div className="w-[110%] -ml-[5%] h-3 bg-gray-300 rounded-b-xl shadow-lg border-t border-gray-400 relative z-0"></div>
                </div>

                {/* Mobile container with reflection */}
                <div
                  className="absolute -bottom-12 -right-6 w-1/3 z-20"
                  style={{
                    WebkitBoxReflect:
                      "below 2px linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.2) 100%)",
                  }}
                >
                  <img
                    alt="Mobile showing website design"
                    className="w-full rounded-[2rem] shadow-2xl border-[6px] border-gray-800 object-cover aspect-[9/19] bg-white"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN4C4Rr3q0US-vrMdwriYr23JVbB3ZqjzrJ4oOHi_szO7ayZEiflR7mcghlNOi5vLMnnc9mC14EOOc7UJaFVujvumZwkE0yBYuETlo2L8v4DiMwFeEmdFKFpdowhR-amla87s6me4or83opXpSF988rN_AI2WRSdtRCv0v6lSTbv_DJCpWCjgGXOOksuFz0Ukg3fw1l4tUJCG4eEtm0uIg-OlLMyOp17-BUtlcESbp0Tc8_on6uFNI"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-2xl border border-gray-200 rounded-[2rem] p-10 md:p-20 text-[#343a40] shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100/50 backdrop-blur-md border border-gray-200/50 text-text-muted-light text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                Why Choose OwnTheSite?
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1c232b]">
                Built for{" "}
                <span className="italic-accent text-[#495057]">business</span>.
                <br />
                Designed for{" "}
                <span className="italic-accent text-[#495057]">growth</span>.
              </h2>
            </div>
            {/* Right Column */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                <div className="group/item transition-all duration-300 hover:translate-x-1">
                  <span className="material-symbols-outlined text-text-muted-light mb-4 opacity-80">
                    branding_watermark
                  </span>

                  <h3 className="font-bold text-xl mb-2 text-[#1c232b]">
                    Built for Your Brand
                  </h3>

                  <p className="text-text-muted-light text-sm leading-relaxed">
                    Custom websites designed to reflect your business and build
                    customer trust.
                  </p>
                </div>
                <div className="group/item transition-all duration-300 hover:translate-x-1">
                  <span className="material-symbols-outlined text-text-muted-light mb-4 opacity-80">
                    search
                  </span>

                  <h3 className="font-bold text-xl mb-2 text-[#1c232b]">
                    Google SEO Ready
                  </h3>

                  <p className="text-text-muted-light text-sm leading-relaxed">
                    Optimized to help your business appear in Google Search and
                    reach more customers.
                  </p>
                </div>
                <div className="group/item transition-all duration-300 hover:translate-x-1">
                  <span className="material-symbols-outlined text-text-muted-light mb-4 opacity-80">
                    devices
                  </span>

                  <h3 className="font-bold text-xl mb-2 text-[#1c232b]">
                    Mobile Responsive
                  </h3>

                  <p className="text-text-muted-light text-sm leading-relaxed">
                    A flawless browsing experience across phones, tablets, and
                    desktops.
                  </p>
                </div>
                <div className="group/item transition-all duration-300 hover:translate-x-1">
                  <span className="material-symbols-outlined text-text-muted-light mb-4 opacity-80">
                    rocket_launch
                  </span>

                  <h3 className="font-bold text-xl mb-2 text-[#1c232b]">
                    Seamless Experience
                  </h3>

                  <p className="text-text-muted-light text-sm leading-relaxed">
                    Fast-loading pages with smooth interactions that keep
                    visitors engaged.
                  </p>
                </div>
                <div className="group/item transition-all duration-300 hover:translate-x-1"></div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-bold text-accent uppercase tracking-widest mb-2">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Services We Offer
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-light  p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100  hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-100  rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-primary ">
                <span className="material-symbols-outlined">language</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Business Websites</h3>
              <p className="text-text-muted-light  text-sm leading-relaxed mb-6">
                Professional websites that build trust and represent your brand
                perfectly.
              </p>
              <Link
                className="text-primary  opacity-50 group-hover:opacity-100 transition-opacity"
                href="#"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-surface-light  p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100  hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-100  rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-primary ">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Landing Pages</h3>
              <p className="text-text-muted-light  text-sm leading-relaxed mb-6">
                High-converting landing pages designed to generate leads and
                drive action.
              </p>
              <Link
                className="text-primary  opacity-50 group-hover:opacity-100 transition-opacity"
                href="#"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="bg-surface-light  p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100  hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-100  rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-primary ">
                <span className="material-symbols-outlined">person</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Portfolio Websites</h3>
              <p className="text-text-muted-light  text-sm leading-relaxed mb-6">
                Personal portfolio websites that showcase your work in the best
                way.
              </p>
              <Link
                className="text-primary  opacity-50 group-hover:opacity-100 transition-opacity"
                href="#"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Our Work Section */}
      <PortfolioSection />

      {/* CTA & Stats Section */}
      <section className="py-12 pb-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CTA Banner */}
          <div className="bg-primary rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between mb-20 shadow-xl">
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-full border border-[#6c757d] bg-[#343a40] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white text-2xl">
                  rocket_launch
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Ready to Own Your Online Presence?
              </h2>
            </div>
            <Link
              href="#"
              className="shrink-0 inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-bold text-sm uppercase tracking-wide rounded-full hover:bg-gray-100 transition-colors group shadow-lg"
            >
              Let's Talk
              <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                north_east
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-accent text-xl">
                  star
                </span>
                <h3 className="text-4xl font-extrabold text-primary">50+</h3>
              </div>
              <p className="text-text-muted-light text-sm">
                Projects Completed
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-accent text-xl">
                  sentiment_satisfied
                </span>
                <h3 className="text-4xl font-extrabold text-primary">30+</h3>
              </div>
              <p className="text-text-muted-light text-sm">Happy Clients</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-accent text-xl">
                  verified
                </span>
                <h3 className="text-4xl font-extrabold text-primary">98%</h3>
              </div>
              <p className="text-text-muted-light text-sm">
                Client Satisfaction
              </p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-accent text-xl">
                  schedule
                </span>
                <h3 className="text-4xl font-extrabold text-primary">2+</h3>
              </div>
              <p className="text-text-muted-light text-sm">
                Years of Experience
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
