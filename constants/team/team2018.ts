import { Committee, LinkType, Role } from '@/lib/committee'

export const team2018: Committee[] = [
  {
    name: 'Elspeth',
    surname: 'Smith',
    role: Role.PRESIDENT,
    image: 'elspeth-1.jpg',
    // No URL provided
  },
  {
    name: 'Rokas',
    surname: 'Gudavičius',
    role: Role.VICE_PRESIDENT,
    image: 'rokas-1.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'https://roxerg.github.io' }],
  },
  {
    name: 'Joao',
    surname: 'Maio',
    role: Role.TREASURER,
    image: 'joao-1.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'https://jmaio.github.io/' }],
  },
  {
    name: 'Mo',
    surname: 'Javad',
    role: Role.SECRETARY,
    image: 'mo-1.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'http://mojavad.com' }],
  },
  {
    name: 'Elena',
    surname: 'Lapė',
    role: Role.HACKATHON_SECRETARY,
    image: 'elena-2.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'http://elenalape.com' }],
  },
  {
    name: 'Patrick',
    surname: 'Kage',
    role: Role.TECHNICAL_SECRETARY,
    image: 'patrick-1.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'https://kagelabs.org' }],
  },
  {
    name: 'Tony',
    surname: 'Duggan',
    role: Role.SOCIAL_SECRETARY,
    image: 'tony-1.jpg',
    // No URL provided
  },
  {
    name: 'Kyle',
    surname: 'Cotton',
    role: Role.FIRST_YEAR_REP,
    image: 'kyle-1.jpg',
    // No URL provided
  },
  {
    name: 'Dylan',
    surname: 'Oshima',
    role: Role.SECOND_YEAR_REP,
    image: 'dylan-oshima-1.jpg',
    // No URL provided
  },
  {
    name: 'Likhitha',
    surname: 'Sai',
    role: Role.THIRD_YEAR_REP,
    image: 'likhitha-1.jpg',
    // No URL provided
  },
  {
    name: 'Craig',
    surname: 'Snowden',
    role: Role.OLD_PERSON_REP,
    image: 'craig-1.jpg',
    // No URL provided
  },
]
