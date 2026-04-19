"use client";

import { ArrowRight, Wrench, Activity, Plane, UserCircle, Store, Home } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

export function Services() {
  const items = [
    { 
      service: "Business Websites", 
      audience: "For local service businesses",
      icon: Wrench
    },
    {
      service: "Service Websites",
      audience: "For clinics and fitness centers",
      icon: Activity
    },
    { 
      service: "Landing Pages", 
      audience: "For travel and tourism businesses",
      icon: Plane
    },
    {
      service: "Portfolio Websites",
      audience: "For consultants and freelancers",
      icon: UserCircle
    },
    {
      service: "Company Profiles",
      audience: "For shops and showrooms",
      icon: Store
    },
    {
      service: "Property Listings",
      audience: "For real estate businesses",
      icon: Home
    },
  ];

  return (
    <section className="py-28 px-5 sm:px-6 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tighter mb-4">
                What we build
              </h2>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-lg text-neutral-500 font-medium leading-relaxed">
                High-performance digital assets engineered for real businesses, specific industries, and actual use cases.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Grid */}
        <StaggerContainer delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => {
              const Icon = item.icon;
              
              return (
                <StaggerItem key={idx}>
                  <div className="group p-8 rounded-3xl bg-white border border-neutral-200 hover:border-black transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:shadow-neutral-900/5 relative overflow-hidden cursor-pointer">
                    
                    {/* Icon Container */}
                    <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center mb-8 border border-neutral-100 group-hover:bg-black group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-neutral-600 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black tracking-tight mb-2">
                        {item.service}
                      </h3>
                      <p className="text-sm text-neutral-500 font-medium leading-relaxed">
                        {item.audience}
                      </p>
                    </div>

                    {/* Animated Arrow */}
                    {/* <div className="mt-8 flex items-center text-sm font-bold text-neutral-400 group-hover:text-black transition-colors duration-300">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div> */}
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
        
      </div>
    </section>
  );
}