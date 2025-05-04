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
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  swap_spot,
  direction,
  coal,
  ntpl,
  frontendCourese,
  BackendCourse,
  serverside
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
  {
    id: "cv",
    title: "My CV",
    url: "/NewSarthakCV2.pdf", // ✅ CV file placed inside /public folder
    download: true,
  },
];





const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI/UX Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    title: "Web Development",
    company_name: "NPTEL",
    icon: ntpl,
    iconBg: "#E6DEDD",
    date: "May 2022 - July 2022",
    points: [
      "Worked on developing responsive UIs with HTML, CSS, and JavaScript.",
      "Assisted in maintaining internal tools and dashboards.",
      "Collaborated with senior developers to debug and improve frontend performance.",
    ],
  },
  {
    title: "Frontend Course Completion",
    company_name: "Self-Paced Learning",
    icon: frontendCourese,
    iconBg: "#383E56",
    date: "Aug 2022 - Oct 2022",
    points: [
      "Completed a comprehensive frontend development course.",
      "Learned advanced topics in React.js, Tailwind CSS, and responsive design.",
      "Built multiple mini-projects as part of hands-on practice.",
    ],
  },
  {
    title: "Backend Course Completion",
    company_name: "Self-Paced Learning",
    icon: BackendCourse,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Jan 2023",
    points: [
      "Completed an intensive backend development course covering Node.js and MongoDB.",
      "Built RESTful APIs and practiced server-side logic.",
      "Integrated databases and authentication mechanisms.",
    ],
  },
  {
    title: "Server-Side Scripting Practice",
    company_name: "Independent Projects",
    icon: serverside,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "Implemented PHP scripts for form handling and database operations.",
      "Created dynamic pages using server-side rendering techniques.",
      "Worked on optimization and deployment of web applications.",
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
    name: "Collage direction",
    description:
      "A web-based platform that allows students and staff to easily search for and access directions between different campus blocks, providing a convenient and efficient solution for navigating the college grounds.",
    tags: [
      {
        name: "Html/CSS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: direction,
    source_code_link: "https://github.com/",
  },
  {
    name: "Swap-spot",
    description:
      "Swap-Sport is a platform where students can buy and sell their old products, offering a convenient and secure way to exchange items, save money, and promote sustainability.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: swap_spot,
    source_code_link: "https://sarthak-swapspot.vercel.app/login",
  },
  {
    name: "Transport-Logistics|",
    description:
      "A comprehensive logistics management system that allows users to track shipments, manage transporters and vehicles, and gain valuable insights through analytics, optimizing the entire logistics process.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "superbase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: coal,
    source_code_link: "https://transport.clickbook.in",
  },
];

export { services, technologies, experiences, testimonials, projects };
