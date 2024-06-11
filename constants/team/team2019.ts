import { Committee, Role, LinkType } from '@/types/team'

export const team2019: Committee[] = [
  {
    name: 'Kyle',
    surname: 'Cotton',
    role: Role.PRESIDENT,
    image: 'kyle-2.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'https://kylecotton.github.io' }],
  },
  {
    name: 'Dee',
    surname: 'Yeum',
    role: Role.VICE_PRESIDENT,
    image: 'dee-1.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'https://chefyeum.com' }],
  },
  {
    name: 'Elspeth',
    surname: 'Smith',
    role: Role.TREASURER,
    image: 'elspeth-1.jpg',
  },
  {
    name: 'Lars Thalian',
    surname: 'Morstad',
    role: Role.SECRETARY,
    image: 'lars-1.jpg',
  },
  {
    name: 'Patrick',
    surname: 'Kage',
    role: Role.TECHNICAL_SECRETARY,
    image: 'patrick-1.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'https://kage.dev' }],
  },
  {
    name: 'Lorenzo',
    surname: 'Baldini',
    role: Role.SOCIAL_SECRETARY,
    image: 'lorenzo-1.jpg',
  },
  {
    name: 'Ryan',
    surname: 'Schuller',
    role: Role.GRAPHIC_DESIGNER,
    image: 'ryan-1.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'https://ryanschuller.com' }],
  },
  {
    name: 'Yannik',
    surname: 'Nelson',
    role: Role.SECOND_YEAR_REP,
    image: 'yannik-1.jpg',
  },
  {
    name: 'Rokas',
    surname: 'Gudavičius',
    role: Role.THIRD_YEAR_REP,
    image: 'rokas-1.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'https://roxerg.github.io' }],
  },
  {
    name: 'Tony',
    surname: 'Duggan',
    role: Role.FOURTH_YEAR_REP,
    image: 'tony-1.jpg',
  },
]
