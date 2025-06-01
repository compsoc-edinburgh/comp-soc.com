import { Committee, LinkType, Role } from '@/lib/committee'

export const team2023: Committee[] = [
  {
    name: 'Fergus',
    surname: 'White',
    role: Role.PRESIDENT,
    image: 'fergus-1.png',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/fergus-white-699546214/',
      },
    ],
  },
  {
    name: 'Ali',
    surname: 'Abdelaal',
    role: Role.VICE_PRESIDENT,
    image: 'ali-1.png',
    // No URL provided
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
    name: 'Maya',
    surname: 'Copeland',
    role: Role.SECRETARY,
    image: 'maya-1.png',
    links: [{ type: LinkType.WEBSITE, url: 'https://maya.cx' }],
  },
  {
    name: 'Adam',
    surname: 'Calvert',
    role: Role.TECHNICAL_SECRETARY,
    image: 'adam-1.png',
    links: [{ type: LinkType.WEBSITE, url: 'https://acal17.github.io/' }],
  },
  {
    name: 'Charlotte',
    surname: 'Ausel',
    role: Role.SOCIAL_SECRETARY,
    image: 'charlotte-1.jpg',
    // No URL provided
  },
  {
    name: 'Yuto',
    surname: 'Takano',
    role: Role.GRAPHIC_DESIGNER,
    image: 'yuto-1.jpg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/yuto-takano/',
      },
    ],
  },
  {
    name: 'Vincentas',
    surname: 'Danys',
    role: Role.FIRST_YEAR_REP,
    image: 'vincentas-1.jpg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/vincentas-danys-9a28b921b/',
      },
    ],
  },
  {
    name: 'Arin',
    surname: 'Mukhopadhyay',
    role: Role.SECOND_YEAR_REP,
    image: 'arin-1.jpg',
    // No URL provided
  },
  {
    name: 'Tomas',
    surname: 'Maillo',
    role: Role.THIRD_YEAR_REP,
    image: 'tomas-1.png',
    links: [{ type: LinkType.WEBSITE, url: 'https://tomasmaillo.com/' }],
  },
  {
    name: 'Krzysztof',
    surname: 'Grykiel',
    role: Role.FOURTH_YEAR_REP,
    image: '',
    // No URL provided, no image provided
  },
  {
    name: 'Jinxuan',
    surname: 'Cui',
    role: Role.OLD_PERSON_REP,
    image: 'jinxuan.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'https://www.cjxol.com/' }],
  },
]
