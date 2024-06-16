import React, { useRef } from 'react'
import { flagships } from '@/constants/flagships'
import Image from 'next/image'
import { prefix } from '@/utils/prefix'

const EventCard: React.FC = () => {
  return (
    <>
      {flagships.map((flagship) => (
        <div
          key={flagship.name}
          className="flex p-8 justify-center rounded-lg text-white mb-8"
          style={{ backgroundColor: '#3B3B3B' }}
        >
          <div>
            <h2 className="text-2xl underline">{flagship.name}</h2>
            <p>{flagship.description}</p>
          </div>
          <Image
            src={`${prefix}${flagship.image}`}
            alt={flagship.name}
            width={300}
            height={100}
          />
        </div>
      ))}
    </>
  )
}

export default EventCard
