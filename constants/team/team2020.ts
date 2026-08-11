import { Committee, LinkType, Role } from '@/lib/committee'

export const team2020: Committee[] = [
  {
    name: 'Alexandra',
    surname: 'Purcarea',
    role: Role.PRESIDENT,
    image: 'alexandra-1.webp',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/alexandra-purcarea/',
      },
    ],
  },
  {
    name: 'Tudor',
    surname: 'Finaru',
    role: Role.VICE_PRESIDENT,
    image: 'tudor-1.webp',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/tudor-finaru-b1239a194/',
      },
    ],
  },
  {
    name: 'Anabel',
    surname: 'Yong',
    role: Role.TREASURER,
  },
  {
    name: 'Ananya',
    surname: 'Majumdar',
    role: Role.SECRETARY,
    image: 'ananya-1.webp',
  },
  {
    name: 'Samuel',
    surname: 'Macleod',
    role: Role.TECHNICAL_SECRETARY,
    image: 'samuel-1.webp',
  },
  {
    name: 'Daniel',
    surname: 'Kirkman',
    role: Role.SOCIAL_SECRETARY,
    image: 'daniel-1.webp',
    links: [{ type: LinkType.WEBSITE, url: 'https://djkirkman.github.io' }],
  },
  {
    name: 'Ryan',
    surname: 'Schuller',
    role: Role.GRAPHIC_DESIGNER,
    image: 'ryan-1.webp',
    links: [{ type: LinkType.WEBSITE, url: 'https://ryanschuller.com' }],
  },
  {
    name: 'Artemis',
    surname: 'Livingstone',
    role: Role.FIRST_YEAR_REP,
  },
  {
    name: 'Advaith',
    surname: 'Sai',
    role: Role.SECOND_YEAR_REP,
  },
  {
    name: 'Elspeth',
    surname: 'Smith',
    role: Role.THIRD_YEAR_REP,
    image: 'elspeth-1.webp',
  },
  {
    name: 'Rokas',
    surname: 'Gudavičius',
    role: Role.FOURTH_YEAR_REP,
    image: 'rokas-1.webp',
    links: [{ type: LinkType.WEBSITE, url: 'https://roxerg.github.io' }],
  },
]
