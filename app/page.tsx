'use client'

import JoinDiscord from '@/components/JoinDiscord'
import EventSection from '@/components/eventsection/EventSection'
import FAQSection from '../components/faqsection/FAQSection'
import SponsorSection from '@/components/sponsorsection/SponsorSection'
import SigSection from '@/components/SIGCards/SigSection'
import PresidentQuoteSection from '@/components/introSection/PresidentQuoteSection'
import CompSocTitle from '@/components/CompSocTitle'

export default function Home() {
  return (
    <main className="bg-background flex items-center justify-center min-h-screen flex-col p-4 md:p-24">
      <div className="w-full">
        <div className="flex flex-col justify-between items-center h-96">
          <CompSocTitle />

          <JoinDiscord />
        </div>

        <PresidentQuoteSection />

        <SigSection></SigSection>

        <EventSection></EventSection>

        <FAQSection></FAQSection>

        <SponsorSection></SponsorSection>
      </div>
    </main>
  )
}
