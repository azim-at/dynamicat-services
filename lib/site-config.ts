export const siteConfig = {
  name: "Dynamicat",
  description:
    "We turn your ideas into fast, scalable, and beautifully crafted digital products — from sleek websites to complex web applications, built to perform and designed to impress.",
  url: "https://dynamicat.co",
  ogImage: "/og-image.png",
  creator: "Dynamicat",
  email: "azeem.talikoti@gmail.com",
  phones: {
    india: "+91 9535983796",
    uae: "+971 509137418",
  },
  location: "Remote — Worldwide",
  portfolioUrl: "https://azim.dynamicat.co",
  socials: {
    github: "https://github.com/azim-at",
    linkedin: "https://www.linkedin.com/in/azim-at/",
  },
  navLinks: [
    { label: "Home", href: "/", external: false },
    { label: "About", href: "/about", external: false },
    { label: "Services", href: "/services", external: false },
    { label: "Blog", href: "/blog", external: false },
    { label: "Portfolio", href: "https://azim.dynamicat.co", external: true },
    { label: "Contact", href: "/contact", external: false },
  ] as const,
  services: [
    {
      slug: "website-development",
      title: "Website Development",
      category: "web",
      icon: "Globe" as const,
      shortDescription:
        "Pixel-perfect websites that load fast, rank high, and convert visitors into customers.",
      description:
        "We craft stunning, high-performance websites tailored to your brand. From corporate sites to landing pages, every pixel is intentional — built with clean code, responsive design, and SEO woven into every layer.",
      features: [
        "Responsive design for all devices",
        "SEO-optimized structure and content",
        "Fast load times and performance tuning",
        "CMS integration (WordPress, headless CMS)",
        "Analytics and tracking setup",
      ],
    },
    {
      slug: "web-app-development",
      title: "Web Application Development",
      category: "fullstack",
      icon: "AppWindow" as const,
      shortDescription:
        "Powerful web apps with intuitive interfaces and rock-solid backends that scale with you.",
      description:
        "We build web applications that people actually enjoy using. Whether it's a SaaS platform, admin dashboard, or customer portal — we deliver apps that are snappy, secure, and architected to grow alongside your business.",
      features: [
        "Single-page and server-rendered applications",
        "Real-time features and API integrations",
        "User authentication and role management",
        "Database design and optimization",
        "Third-party service integrations",
      ],
    },
    {
      slug: "fullstack-development",
      title: "Full-Stack Projects",
      category: "fullstack",
      icon: "Layers" as const,
      shortDescription:
        "End-to-end builds — frontend to backend to deployment — all under one roof.",
      description:
        "Get the complete package. We handle every layer of your application — from the interface your users see to the servers humming in the background. Seamless integration, consistent quality, zero headaches.",
      features: [
        "Frontend and backend architecture",
        "REST and GraphQL API development",
        "Database design (MongoDB, SQL)",
        "Server configuration and deployment",
        "CI/CD pipeline setup",
      ],
    },
    {
      slug: "wordpress-development",
      title: "WordPress Solutions",
      category: "web",
      icon: "FileCode" as const,
      shortDescription:
        "Custom WordPress experiences — themes, plugins, and e-commerce that just work.",
      description:
        "WordPress done right. We build custom themes, develop plugins, and create WooCommerce stores that are easy to manage, fast to load, and secure by default. Perfect for businesses that want power and simplicity.",
      features: [
        "Custom theme development",
        "Plugin development and customization",
        "WooCommerce integration",
        "Performance optimization",
        "Security hardening and maintenance",
      ],
    },
    {
      slug: "cloud-devops",
      title: "Cloud & DevOps",
      category: "cloud",
      icon: "Cloud" as const,
      shortDescription:
        "Infrastructure that scales on demand — automated, monitored, and always available.",
      description:
        "We design cloud infrastructure that doesn't keep you up at night. From architecture to automated deployments, we make sure your apps run reliably on AWS, Azure, or Oracle Cloud — so you can focus on what matters.",
      features: [
        "Cloud architecture and migration",
        "CI/CD pipeline automation",
        "Container orchestration (Docker, Kubernetes)",
        "Infrastructure as Code (Terraform)",
        "Monitoring, logging, and alerting",
      ],
    },
    {
      slug: "testing-qa",
      title: "Testing & QA",
      category: "cloud",
      icon: "ShieldCheck" as const,
      shortDescription:
        "Ship with confidence — comprehensive testing that catches bugs before your users do.",
      description:
        "Quality isn't optional. We build thorough testing strategies — unit, integration, end-to-end, and performance — so your application works flawlessly from launch day and every day after.",
      features: [
        "Unit and integration testing",
        "End-to-end automated testing",
        "Performance and load testing",
        "Security vulnerability assessment",
        "Code review and quality audits",
      ],
    },
  ],
  serviceCategories: [
    { value: "all", label: "All Services" },
    { value: "web", label: "Web Development" },
    { value: "fullstack", label: "Full-Stack" },
    { value: "cloud", label: "Cloud & DevOps" },
  ],
  process: [
    {
      step: 1,
      title: "Discovery",
      icon: "Search" as const,
      description:
        "We dig into your business, goals, and requirements to map out a clear path forward.",
    },
    {
      step: 2,
      title: "Design",
      icon: "Palette" as const,
      description:
        "We shape wireframes and mockups that align with your brand and delight your users.",
    },
    {
      step: 3,
      title: "Develop",
      icon: "Code" as const,
      description:
        "We bring designs to life with clean, maintainable code and modern best practices.",
    },
    {
      step: 4,
      title: "Deploy",
      icon: "Rocket" as const,
      description:
        "We launch with proper infrastructure, monitoring, and performance dialed in.",
    },
    {
      step: 5,
      title: "Support",
      icon: "Headphones" as const,
      description:
        "We stick around — maintenance, updates, and support to keep things running smooth.",
    },
  ],
  stats: [
    { value: "50+", label: "Projects Delivered" },
    { value: "30+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "99%", label: "Client Satisfaction" },
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechFlow Inc.",
      content:
        "Dynamicat transformed our outdated website into a modern, high-performing platform. Our conversion rate jumped 40% in the first month. Couldn't be happier with the results.",
      avatar: "",
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "StartupLab",
      content:
        "They built our entire SaaS platform from scratch. The code quality and architecture are top-notch. If you're serious about your product, work with Dynamicat.",
      avatar: "",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthCo",
      content:
        "Our e-commerce platform was delivered on time and on budget. The site is blazing fast, and our customers love the seamless shopping experience. Truly professional.",
      avatar: "",
    },
    {
      name: "David Park",
      role: "CTO",
      company: "CloudNine Solutions",
      content:
        "They migrated our infrastructure to AWS and set up CI/CD from scratch. Deployment times went from hours to minutes. Our system has never been more reliable.",
      avatar: "",
    },
  ],
  faqs: [
    {
      question: "What is your typical project timeline?",
      answer:
        "It depends on the scope. A website typically takes 2-4 weeks, while a full-stack web app can take 6-12 weeks. We map out a detailed timeline during the discovery phase.",
    },
    {
      question: "How do you handle pricing?",
      answer:
        "Every project is different, so we provide custom quotes based on your needs. Reach out for a free consultation and we'll put together a detailed estimate — no strings attached.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Absolutely. We offer flexible maintenance packages including updates, security patches, performance monitoring, and priority support. We're in it for the long run.",
    },
    {
      question: "Can you work with my existing team?",
      answer:
        "Yes — we regularly collaborate with in-house teams. We're flexible and can adapt to your existing workflows, tools, and communication style.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes! The initial consultation is completely free. We'll discuss your requirements, suggest an approach, and give you a rough estimate. No commitment needed.",
    },
  ],
} as const

export type SiteConfig = typeof siteConfig
export type Service = (typeof siteConfig.services)[number]
export type Testimonial = (typeof siteConfig.testimonials)[number]
export type ProcessStep = (typeof siteConfig.process)[number]
