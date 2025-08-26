import React from 'react'
import { flagships } from '@/constants/flagships'
import Image from 'next/image'
import { prefix } from '@/utils/prefix'
import { Link as LinkIcon, Calendar } from 'iconoir-react'
import FactCard from './FactCard'

const EventCard: React.FC = () => {
  return (
    <>
      {flagships.map((flagship) => (
        <div
          key={flagship.name}
          className="group mt-4 border border-border bg-foreground hover:bg-border/30 transition-all duration-200 hover:scale-[1.01] cursor-pointer"
          onClick={() => flagship.link && window.open(flagship.link, '_blank')}
        >
          <div className="p-6 flex flex-col lg:flex-row gap-6 h-full">
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-tomorrow text-white group-hover:text-csred transition-colors flex items-center gap-2 mb-3">
                    {flagship.name}
                    {flagship.link && (
                      <LinkIcon className="w-5 h-5 text-white group-hover:text-csred transition-colors" />
                    )}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-zinc-400" />
                    <span className="text-sm text-zinc-400 font-space-mono">
                      {flagship.roughDate}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-base leading-relaxed text-zinc-300">
                    {flagship.long_description}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-border/30">
                {flagship.facts && flagship.facts.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {flagship.facts.map((fact, i) => (
                      <FactCard text={fact.text} number={fact.number} key={i} />
                    ))}
                  </div>
                ) : (
                  <div className="h-6"></div>
                )}
              </div>
            </div>
            <div className="lg:w-[300px] h-48 lg:h-56 shrink-0">
              <Image
                src={`${prefix}/${flagship.image}`}
                alt={flagship.name}
                width={300}
                height={224}
                className="object-cover w-full h-full rounded-lg border border-border/30"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default EventCard
