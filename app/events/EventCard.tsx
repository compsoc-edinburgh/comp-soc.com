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
          <div className="pr-12">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl underline">{flagship.name}</h2>
              <h2 className="text-right">Late Feb</h2>
            </div>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit
            </p>
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
