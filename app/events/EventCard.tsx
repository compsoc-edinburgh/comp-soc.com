import React from 'react'
import { flagships } from '@/constants/flagships'
import Image from 'next/image'
import { prefix } from '@/utils/prefix'

const EventCard: React.FC = () => {
  return (
    <>
      {flagships.map((flagship) => (
        <div
          key={flagship.name}
          className="flex flex-col lg:flex-row p-8 justify-center rounded-lg text-white mb-8"
          style={{ backgroundColor: '#3B3B3B' }}
        >
          <div className="lg:pr-8 lg:mb-0 mb-4">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-4">
              <h2 className="text-2xl underline mb-2 lg:mb-0">
                {flagship.name}
              </h2>
              <h2 className="text-left">{flagship.usual_date}</h2>
            </div>
            <p className="mt-4">{flagship.description}</p>
          </div>
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <Image
              src={`${prefix}${flagship.image}`}
              alt={flagship.name}
              width={100}
              height={100}
              className="object-cover w-full lg:w-[900px]"
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default EventCard
