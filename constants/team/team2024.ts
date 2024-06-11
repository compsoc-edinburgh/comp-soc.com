import { Committee } from '@/types/team'
import { Role } from '@/types/team'
import { LinkType } from '@/types/team'

export const team2024: Committee[] = [
  {
    name: 'Vincentas',
    surname: 'Danys',
    role: Role.PRESIDENT,
    image: 'vincentas-1.jpg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/vincent-danys/',
      },
    ],
  },
  {
    name: 'Marton',
    surname: 'Nemeth',
    role: Role.VICE_PRESIDENT,
    image: 'marton-1.jpeg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/marton-csanad-nemeth-165a0822a/',
      },
    ],
  },
  {
    name: 'Elisa',
    surname: 'Fraticelli',
    role: Role.TREASURER,
    image: 'elisa.jpg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/elisa-fraticelli-379626169/',
      },
    ],
  },
  {
    name: 'Godfrey',
    surname: 'Antomarlin',
    role: Role.SECRETARY,
    image: 'godfrey-1.jpeg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/abhijit-godfrey-antomarlin/',
      },
    ],
  },
  {
    name: 'Cat',
    surname: 'M',
    role: Role.TECHNICAL_SECRETARY,
    image: 'cat-1.png',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/caterina-m/',
      },
    ],
  },
  {
    name: 'Anastasia',
    surname: 'Trainor',
    role: Role.SOCIAL_SECRETARY,
    image: 'anastasia-1.png',
  },
  {
    name: 'Agam',
    surname: 'Cohen',
    role: Role.SOCIAL_MEDIA_OFFICER,
    image: 'agam-1.png',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/agam-cohen-144427273/',
      },
    ],
  },
  {
    name: 'Lewis',
    surname: 'Simpson',
    role: Role.GRAPHIC_DESIGNER,
    image: 'lewis-1.jpg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/lewis-simpson-05a983302/',
      },
    ],
  },
  {
    name: 'Lucas',
    surname: 'Bruckbauer',
    role: Role.SECOND_YEAR_REP,
    image: 'lucas-1.png',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/lucasbruckbauer/',
      },
    ],
  },
  {
    name: 'Fergus',
    surname: 'White',
    role: Role.THIRD_YEAR_REP,
    image: 'fergus-1.png',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/fergus-white-699546214/',
      },
    ],
  },
  {
    name: 'Tomas',
    surname: 'Maillo',
    role: Role.FOURTH_YEAR_REP,
    image: 'tomas-1.png',
    links: [
      { type: LinkType.WEBSITE, url: 'https://tomasmaillo.com/' },
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/tomas-maillo/',
      },
      {
        type: LinkType.GITHUB,
        url: 'https://github.com/tomasmaillo',
      },
      {
        type: LinkType.TWITTER,
        url: 'https://x.com/tomascodes',
      },
    ],
  },
  {
    name: 'Chris',
    surname: 'Grykiel',
    role: Role.OLD_PERSON_REP,
  },
  {
    name: 'Charlotte',
    surname: 'Ausel',
    role: Role.EDI_REP,
    image: 'charlotte-1.jpg',
  },
]
