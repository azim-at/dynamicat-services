export interface Project {
  title: string
  image: string
  category: "freelance" | "personal" | "professional"
  description: string
  techs: string[]
  features: string[] | null
  link: string | null
  buttonText: string | null
  buttonLink: string | null
}

export const projects: Project[] = [
  {
    title: "Vital Hops",
    image: "/vhop.webp",
    category: "freelance",
    link: "https://vitalhops.com",
    techs: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "AWS",
      "Tailwind CSS",
      "ShadCN UI",
      "AI Analytics",
    ],
    description:
      "A secure asset management platform that helps users organize assets, designate beneficiaries, and ensure smooth wealth distribution — enhanced with AI-driven analytics and data insights.",
    features: [
      "Organize and manage all your assets in one secure platform.",
      "Designate beneficiaries and plan smooth wealth distribution.",
      "AI-powered analytics and data insights for smarter financial decisions.",
      "Modern UI with ShadCN, MagicUI, and TweakUI components.",
      "Scalable backend with Express.js, PostgreSQL, and AWS EC2 infrastructure.",
    ],
    buttonText: "Visit Now",
    buttonLink: "https://vitalhops.com",
  },
  {
    title: "Fils Consultancy LLC",
    image: "/fils.webp",
    category: "freelance",
    link: "https://azim-at.github.io/fils-consultancy/",
    techs: ["HTML", "CSS", "Bootstrap", "JavaScript", "GSAP"],
    description:
      "Professional website for a UAE-based corporate advisory and financial consultancy firm — covering accounting, tax, compliance, business setup, and strategic advisory services.",
    features: [
      "Smooth scroll animations and transitions powered by GSAP.",
      "Responsive design built with Bootstrap for seamless experience across all devices.",
      "Service pages covering accounting, tax, compliance, and business setup.",
      "Clean and professional UI reflecting the brand's corporate identity.",
      "Optimized for performance and SEO.",
    ],
    buttonText: "Visit Now",
    buttonLink: "https://azim-at.github.io/fils-consultancy/",
  },
  {
    title: "TrainingX E-Learning Platform",
    image: "/trainingx.webp",
    category: "freelance",
    link: "https://training-x.netlify.app/dashboard",
    techs: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Bootstrap",
      "REST API",
    ],
    description:
      "A full-stack e-learning platform where users can browse courses, purchase them, learn at their own pace, take quizzes, and earn certificates upon completion.",
    features: [
      "User authentication with secure login and registration.",
      "Browse and purchase courses with a seamless checkout flow.",
      "Track course progress and complete lessons step by step.",
      "Take quizzes at the end of each course to test your knowledge.",
      "Earn and download certificates upon successful course completion.",
    ],
    buttonText: "Visit Now",
    buttonLink: "https://training-x.netlify.app/dashboard",
  },
  {
    title: "Invoice Generator",
    image: "/invoice.webp",
    category: "personal",
    link: "https://invoice.dynamicat.co",
    techs: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "ShadCN UI",
    ],
    description:
      "A full-stack invoice generator application for creating, managing, and tracking invoices with a modern UI built with ShadCN components and MagicUI animations.",
    features: [
      "Create and manage professional invoices with a clean, intuitive interface.",
      "Full CRUD operations for clients, products, and invoices.",
      "Modern UI built with ShadCN components and MagicUI animations.",
      "Responsive design that works seamlessly across all devices.",
      "Backend API with Express.js and MongoDB for reliable data storage.",
    ],
    buttonText: "Visit Now",
    buttonLink: "https://invoice.dynamicat.co",
  },
  {
    title: "StudyPlan — 30-Day MERN Roadmap",
    image: "/study.webp",
    category: "personal",
    link: "https://study.dynamicat.co",
    techs: ["React.js", "Tailwind CSS", "JavaScript"],
    description:
      "A structured 30-day MERN stack study planner with daily topics, progress tracking, streaks, quick reviews, and estimated time remaining to keep developers on track.",
    features: [
      "Structured 28-day study plan with daily topics and weekly breakdown.",
      "Track progress across 114 topics with an overall completion percentage.",
      "Day streak tracking to stay consistent with your learning.",
      "Quick review sections to reinforce what you've learned.",
      "Estimated hours remaining so you always know where you stand.",
    ],
    buttonText: "Visit Now",
    buttonLink: "https://study.dynamicat.co",
  },
  {
    title: "Azaya Marketing",
    image: "/azaya.webp",
    category: "freelance",
    link: "https://azayamarketing.com",
    techs: ["HTML", "CSS", "JavaScript", "Bootstrap", "GSAP"],
    description:
      "Professional website for a digital marketing agency that combines creativity with measurable performance — helping brands scale across digital and traditional channels.",
    features: [
      "Branding & Design: Clear, confident, and consistent brand messaging.",
      "Web & Technology Solutions: Modern, high-performance digital platforms.",
      "SEO & SEM: Organic growth and paid search strategies.",
      "Content & Strategy: Compelling content and data-driven marketing.",
      "Digital Transformation: End-to-end digital solutions for scaling businesses.",
    ],
    buttonText: "Visit Now",
    buttonLink: "https://azayamarketing.com",
  },
  {
    title: "Groq and Gemini AI Model",
    image: "/groqgemini.webp",
    category: "personal",
    link: "https://github.com/azim-at/gemini-and-groq-ai/tree/main",
    techs: [
      "React.js",
      "Gemini API",
      "Groq API",
      "Context API",
      "React Router",
    ],
    description:
      "An intelligent AI chat companion powered by Gemini AI for advanced reasoning and Groq AI for fast computation — supporting learning, coding, and problem-solving.",
    features: [
      "Interactive AI Chat: Ask questions, get explanations, or have a conversation.",
      "Step-by-Step Problem Solving: Solve math, coding, or logic problems with AI guidance.",
      "Code Assistance: Debug and improve your code efficiently.",
      "Learning Companion: Simplified explanations for complex concepts.",
      "Creative Support: Generate ideas, write content, or brainstorm with AI.",
    ],
    buttonText: "GitHub",
    buttonLink: "https://github.com/azim-at/gemini-and-groq-ai/tree/main",
  },
  {
    title: "Gemini AI Clone",
    image: "/gemini.webp",
    category: "personal",
    link: "https://github.com/azim-at/gemini-ai-clone",
    techs: [
      "React.js",
      "Gemini API",
      "Bootstrap",
      "Context API",
      "React Router",
    ],
    description:
      "A conversational AI web app powered by the Gemini API with a modern, responsive interface — delivering real-time AI responses with clean, user-friendly design.",
    features: [
      "Integrated Gemini API for intelligent, real-time responses.",
      "Fully responsive custom UI styled with Bootstrap.",
      "Smooth multi-page navigation using React Router.",
      "Centralized state handling with Context API.",
      "Optimized for both desktop and mobile.",
    ],
    buttonText: "GitHub",
    buttonLink: "https://github.com/azim-at/gemini-ai-clone",
  },
  {
    title: "AI Image Generator",
    image: "/1.webp",
    category: "personal",
    link: "https://github.com/azim-at/Reactjs-Mini-Projects/tree/main/ai-image-generator",
    techs: ["React.js", "Bootstrap", "API Integration"],
    description:
      "A sleek AI Image Generator that takes text prompts and generates unique images using advanced AI models — with real-time generation and responsive design.",
    features: null,
    buttonText: "GitHub",
    buttonLink:
      "https://github.com/azim-at/Reactjs-Mini-Projects/tree/main/ai-image-generator",
  },
  {
    title: "Valcraft Engineers",
    image: "/valcraft.webp",
    category: "freelance",
    link: "https://valcraftengineers.com/",
    techs: ["React.js", "Bootstrap", "JavaScript"],
    description:
      "Official website for an engineering services company — clean, modern, and responsive design showcasing services, expertise, and project portfolio.",
    features: null,
    buttonText: "Visit Now",
    buttonLink: "https://valcraftengineers.com/",
  },
  {
    title: "The Panel Station",
    image: "/tps.webp",
    category: "professional",
    link: "https://www.thepanelstation.com/",
    techs: ["React.js", "Bootstrap", "jQuery", "SEO"],
    description:
      "Global online community platform that rewards users for participating in surveys. Worked on front-end components, optimized email templates, and enhanced mobile responsiveness.",
    features: null,
    buttonText: "Visit Now",
    buttonLink: "https://www.thepanelstation.com/",
  },
  {
    title: "MDForLives",
    image: "/mdfl.webp",
    category: "professional",
    link: "https://mdforlives.com/",
    techs: ["React.js", "Bootstrap", "jQuery", "SEO"],
    description:
      "Global community of healthcare professionals participating in medical surveys and research studies. Enhanced front-end design and created campaign landing pages.",
    features: null,
    buttonText: "Visit Now",
    buttonLink: "https://mdforlives.com/",
  },
  {
    title: "Borderless Access",
    image: "/ba.webp",
    category: "professional",
    link: "https://borderlessaccess.com/",
    techs: ["Bootstrap", "WordPress", "JavaScript", "SEO"],
    description:
      "Digital market research company offering data-driven insights across global audiences. Updated front-end design and implemented marketing-driven landing pages.",
    features: null,
    buttonText: "Visit Now",
    buttonLink: "https://borderlessaccess.com/",
  },
  {
    title: "Movie Review App",
    image: "/movie.webp",
    category: "personal",
    link: "https://github.com/azim-at/React-Movie-Review-Page",
    techs: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "REST API"],
    description:
      "A Movie Review web app where users can browse movies, read and submit reviews, and interact with dynamic content — powered by Node.js and Express.js RESTful APIs.",
    features: null,
    buttonText: "GitHub",
    buttonLink: "https://github.com/azim-at/React-Movie-Review-Page",
  },
  {
    title: "React To-Do App",
    image: "/todo.webp",
    category: "personal",
    link: "https://github.com/azim-at/React-To-Do-App",
    techs: ["React.js", "Bootstrap", "JavaScript"],
    description:
      "A dynamic and responsive To-Do List application with add, edit, and delete functionality — demonstrating clean component structure and React hooks.",
    features: null,
    buttonText: "GitHub",
    buttonLink: "https://github.com/azim-at/React-To-Do-App",
  },
  {
    title: "MDForLives Healthcare Surveys",
    image: "/mdfl-1.webp",
    category: "professional",
    link: "https://mdforlives.com/healthcare-surveys/",
    techs: ["Bootstrap", "WordPress", "JavaScript", "SEO"],
    description:
      "Platform connecting healthcare professionals worldwide to participate in paid medical research and surveys. Enhanced front-end experience with responsive survey pages and campaign content.",
    features: null,
    buttonText: "Visit Now",
    buttonLink: "https://mdforlives.com/healthcare-surveys/",
  },
  {
    title: "Jain Polytechnic College",
    image: "/jgi.webp",
    category: "personal",
    link: "https://github.com/azim-at/JGI",
    techs: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    description:
      "Responsive website for Jain Polytechnic College featuring a clean layout and intuitive navigation — providing essential information about courses, faculty, and campus facilities.",
    features: null,
    buttonText: "GitHub",
    buttonLink: "https://github.com/azim-at/JGI",
  },
]

export const projectCategories = [
  { value: "all", label: "All" },
  { value: "freelance", label: "Freelance" },
  { value: "professional", label: "Professional" },
  { value: "personal", label: "Personal" },
] as const

/** Featured projects shown on the homepage */
export const featuredProjects = [
  projects[0], // Vital Hops
  projects[1], // Fils Consultancy
  projects[3], // Invoice Generator
  projects[5], // Azaya Marketing
  projects[10], // The Panel Station
  projects[2], // TrainingX
]
