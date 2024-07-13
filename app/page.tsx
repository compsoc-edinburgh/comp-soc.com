'use client'

import EventSection from '@/components/eventsection/EventSection'
import FAQSection from '../components/faqsection/FAQSection'
import SponsorSection from '@/components/sponsorsection/SponsorSection'
import SigSection from '@/components/SIGCards/SigSection'
import CompSocTitle from '@/components/CompSocTitle'
import IntroSection from '@/components/introSection/IntroSection'
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen flex-col max-w-5xl mx-auto pt-32">
      <div className="flex flex-col justify-between items-center gap-32">
        <CompSocTitle />
        <SocialLinks />
      </div>

      <IntroSection />

      <SigSection></SigSection>

      <EventSection></EventSection>

      <FAQSection></FAQSection>

      <SponsorSection></SponsorSection>
    </main>
  )
}
