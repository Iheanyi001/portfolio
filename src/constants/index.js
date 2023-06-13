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
      "Working with him was an absolute pleasure. His creativity and attention to detail brought our vision to life. The website he designed for us perfectly represents our brand and has received positive feedback from our clients",
    name: "Oluchi Japhet",
    designation: "CEO",
    company: "Recharge-boss",
    image: "../src/rb_test.png",
  },
  {
    testimonial:
      "We were impressed by the talent and professionalism of him. He took the time to understand our requirements and delivered a stunning website that exceeded our expectations.",
    name: "Ogo Eze",
    designation: "Manager",
    company: "ELong Ltd",
    image: "../src/elong_test.png",
  },
  {
    testimonial:
      "He possesses a deep understanding of React Native and was able to develop a robust and high-performing mobile application for our company",
    name: "Chinedu",
    designation: "CTO",
    company: "Kiara Care",
    image: "../src/kc_test.png",
  },
];

const projects = [
  {
    name: "RechargeBoss",
    description:
      "A web base application that facilitates seamless transactions for recharges, bill payments, and data purchases, allowing users to store funds in their wallet. Users can access a detailed transaction history for recharges, bill payments, data purchases, and airtime transfers.",
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
      "The web application empowers users to track their shipments, book online, obtain packaging guidelines, and access essential shipping documents like waybills, invoices, and customs forms for download.",
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
      "This web application is a platform that showcases my work, achievements, and creative journey. It features a collection of my projects, skills, and experiences, emphasizing my distinctive approach and unwavering dedication to my craft.",
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
