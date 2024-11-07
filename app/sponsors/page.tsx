import React from 'react'
import SparklesText from './SparklesText'
import { sponsorContacts } from '@/constants/team'
import TeamCardLong from '@/components/teamList/TeamCardLong'
import Heading from '@/components/heading'
import { sponsors } from '@/constants/sponsors'
import SponsorCard from './SponsorCard'

export default function Sponsors() {
  function capitalizeFirstLetter(str: string): string {
    if (str.length === 0) return str
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  const renderTierSection = (tier: string) => {
    const tierSponsors = sponsors.filter((sponsor) => sponsor.tier === tier)

    if (tierSponsors.length === 0) return null

    return (
      <React.Fragment key={tier}>
        {tier === 'platinum' ? (
          <SparklesText
            sparklesCount={2}
            text={capitalizeFirstLetter(tier)}
            className="font-tomorrow text-3xl mb-8 mt-2"
            colors={{ first: '#ffffff', second: '#ffffff' }}
          />
        ) : (
          <p className="font-tomorrow text-3xl mb-8 mt-6">
            {capitalizeFirstLetter(tier)}
          </p>
        )}
        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-4 sm:justify-center">
          {tierSponsors.map((sponsor) => (
            <div key={sponsor.name} className="w-full sm:w-auto mb-4 sm:mb-0">
              <SponsorCard sponsor={sponsor} tier={sponsor.tier} />
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }

  return (
    <div className="max-w-5xl mx-auto lg:w-4/5 ">
      <div className="mb-10 mt-4">
        <Heading title="Sponsors"></Heading>
      </div>

      <p className="font-space-mono text-md mb-8">
        Our sponsors are a key part of the society, providing us with the
        resources we need to run events and support our members. We are grateful
        for their support and encourage you to check out their websites.
      </p>
      <div className="flex items-center justify-center flex-col">
        {['platinum', 'gold', 'silver', 'bronze'].map(renderTierSection)}
      </div>
      <h1 className="font-tomorrow text-3xl mt-8">Want to partner with us?</h1>
      <p className="font-space-mono text-md mt-6 mb-6">
        We are always welcoming new sponsors and would be happy to discuss your
        company&apos;s needs, just send us a message!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:min-h-[200px]">
        {sponsorContacts.map((person) => (
          <TeamCardLong key={person.name} person={person} />
        ))}
      </div>
    </div>
  )
}
