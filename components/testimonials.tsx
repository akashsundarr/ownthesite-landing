"use client";

import { Star } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

type Testimonial = {
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "NPS Kaloor Team",
      location: "Kochi, India",
      role: "Educational Institution",
      rating: 5,
      quote:
        "The website presents our school professionally and makes it much easier for parents to access important information and admissions details.",
    },
    {
      name: "Shaheen Flowers",
      location: "Dubai, UAE",
      role: "Landscaping Company",
      rating: 5,
      quote:
        "The new website clearly showcases our services and has improved the quality of enquiries we receive from potential clients across the UAE.",
    },
    {
      name: "Starwings Tours & Travels",
      location: "Kerala, India",
      role: "Travel Agency",
      rating: 5,
      quote:
        "The website is fast, easy to navigate, and helps customers reach us directly through WhatsApp, resulting in more enquiries and bookings.",
    },
  ];

  // Helper function to get initials for the avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <section className="py-28 px-5 sm:px-6 bg-[#fafafa] border-t border-neutral-200">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-4">
              Trusted by real businesses.
            </h2>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-lg text-neutral-500 max-w-md mx-auto font-medium">
              Engineered for clarity, speed, and driving actual revenue.
            </p>
          </FadeUp>
        </div>

        {/* Testimonials Grid */}
        <StaggerContainer delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <StaggerItem key={i}>
                <div className="group relative p-8 md:p-10 border border-neutral-200 rounded-3xl bg-white h-full flex flex-col overflow-hidden transition-all duration-300 hover:border-black hover:shadow-2xl hover:shadow-neutral-900/5 hover:-translate-y-1">
                  {/* Decorative Background Quote */}
                  <div className="absolute -top-4 -right-2 text-9xl font-serif text-neutral-50 leading-none select-none group-hover:text-neutral-100 transition-colors duration-300 z-0">
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={16}
                        className="fill-black text-black"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-base text-neutral-600 leading-relaxed mb-10 relative z-10 font-medium flex-1">
                    "{t.quote}"
                  </p>

                  {/* Client Meta with Avatar */}
                  <div className="flex items-center gap-4 relative z-10 pt-6 border-t border-neutral-100">
                    {/* Avatar Pill */}
                    <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-sm font-bold text-black group-hover:bg-black group-hover:text-white transition-colors duration-300 shrink-0">
                      {getInitials(t.name)}
                    </div>

                    <div className="flex flex-col">
                      <span className="text-base font-bold text-black tracking-tight">
                        {t.name}
                      </span>
                      <span className="text-xs font-medium text-neutral-500 uppercase tracking-widest mt-0.5">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
