import { linkIcons } from '@/constants/linkIcons'
import { Committee } from '@/types/team'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'
import { ArrowRight } from 'iconoir-react'

const TeamCardLong = ({ person }: { person: Committee }) => {
  return (
    <div className="bg-foreground p-4 rounded-sm shadow-lg flex flex-row gap-6 border-border border-2">
      <div className="w-[150px] h-[150px] relative overflow-hidden justify-center items-center">
        {person.image ? (
          <Image
            src={`${prefix}/team/${person.image}`}
            alt={person.name}
            className="absolute top-0 left-0 w-[150px] h-[150px] object-cover rounded-full"
            height={100}
            width={100}
            loading="lazy"
            draggable="false"
          />
        ) : (
          <div className="absolute top-0 left-0 w-full h-full object-cover rounded-full bg-background"></div>
        )}
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-md text-primary opacity-50">{person.role}</p>

        <div className="w-full">
          <div className="flex flex-wrap items-center gap-2">
            <span className="whitespace-nowrap">
              {person.name} {person.surname}
            </span>
            {person.links && (
              <div className="flex flex-wrap gap-2">
                {person.links.map((link, index) => (
                  <span key={index} className="shrink-0">
                    {linkIcons[link.type]}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="text-sm mt-6 hover:underline">
          <a href={`mailto:${person.sponsorEmail || 'partners@comp-soc.com'}`}>
            <button className="inline-flex text-md font-space-mono border border-white px-4 py-2 rounded-md hover:bg-white hover:text-csgrey transition-colors duration-300">
              Get in touch <ArrowRight className="ml-2" />
            </button>
          </a>{' '}
        </div>
      </div>
    </div>
  )
}

export default TeamCardLong
