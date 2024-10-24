import javascript from "../tech/javascript.png";
import typescript from "../tech/typescript.png";
import html from "../tech/html.png";
import css from "../tech/css.png";
import reactjs from "../tech/reactjs.png";
import redux from "../tech/redux.png";
import tailwind from "../tech/tailwind.png";
import nodejs from "../tech/nodejs.png";
import mongodb from "../tech/mongodb.png";
import git from "../tech/git.png";
import figma from "../tech/figma.png";
import docker from "../tech/docker.png";
import threejs from "../tech/threejs.svg";



export const technologies = [
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

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const tages = [
  {
    id: 1,
    name: 'React.js',
    path: '/assets/react.svg',
  },
  {
    id: 2,
    name: 'TailwindCSS',
    path: 'assets/tailwindcss.png',
  },
  {
    id: 3,
    name: 'TypeScript',
    path: '/assets/typescript.png',
  },
  {
    id: 4,
    name: 'Framer Motion',
    path: '/assets/framer.png',
  },
]

export const myProjects = [
  {
    title: 'navigateNest - AI Trip Planner',
    desc: 'The Trip Planner App is a web application designed to help users plan and organize their trips. It is built using Next.js, Prisma, and MongoDB, providing a seamless experience for creating itineraries, discovering places of interest, and more.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, ,prisma, google api and clerk.',
    href: 'https://navigatenest-ai.vercel.app/',
    texture: '/assets/trip.mp4',
    logo: '/assets/navigatenest.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Prisma',
        path: '/assets/prisma-logo.png',
      },
      {
        id: 5,
        name: 'next',
        path: '/assets/nextjs.png',
      },
      {
        id: 6,
        name: 'MongoDB',
        path: '/assets/mongodb.png',
      }
    ],
  },
  {
    title: 'MedHammers - learning platform for medical students',
    desc: 'MedHammers is a powerful collaborative app that elevates the capabilities of real-time course creation. it has teachers that can create courses and students that can enroll in courses and access the content.',
    subdesc:
      'With MedHammers, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://genius-doctor.vercel.app/',
    texture: '/assets/med.mp4',
    logo: '/assets/medhammers.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Prisma',
        path: '/assets/prisma-logo.png',
      },
      {
        id: 5,
        name: 'next',
        path: '/assets/nextjs.png',
      },
    ],
  },
  {
    title: 'financeSelf - Personal Finance Management System',
    desc: 'financeSelf is a personal finance management system that allows users to track their income and expenses, create budgets, and view their financial progress.',
    subdesc:
      'With a focus on efficiency, financeSelf integrantes complex forms, charts and CSV upload, by using Next.js, react, hono that enhance operational workflows.',
    href: 'https://financeself.vercel.app',
    texture: '/assets/finance.mp4',
    logo: '/assets/finance.svg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Hono',
        path: '/assets/hono.png',
      },
      {
        id: 5,
        name: 'next',
        path: '/assets/nextjs.png',
      },
    ],
  },
  {
    title: 'Seer chat - Online Anonymous group chat',
    desc: 'Seer chat is a platform that allows users to chat anonymously with each other. based on the location, each location has a chat room where users can chat with each other. and a paied membership so the users can follow each other in a and chat privately ',
                                                                                                              
    subdesc:
      'Built with Next.js 14 convex a real time database ,google maps and tailwind ',
    href: 'https://seer-three.vercel.app',
    texture: '/assets/seer.mp4',
    logo: '/assets/seer.svg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Convex',
        path: '/assets/convex.png',
      },
      {
        id: 5,
        name: 'next',
        path: '/assets/nextjs.png',
      },
      
    ],
  },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  
  {
    id: 1,
    name: 'Noviopus',
    pos: 'Full Stack Engineer- Internship',
    duration: 'Aug 2024 - Present',
    title: "Noviopus created new and advanced AI tools that automatically connects job seekers with potential employers. With smart job search Noviopus matches the job seekers preferences like salary, location and benefits with the most suitable jobs according to their relevance.",
    icon: '/assets/noviopus_logo.jpg',
    animation: 'clapping',
  },
  {
    id: 2,
    name: 'Tindo',
    pos: 'Full Stack Engineer- Internship',
    duration: 'Feb 2024 - May 2024',
    title: "Tendo's mission is to provide high quality investment services to all employees, through a team of qualified experts.",
    icon: '/assets/tindo.jpg',
    animation: 'victory',
  },

];
