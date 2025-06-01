import { Committee, LinkType, Role } from '@/lib/committee'

export const team2012: Committee[] = [
  {
    name: 'Iain',
    surname: 'Brown',
    role: Role.PRESIDENT,
    image: '',
    links: [
      {
        type: LinkType.TWITTER,
        url: 'http://www.twitter.com/IainBrown210',
      },
    ],
  },
  {
    name: 'Craig Ross',
    surname: 'Kat Merican',
    role: Role.VICE_PRESIDENT,
    image: '',
    links: [
      {
        type: LinkType.TWITTER,
        url: 'http://www.twitter.com/ThePressCorpse_',
      },
    ],
  },
  {
    name: 'Ieva',
    surname: 'Malaševičiūtė',
    role: Role.SECRETARY,
    image: '',
    // No URL provided
  },
  {
    name: 'Jacob',
    surname: 'Essex',
    role: Role.TREASURER,
    image: '',
    // No URL provided
  },
  {
    name: 'Craig',
    surname: 'Wilkinson',
    role: Role.TECHNICAL_SECRETARY,
    image: '',
    // No URL provided
  },
  {
    name: 'Mila',
    surname: 'Kirova',
    role: Role.SOCIAL_SECRETARY,
    image: '',
    // No URL provided
  },
  {
    name: 'Maithu',
    surname: 'Venkatesh',
    role: Role.THIRD_YEAR_REP,
    image: '',
    // No URL provided
  },
]
