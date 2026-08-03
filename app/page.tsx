import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main>
      <section className="relative pt-32 pb-32 overflow-hidden bg-[#faf9f6]">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Subtle Grid Pattern spanning entire page */}
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20L20 0z\' fill-opacity=\'0.04\' fill=\'%23147055\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>

          {/* Elegant Wavy Blurs to mimic the ribbon */}
          <div className="absolute top-[-25%] right-[-15%] w-[1200px] h-[800px] bg-gradient-to-br from-emerald-100/50 via-teal-50/40 to-transparent blur-3xl rounded-[100%] rotate-[-25deg] transform -scale-x-100 opacity-80"></div>
          <div className="absolute bottom-[-15%] left-[-15%] w-[1000px] h-[600px] bg-gradient-to-tr from-emerald-100/60 via-teal-100/30 to-transparent blur-3xl rounded-[100%] rotate-[20deg] opacity-80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] tracking-tight mb-6 text-[#1c232b]">
                We build<br />
                websites that<br />
                help businesses<br />
                <span className="italic text-[#147055]">grow online.</span>
              </h1>
              <p className="text-lg text-text-muted-light mb-10 max-w-md leading-relaxed">
                Custom websites and apps designed to help your business succeed.
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-16">
                <Link
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#343a40] text-white text-sm font-semibold rounded-full hover:bg-[#212529] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                  href="#"
                >
                  Discuss Your Project
                  <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>

                <Link
                  className="inline-flex items-center gap-3 text-[#343a40] hover:text-primary transition-colors group cursor-pointer"
                  href="#"
                >
                  <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center bg-white/50 backdrop-blur-sm group-hover:border-[#343a40] transition-all group-hover:scale-105">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </div>
                  <span className="font-bold text-sm">See Our Agency Work</span>
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-[#faf9f6] object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Founder 1" />
                  <img className="w-10 h-10 rounded-full border-2 border-[#faf9f6] object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Founder 2" />
                  <img className="w-10 h-10 rounded-full border-2 border-[#faf9f6] object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Founder 3" />
                </div>
                <p className="text-sm font-medium text-text-muted-light">
                  Trusted by Over 100+ Global Founders & Enterprises
                </p>
              </div>
            </div>

            {/* Right Content (Images with Reflections) */}
            <div className="relative flex justify-center items-center mt-12 lg:mt-0 perspective-1000">
              <div className="relative w-full max-w-[600px] mx-auto transform transition-transform duration-700 hover:scale-[1.02]">

                {/* Laptop container with reflection */}
                <div className="relative z-10" style={{ WebkitBoxReflect: 'below 0px linear-gradient(to bottom, rgba(0,0,0,0) 80%, rgba(0,0,0,0.15) 100%)' }}>
                  <img
                    alt="Laptop showing modern website design"
                    className="w-full rounded-t-xl rounded-b-md shadow-2xl object-cover border-[6px] border-gray-800 bg-gray-800 aspect-video"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9vbcCs14uRRX8jdT6QT0M7VTJAwpvMPLoUjztwiEeg_i6xLnTU0go0gbIo-3KkXp_ZxqxZUyNj5iOtt48QzNQyyWw7N--Qjzgvg9bZQQPsoGaG9d7CYoFh2LGYpTwawERXl-aRl2flEeh0s8dLy0HVeuA2foU5inAFlg5YqjowmGLkPU-fYGv8UMM-DxzF50L6foA6uuTIf5h3cTvXbWOBc3fI3TOTwr0hKSQ40adeVZMof8yekGX"
                  />
                  {/* Laptop base stand */}
                  <div className="w-[110%] -ml-[5%] h-3 bg-gray-300 rounded-b-xl shadow-lg border-t border-gray-400 relative z-0"></div>
                </div>

                {/* Mobile container with reflection */}
                <div className="absolute -bottom-12 -right-6 w-1/3 z-20" style={{ WebkitBoxReflect: 'below 2px linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.2) 100%)' }}>
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
                <span className="italic-accent text-[#495057]">performance</span>.<br />
                Designed for{" "}
                <span className="italic-accent text-[#495057]">impact</span>.
              </h2>
            </div>
            {/* Right Column */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                <div className="group/item transition-all duration-300 hover:translate-x-1">
                  <span className="material-symbols-outlined text-text-muted-light mb-4 opacity-80">
                    draw
                  </span>
                  <h3 className="font-bold text-xl mb-2 text-[#1c232b]">Modern Design</h3>
                  <p className="text-text-muted-light text-sm leading-relaxed">
                    Clean, eye-catching designs that stand out.
                  </p>
                </div>
                <div className="group/item transition-all duration-300 hover:translate-x-1">
                  <span className="material-symbols-outlined text-text-muted-light mb-4 opacity-80">
                    speed
                  </span>
                  <h3 className="font-bold text-xl mb-2 text-[#1c232b]">Fast Performance</h3>
                  <p className="text-text-muted-light text-sm leading-relaxed">
                    Optimized for speed and smoothness.
                  </p>
                </div>
                <div className="group/item transition-all duration-300 hover:translate-x-1">
                  <span className="material-symbols-outlined text-text-muted-light mb-4 opacity-80">
                    devices
                  </span>
                  <h3 className="font-bold text-xl mb-2 text-[#1c232b]">Mobile First</h3>
                  <p className="text-text-muted-light text-sm leading-relaxed">
                    Perfect experience on every device.
                  </p>
                </div>
                <div className="group/item transition-all duration-300 hover:translate-x-1">
                  <span className="material-symbols-outlined text-text-muted-light mb-4 opacity-80">
                    search_check
                  </span>
                  <h3 className="font-bold text-xl mb-2 text-[#1c232b]">SEO Ready</h3>
                  <p className="text-text-muted-light text-sm leading-relaxed">
                    Structured for better visibility and ranking.
                  </p>
                </div>
                <div className="group/item transition-all duration-300 hover:translate-x-1">
                  <span className="material-symbols-outlined text-text-muted-light mb-4 opacity-80">
                    edit_note
                  </span>
                  <h3 className="font-bold text-xl mb-2 text-[#1c232b]">Easy to Manage</h3>
                  <p className="text-text-muted-light text-sm leading-relaxed">
                    User-friendly websites you can easily update.
                  </p>
                </div>
                <div className="group/item transition-all duration-300 hover:translate-x-1">
                  <span className="material-symbols-outlined text-text-muted-light mb-4 opacity-80">
                    trending_up
                  </span>
                  <h3 className="font-bold text-xl mb-2 text-[#1c232b]">Built to Convert</h3>
                  <p className="text-text-muted-light text-sm leading-relaxed">
                    Strategic design that turns visitors into customers.
                  </p>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold">Services We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-light  p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100  hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-100  rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-primary ">
                <span className="material-symbols-outlined">language</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Business Websites</h3>
              <p className="text-text-muted-light  text-sm leading-relaxed mb-6">
                Professional websites that build trust and represent your brand perfectly.
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
                High-converting landing pages designed to generate leads and drive action.
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
                Personal portfolio websites that showcase your work in the best way.
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
      <section className="py-24 bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Left Column (Sticky) */}
            <div className="lg:w-1/3 lg:sticky lg:top-32">
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

            {/* Right Column (Projects Stack) */}
            <div className="lg:w-2/3 flex flex-col gap-16">
              
              {/* Project 1 */}
              <Link href="https://www.shaheenflowers.ae/" target="_blank" className="group block w-full rounded-[2rem] bg-white p-4 md:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-8 bg-gray-100 relative">
                  <img
                    src="/shaheen.png"
                    alt="Shaheen Flowers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6 px-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-[#1c232b]">Shaheen Flowers</h3>
                      <span className="px-3 py-1 bg-gray-100 text-[#1c232b] text-xs font-semibold rounded-full">2025</span>
                    </div>
                    <p className="text-sm font-semibold text-emerald-700 uppercase tracking-wider mb-4">Landscaping & Plants</p>
                    <p className="text-[#1c232b] opacity-70 mb-6 leading-relaxed max-w-lg">
                      Professional landscaping company in the UAE offering garden design, annual maintenance contracts (AMC), indoor plants, outdoor landscaping, green walls, and irrigation solutions.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 border border-gray-200 text-xs font-medium rounded-full text-gray-600">Next.js</span>
                      <span className="px-3 py-1 border border-gray-200 text-xs font-medium rounded-full text-gray-600">React</span>
                      <span className="px-3 py-1 border border-gray-200 text-xs font-medium rounded-full text-gray-600">Tailwind CSS</span>
                    </div>
                  </div>
                  <div className="flex items-start md:items-end md:justify-end shrink-0">
                    <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#1c232b] group-hover:bg-[#1c232b] group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined transform group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Project 2 */}
              <Link href="https://www.npskaloor.com/" target="_blank" className="group block w-full rounded-[2rem] bg-white p-4 md:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-8 bg-gray-100 relative">
                  <img
                    src="/school.png"
                    alt="National Public School Kaloor"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6 px-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-[#1c232b]">National Public School Kaloor</h3>
                      <span className="px-3 py-1 bg-gray-100 text-[#1c232b] text-xs font-semibold rounded-full">2025</span>
                    </div>
                    <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider mb-4">Education</p>
                    <p className="text-[#1c232b] opacity-70 mb-6 leading-relaxed max-w-lg">
                      Premium CBSE school website focused on admissions, academics, student life, facilities, and seamless communication with parents.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 border border-gray-200 text-xs font-medium rounded-full text-gray-600">Next.js</span>
                      <span className="px-3 py-1 border border-gray-200 text-xs font-medium rounded-full text-gray-600">React</span>
                      <span className="px-3 py-1 border border-gray-200 text-xs font-medium rounded-full text-gray-600">Tailwind CSS</span>
                    </div>
                  </div>
                  <div className="flex items-start md:items-end md:justify-end shrink-0">
                    <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#1c232b] group-hover:bg-[#1c232b] group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined transform group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Project 3 */}
              <Link href="https://starwings-journey-redesign.vercel.app/" target="_blank" className="group block w-full rounded-[2rem] bg-white p-4 md:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-8 bg-gray-100 relative">
                  <img
                    src="/travel.png"
                    alt="Starwings Tours & Travels"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6 px-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-[#1c232b]">Starwings Tours & Travels</h3>
                      <span className="px-3 py-1 bg-gray-100 text-[#1c232b] text-xs font-semibold rounded-full">2024</span>
                    </div>
                    <p className="text-sm font-semibold text-orange-700 uppercase tracking-wider mb-4">Travel & Tourism</p>
                    <p className="text-[#1c232b] opacity-70 mb-6 leading-relaxed max-w-lg">
                      Travel website showcasing vehicle rentals, customized tour packages, transparent pricing, and WhatsApp-first customer enquiries.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 border border-gray-200 text-xs font-medium rounded-full text-gray-600">Next.js</span>
                      <span className="px-3 py-1 border border-gray-200 text-xs font-medium rounded-full text-gray-600">React</span>
                      <span className="px-3 py-1 border border-gray-200 text-xs font-medium rounded-full text-gray-600">Tailwind CSS</span>
                    </div>
                  </div>
                  <div className="flex items-start md:items-end md:justify-end shrink-0">
                    <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#1c232b] group-hover:bg-[#1c232b] group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined transform group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Project 4 */}
              <Link href="https://starwings-website.vercel.app/" target="_blank" className="group block w-full rounded-[2rem] bg-white p-4 md:p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden mb-8 bg-gray-100 relative">
                  <img
                    src="/ac.png"
                    alt="StarWings HVAC Solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-6 px-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-[#1c232b]">StarWings HVAC Solutions</h3>
                      <span className="px-3 py-1 bg-gray-100 text-[#1c232b] text-xs font-semibold rounded-full">2023</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4">Engineering</p>
                    <p className="text-[#1c232b] opacity-70 mb-6 leading-relaxed max-w-lg">
                      Corporate website presenting HVAC design, installation, maintenance services, and over 18 years of industry expertise.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 border border-gray-200 text-xs font-medium rounded-full text-gray-600">Next.js</span>
                      <span className="px-3 py-1 border border-gray-200 text-xs font-medium rounded-full text-gray-600">React</span>
                      <span className="px-3 py-1 border border-gray-200 text-xs font-medium rounded-full text-gray-600">Tailwind CSS</span>
                    </div>
                  </div>
                  <div className="flex items-start md:items-end md:justify-end shrink-0">
                    <div className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#1c232b] group-hover:bg-[#1c232b] group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined transform group-hover:rotate-45 transition-transform duration-300">arrow_outward</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA & Stats Section */}
      <section className="py-12 pb-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* CTA Banner */}
          <div className="bg-primary rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between mb-20 shadow-xl">
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-full border border-[#6c757d] bg-[#343a40] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-white text-2xl">rocket_launch</span>
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
                <span className="material-symbols-outlined text-accent text-xl">star</span>
                <h3 className="text-4xl font-extrabold text-primary">50+</h3>
              </div>
              <p className="text-text-muted-light text-sm">Projects Completed</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-accent text-xl">sentiment_satisfied</span>
                <h3 className="text-4xl font-extrabold text-primary">30+</h3>
              </div>
              <p className="text-text-muted-light text-sm">Happy Clients</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-accent text-xl">verified</span>
                <h3 className="text-4xl font-extrabold text-primary">98%</h3>
              </div>
              <p className="text-text-muted-light text-sm">Client Satisfaction</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-accent text-xl">schedule</span>
                <h3 className="text-4xl font-extrabold text-primary">2+</h3>
              </div>
              <p className="text-text-muted-light text-sm">Years of Experience</p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
