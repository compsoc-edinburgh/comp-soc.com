'use client'

import EventSection from '@/components/eventsection/EventSection'
import FAQSection from '../components/faqsection/FAQSection'
import SponsorSection from '@/components/sponsorsection/SponsorSection'
import SigSection from '@/components/SIGCards/SigSection'
import WelcomeSection from '@/components/welcomesection/WelcomeSection'
import IntroSection from '@/components/introsection/IntroSection'
import MoreResourcesSection from '@/components/moreResourcesSection/moreResourcesSection'
// import SocialSection from '@/components/socialsection/SocialSection'
import { useEffect } from 'react'
import { scrollToAnchor } from '@/utils/scrollToAnchor'

export default function Home() {
  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash) {
        scrollToAnchor(hash)
      }
    }
    handleScrollToHash()
    window.addEventListener('hashchange', handleScrollToHash)
    return () => {
      window.removeEventListener('hashchange', handleScrollToHash)
    }
  }, [])

  return (
    <main className="flex items-center justify-center min-h-screen flex-col max-w-5xl mx-auto pt-32">
      <div style={{ height: 'calc(100vh - 8rem)' }}>
        <IntroSection />
      </div>

      <WelcomeSection />

      <SigSection></SigSection>

      <EventSection></EventSection>

      <FAQSection></FAQSection>

      <MoreResourcesSection></MoreResourcesSection>

      <SponsorSection></SponsorSection>

      {/* <SocialSection></SocialSection> */}
    </main>
  )
}
