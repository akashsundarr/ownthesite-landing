import Link from "next/link";
import React from "react";
import PortfolioSection from "@/components/portfolio-section";
import Image from "next/image";

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
            <div className="hidden md:flex relative justify-center items-center mt-12 lg:mt-0 perspective-1000">
              <div className="relative w-full max-w-[600px] mx-auto transform transition-transform duration-700 hover:scale-[1.02]">
                <div
                  className="relative z-10"
                  style={{
                    WebkitBoxReflect:
                      "below 0px linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgba(0,0,0,0.15) 100%)",
                  }}
                >
                  <div className="relative w-full aspect-[3/2] rounded-xl md:rounded-t-xl md:rounded-b-md shadow-2xl md:border-[6px] border-gray-800 md:bg-gray-800 overflow-hidden">
                    <Image
                      src="/pattern.png"
                      alt="Laptop showing modern website design"
                      width={1536}
                      height={1024}
                      className="w-full h-full object-cover"
                      unoptimized
                      priority
                    />
                  </div>
                  {/* Laptop base stand */}
                  <div className="hidden md:block w-[110%] -ml-[5%] h-3 bg-gray-300 rounded-b-xl shadow-lg border-t border-gray-400 relative z-0"></div>
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

      {/* Our Work */}
      <PortfolioSection />

      {/* What we do */}
      {/* What we do */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-2xl border border-gray-200 rounded-[2rem] p-10 md:p-20 text-[#343a40] shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gray-100/50 backdrop-blur-md border border-gray-200/50 text-text-muted-light text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                HOW WE HELP
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1c232b]">
                Your business,
                <br />
                <span className="italic-accent text-[#495057]">online.</span>
              </h2>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 flex items-center">
              <div className="max-w-2xl">
                <p className="text-xl text-[#343a40] leading-8">
                  Your customers are already searching online.
                  <span className="font-semibold text-[#1c232b]">
                    {" "}
                    Let's make sure they find you.
                  </span>
                </p>

                <p className="mt-6 text-base text-[#6c757d] leading-8">
                  Whether you run a restaurant, gym, clinic, salon, store, or
                  any local business, we'll build a website that truly
                  represents your brand and makes a great first impression.
                </p>

                <p className="mt-6 text-base text-[#6c757d] leading-8">
                  Share your ideas, tell us about your business, and we'll
                  handle the rest—from design and development to launching a
                  fast, mobile-friendly website that your customers will love to
                  use.
                </p>

                <p className="mt-6 text-base text-[#6c757d] leading-8">
                  Because a good website doesn't just look beautiful.
                  <span className="font-semibold text-[#1c232b]">
                    {" "}
                    It helps people trust your business, contact you, and become
                    your next customer.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
