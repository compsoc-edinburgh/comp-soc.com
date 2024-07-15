import { link } from 'fs'

export const flagships = [
  {
    name: 'Hack The Burgh',
    description:
      'Join us for our annual 24-hour hackathon, complete with food, sponsor merch, and many prizes up for grabs.',
    image: 'image5.jpg',
    roughDate: 'Late Feb',
    link: 'https://hacktheburgh.com/',
    facts: [
      { number: '300+', text: 'hackers' },
      { number: '£8,000', text: 'in prizes' },
    ],
  },
  {
    name: 'InfBall',
    description:
      'Yearly ball in spring for all informatics students, complete with a three-course meal and a ceilidh.',
    image: 'image6.jpg',
    roughDate: 'Mid-April',
    link: 'https://infball.comp-soc.com/',
    facts: [
      { number: '300+', text: 'attendees' },
      { number: '8', text: 'years running' },
    ],
  },

  {
    name: 'Student Tech Meetup',
    description:
      'Engage with insightful talks from academics and industry experts, and enjoy free pizza!',
    image: 'stmu.jpg',
    roughDate: 'Monthly',
    facts: [{ number: '30-50', text: 'attendees' }],
  },
]
