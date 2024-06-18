import { Committee, Role, LinkType } from '@/types/team'

export const team2014: Committee[] = [
  {
    name: 'Angus',
    surname: 'Pearson',
    role: Role.PRESIDENT,
    image: 'angusp-1.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'http://toaster.cc' }],
  },
  {
    name: 'James',
    surname: 'Friel',
    role: Role.VICE_PRESIDENT,
    image: 'james-friel-1.jpg',
    // No URL provided
  },
  {
    name: 'Aseem',
    surname: 'Narang',
    role: Role.SECRETARY,
    image: '',
    // No URL provided
  },
  {
    name: 'Hugh',
    surname: 'McGrade',
    role: Role.TREASURER,
    image: '',
    // No URL provided
  },
  {
    name: 'Rob',
    surname: 'Tully',
    role: Role.TECHNICAL_SECRETARY,
    image: '',
    // No URL provided
  },
  {
    name: 'Hamish',
    surname: 'Hutchings',
    role: Role.SOCIAL_SECRETARY,
    image: '',
    // No URL provided
  },
  {
    name: 'Lisa',
    surname: 'Xie',
    role: Role.SECOND_YEAR_REP,
    image: '',
    // No URL provided
  },
  {
    name: 'Amy',
    surname: 'Gainford',
    role: Role.SECOND_YEAR_REP,
    image: '',
    // No URL provided
  },
  {
    name: 'Lewis',
    surname: 'Barker',
    role: Role.THIRD_YEAR_REP,
    image: '',
    // No URL provided
  },
]
