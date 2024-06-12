'use client'

import JoinDiscord from '@/components/JoinDiscord'
import { useAnimatedBackground } from '@/context/AnimatedBackgroundContext'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'
import EventSection from '@/components/eventsection/EventSection'
import FAQSection from '../components/faqsection/FAQSection'
import SponsorSection from '@/components/sponsorsection/SponsorSection'
import SigSection from '@/components/SIGCards/SigSection'
import PresidentQuoteSection from '@/components/introSection/PresidentQuoteSection'

export default function Home() {
  const { toggleBackground } = useAnimatedBackground()
  return (
    <main className="bg-background flex items-center justify-center min-h-screen flex-col p-4 md:p-24">
      <div className="w-full">
        <div className="flex flex-col justify-between items-center h-96">
          <Image
            src={`${prefix}/compsoc-long.png`}
            alt="Wide CompSoc logo"
            width={512}
            height={126}
            className="filter drop-shadow-white"
            style={{
              filter:
                'drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.1)) drop-shadow(0px 0px 197.8px rgba(255, 255, 255, 0.1))',
            }}
          />
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
