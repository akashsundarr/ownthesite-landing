import Link from 'next/link'

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#0a0a0a] mb-6 leading-tight">
          Modern business websites. Zero hosting cost.
        </h1>
        
        <p className="text-lg text-[#6b7280] mb-12 leading-relaxed max-w-2xl mx-auto">
          We design and build fast, mobile-friendly websites for small businesses that generate enquiries — without monthly server costs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/message"
            className="px-8 py-3 bg-[#000000] text-white rounded-full font-medium hover:opacity-80 transition"
          >
            Get a Quote
          </a>
          <Link 
            href="#work"
            className="px-8 py-3 border border-[#e5e7eb] text-[#0a0a0a] rounded-full font-medium hover:bg-[#fafafa] transition"
          >
            View Work
          </Link>
        </div>
      </div>
    </section>
  )
}
