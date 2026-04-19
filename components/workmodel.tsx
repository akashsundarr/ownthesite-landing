'use client'

import { FadeUp } from './animations'

const CheckIcon = ({ className }) => (
  <svg 
    className={`w-5 h-5 flex-shrink-0 ${className}`} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export function WorkModel() {
  return (
    <section id = "pricing" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-4">
              Simple pricing. No surprises.
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-base text-gray-500 max-w-md mx-auto">
              Choose the engagement model that best fits your budget and long-term goals.
            </p>
          </FadeUp>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* Option 1: One-Time Build */}
          <FadeUp>
            <div className="p-8 md:p-10 rounded-3xl border border-gray-200 h-full flex flex-col hover:border-gray-300 transition-colors duration-300">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black tracking-tight">
                  One-Time Build
                </h3>
                <p className="text-sm text-gray-500 mt-2 font-medium">
                  Pay once, own the code forever.
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-black">100%</span>
                    <span className="text-gray-500 font-medium">upfront fee</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 text-gray-600 flex-1">
                <li className="flex items-start gap-3">
                  <CheckIcon className="text-black mt-0.5" />
                  <span>Full ownership of the codebase and assets</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="text-black mt-0.5" />
                  <span>Deploy anywhere without vendor lock-in</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="text-black mt-0.5" />
                  <span>One-time setup with zero recurring agency fees</span>
                </li>
              </ul>

              <button className="mt-10 w-full py-3.5 rounded-xl border border-gray-200 text-black font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
                Choose One-Time
              </button>

            </div>
          </FadeUp>

          {/* Option 2: Retainer / Subscription */}
          <FadeUp delay={0.1}>
            <div className="relative p-8 md:p-10 rounded-3xl bg-black text-white h-full flex flex-col shadow-2xl shadow-gray-900/20">

              {/* Badge */}
              <div className="absolute -top-3.5 left-8">
                <span className="bg-white text-black text-xs px-4 py-1.5 rounded-full font-bold tracking-wide uppercase">
                  Recommended
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Ongoing Partnership
                </h3>
                <p className="text-sm text-gray-400 mt-2 font-medium">
                  Lower initial cost + managed support.
                </p>

                <div className="mt-6 pt-6 border-t border-gray-800">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-white">~60%</span>
                    <span className="text-gray-400 font-medium">upfront + yearly</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-4 text-gray-300 flex-1">
                <li className="flex items-start gap-3">
                  <CheckIcon className="text-white mt-0.5" />
                  <span>Reduced initial build cost</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="text-white mt-0.5" />
                  <span>We handle all hosting, maintenance, and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="text-white mt-0.5" />
                  <span>Priority support and ongoing feature requests</span>
                </li>
              </ul>

              <button className="mt-10 w-full py-3.5 rounded-xl bg-white text-black font-bold hover:bg-gray-100 hover:scale-[1.02] transition-all duration-200">
                Choose Partnership
              </button>

            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}