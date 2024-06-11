import { linkIcons } from '@/constants/linkIcons'
import { Committee } from '@/types/team'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'

const TeamCard = ({ person }: { person: Committee }) => {
  return (
    <div className="bg-foreground p-4 rounded-sm shadow-lg flex flex-col gap-4 border-border border-2">
      <div className="w-full pt-[100%] relative overflow-hidden">
        {person.image ? (
          <Image
            src={`${prefix}/team/${person.image}`}
            alt={person.name}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-full"
            height={100}
            width={100}
            loading="lazy"
            draggable="false"
          />
        ) : (
          <div className="absolute top-0 left-0 w-full h-full object-cover rounded-full bg-background"></div>
        )}
      </div>
      <div className="flex flex-col">
        <p className="text-xs text-primary opacity-50">{person.role}</p>
        <h1>
          {person.name} <span className="opacity-50"> {person.surname}</span>
        </h1>

        <div className="flex space-x-2 mt-1">
          {person.links &&
            person.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className="opacity-50 hover:opacity-100 inline-block"
              >
                {linkIcons[link.type]}
              </a>
            ))}
        </div>
      </div>
    </div>
  )
}

export default TeamCard
