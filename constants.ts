// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio ",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://ayushsingh.net/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Experience",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I build Web Applicatons with modern UI/UX",
  "I develop AI projects with <br /> complex logic and flows",
  "I develop Web3 Dapp with real time <br /> blockchain event fetching, NFTs, CrossChain",
];

export const EMAIL = "ayush.singh.xda@gmail.com";

// export const SOCIAL_LINKS = {
//   linkedin: "https://www.linkedin.com/in/alphaayush/",
//   github: "https://github.com/ayush013",
//   medium: "https://alphaayush.medium.com/",
//   instagram: "https://www.instagram.com/alphaayush/",
//   facebook: "https://www.facebook.com/ayush013",
//   dribbble: "https://dribbble.com/alphaayush",
//   behance: "https://www.behance.net/alphaayush/",
//   twitter: "https://twitter.com/ayush013",
//   topmate: "https://www.topmate.io/alphaayush/",
// };

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Survey Management System - RTX",
    image: "/projects/five.gif",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description:
      "This project is the integrated survey management system to create, edit, vote, analyze and visualize survey and survey results.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "",
    tech: ["typescript", "mongo", "tailwind"],
  },
  {
    name: "myOKR Website",
    image: "/projects/myokr.jpg",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Marketing site for OKR Platform by huminos",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "",
    tech: ["react", "next", "gsap", "tailwind"],
  },
  {
    name: "DLT Labs Website",
    image: "/projects/dlt-website.jpg",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Marketing site with MEAN from scratch",
    gradient: ["#245B57", "#004741"],
    url: "",
    tech: ["figma", "angular", "gsap", "mongo"],
  },
  {
    name: "DL Unify",
    image: "/projects/dl-unify.jpg",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Built the application from zero to production 🚀",
    gradient: ["#003052", "#167187"],
    url: "",
    tech: ["tailwind", "angular", "mongo", "figma"],
  },
  {
    name: "Huminos website",
    image: "/projects/huminos.jpg",
    blurImage: "/projects/blur/huminos-blur.jpg",
    description: "Marketing site for Huminos bots for workplace by facebook",
    gradient: ["#17007B", "#3A2C79"],
    url: "",
    tech: ["javascript", "sass", "svg", "mongo"],
  },
  {
    name: "Integrated Generative AI Tools",
    image: "/projects/seven.gif",
    blurImage: "/projects/blur/alpha-blur.jpg",
    description:
      "This project is large integrated tool integrated various Generative AI Tools",
    gradient: ["#172839", "#334659"],
    url: "",
    tech: ["python", "ai", "next"],
  },
  {
    name: "MDX AI Assistant",
    image: "/projects/nine.webp",
    blurImage: "/projects/blur/farewell18-blur.jpg",
    description:
      "MDX AI Assistant supports information related to Fukuda Secure Connect Remote Maintenance Service.",
    gradient: ["#142D46", "#2E4964"],
    url: "",
    tech: ["next", "python", "langchain", "mongo"],
  },
  {
    name: "Growth Assessment System for companies - flowmodo",
    image: "/projects/ten.webp",
    blurImage: "/projects/blur/bdc18-blur.jpg",
    description: "This project is developed on Adalo environment.",
    gradient: ["#470700", "#712A23"],
    url: "",
    tech: ["python", "next", "langchain", "mongo"],
  },
  {
    name: "Token Deployment",
    image: "/projects/token.png",
    blurImage: "/projects/blur/bdc18-blur.jpg",
    description: "Deploy tokens to various networks",
    gradient: ["#470700", "#712A23"],
    url: "",
    tech: ["sol", "react", "web3", "ether"],
  },
  {
    name: "Uniswap App",
    image: "/projects/Uniswap.png",
    blurImage: "/projects/blur/scrolls-blur.jpg",
    description:
      "Decentralized exchange that allows users to swap a variety of cryptocurrencies directly from their wallets",
    gradient: ["#685506", "#7B6921"],
    url: "",
    tech: ["react", "sol", "ether", "web3"],
  },
];

export const SKILLS = {
  web: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "mongo",
    "git",
  ],
  ai: [
    "python",
    "selenium",
    "langchain",
    "twilio",
    "pytorch",
    "tensorflow",
    "keras",
  ],
  blockchain: ["sol", "ether", "web3", "solana", "hardhat", "truffle"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Blockchain Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Developed smart contracts using Solidity for decentralized applications (dApps) on Ethereum. <br /> Implemented blockchain solutions for supply chain management, ensuring transparency and trace ability. Conducted security audits and implemented best practices to secure blockchain applications.",
    slideImage: "/timeline/goodlinker.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "AI Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Developed and implemented chatbot applications for clients across various industries. <br /> Collaborated with the development team to design, build, and maintain chatbots that meet client requirements.",
    image: "",
    slideImage: "/timeline/deeli ai.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Junior Web Developer",
    size: ItemSize.SMALL,
    subtitle:
      "Enhanced performance tuning techniques on stored procedures and back-end queries which resulted in 35% improvement in application performance. <br /> Extensive and varied contributions to the company's internal backend framework with a team of 4 developers.",
    image: "",
    slideImage: "/timeline/kh.webp",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
