import { Committee, LinkType, Role } from "@/lib/committee"

export const team2026: Committee[] = [
    {
        name: "Kaiwen",
        surname: "Wang",
        role: Role.PRESIDENT,
        image: "kaiwen-2026-1.png",
        sponsorContact: true,
        sponsorEmail: "president@comp-soc.com",
        links: [
            {
                type: LinkType.LINKEDIN,
                url: "https://www.linkedin.com/in/wangkaiwen/",
            }, {
                type: LinkType.GITHUB,
                url: "https://github.com/Kaiwen-W"
            }, {
                type: LinkType.WEBSITE,
                url: "https://kaiwen.wang/"
            }
        ],
    },
    {
        name: "Luc",
        surname: "Wallace",
        role: Role.VICE_PRESIDENT,
        sponsorContact: true,
        image: "luc-2026-1.png",
        links: [
            {
                type: LinkType.LINKEDIN,
                url: "https://www.linkedin.com/in/lucwallace/",
            }, {
                type: LinkType.GITHUB,
                url: "https://www.github.com/lucwl",
            }, {
                type: LinkType.WEBSITE,
                url: "https://lucwallace.com/"
            }
        ],
    },
    {
        name: "Dhyey",
        surname: "Mehta",
        role: Role.TREASURER,
        image: "Dhyey-1.webp",
        links: [
            {
                type: LinkType.LINKEDIN,
                url: "https://www.linkedin.com/in/dhyeym/",
            }, {
                type: LinkType.GITHUB,
                url: "https://github.com/dhyeyym"
            }
        ],
    },
    {
        name: "Aarav",
        surname: "Parin",
        role: Role.SECRETARY,
        image: "aarav-2026-1.png",
        links: [
            {
                type: LinkType.LINKEDIN,
                url: "https://www.linkedin.com/in/aarav-parin-958375385/",
            }
        ],
    },
    {
        name: "Skye",
        surname: "K. V.",
        role: Role.TECHNICAL_SECRETARY,
        //image: "",
        sponsorContact: false,
        sponsorEmail: "techsec@comp-soc.com",
        links: [
            {
                type: LinkType.WEBSITE,
                url: "https://kaplyn.xyz/"
            }
        ],
    },
    {
        name: "Hugo",
        surname: "Verity-Povoas",
        role: Role.SOCIAL_SECRETARY,
        image: "hugo-2026-1.png",
        links: [
            {
                type: LinkType.LINKEDIN,
                url: "https://www.linkedin.com/in/hugo-verity-povoas-9b09213b4/",
            }
        ],
    },
    {
        name: "Pui",
        surname: "Hong Freeman Chung",
        role: Role.SOCIAL_MEDIA_OFFICER,
        image: "pui-2026-1.png",
        links: [
            {
                type: LinkType.LINKEDIN,
                url: "https://www.linkedin.com/in/freemanchung/",
            }
        ],
    },
    {
        name: "Iretemi",
        surname: "Ogunlaja",
        role: Role.GRAPHIC_DESIGNER,
        image: "iretemi-2026-1.png",
        links: [
            {
                type: LinkType.LINKEDIN,
                url: "https://www.linkedin.com/in/iretemi-ogunlaja-458164343/",
            }
        ],
    },
    {
        name: "Aryan",
        surname: "Ajmera",
        role: Role.SECOND_YEAR_REP,
        image: "aryan-2026-1.png",
        links: [
            {
                type: LinkType.LINKEDIN,
                url: "https://www.linkedin.com/in/aryan-ajmera7/",
            }
        ],
    },
    {
        name: "Abdulwahid",
        surname: "Yaich",
        role: Role.THIRD_YEAR_REP,
        //image: "",
        links: [
            {
                type: LinkType.LINKEDIN,
                url: "https://www.linkedin.com/in/abdulwahidy/",
            },
        ],
    },
    {
        name: "Anya",
        surname: "Krisanova",
        role: Role.FOURTH_YEAR_REP,
        image: "anya-2026-1.png",
        links: [
            {
                type: LinkType.LINKEDIN,
                url: "https://www.linkedin.com/in/anya-k-a8856927b/"
            }
        ],
    },
    {
        name: "Pa\'uk",
        surname: "",
        role: Role.OLD_PERSON_REP,
        links: [],
    },
    {
        name: "Emily",
        surname: "M",
        role: Role.EDI_REP,
        image: "emily-1.jpg",
        links: [
            {
                type: LinkType.LINKEDIN,
                url: "https://www.linkedin.com/in/emilymillerxyz/",
            },
            {
                type: LinkType.WEBSITE,
                url: "https://emilymiller.xyz",
            },
            {
                type: LinkType.GITHUB,
                url: "https://github.com/python151",
            },
        ],
    },
    //{
    //    name: "Dhyey",
    //    surname: "Mehta",
    //    role: Role.JUNIOR_TREASURER,
    //    image: "Dhyey-1.webp",
    //    links: [
    //      {
        //        type: LinkType.LINKEDIN,
        //        url: "https://www.linkedin.com/in/dhyeym/",
    //      },
    //    ],
    //},
    //{
    //    name: "Kaiwen (Kevin)",
    //    surname: "Wang",
    //    role: Role.FIRST_YEAR_REP,
    //    image: "Kevin-1.webp",
    //    links: [
    //      {
        //        type: LinkType.LINKEDIN,
        //        url: "https://www.linkedin.com/in/wangkaiwen",
    //      },
    //      {
        //        type: LinkType.INSTAGRAM,
        //        url: "https://www.instagram.com/kaiwen.wang_",
    //      },
    //    ],
    //},
    {
        name: "Farhaan",
        surname: "Mukarram",
        role: Role.MASTERS_REP,
        links: [
            {
                type: LinkType.LINKEDIN,
                url: "https://www.linkedin.com/in/farhaan-mukarram",
            },
            {
                type: LinkType.GITHUB,
                url: "https://github.com/farhaan-mukarram",
            },
        ],
    }
]
