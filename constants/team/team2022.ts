import { Committee, LinkType, Role } from '@/lib/committee'

export const team2022: Committee[] = [
  {
    name: 'Benjamin',
    surname: 'McConville',
    role: Role.PRESIDENT,
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/benjamin-mcconville-3a1198227',
      },
    ],
  },
  {
    name: 'Krzysztof',
    surname: 'Grykiel',
    role: Role.VICE_PRESIDENT,
  },
  {
    name: 'Sophie',
    surname: 'Bata-Madden',
    role: Role.TREASURER,
    image: 'sophie-1.png',
  },
  {
    name: 'Maya',
    surname: 'Copeland',
    role: Role.SECRETARY,
    image: 'maya-1.png',
    links: [{ type: LinkType.WEBSITE, url: 'https://maya.cx' }],
  },
  {
    name: 'Jacob',
    surname: 'Walters',
    role: Role.TECHNICAL_SECRETARY,
    links: [{ type: LinkType.WEBSITE, url: 'https://jacobwalte.rs' }],
  },
  {
    name: 'Amy',
    surname: 'Yin',
    role: Role.SOCIAL_SECRETARY,
    image: 'amy-1.jpg',
  },
  {
    name: 'Margo',
    surname: 'Tsugorka',
    role: Role.GRAPHIC_DESIGNER,
    image: 'margo-1.jpg',
  },
  {
    name: 'Fergus',
    surname: 'White',
    role: Role.FIRST_YEAR_REP,
  },
  {
    name: 'Charlotte',
    surname: 'Ausel',
    role: Role.SECOND_YEAR_REP,
    image: 'charlotte-1.jpg',
  },
  {
    name: 'Enes',
    surname: 'Aydogan',
    role: Role.THIRD_YEAR_REP,
  },
  {
    name: 'Dee',
    surname: 'Yeum',
    role: Role.FOURTH_YEAR_REP,
  },
  {
    name: 'Siang Jun',
    surname: 'Teo',
    role: Role.OLD_PERSON_REP,
  },
]
