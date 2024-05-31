'use client'

import JoinDiscord from '@/components/JoinDiscord'
import { useAnimatedBackground } from '@/context/AnimatedBackgroundContext'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'
import EventSection from '@/components/eventsection/EventSection'
import FAQSection from '../components/faqsection/FAQSection'
import SponsorSection from '@/components/sponsorsection/SponsorSection'
import TruncateText from '@/components/truncatetext/truncatetext'
import SIGCards from '@/components/SIGCards/SIGCards'

export default function Home() {
  const { toggleBackground } = useAnimatedBackground()
  return (
    <main className="bg-background flex items-center justify-center min-h-screen flex-col p-24">
      <div className="w-full">
        <div className="flex flex-col justify-between items-center">
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
          <button
            onClick={toggleBackground}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-lg">
            TEST: Toggle background
          </button>
        </div>
        {/* <div className="w-1/3">
        <TruncateText text={"s for our annual 24-hour hackathon, complete with food, sponsor merch, and many prizes up for grabs. s for our annual 24-hour hackathon, complete with food, sponsor merch, and many prizes up for grabs."} 
        maxHeight={100} />

        </div>
        */}

        <SIGCards />

        <EventSection></EventSection>

        <FAQSection></FAQSection>

        <SponsorSection></SponsorSection>
      </div>
    </main>
  )
}
