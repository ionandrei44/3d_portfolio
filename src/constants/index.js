import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  amdaris,
  cryptoWallet,
  proshop,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Amdaris",
    icon: amdaris,
    iconBg: "#383E56",
    date: "November 2022 - Present",
    points: [
      "Contributing to the development of a white-label application utilizing micro-frontends architecture.",
      "Collaborating with cross-functional teams, including designers, product managers, and developers, to craft a high-quality product.",
      "Implementing a shared library of UI components to streamline development efforts and ensure consistency across multiple projects.",
      "Participating actively in code reviews, offering constructive feedback to peers, promoting a collaborative environment.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "Amdaris",
    icon: amdaris,
    iconBg: "#383E56",
    date: "April 2022 - October 2022",
    points: [
      "Incorporated additional features within an internal application utilized by the company's customers.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Created comprehensive unit tests, increasing application reliability, identifying and rectifying potential bugs, and ensuring a smooth user experience.",
      "Optimized the application for a seamless transition from development to production.",
    ],
  },
];

const projects = [
  {
    name: "Crypto Wallet",
    description:
      "A web application that provides users with real-time data on the most popular cryptocurrencies, allowing them to effortlessly track their favorite coins, create custom portfolios, and assemble watchlists to monitor coins of interest.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "shadcn/ui",
        color: "pink-text-gradient",
      },
    ],
    image: cryptoWallet,
    source_code_link: "https://github.com/ionandrei44/crypto-wallet",
  },
  {
    name: "ProShop",
    description:
      "An e-commerce platform that offers a robust suite of features including product reviews and ratings, pagination, product search capabilities, product and user management tools, a checkout process and seamless integration with PayPal and credit cards.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: proshop,
    source_code_link: "https://github.com/ionandrei44/proshop-mern",
  },
];

export { services, technologies, experiences, projects };
