import { Sponsor } from '@/lib/sponsor'
import { FC } from 'react'
import { prefix } from '@/utils/prefix'
import Image from 'next/image'

interface SponsorListProps {
  sponsorsList: Sponsor[]
  speed: number
  direction: string
}

const SponsorBanner: FC<SponsorListProps> = ({
  sponsorsList,
  speed,
  direction,
}) => {
  const shuffledSponsors = sponsorsList.sort(() => Math.random() - 0.5)
  const images = shuffledSponsors.map((sponsor) => ({
    id: sponsor.name,
    img: sponsor.img,
  }))

  return (
    <div className="inner">
      <div className="wrapper">
        <section
          style={
            {
              '--speed': `${speed}ms`,
              '--direction': `${direction}`,
            } as React.CSSProperties
          }
        >
          {images.map(({ id, img }) => (
            <div
              className="image flex items-center justify-center px-8"
              key={id}
            >
              <div className="relative w-32 h-16">
                <Image
                  fill
                  className="bannerimg object-contain"
                  src={`${prefix}/sponsors/${img}`}
                  alt={id}
                />
              </div>
            </div>
          ))}
        </section>
        <section
          style={
            {
              '--speed': `${speed}ms`,
              '--direction': `${direction}`,
            } as React.CSSProperties
          }
        >
          {images.map(({ id, img }) => (
            <div
              className="image flex items-center justify-center px-8"
              key={id}
            >
              <div className="relative w-32 h-16">
                <Image
                  fill
                  className="bannerimg object-contain"
                  src={`${prefix}/sponsors/${img}`}
                  alt={id}
                />
              </div>
            </div>
          ))}
        </section>
        <section
          style={
            {
              '--speed': `${speed}ms`,
              '--direction': `${direction}`,
            } as React.CSSProperties
          }
        >
          {images.map(({ id, img }) => (
            <div
              className="image flex items-center justify-center px-8"
              key={id}
            >
              <div className="relative w-32 h-16">
                <Image
                  fill
                  className="bannerimg object-contain"
                  src={`${prefix}/sponsors/${img}`}
                  alt={id}
                />
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export { SponsorBanner }
