import { prefix } from '@/utils/prefix'
import Image from 'next/image'

const CompSocTitle = () => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={`${prefix}/compsoc-short.png`}
        alt="CompSoc logo"
        width={256}
        height={256}
        draggable={false}
        className="block md:hidden"
        style={{
          filter: 'drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.2))',
        }}
      />
      <Image
        src={`${prefix}/compsoc-long.png`}
        alt="CompSoc logo"
        width={516}
        height={256}
        draggable={false}
        className="hidden md:block"
        style={{
          filter: 'drop-shadow(0px 0px 50px rgba(255, 255, 255, 0.1))',
        }}
      />
      <p className="text-gray-400 text-sm md:text-lg text-center mt-4">
        University of Edinburgh&apos;s Technology society
      </p>
    </div>
  )
}

export default CompSocTitle
