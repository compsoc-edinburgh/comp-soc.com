'use client'

import JoinDiscord from '@/components/JoinDiscord'
import { useAnimatedBackground } from '@/context/AnimatedBackgroundContext'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'
import EventSection from '@/components/eventsection/EventSection'
import FAQSection from '../components/faqsection/FAQSection'
import SponsorSection from '@/components/sponsorsection/SponsorSection'
import SIGCards from '@/components/SIGCards/SIGCards'
import SigSection from '@/components/SIGCards/SigSection'

export default function Home() {
  const { toggleBackground } = useAnimatedBackground()
  return (
    <main className="bg-background flex items-center justify-center min-h-screen flex-col p-4 md:p-24">
      <div className="w-full">
        <div className="flex flex-col justify-between items-center h-96">
          <Image
            src={`${prefix}/compsoc-short.png`}
            alt="CompSoc logo"
            width={256}
            height={256}
            draggable={false}
            className="block md:hidden"
            style={{
              filter: 'drop-shadow(0px 0px 16px rgba(255, 255, 255, 0.438))',
            }}
          />
          <Image
            src={`${prefix}/compsoc-long.png`}
            alt="CompSoc logo"
            width={516}
            height={256}
            draggable={false}
            className="hidden md:block"
            style={{
              filter: 'drop-shadow(0px 0px 16px rgba(255, 255, 255, 0.438))',
            }}
          />
          <JoinDiscord />
        </div>

        <SigSection></SigSection>

        <EventSection></EventSection>

        <FAQSection></FAQSection>

        <SponsorSection></SponsorSection>
      </div>
    </main>
  )
}
