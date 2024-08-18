'use client'

import EventSection from '@/components/eventsection/EventSection'
import FAQSection from '../components/faqsection/FAQSection'
import SponsorSection from '@/components/sponsorsection/SponsorSection'
import SigSection from '@/components/SIGCards/SigSection'
import WelcomeSection from '@/components/welcomesection/WelcomeSection'
import IntroSection from '@/components/introsection/IntroSection'

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen flex-col max-w-5xl mx-auto pt-32">
      <div style={{ height: 'calc(100vh - 8rem)' }}>
        <IntroSection />
      </div>

      <WelcomeSection />

      <SigSection></SigSection>

      <EventSection></EventSection>

      <FAQSection></FAQSection>

      <SponsorSection></SponsorSection>


    </main>
  )
}
