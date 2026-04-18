"use client";

import { FadeUp } from "./animations";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-5 sm:px-6 bg-neutral-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight mb-3">
              Simple, transparent pricing
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-sm sm:text-base text-neutral-500 max-w-md mx-auto leading-relaxed">
              No hidden costs. No unnecessary charges.
            </p>
          </FadeUp>
        </div>

        {/* Pricing list */}
        <FadeUp delay={0.2}>
          <div className="divide-y divide-neutral-200">
            <div className="flex items-center justify-between py-5 text-sm sm:text-base">
              <span className="text-neutral-900">Website build</span>
              <span className="text-neutral-900 font-medium">
                One-time cost
              </span>
            </div>

            <div className="flex items-center justify-between py-5 text-sm sm:text-base">
              <span className="text-neutral-900">Hosting</span>
              <span className="text-neutral-500">Included (static)</span>
            </div>

            <div className="flex items-center justify-between py-5 text-sm sm:text-base">
              <span className="text-neutral-900">Server</span>
              <span className="text-neutral-500">Not required</span>
            </div>

            <div className="flex items-center justify-between py-5 text-sm sm:text-base">
              <span className="text-neutral-900">Domain</span>
              <span className="text-neutral-500">Client-owned</span>
            </div>
          </div>
        </FadeUp>

        {/* Note */}
        <FadeUp delay={0.3}>
          <p className="text-xs sm:text-sm text-neutral-500 mt-8 leading-relaxed text-center">
            Includes initial revisions. Future updates can be requested when needed.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}