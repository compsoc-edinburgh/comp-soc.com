import { Committee, LinkType, Role } from '@/lib/committee'

export const team2017: Committee[] = [
  {
    name: 'Qais',
    surname: 'Patankar',
    role: Role.PRESIDENT,
    image: 'qais-2.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'https://qaisjp.com' }],
  },
  {
    name: 'Elena',
    surname: 'Lapė',
    role: Role.VICE_PRESIDENT,
    image: 'elena-1.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'http://elenalape.com' }],
  },
  {
    name: 'Viktorija',
    surname: 'Lukošiūtė',
    role: Role.TREASURER,
    image: 'vik-3.jpg',
    // No URL provided
  },
  {
    name: 'Angus',
    surname: 'Shaw',
    role: Role.SECRETARY,
    image: 'angus-shaw-1.jpg',
    // No URL provided
  },
  {
    name: 'Harry',
    surname: 'Reeder',
    role: Role.TECHNICAL_SECRETARY,
    image: 'harry-1.png',
    links: [{ type: LinkType.WEBSITE, url: 'http://harryreeder.co.uk/' }],
  },
  {
    name: 'Nicholas',
    surname: 'Lynch',
    role: Role.SOCIAL_SECRETARY,
    image: 'nick-lynch-1.jpg',
    // No URL provided
  },
  {
    name: 'Dylan',
    surname: 'Oshima',
    role: Role.FIRST_YEAR_REP,
    image: 'dylan-oshima-1.jpg',
    // No URL provided
  },
  {
    name: 'Ginte',
    surname: 'Petrulionytė',
    role: Role.SECOND_YEAR_REP,
    image: 'ginte-1.jpg',
    // No URL provided
  },
  {
    name: 'William',
    surname: 'Mathewson',
    role: Role.FOURTH_YEAR_REP,
    image: 'will-1.jpg',
    // No URL provided
  },
  {
    name: 'Kit',
    surname: 'Barnes (c/o Craig Snowden)',
    role: Role.OLD_PERSON_REP,
    image: 'kit-and-craig-1.jpg',
    // No URL provided
  },
]
