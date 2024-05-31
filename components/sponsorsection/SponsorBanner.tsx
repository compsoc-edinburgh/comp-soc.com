import { Sponsor } from "@/app/types";
import { FC } from "react";
import { prefix } from "@/utils/prefix";
import Image from "next/image";

interface SponsorListProps {
  sponsorsList: Sponsor[];
  speed: number;
  direction: string;
}

const SponsorBanner: FC<SponsorListProps> = ({
  sponsorsList,
  speed,
  direction,
}) => {
  const shuffledSponsors = sponsorsList.sort(() => Math.random() - 0.5);
  const images = shuffledSponsors.map((sponsor) => ({
    id: sponsor.name,
    img: sponsor.img,
  }));

  return (
    <div className="inner">
      <div className="wrapper">
        <section
          style={{ "--speed": `${speed}ms`, "--direction": `${direction}` } as React.CSSProperties}
        >
          {images.map(({ id, img }) => (
            <div className="image" key={id}>
              <Image
                height={100}
                width={225}
                className="bannerimg"
                src={`${prefix}/sponsors/${img}`}
                alt={id}
              />
            </div>
          ))}
        </section>
        <section
          style={{ "--speed": `${speed}ms`, "--direction": `${direction}` } as React.CSSProperties}
        >
          {images.map(({ id, img }) => (
            <div className="image" key={id}>
              <Image
                height={100}
                width={225}
                className="bannerimg"
                src={`${prefix}/sponsors/${img}`}
                alt={id}
              />
            </div>
          ))}
        </section>
        <section
          style={{ "--speed": `${speed}ms`, "--direction": `${direction}` } as React.CSSProperties}
        >
          {images.map(({ id, img }) => (
            <div className="image" key={id}>
              <Image
                height={100}
                width={225}
                className="bannerimg"
                src={`${prefix}/sponsors/${img}`}
                alt={id}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export { SponsorBanner };
