import { Committee, Role, LinkType } from '@/types/team'

export const team2016: Committee[] = [
  {
    name: 'Viktorija',
    surname: 'Lukošiūtė',
    role: Role.PRESIDENT,
    image: '',
    // No URL provided
  },
  {
    name: 'Aw Young',
    surname: 'Qingzhuo',
    role: Role.VICE_PRESIDENT,
    image: '',
    // No URL provided
  },
  {
    name: 'Simon',
    surname: 'Vahr',
    role: Role.SECRETARY,
    image: '',
    links: [{ type: LinkType.WEBSITE, url: 'http://vahr.co.uk/' }],
  },
  {
    name: 'Martynas',
    surname: 'Grigonis',
    role: Role.TREASURER,
    image: '',
    // No URL provided
  },
  {
    name: 'Joshua',
    surname: 'Green',
    role: Role.TECHNICAL_SECRETARY,
    image: '',
    // No URL provided
  },
  {
    name: 'Susanne',
    surname: 'Koster',
    role: Role.SOCIAL_SECRETARY,
    image: '',
    // No URL provided
  },
  {
    name: 'Qais',
    surname: 'Patankar',
    role: Role.FIRST_YEAR_REP,
    image: 'qais-1.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'https://qaisjp.com' }],
  },
  {
    name: 'Benedetta',
    surname: 'Mussati',
    role: Role.SECOND_YEAR_REP,
    image: '',
    // No URL provided
  },
  {
    name: 'Vesko',
    surname: 'Stefanov',
    role: Role.THIRD_YEAR_REP,
    image: '',
    // No URL provided
  },
  {
    name: 'James',
    surname: 'Friel',
    role: Role.FOURTH_YEAR_REP,
    image: '',
    // No URL provided
  },
  {
    name: 'Kit',
    surname: 'Barnes',
    role: Role.OLD_PERSON_REP,
    image: 'kit-1.jpg',
    // No URL provided
  },
]
