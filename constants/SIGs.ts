import { SIG } from '@/types/SIG'

export const SIGs: SIG[] = [
  {
    name: 'Project Share',
    description:
      'Share what you are building with others!',
    websiteURL: 'https://projectshare.comp-soc.com/',
    icon: {
      src: 'projectshare.png',
      alt: 'ProjectShare logo',
      rounded: false,
    },
    backgroundColor: '#7816F4',
    borderColor: '#A971EF',
  },
  {
    name: 'SIGINT',
    description:
      'Cyber Security',
    websiteURL: 'https://sigint.mx/',
    icon: {
      src: 'sigint.webp',
      alt: 'SIGINT logo',
      rounded: false,
    },
    backgroundColor: '#000000',
    borderColor: '#666666',
  },
  {
    name: 'CCSIG',
    description: 'Competitve Programming',
    icon: {
      src: 'ccsig.webp',
      alt: 'CCSig logo',
      rounded: false,
    },
    backgroundColor: '#143D59',
    borderColor: '#3B6D8F',
  },
  {
    name: 'Edinburgh AI',
    description:
      'Artificial Intelligence',
    websiteURL: 'https://edinburghai.org/',
    icon: {
      src: 'edinburghai.webp',
      alt: 'Edinburgh AI logo',
      rounded: false,
    },
    backgroundColor: '#CB650F',
    borderColor: '#E3802D',
  },
  {
    name: 'TypeSIG',
    description: 'Type theory and related fields',
    websiteURL: 'https://typesig.comp-soc.com/',
    icon: {
      src: 'typesig.webp',
      alt: 'TypeSIG logo',
      rounded: true,
    },
    backgroundColor: '#018EE0',
    borderColor: '#8AC4E6',
  },
  {
    name: 'Tardis',
    description: 'Hosting and server maintenance',
    websiteURL: 'https://tardisproject.uk/',
    icon: {
      src: 'tardis.webp',
      alt: 'Tardis logo',
      rounded: false,
    },
    backgroundColor: '#295085',
    borderColor: '#3769A6',
  },
  {
    name: 'QuantSIG',
    description: 'Quantitative Finance and Algorithmic Trading',
    icon: {
      src: 'quantsig.webp',
      alt: 'QuantSig logo',
      rounded: false,
    },
    backgroundColor: '#4B3E4F',
    borderColor: '#807184',
  },
  {
    name: 'GameDevSIG',
    description: 'Game Development',
    icon: {
      src: 'gamedevsig.webp',
      alt: 'GamedevSig logo',
      rounded: false,
    },
    backgroundColor: '#000000',
    borderColor: '#3CAB98',
  },
  {
    name: 'CloudSIG',
    description:
      'Cloud Computing and AWS',
    websiteURL:
      'https://www.meetup.com/aws-cloud-club-the-university-of-edinburgh/',
    icon: {
      src: 'cloudsig.webp',
      alt: 'CloudSig logo',
      rounded: false,
    },
    backgroundColor: '#aaa',
    borderColor: '#eee',
  },
].sort(() => Math.random() - 0.5)
