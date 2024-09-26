import { SIG } from '@/types/SIG'

// Rounded property can be 'rounded-full', 'rounded-lg', 'rounded-none'...
// For other rounded corners, google "tailwindcss rounded corners" and find the class you want

export const SIGs: SIG[] = [
  {
    name: 'Project Share',
    description: 'Share what you are building with others!',
    websiteURL: 'https://projectshare.comp-soc.com/',
    calendarURL:
      'c_78e0084b4542572dfbd710bce8243f0e7721a211db4b5567b795d94fce574d18@group.calendar.google.com',
    icon: {
      src: 'projectshare.png',
      alt: 'ProjectShare logo',
      rounded: 'rounded-lg',
    },
    backgroundColor: '#7816F4',
    borderColor: '#A971EF',
    showCard: true,
  },
  {
    name: 'SIGINT',
    description: 'Cyber Security',
    websiteURL: 'https://sigint.mx/',
    icon: {
      src: 'sigint.webp',
      alt: 'SIGINT logo',
      rounded: 'rounded-lg',
    },
    backgroundColor: '#000000',
    borderColor: '#666666',
    calendarURL:
      'c_d62500f1c180c1f543977472418d5720ec4e86c7ee48e2feabdda0cd90627f20@group.calendar.google.com',
    showCard: true,
  },
  {
    name: 'CCSIG',
    description: 'Competitve Programming',
    websiteURL: 'https://ccsig.comp-soc.com/',
    icon: {
      src: 'ccsig.webp',
      alt: 'CCSig logo',
      rounded: 'rounded-full',
    },
    backgroundColor: '#143D59',
    borderColor: '#3B6D8F',
    calendarURL:
      'c_1b5f258a2c0cb8101871b6bd1a2c04073db53a445e8afb041cb9b1af90ff9d83@group.calendar.google.com',
    showCard: true,
  },
  {
    name: 'Edinburgh AI',
    description: 'Artificial Intelligence',
    websiteURL: 'https://edinburghai.org/',
    icon: {
      src: 'edinburghai.webp',
      alt: 'Edinburgh AI logo',
      rounded: 'rounded-lg',
    },
    backgroundColor: '#CB650F',
    borderColor: '#E3802D',
    calendarURL:
      'c_e69cdedb82052cc1a74aea5b60bcbf3648c992a8c9a7fbd24745ef897770a2f5@group.calendar.google.com',
    showCard: true,
  },
  {
    name: 'TypeSig',
    description: 'Type theory and related fields',
    websiteURL: 'https://typesig.pl/',
    icon: {
      src: 'typesig.webp',
      alt: 'TypeSig logo',
      rounded: 'rounded-none',
    },
    backgroundColor: '#008EE0',
    borderColor: '#8AC4E6',
    calendarURL:
      'c_efdb7e98ec82f850eccd0d988409bcaf91a80d19ebb60caec03e3ca5345863fb@group.calendar.google.com',
    showCard: true,
  },
  {
    name: 'Tardis',
    description: 'Hosting and server maintenance',
    websiteURL: 'https://tardisproject.uk/',
    icon: {
      src: 'tardis.webp',
      alt: 'Tardis logo',
      rounded: 'rounded-lg',
    },
    backgroundColor: '#295085',
    borderColor: '#3769A6',
    calendarURL:
      'c_9644523f7ecf40bbf33dea793c83906156b78e5db4b2014e7b0622df1f29d742@group.calendar.google.com',
    showCard: true,
  },
  {
    name: 'quantsig',
    description:
      'Anything and everything to do with quantitative finance and algorithmic trading',
    icon: {
      src: 'quantsig.png',
      alt: 'QuantSig logo',
      rounded: 'rounded-full',
    },
    backgroundColor: '#fffcf4',
    borderColor: '#fba308',
    textColor: '#843414',
    websiteURL: 'https://quantsig.org/',
    calendarURL:
      'c_629efcdcd3e1a5acec8b709303206758c5b588654bd6ec95acffed9597bc6161@group.calendar.google.com',
    showCard: true,
  },
  {
    name: 'GameDevSIG',
    description: 'Game Development',
    icon: {
      src: 'gamedevsig.webp',
      alt: 'GamedevSig logo',
      rounded: 'rounded-full',
    },
    backgroundColor: '#000000',
    borderColor: '#3CAB98',
    calendarURL:
      'c_58a50415d675c87a68a110fc66e86cac5ff113d6a4e9ac4cd08501d7f949bffb@group.calendar.google.com',
    showCard: true,
  },
  {
    name: 'CloudSIG',
    description: 'An AWS Cloud Club',
    icon: {
      src: 'CloudSIGLogo.png',
      alt: 'CloudSig logo',
      rounded: 'rounded-lg',
    },
    backgroundColor: '#FF9A02',
    borderColor: '#F1A430',
    websiteURL:
      'https://www.meetup.com/aws-cloud-club-the-university-of-edinburgh',
    calendarURL:
      'c_8251e2c2a6bdc88406401f582ca996f087aea223665091d56b822bf99779e5a4@group.calendar.google.com',
    showCard: true,
  },
  {
    name: 'BitSIG',
    description:
      'OS, computer networks, computer architectures, parallel and distributed systems.',
    icon: {
      src: 'bitsig.png',
      alt: 'the bitsig logo',
      rounded: 'rounded-lg',
    },
    backgroundColor: '#FFFFFF',
    textColor: '#eb1516',
    websiteURL: 'https://discord.gg/FQuQZHnx4r',
    borderColor: '#eb1516',
    calendarURL:
      'c_85d2fd63d7ddc9671768fc01f813e1debac2c2dfbbe3a2903051767beb2cff0f@group.calendar.google.com',
    showCard: true,
  },
  {
    name: 'Flagship',
    description: '',
    icon: {
      src: 'compsoc-short.png',
      alt: 'the compsoc logo',
      rounded: 'rounded-none',
    },
    backgroundColor: '#CE3234',
    textColor: '#ffffff',
    websiteURL: '',
    borderColor: '',
    calendarURL:
      'c_d9ed90437b85f9f70111ed1576450106ba39ca8e46e94051bf53c9aa2c8a3735@group.calendar.google.com',
    showCard: false,
  },
  {
    name: 'CompSoc',
    description: '',
    icon: {
      src: 'compsoc-short.png',
      alt: 'the compsoc logo',
      rounded: 'rounded-none',
    },
    backgroundColor: '#CE3234',
    textColor: '#ffffff',
    websiteURL: '',
    borderColor: '',
    calendarURL:
      'comp-soc.com_1k2f1gda8js9nav1ilr5g5h6vk@group.calendar.google.com',
    showCard: false,
  },
]
