export const constants = {
  // Profile
  profile: {
    name: "Muhammad Moiz",
    shortName: "Moiz",
    title: "Senior Full-Stack Engineer",
    subtitle: "Web • Mobile • Backend • Cloud",
  },

  // Navigation
  navigation: [
    {
      title: "Skills",
      href: "#tech",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Experience",
      href: "#experience",
    },
    {
      title: "Achievements",
      href: "#achievements",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ],

  // Hero
  hero: {
    description:
      "Building scalable web, mobile, and backend systems using React, Next.js, React Native, TypeScript, Node.js, NestJS, PostgreSQL, MongoDB, AWS, and modern cloud technologies.",
    metrics: [
      {
        value: "7+",
        label: "Years Experience",
      },
      {
        value: "100K+",
        label: "App Downloads",
      },
      {
        value: "15K+",
        label: "Daily Active Users",
      },
      {
        value: "45%",
        label: "Backend Scalability",
      },
    ],
  },

  // Technologies
  technologies: [
    {
      id: 0,
      icon: "react",
      title: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Redux",
        "Zustand",
        "TanStack Query",
      ],
    },
    {
      id: 1,
      icon: "node",
      title: "Backend",
      items: [
        "Node.js",
        "NestJS",
        "Express.js",
        "Laravel",
        "REST APIs",
        "GraphQL",
        "gRPC",
      ],
    },
    {
      id: 2,
      icon: "database",
      title: "Databases",
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "SQLite",
        "Prisma",
        "Sequelize",
        "Mongoose",
      ],
    },
    {
      id: 3,
      icon: "mobile",
      title: "Mobile",
      items: [
        "React Native",
        "Expo",
        "TypeScript",
        "Android • iOS",
        "Kotlin",
        "Fastlane",
      ],
    },
    {
      id: 4,
      icon: "cloud",
      title: "Cloud & DevOps",
      items: [
        "AWS",
        "Docker",
        "GitHub Actions",
        "GitLab CI/CD",
        "Sentry",
        "CloudWatch",
      ],
    },
    {
      id: 5,
      icon: "ai",
      title: "AI & Engineering",
      items: [
        "OpenAI API",
        "Prompt Engineering",
        "AI-Assisted Development",
        "Cursor",
        "Claude Code",
        "GitHub Copilot",
      ],
    },
  ],

  // Projects
  projects: [
    {
      id: 0,
      title: "Xenia – Enterprise SaaS Platform",
      category: "SaaS • AI • Workforce Management",
      image: "images/xenia.png",
      tags: [
        "React Native",
        "TypeScript",
        "PowerSync",
        "SQLite",
        "AWS",
        "Sentry",
        "AI",
      ],
      description: [
        "Led end-to-end engineering for a mobile-first SaaS platform supporting 15K+ daily active users across 300+ enterprise organizations.",
        "Collaborated on AI-powered operational reporting, intelligent template summaries, and natural language insights by connecting frontend workflows with backend AI services.",
        "Designed scalable offline-first synchronization using PowerSync and SQLite for distributed enterprise environments.",
        "Modernized the React Native architecture and improved application stability, reducing crash rates by 50% and increasing engineering throughput by 40%.",
      ],
      source: "https://apps.apple.com/nz/app/xenia-team/id1605760701",
    },

    {
      id: 1,
      title: "Enterprise VoIP & Real-Time Communication Platform",
      category: "Real-Time Systems • VoIP • Backend",
      image: "images/voip.webp",
      tags: [
        "React Native",
        "Node.js",
        "NestJS",
        "Kotlin",
        "Socket.IO",
        "Linphone",
        "SIP",
      ],
      description: [
        "Re-architected authentication flows and the native Android SIP layer using Kotlin, Linphone SDK, and FreeSWITCH.",
        "Built real-time VoIP calling and chat functionality using Socket.IO and custom native modules.",
        "Implemented SIP-over-TCP communication and native authentication synchronization to improve call reliability.",
        "Modernized the React Native application from v0.73 to v0.86 with the New Architecture and Fabric, improving performance by approximately 40%.",
      ],
      source: null,
    },

    {
      id: 2,
      title: "DigitalTolk – Interpreter Marketplace",
      category: "Full-Stack • Marketplace • SaaS",
      image: "images/digitaltolk.png",
      tags: [
        "React Native",
        "Laravel",
        "Node.js",
        "Vue.js",
        "REST APIs",
        "GitLab CI/CD",
        "Fastlane",
      ],
      description: [
        "Led full-stack architecture supporting international expansion with scalable configuration and multi-environment deployment strategies.",
        "Designed and implemented RESTful backend services using Laravel and Node.js, improving booking system performance by 30%.",
        "Built GitLab CI/CD pipelines and Fastlane release automation, reducing deployment time by 60%.",
        "Achieved 99.8% deployment reliability across production releases.",
      ],
      source:
        "https://play.google.com/store/apps/details?id=se.digitaltolk&hl=en",
    },

    {
      id: 3,
      title: "FinTech Payment Platform",
      category: "FinTech • Payments • Full-Stack",
      image: "images/fintech.webp",
      tags: [
        "React Native",
        "TypeScript",
        "NestJS",
        "Node.js",
        "Stripe",
        "AWS",
      ],
      description: [
        "Led full-stack development for financial applications serving users across multiple markets.",
        "Designed scalable backend services using NestJS and Node.js for financial workflows.",
        "Architected secure Stripe payment integrations enabling compliant multi-market transactions.",
        "Built responsive React Native interfaces and integrated production APIs across mobile platforms.",
      ],
      source: null,
    },

    {
      id: 4,
      title: "Distributed Microservices Platform",
      category: "Backend • Microservices • APIs",
      image: "images/blockchain.png",
      tags: [
        "NestJS",
        "Node.js",
        "gRPC",
        "PostgreSQL",
        "MongoDB",
        "AWS",
        "Docker",
      ],
      description: [
        "Designed and implemented a distributed microservices architecture using NestJS and gRPC.",
        "Improved backend scalability by 45% while reducing service latency through service decomposition and optimized communication.",
        "Implemented structured logging, monitoring, fault isolation, and production deployment practices.",
        "Built scalable backend services supporting high-volume web and mobile applications.",
      ],
      source: null,
    },

    {
      id: 5,
      title: "Multi-Vendor E-Commerce Platform",
      category: "E-Commerce • Full-Stack Web",
      image: "images/retailo.png",
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Redux",
      ],
      description: [
        "Developed a full-stack multi-vendor e-commerce platform using React.js, Node.js, Express.js, and MongoDB.",
        "Implemented frontend features, RESTful APIs, backend business logic, and database integrations.",
        "Built reusable React components and responsive user interfaces for complex commerce workflows.",
        "Integrated frontend and backend services to support scalable marketplace operations.",
      ],
      source: null,
    },

    {
      id: 6,
      title: "Education Collaboration Platform",
      category: "EdTech • Real-Time Communication",
      image: "images/education.png",
      tags: [
        "React Native",
        "NestJS",
        "Node.js",
        "CometChat",
        "REST APIs",
        "TypeScript",
      ],
      description: [
        "Developed a cross-platform education platform supporting real-time communication between users.",
        "Integrated chat, voice, and video communication using CometChat SDK.",
        "Built scalable frontend and backend features using React Native, TypeScript, and NestJS.",
        "Improved user engagement by more than 60% through real-time collaboration capabilities.",
      ],
      source: null,
    },

    {
      id: 7,
      title: "Blockchain Administration Platform",
      category: "Enterprise Web • Blockchain",
      image: "images/blockchain.png",
      tags: ["React.js", "Node.js", "MongoDB", "Redis", "REST APIs", "AWS"],
      description: [
        "Built MERN-based blockchain administration tools for enterprise operations.",
        "Implemented Redis caching for dashboard analytics across more than 1M records.",
        "Designed reusable React components, backend APIs, and MongoDB data models.",
        "Improved blockchain administration efficiency by 35% through performance optimization and caching.",
      ],
      source: null,
    },

    {
      id: 8,
      title: "ASKWHO – Social Networking Platform",
      category: "Social • Backend • APIs",
      image: "images/askwho.png",
      tags: ["Node.js", "Express.js", "MySQL", "AWS", "REST APIs"],
      description: [
        "Designed and developed backend services powering a social networking mobile application.",
        "Built secure REST APIs, database models, and business logic supporting mobile clients.",
        "Deployed backend infrastructure on AWS with monitoring and reliability practices.",
      ],
      source:
        "https://play.google.com/store/apps/details?id=com.askwho.app&hl=en",
    },

    {
      id: 9,
      title: "Hisaab – Digital Credit Ledger",
      category: "FinTech • Mobile • Business",
      image: "images/hisaab2.png",
      tags: ["React Native", "Node.js", "Redux", "REST APIs", "TypeScript"],
      description: [
        "Developed a production-grade digital credit management application for small and medium-sized businesses.",
        "Built responsive cross-platform interfaces across Android and iOS.",
        "Integrated backend APIs and collaborated across frontend, backend, and product teams to deliver financial workflows.",
      ],
      source:
        "https://play.google.com/store/apps/details?id=com.app.retailohisaab&hl=en&gl=US",
    },

    {
      id: 10,
      title: "Duvlive – Live Entertainment Platform",
      category: "Full-Stack • Entertainment • Ticketing",
      image: "images/duvlive-logo.png",
      tags: ["Next.js", "React", "Node.js", "JavaScript", "REST APIs"],
      description: [
        "Contributed as a Full-Stack Engineer to a live entertainment and ticketing platform.",
        "Implemented frontend features and backend integrations using React, Next.js, and Node.js.",
        "Resolved production issues and improved application stability and user experience.",
      ],
      source: "https://www.duvlive.com/",
    },

    {
      id: 11,
      title: "Retailo – B2B Commerce Platform",
      category: "B2B Commerce • Mobile • Backend",
      image: "images/retailo.png",
      tags: ["React Native", "Node.js", "Redux", "REST APIs", "TypeScript"],
      description: [
        "Contributed to a B2B commerce platform supporting retailers with inventory ordering and business operations.",
        "Implemented high-performance mobile interfaces and integrated backend services.",
        "Optimized production application performance across multiple devices and workflows.",
      ],
      source:
        "https://play.google.com/store/apps/details?id=com.app.retailerapp&hl=en&gl=US",
    },
  ],

  // Experience
  experience: [
    // {
    //   id: 1,
    //   company: "Propmotive",
    //   role: "Senior Software Engineer",
    //   period: "Mar 2026 – Present",
    //   highlights: [
    //     "Re-architected authentication flows and the native Android SIP layer using Kotlin, Linphone SDK, and FreeSWITCH.",
    //     "Led the React Native upgrade from v0.73 to v0.86 with the New Architecture and Fabric, improving performance by approximately 40%.",
    //     "Built real-time VoIP calling and chat using Socket.IO and custom native modules.",
    //     "Established production observability using Sentry and refactored a key module from 5,500+ to approximately 1,800 lines for improved maintainability.",
    //     "Evaluated and ranked AI model responses for a US-based AI research initiative, developing detailed rationales and benchmarking model performance.",
    //     "Contributed to AI training workflows including Supervised Fine-Tuning, dataset preparation, and response optimization using JavaScript, TypeScript, Node.js, and NestJS.",
    //   ],
    // },

    {
      id: 2,
      company: "Xenia",
      role: "Senior Software Engineer",
      period: "Sep 2024 – Feb 2026",
      highlights: [
        "Led end-to-end engineering for a mobile-first SaaS platform supporting 15K+ daily active users across distributed enterprise environments.",
        "Collaborated on AI-powered operational reporting, intelligent template summaries, and natural language insights.",
        "Directed React Native modernization from v0.68 to v0.73, resolving 150+ breaking changes and reducing crash rates by 50%.",
        "Coordinated frontend architecture and backend integrations to enable scalable offline-first synchronization using PowerSync and SQLite.",
        "Implemented centralized production monitoring with Sentry, reducing recurring crashes by 20%.",
        "Standardized state management and technical design practices, improving maintainability and engineering throughput by 40%.",
      ],
    },

    {
      id: 3,
      company: "DigitalTolk",
      role: "Senior Software Engineer",
      period: "Jul 2023 – Sep 2024",
      highlights: [
        "Led full-stack architecture supporting UK market expansion with scalable configuration and multi-environment deployment strategies.",
        "Designed and implemented RESTful backend services using Laravel and Node.js, improving booking system performance by 30%.",
        "Engineered GitLab CI/CD pipelines, reducing deployment time by 60% and improving release stability.",
        "Directed mobile release automation using Fastlane and CodePush, achieving 99.8% deployment reliability.",
        "Collaborated with product, QA, and backend teams throughout the full software development lifecycle.",
      ],
    },

    {
      id: 4,
      company: "Next Generation Innovations",
      role: "Applications Engineer II",
      period: "Jan 2020 – Jul 2023",
      highlights: [
        "Designed and implemented distributed microservices using NestJS and gRPC, improving backend scalability by 45% and reducing service latency.",
        "Led full-stack development for fintech and social platforms with more than 100K+ downloads.",
        "Architected secure Stripe payment integrations supporting compliant multi-market financial transactions.",
        "Integrated real-time chat, voice, and video communication using CometChat SDK, increasing user engagement by 60%.",
        "Deployed and maintained backend services on AWS with structured logging, monitoring, and fault isolation practices.",
        "Mentored 5+ engineers, introduced code review standards and unit testing practices, and reduced defects by 25%.",
      ],
    },

    {
      id: 5,
      company: "Capazyte",
      role: "Software Engineer",
      period: "Dec 2018 – Jan 2020",
      highlights: [
        "Developed full-stack web and mobile applications using React, React Native, and Node.js.",
        "Developed a full-stack multi-vendor e-commerce application using React.js, Node.js, Express.js, and MongoDB.",
        "Implemented frontend features, RESTful APIs, backend business logic, and database integrations.",
        "Built MERN-based blockchain administration tools with Redis caching for analytics across 1M+ records.",
        "Reduced manual processing by 30% through internal tools and workflow improvements.",
        "Improved blockchain administration efficiency by 35% through backend and dashboard performance optimization.",
      ],
    },
  ],

  // Achievements
  achievements: [
    {
      id: 0,
      value: "7+",
      title: "Years of Engineering Experience",
      description:
        "Built and scaled web, mobile, backend, and cloud systems across FinTech, SaaS, E-commerce, EdTech, VoIP, and enterprise platforms.",
    },
    {
      id: 1,
      value: "15K+",
      title: "Daily Active Users",
      description:
        "Helped scale an enterprise SaaS platform supporting frontline teams across distributed organizations.",
    },
    {
      id: 2,
      value: "100K+",
      title: "App Downloads",
      description:
        "Delivered production-grade applications used by customers across multiple international markets.",
    },
    {
      id: 3,
      value: "45%",
      title: "Backend Scalability Improvement",
      description:
        "Designed distributed microservices using NestJS and gRPC to improve scalability and reduce service latency.",
    },
    {
      id: 4,
      value: "50%",
      title: "Crash Rate Reduction",
      description:
        "Improved production application stability through architecture modernization, monitoring, and systematic incident resolution.",
    },
    {
      id: 5,
      value: "60%",
      title: "Faster Deployments",
      description:
        "Engineered CI/CD pipelines and release automation to significantly reduce deployment time.",
    },
    {
      id: 6,
      value: "99.8%",
      title: "Deployment Reliability",
      description:
        "Implemented automated mobile release workflows using Fastlane and CodePush for reliable production releases.",
    },
    {
      id: 7,
      value: "1M+",
      title: "Records Optimized",
      description:
        "Implemented Redis caching and backend optimizations for enterprise blockchain administration analytics.",
    },
  ],

  // Contact
  contact: {
    title: "Let's Build Something Great Together",
    description:
      "I'm open to Senior Full-Stack Engineer, Senior Software Engineer, and Technical Lead opportunities. I enjoy building scalable products across frontend, backend, mobile, cloud, and AI-powered systems.",
    email: "muhammadmoizshaikh@gmail.com",
    phone: "+92 304 5464742",
    phoneHref: "+923045464742",
    location: "Karachi, Pakistan",
    availability: "Open to Remote • Hybrid • Full-Time",
    github: {
      url: "https://github.com/abdulmoizshaikh",
      text: "github.com/abdulmoizshaikh",
    },
    linkedin: {
      url: "https://linkedin.com/in/iammoiz",
      text: "linkedin.com/in/iammoiz",
    },
  },

  // Footer
  footer: {
    copyright: `© ${new Date().getFullYear()} Muhammad Moiz. All rights reserved.`,
    builtWith:
      "Designed & Built with Next.js, React, TypeScript, and modern web technologies",
  },
};
