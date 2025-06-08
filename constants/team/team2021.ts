import { Committee, LinkType, Role } from '@/lib/committee'

export const team2021: Committee[] = [
  {
    name: 'Artemis',
    surname: 'Livingstone',
    role: Role.PRESIDENT,
    image: 'saph-1.jpg',
    links: [
      { type: LinkType.GITHUB, url: 'https://github.com/social-anthrax' },
    ],
  },
  {
    name: 'Aria',
    surname: 'Shrimpton',
    role: Role.VICE_PRESIDENT,
    image: 'aria-1.png',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/oscar-shrimpton-07b62a1a5',
      },
    ],
  },
  {
    name: 'Karthik',
    surname: 'Narayanan',
    role: Role.TREASURER,
    image: 'karthik-1.jpeg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/karthik-narayanan-6ab503202',
      },
    ],
  },
  {
    name: 'Alexandra',
    surname: 'Purcarea',
    role: Role.SECRETARY,
    image: 'alexandra-1.JPEG',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/alexandra-purcarea/',
      },
    ],
  },
  {
    name: 'Yuto',
    surname: 'Takano',
    role: Role.TECHNICAL_SECRETARY,
    image: 'yuto-1.jpg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/yuto-takano/',
      },
    ],
  },
  {
    name: 'Paula',
    surname: 'Sparrow',
    role: Role.SOCIAL_SECRETARY,
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/paula-sparrow-mu%C3%B1oz-270488204',
      },
    ],
  },
  {
    name: 'Callum',
    surname: 'Leask',
    role: Role.GRAPHIC_DESIGNER,
  },
  {
    name: 'Benjamin',
    surname: 'McConville',
    role: Role.FIRST_YEAR_REP,
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/benjamin-mcconville-3a1198227',
      },
    ],
  },
  {
    name: 'Ashley',
    surname: 'Roberts',
    role: Role.THIRD_YEAR_REP,
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/ashley-roberts-57b028213',
      },
    ],
  },
  {
    name: 'Mikey',
    surname: 'Andrejczuk',
    role: Role.FOURTH_YEAR_REP,
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/michael-andrejczuk/',
      },
    ],
  },
  {
    name: 'Rokas',
    surname: 'Gudavičius',
    role: Role.OLD_PERSON_REP,
    image: 'rokas-1.jpg',
    links: [{ type: LinkType.WEBSITE, url: 'https://roxerg.github.io' }],
  },
]
