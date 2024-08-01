import React, { useEffect, useState } from 'react'
import Heading from '@/components/heading'
import { SponsorBanner } from './SponsorBanner'
import './banner.css'
import { sponsors } from '@/constants/sponsors'
import HoverGif from './HoverGif'
import VariableBackgroundSwitcher from '../VariableBackgroundSwitcher'
import { MdArrowForward } from 'react-icons/md'

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
            Many of our activities at CompSoc wouldn’t be possible without the
            support we receive from our wonderful partners. We are eternally
            grateful for their support over the years. We are always welcoming
            new partnerships and would be happy to discuss your company's needs,
            just send us a message!
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
        {/* <button className="bg-csred font-space-mono rounded-lg py-2 px-4 text-white">Get in touch</button> */}
        <div className="flex items-center">
          <a href="mailto:partners@comp-soc.com">
            <button className="bg-red-600 font-space-mono rounded-lg py-2 px-4 text-white inline-flex items-center mt-2">
              Get in Touch <MdArrowForward className="ml-2" />
            </button>
          </a>
        </div>
      </VariableBackgroundSwitcher>
    </div>
  )
}

export default SponsorSection
