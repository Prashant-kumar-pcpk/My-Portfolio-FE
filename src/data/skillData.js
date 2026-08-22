import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
//   FaAws,
} from "react-icons/fa";



import {
  SiVite,
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiMongoose,
  SiVercel,
  SiRender,
  SiNetlify,
} from "react-icons/si";

import {
  TbApi,
  TbBinaryTree,
  TbArrowsExchange,
} from "react-icons/tb";

export const skillGroups = [
  {
    title: "Frontend",
    icon: FaCode,
    description: "Building modern, responsive user interfaces.",
    skills: [
      {
        name: "React.js",
        icon: FaReact,
      },
      {
        name: "Vite",
        icon: SiVite,
      },
      {
        name: "Redux",
        icon: SiRedux,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
    ],
  },

  {
    title: "Backend",
    icon: FaServer,
    description: "Developing APIs and server-side applications.",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
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
    title: "Databases",
    icon: FaDatabase,
    description: "Working with relational and NoSQL data.",
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
    title: "Cloud / Tools",
    icon: FaCloud,
    description: "Deploying and managing production applications.",
    skills: [
    //   {
    //     name: "AWS Elastic Beanstalk",
    //     icon: FaAws,
    //   },
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
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
    ],
  },

  {
    title: "Concepts",
    icon: TbBinaryTree,
    description: "Engineering concepts I use while building systems.",
    skills: [
      {
        name: "E-commerce App",
        icon: TbArrowsExchange,
      },
      {
        name: "Blogging App",
        icon: TbApi,
      },
      {
        name: "Real Time Chat App",
        icon: TbArrowsExchange,
      },
      {
        name: "Trie Data Structures",
        icon: TbBinaryTree,
      },
    ],
  },
];