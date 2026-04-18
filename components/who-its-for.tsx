'use client'

import { FadeUp, StaggerContainer, StaggerItem, AnimatedCard } from './animations'

export function WhoItFor() {
  const audiences = [
    'Local service businesses',
    'Clinics & fitness centers',
    'Travel & tourism',
    'Consultants & professionals'
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] mb-12">
            Who It&apos;s For
          </h2>
        </FadeUp>

        <StaggerContainer delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6">
            {audiences.map((audience, idx) => (
              <StaggerItem key={idx}>
                <AnimatedCard className="p-8 bg-[#fafafa] rounded-lg">
                  <p className="text-[#0a0a0a] font-medium">{audience}</p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
