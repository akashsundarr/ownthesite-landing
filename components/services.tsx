"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

export function Services() {
  const items = [
    { service: "Business websites", audience: "for local service businesses" },
    {
      service: "Service websites",
      audience: "for clinics and fitness centers",
    },
    { service: "Landing pages", audience: "for travel and tourism businesses" },
    {
      service: "Portfolio websites",
      audience: "for consultants and freelancers",
    },
    {
      service: "Company profile websites",
      audience: "for shops and showrooms",
    },
    {
      service: "Business websites",
      audience: "for real estate and property listings",
    },
  ];

  return (
    <section className="py-24 px-5 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <FadeUp>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 tracking-tight mb-4">
              What we build
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-sm sm:text-base text-neutral-500 max-w-md mx-auto leading-relaxed">
              Websites built for real businesses and real use cases.
            </p>
          </FadeUp>
        </div>

        {/* Grid */}
        <StaggerContainer delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {items.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="group p-6 sm:p-7 rounded-2xl bg-neutral-50 hover:bg-neutral-100 transition-all duration-200 h-full flex flex-col justify-between">
                  {/* Service */}
                  <span className="text-base sm:text-lg font-medium text-neutral-900 leading-snug">
                    {item.service}
                  </span>

                  {/* Audience */}
                  <span className="text-sm sm:text-base text-neutral-500 mt-4 leading-relaxed">
                    {item.audience}
                  </span>

                  {/* Arrow */}
                  <span className="mt-6 text-neutral-300 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}