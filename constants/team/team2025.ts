import { Committee, LinkType, Role } from '@/lib/committee'

export const team2025: Committee[] = [
  {
    name: 'Kacper',
    surname: 'Szymanski',
    role: Role.PRESIDENT,
    image: 'kacper-2.png',
    sponsorContact: true,
    sponsorEmail: 'president@comp-soc.com',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/kacper-szymanski-edi/',
      },
    ],
  },
  {
    name: 'Anna',
    surname: 'Petrusenko',
    role: Role.VICE_PRESIDENT,
    image: 'anna-1.jpg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/anna-petrusenko-0600b02b6/',
      },
      {
        type: LinkType.INSTAGRAM,
        url: 'https://www.instagram.com/petrusenkoanna',
      },
    ],
  },
  {
    name: 'Kameran',
    surname: 'Russell',
    role: Role.TREASURER,
    image: 'kameran-1.png',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/kameran-russell-238712203/',
      },
    ],
  },
  {
    name: 'Alex',
    surname: 'Davis',
    role: Role.SECRETARY,
    image: 'alex-1.JPG',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/alexander-mark-davis/',
      },
      {
        type: LinkType.WEBSITE,
        url: 'https://alexdavis.tardis.ac/',
      },
      {
        type: LinkType.GITHUB,
        url: 'https://github.com/alexDavis28/',
      },
    ],
  },
  {
    name: 'Emily',
    surname: 'M',
    role: Role.TECHNICAL_SECRETARY,
    image: 'emily-1.jpg',
    sponsorContact: false,
    sponsorEmail: 'techsec@comp-soc.com',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/emilymillerxyz/',
      },
      {
        type: LinkType.WEBSITE,
        url: 'https://emilymiller.xyz',
      },
      {
        type: LinkType.GITHUB,
        url: 'https://github.com/python151',
      },
    ],
  },
  {
    name: 'Param',
    surname: 'Mansukhani',
    role: Role.SOCIAL_SECRETARY,
    image: 'param-1.jpg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/param-mans/',
      },
    ],
  },
  {
    name: 'Tim',
    surname: 'Chan',
    role: Role.SOCIAL_MEDIA_OFFICER,
    image: 'tim-1.jpg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/yi-man-chan-6aa001289/',
      },
    ],
  },
  {
    name: 'Kay',
    surname: '',
    role: Role.GRAPHIC_DESIGNER,
    image: 'kay-1.jpg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/banburycheese/',
      },
    ],
  },
  {
    name: 'Danyil',
    surname: 'Butov',
    role: Role.SECOND_YEAR_REP,
    image: 'danyil-1.jpg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/danyil-butov/',
      },
      {
        type: LinkType.GITHUB,
        url: 'https://github.com/HJyup',
      },
      {
        type: LinkType.INSTAGRAM,
        url: 'https://www.instagram.com/danyil.butov',
      },
    ],
  },
  {
    name: 'Anya',
    surname: 'K',
    role: Role.THIRD_YEAR_REP,
    image: 'anya-1.jpg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/anya-k-a8856927b/',
      },
    ],
  },
  {
    name: 'Vojtech',
    surname: 'Janovec',
    role: Role.FOURTH_YEAR_REP,
    image: 'vojtech-1.jpg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/vjanovec/',
      },
    ],
  },
  {
    name: 'Uyi',
    surname: '',
    role: Role.OLD_PERSON_REP,
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/elisaveta-l-b3225a252/',
      },
    ],
  },
  {
    name: 'Sorana',
    surname: 'Inescu',
    role: Role.EDI_REP,
    image: 'sorana-1.jpg',
    links: [
      {
        type: LinkType.LINKEDIN,
        url: 'https://www.linkedin.com/in/sorana-ionescu-2ab9b5329/',
      },
    ],
  },
]
