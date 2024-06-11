import { Committee, Role, LinkType } from '@/types/team'

export const team2014: Committee[] = [
  {
    name: 'Lisa',
    surname: 'Xie',
    role: Role.PRESIDENT,
    image: '',
    // No URL provided
  },
  {
    name: 'William',
    surname: 'Mathewson',
    role: Role.VICE_PRESIDENT,
    image: '',
    // No URL provided
  },
  {
    name: 'Harjyot',
    surname: 'Singh',
    role: Role.SECRETARY,
    image: '',
    // No URL provided
  },
  {
    name: 'Andreea',
    surname: 'Cucu',
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
    name: 'Craig',
    surname: 'Ross',
    role: Role.SOCIAL_SECRETARY,
    image: '',
    // No URL provided
  },
  {
    name: 'Viktorija',
    surname: 'Lukosiute',
    role: Role.FIRST_YEAR_REP,
    image: 'vik-1.jpg',
  },
  {
    name: 'Mihai',
    surname: 'Visuian',
    role: Role.SECOND_YEAR_REP,
    image: '',
    // No URL provided
  },
  {
    name: 'Simon',
    surname: 'Vahr',
    role: Role.THIRD_YEAR_REP,
    image: '',
    links: [{ type: LinkType.WEBSITE, url: 'http://vahr.co.uk/' }],
  },
  {
    name: 'Paul',
    surname: 'Scherer',
    role: Role.FOURTH_YEAR_REP,
    image: '',
    // No URL provided
  },
]
