import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mysql,
  git,
  figma,
  docker,
  meta,
  rechargeboss,
  judiciary,
  carrent,
  jobit,
  tripguide,
  threejs,
  laravel,
  kiaracare,
  ifactonews,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Scraper",
    icon: creator,
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
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "MySQL",
    icon: mysql,
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
    title: "Full stack Developer",
    company_name: "Recharge Boss",
    icon: rechargeboss,
    iconBg: "#383E56",
    date: "March 2022 - Present",
    points: [
      "Coordinated with other engineers to evaluate and improve software and hardware interfaces",
      "Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance",
      "Reviewed project specifications and designed technology solutions that met or exceeded performance expectations",
      "Participated in architecture, design and implementation of back-end features using NodeJS, PHP and Laravel",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Kiara Care",
    icon: kiaracare,
    iconBg: "#E6DEDD",
    date: "Sept 2020 - Feb 2022",
    points: [
      "Designed intuitive graphical user interfaces using React Native and other related technologies to improve user experience.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend developer / Web Scraper",
    company_name: "Ifactonews",
    icon: ifactonews,
    iconBg: "#383E56",
    date: "Jan 2019 - Aug 2020",
    points: [
      "Developing and maintaining web applications using Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Extracted data from multiple websites using web scraping techniques and tools",
      "Stored and exported scraped data in various formats, such as CSV and JSON",
    ],
  },
  {
    title: "IT Support Specialist",
    company_name: "Abia State Judiciary",
    icon: judiciary,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - Mar 2020",
    points: [
      "Loaded software, granted permissions, and configured hardware for new employees as part of onboarding process",
      "Created help desk tickets, troubleshot and resolved desktop issues",
      "Determined hardware and network system issues using proactive troubleshooting techniques",
      "Responded to faults in networks to rapidly restore connectivity and prevent unnecessary downtimes",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "RechargeBoss",
    description:
      "Web-based platform that simplifies the process of recharging mobile airtime and data in Nigeria, offering a hassle-free experience for users seeking a convenient and reliable platform for their telecom needs.",
    tags: [
      {
        name: "InertiaJs",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "ElongLtd",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "inertiaJs",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Iportfolio",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
