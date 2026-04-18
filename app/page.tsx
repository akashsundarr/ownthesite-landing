import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { ProblemSolution } from '@/components/problem-solution'
import { Services } from '@/components/services'
import { HowItWorks } from '@/components/how-it-works'
import { Portfolio } from '@/components/portfolio'
import { Pricing } from '@/components/pricing'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Services />
      <HowItWorks />
      <Portfolio />
      <Pricing />
      <CTASection />
      <Footer />
    </div>
  )
}
