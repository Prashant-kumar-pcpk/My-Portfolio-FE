


import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiGithub,
  SiBootstrap,
  SiVite,
  SiRedux,
  SiMongoose,
  SiVercel,
  SiRender,
  SiNetlify,
} from "react-icons/si";

import {
  FaServer,
  FaCode,
  FaDatabase,
  FaTools,
  FaPaintBrush,
} from "react-icons/fa";

import { TbApi } from "react-icons/tb";

export const ToolsName = [
  {
    title: "Frontend",
    icon: FaCode,
    skills: [
      {
        name: "HTML",
        icon: SiHtml5,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "React.js",
        icon: SiReact,
      },
      {
        name: "Vite",
        icon: SiVite,
      },
      {
        name: "Redux",
        icon: SiRedux,
      },
    ],
  },
  {
    title: "Backend",
    icon: FaServer,
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "REST APIs",
        icon: TbApi,
      },
    ],
  },
  {
    title: "UI",
    icon: FaPaintBrush,
    skills: [
      {
        name: "CSS",
        icon: SiCss,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
      },
    ],
  },
  {
    title: "Database",
    icon: FaDatabase,
    skills: [
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "Mongoose",
        icon: SiMongoose,
      },
    ],
  },
  {
    title: "Tools",
    icon: FaTools,
    skills: [
      {
        name: "GitHub",
        icon: SiGithub,
      },
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Render",
        icon: SiRender,
      },
      {
        name: "Netlify",
        icon: SiNetlify,
      },
    ],
  },
];

export const skills = ToolsName.flatMap((group) =>
  group.skills.map((skill) => ({
    title: skill.name,
    icon: skill.icon,
    category: group.title,
  }))
);

// ==================================================





export const education = [
  {
    title: 'Bachelor of Computer Application (BCA)',
    institution: 'Sandip University',
    period: '2021 - 2024',
    description: 'Strong foundation in algorithms, data structures, OOP, and web application development.',
  },
  {
    title: 'Higher Secondary Certificate',
    institution: 'PDCP College Basaith',
    period: '2018 - 2020',
    description: 'Focused on Mathematics, Physics, and Computer Science with strong academic performance.',
  },
];

export const experience = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'HCL GUVI',
    period: 'Jan 2024 - May 2024',
    description:
      'Contributed to client-facing web applications using React, Node.js, Express, and MongoDB. Improved user experience with responsive UI and reusable components.',
  },
];

export const achievements = [
  'Built a full-stack portfolio project with authentication and admin dashboard.',
  'Won 1st place in a class and be a class representative in BCA 2nd year and 3rd year.',
  'Work as Junior Assistant of HR in Rojgar Mela (Job Mela) 2023, in Darbhanga.',
];

export const objective =
  'To secure an entry-level software developer role where I can apply my MERN stack expertise, contribute to meaningful products, and continue growing within a high-performing engineering team.';


export const projects = [
  {
    title: "E-commerce Website",
    description:
      "A full-stack e-commerce website with product browsing, user authentication, shopping cart, order management, and a responsive user interface.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/work-image/imgE-commerce.png",
    github: "https://github.com/yourusername/ecommerce-website",
    live: "https://your-ecommerce-website.vercel.app"
  },
  {
    title: "Movie Review App",
    description:
      "Built a responsive React movie review app with live search, filter controls, detailed movie pages, and interactive star ratings. Features include dynamic movie listings, real-time search, advanced filtering by genre and year, and a 5-star rating system with persistent storage.",
    stack: ["React", "Tailwind CSS", "React Hooks", "Mock API"],
    image: "/work-image/Review app.png",
    github: "https://github.com/Prashant-kumar-pcpk/Movie-Review-app",
    live: "https://pkmoviereviewapp.netlify.app",
  },
  {
    title: "Full-Stack Blogging Platform",
    description:
      "Delivered a full-stack blogging platform with React front-end and Express/MongoDB back-end supporting authentication, posts, comments, likes, and moderation. Includes JWT-based security, role-based access control, and comment spam detection.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/work-image/BloggingApp SC.png",
    github: "https://github.com/Prashant-kumar-pcpk/FE-Blogging-Platform",
    live: "https://prashantdairies-blogging-platform.netlify.app",
  },
  {
    title: "Recipe App",
    description:
      "Developed an interactive recipe search and discovery application with responsive design and dynamic content rendering. Users can browse recipes, search by ingredients or cuisine, view detailed instructions, and filter by dietary preferences.",
    stack: ["JavaScript", "HTML", "Tailwind CSS", "API Integration"],
    image: "/work-image/Reciepe App.png",
    github: "https://github.com/Prashant-kumar-pcpk/-Recipe-app",
    live: "https://remarkable-fox-3b42ee.netlify.app",
  },
  {
    title: "Holiday Finder App",
    description:
      "Created a public holiday search tool using external API lookup, CSV export, dark mode toggle, and responsive results display. Users can search holidays by country and year, export results as CSV, and toggle between dark and light themes.",
    stack: ["HTML", "Tailwind CSS", "JavaScript", "Fetch API"],
    image: "/work-image/holiday finder app.png",
    github: "https://github.com/Prashant-kumar-pcpk/Holiday-Finder-App",
    live: "https://holidays-finder.netlify.app",
  },
  {
    title: "Jokes-Pitara",
    description:
      "Built an entertaining jokes application featuring dynamic joke fetching, category filtering, and smooth user interactions. Includes favorites functionality, sharing capabilities, and a clean UI designed for optimal user engagement and entertainment.",
    stack: ["JavaScript", "HTML", "CSS", "REST API"],
    image: "/work-image/jokes pitara.jpg",
    github: "https://github.com/Prashant-kumar-pcpk/Jokes-Pitara",
    live: "https://jokes-pitara.netlify.app",
  },
  {
    title: "Life Dashboard",
    description:
      "Developed a React dashboard for daily check-ins with analytics, timeline history, localStorage persistence, and data visualization using Recharts. Track focus, energy, and mood metrics with visual charts and historical timeline.",
    stack: ["React", "Tailwind CSS", "Recharts", "LocalStorage"],
    image: "/work-image/life dashboard.webp",
    github: "https://github.com/Prashant-kumar-pcpk/Life-Dashboard",
    live: "https://life-dashboard.netlify.app",
  },
];