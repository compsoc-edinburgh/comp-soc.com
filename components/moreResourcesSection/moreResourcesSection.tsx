import { prefix } from '@/utils/prefix'
import Heading from '../heading'
import Image from 'next/image'
import { ArrowUpRight } from 'iconoir-react'
import Link from 'next/link'

const ResourceBox = ({
  className,
  children,
  url,
}: {
  className?: string
  children: React.ReactNode
  url?: string
}) => {
  return (
    <Link
      href={url || '#'}
      target={url && url.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="group flex flex-col"
    >
      <div
        className={`relative flex flex-col border-4 rounded-sm p-4 ${className} hover:scale-[1.01] transition-all duration-100`}
      >
        {url && (
          <div className="absolute top-8 right-8 p-2 rounded-full transform translate-x-1/2 -translate-y-1/2 transition-opacity duration-100 pointer-events-none user-select-none opacity-100 group-hover:opacity-100 md:opacity-0">
            <ArrowUpRight height={32} width={32} color="white" />
          </div>
        )}
        {children}
      </div>
    </Link>
  )
}

const MoreResourcesSection = () => {
  return (
    <div id="moreResources" className="mt-20">
      <Heading title="More Resources" />
      <div className="gap-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-8">
        <ResourceBox
          className="border-[#3CA08C] flex-1"
          url="https://edinburghhoppers.com/"
        >
          <Image
            src={`${prefix}/hoppers-logo.png`}
            alt="Hoppers logo"
            width={100}
            height={100}
            priority
          />
          <h3 className="text-2xl text-[#3CA08C] mb-2">Hoppers Society</h3>
          <p>
            University of Edinburgh’s Gender Diversity in Informatics society.
            Named after famous female computer scientist Grace Hopper, they
            provide an inclusive space for gender minorities to make friends,
            have fun, and learn. Everyone is welcome, regardless of gender or
            degree!{' '}
          </p>
        </ResourceBox>
        <ResourceBox
          className="border-[#866341] flex-1"
          url="https://files.betterinformatics.com/"
        >
          <Image
            src={`${prefix}/betterinformatics-logo.png`}
            alt="BetterInformatics logo"
            width={100}
            height={100}
            priority
          />
          <h3 className="text-2xl text-[#866341] mb-2">BetterInformatics</h3>
          <p>
            Platform for students to share notes, summaries, tips and
            recommendations for courses, as well as a study platform to
            collaborate on answers to previous exams. Most visited site on
            campus during exam season!
          </p>
        </ResourceBox>
        <div className="flex flex-col flex-1 h-full justify-between gap-6">
          <ResourceBox className="border-border flex-1" url="/irc">
            <h3 className="text-2xl mb-2">IRC</h3>
            <p>Not a fan of Discord? Join us on IRC!</p>
          </ResourceBox>
          <ResourceBox
            className="border-border flex-1"
            url="https://chat.whatsapp.com/LGWXUR02DGkDuC8Y3tpg2Z"
          >
            <h3 className="text-2xl mb-2">Informatics Sport</h3>
            <p>All about inf sports teams and events!</p>
          </ResourceBox>
          <ResourceBox
            className="border-border flex-1"
            url="https://infpals.github.io/"
          >
            <h3 className="text-2xl mb-2">InfPALS</h3>
            <p>Peer support group for CS students!</p>
          </ResourceBox>
        </div>
      </div>
    </div>
  )
}

export default MoreResourcesSection
