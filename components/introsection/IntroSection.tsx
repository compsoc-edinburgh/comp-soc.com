import React from 'react'
import SocialLinks from '../SocialLinks'
import CompSocTitle from '../CompSocTitle'

const IntroSection = () => {
  return (
    <>
      <div className="flex flex-col justify-between items-center gap-32">
        <CompSocTitle />
        <SocialLinks />
      </div>
    </>
  )
}

export default IntroSection
