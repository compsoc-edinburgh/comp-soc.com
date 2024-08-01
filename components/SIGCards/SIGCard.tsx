import { SIG } from '@/types/SIG'
import { prefix } from '@/utils/prefix'
import { ArrowUpRight } from 'iconoir-react'
import Image from 'next/image'

const SIGCard = ({ sig }: { sig: SIG }) => {
  return (
    <a href={sig.websiteURL} target="_blank" rel="noreferrer" className="group">
      <div
        className="font-tomorrow p-4 bg-white rounded shadow-md hover:shadow-lg transition duration-300 border-4 w-60 h-80 hover:z-[49] transform hover:scale-105"
        style={{
          backgroundColor: sig.backgroundColor,
          borderColor: sig.borderColor,
        }}
      >
        {sig.websiteURL && (
          <div className="absolute top-8 right-8 p-2 rounded-full transform translate-x-1/2 -translate-y-1/2 transition-opacity duration-100 pointer-events-none user-select-none opacity-100 group-hover:opacity-100 md:opacity-0">
            <ArrowUpRight height={32} width={32} color={sig.textColor} />
          </div>
        )}
        <div className="flex flex-col h-full">
          <Image
            width={100}
            height={100}
            src={`${prefix}/SIGs/${sig.icon.src}`}
            alt={sig.icon.alt}
            className={`w-24 h-24 mb-12 ${sig.icon.rounded}`}
          />
          <h2
            className="text-xl font-bold"
            style={{ color: sig.textColor ? sig.textColor : 'white' }}
          >
            {sig.name}
          </h2>
          <p
            className="text-sm"
            style={{ color: sig.textColor ? sig.textColor : 'white' }}
          >
            {sig.description}
          </p>
        </div>
      </div>
    </a>
  )
}

export default SIGCard
