import React, { useEffect, useState } from 'react'
import Heading from '@/components/heading'
import { SponsorBanner } from './SponsorBanner'
import './banner.css'
import { sponsors } from '@/constants/sponsors'
import HoverGif from './HoverGif'
import VariableBackgroundSwitcher from '../VariableBackgroundSwitcher'

const SponsorSection = () => {
  const [speed, setSpeed] = useState(60000)

  useEffect(() => {
    // Check if window is defined (it will be during client-side rendering)
    if (typeof window !== 'undefined') {
      setSpeed(window.innerWidth <= 768 ? 30000 : 60000)
    }
  }, [])

  return (
    <div className="my-24">
      <VariableBackgroundSwitcher activeColor="bg-black">
        <div className="flex items-center">
          <Heading customIcon={<HoverGif />} title="Partner with us" />
        </div>
        <div className="w-full lg:w-4/5 mt-6 font-space-mono">
          <p>
            CompSoc is always looking for new sponsors to support us in all that
            we do for our members. We would be happy to discuss your
            company&apos;s needs, just send us a message!
          </p>
          <br />
          <p>Meet our 2024 sponsors:</p>
        </div>
        <div className="mt-12 flex flex-col justify-center gap-12">
          <SponsorBanner
            sponsorsList={sponsors}
            speed={speed}
            direction="normal"
          />
          <SponsorBanner
            sponsorsList={sponsors}
            speed={speed}
            direction="reverse"
          />
        </div>
      </VariableBackgroundSwitcher>
    </div>
  )
}

export default SponsorSection
