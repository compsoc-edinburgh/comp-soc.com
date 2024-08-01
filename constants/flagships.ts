import { link } from 'fs'

export const flagships = [
  {
    name: 'Hack The Burgh',
    description:
      'Join us for our annual 24-hour hackathon, complete with food, sponsor merch, and many prizes up for grabs.',
    long_description:
      'Once a year we host Hack the Burgh, a hackathon open to all students. It’s a 24 hour competition with lots of sponsors that host their own challenges and workshops. This is a great opportunity for eager coders to test their skills, meet like minded competitors, network, and expand their abilities intensely within a 24 hour time span.',
    image: 'image5.jpg',
    roughDate: 'Late Feb',
    link: 'https://hacktheburgh.com/',
    facts: [
      { number: '200+', text: 'hackers' },
      { number: '£8,000', text: 'in prizes' },
    ],
  },
  {
    name: 'InfBall',
    description:
      'Yearly ball in spring for all informatics students, complete with a three-course meal and a ceilidh.',
    long_description:
      'Nearing the end of each year, we host an informatics ball where students come together and celebrate. When you buy a ticket it comes with a three course meal, beautiful atmosphere, drinks, music, great company, and a guaranteed good time! If you don’t want to splurge on a full ticket you can just buy a cheap after party ticket where we rent out a room in a club. All years of studies are welcome but there is priority for 4th years, who receive access to tickets before everyone else. Tickets sell out fast so make sure to get them as soon as they are available!',
    image: 'image6.jpg',
    roughDate: 'Mid-April',
    link: 'https://infball.comp-soc.com/',
    facts: [
      { number: '250+', text: 'attendees' },
      { number: '8', text: 'years+' },
    ],
  },

  {
    name: 'Student Tech Meetup',
    description:
      'Engage with insightful talks from academics and industry experts, and enjoy free pizza!',
    long_description:
      'CompSoc hosts many STMUs throughout the year. A Student Tech Meetup is an academic setting where speakers come to talk to students about their field of interest. Notable past speakers have included the creator of the UK’s best chess engine, the designer of Haskell, and industry experts from Meta and Spotify. The best part about it, it’s free and has free food!',
    image: 'stmu.jpg',
    roughDate: 'Monthly',
    facts: [{ number: '30-70', text: 'attendees' }],
  },
]
