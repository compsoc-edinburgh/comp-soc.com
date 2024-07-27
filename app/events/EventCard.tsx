import React, { useRef } from 'react'
import { flagships } from '@/constants/flagships'
import Image from 'next/image'
import { prefix } from '@/utils/prefix'
import { Link } from 'iconoir-react'
import FactCard from './FactCard'

const EventCard: React.FC = () => {
  return (
    <>
      {flagships.map((flagship) => (
        <div
          key={flagship.name}
          className="flex flex-col lg:flex-row p-8 justify-center rounded-lg text-white mb-8"
          style={{ backgroundColor: '#3B3B3B', border: '1px solid #7F7F7F' }}
        >
          <div className="lg:pr-8 lg:mb-0 mb-4 h-full">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4">
              <div className="flex items-center">
                <h2 className="text-2xl underline mb-2 lg:mb-0 mr-2 ">
                  {flagship.name}
                </h2>
                {flagship.link && (
                  <a href={flagship.link}>
                    <Link width={24} />
                  </a>
                )}
              </div>
              {/* <h2 className="text-left">{flagship.roughDate}</h2> */}
            </div>
            <p className="mt-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit
            </p>
            {flagship.facts && (
              <div
                className="flex space-x-4 mt-4 lg:justify-start md:justify-start justify-center"
                key={flagship.name}
              >
                {flagship.facts.map((fact, i) => (
                  <FactCard text={fact.text} number={fact.number} key={i} />
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-center md:justify-end lg:justify-end h-full">
            <div className="lg:w-[400px] h-full object-cover">
              <Image
                src={`${prefix}${flagship.image}`}
                alt={flagship.name}
                width={100}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default EventCard
