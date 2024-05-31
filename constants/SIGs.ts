import { SIG } from '@/types/SIG'

export const SIGs: SIG[] = [
  {
    name: 'Project Share',
    description:
      'A SIG for sharing projects Dolor id do mollit. Excepteur adipisicing velit consectetur veniam aliqua laboris et quis est minim sit in. Deserunt Lorem veniam veniam',
    websiteURL: 'https://projectshare.comp-soc.com/',
    icon: {
      src: 'projectshare.png',
      alt: 'SIGINT logo',
      rounded: false,
    },
    backgroundColor: '#7816F4',
    borderColor: '#A971EF',
  },
  {
    name: 'SIGINT',
    description:
      'A SIG for sharing projects Dolor id do mollit. Excepteur adipisicing velit consectetur veniam aliqua laboris et quis est minim sit in. Deserunt Lorem veniam veniam',
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
    description: 'A SIG for sharing projects',
    icon: {
      src: 'ccsig.webp',
      alt: 'SIGINT logo',
      rounded: false,
    },
    backgroundColor: '#143D59',
    borderColor: '#3B6D8F',
  },
  {
    name: 'Edinburgh AI',
    description:
      'A SIG for sharing projects Dolor id do mollit. Excepteur adipisicing velit consectetur veniam aliqua laboris et quis est minim sit in. Deserunt Lorem veniam veniam',
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
    description: 'A SIG for sharing projects',
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
    description: 'A SIG for sharing projects',
    websiteURL: 'https://tardisproject.uk/',
    icon: {
      src: 'tardis.webp',
      alt: 'SIGINT logo',
      rounded: false,
    },
    backgroundColor: '#295085',
    borderColor: '#3769A6',
  },
  {
    name: 'QuantSIG',
    description: 'A SIG for sharing projects',
    icon: {
      src: 'quantsig.webp',
      alt: 'SIGINT logo',
      rounded: false,
    },
    backgroundColor: '#4B3E4F',
    borderColor: '#807184',
  },
  {
    name: 'GameDevSIG',
    description: 'A SIG for sharing projects',
    icon: {
      src: 'gamedevsig.webp',
      alt: 'SIGINT logo',
      rounded: false,
    },
    backgroundColor: '#000000',
    borderColor: '#3CAB98',
  },
  {
    name: 'CloudSIG',
    description:
      'Cloud Clubs are student-led, student-driven user groups focused on learning about the Cloud via AWS technologies.',
    websiteURL:
      'https://www.meetup.com/aws-cloud-club-the-university-of-edinburgh/',
    icon: {
      src: 'cloudsig.webp',
      alt: 'SIGINT logo',
      rounded: false,
    },
    backgroundColor: '#aaa',
    borderColor: '#eee',
  },
].sort(() => Math.random() - 0.5)
