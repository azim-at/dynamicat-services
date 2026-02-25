export const siteConfig = {
  name: "DynamicAT",
  description:
    "We turn your ideas into fast, scalable, and beautifully crafted digital products — from sleek websites to complex web applications, built to perform and designed to impress.",
  url: "https://dynamicat.co",
  ogImage: "/og-image.png",
  creator: "DynamicAT",
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
    instagram: "https://www.instagram.com/__iazim",
  },
  navLinks: [
    { label: "Home", href: "/", external: false },
    { label: "About", href: "/about", external: false },
    { label: "Services", href: "/services", external: false },
    { label: "Projects", href: "/projects", external: false },
    { label: "Blog", href: "/blog", external: false },
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
        "We craft stunning, high-performance websites tailored to your brand. From corporate sites and WordPress builds to landing pages — every pixel is intentional, built with clean code, responsive design, and SEO woven into every layer.",
      features: [
        "Responsive design for all devices",
        "SEO-optimized structure and content",
        "CMS integration (WordPress, headless CMS)",
        "Custom WordPress themes and plugins",
        "Performance tuning and analytics setup",
      ],
    },
    {
      slug: "web-app-development",
      title: "Web Application Development",
      category: "app",
      icon: "AppWindow" as const,
      shortDescription:
        "Powerful web apps with intuitive interfaces and rock-solid backends that scale with you.",
      description:
        "We build web applications that people actually enjoy using. Whether it's a SaaS platform, admin dashboard, or customer portal — we deliver apps that are snappy, secure, and architected to grow alongside your business.",
      features: [
        "Single-page and server-rendered applications",
        "Real-time features and WebSocket integration",
        "User authentication and role management",
        "Database design and optimization",
        "Third-party service integrations",
      ],
    },
    {
      slug: "fullstack-development",
      title: "Full-Stack Development",
      category: "app",
      icon: "Layers" as const,
      shortDescription:
        "End-to-end builds — frontend to backend to deployment — all under one roof.",
      description:
        "Get the complete package. We handle every layer of your application — from the interface your users see to the servers and CI/CD pipelines humming in the background. Infrastructure, testing, and quality assurance are baked into every project.",
      features: [
        "Frontend and backend architecture",
        "Cloud deployment and DevOps (AWS, Azure, Docker)",
        "CI/CD pipeline automation",
        "Comprehensive testing and QA",
        "Monitoring, logging, and maintenance",
      ],
    },
    {
      slug: "ui-ux-design",
      title: "UI/UX Design",
      category: "design",
      icon: "Paintbrush" as const,
      shortDescription:
        "Thoughtful interfaces and seamless user experiences that keep people coming back.",
      description:
        "Great products start with great design. We create intuitive user interfaces and delightful experiences grounded in research — from wireframes and prototypes to polished visual designs that align with your brand and convert.",
      features: [
        "User research and persona development",
        "Wireframing and interactive prototyping",
        "Visual design and design systems",
        "Usability testing and iteration",
        "Mobile-first responsive design",
      ],
    },
    {
      slug: "ecommerce-solutions",
      title: "E-Commerce Solutions",
      category: "web",
      icon: "ShoppingCart" as const,
      shortDescription:
        "Online stores that sell — beautiful storefronts with seamless checkout experiences.",
      description:
        "We build e-commerce experiences that drive revenue. From custom Shopify and WooCommerce stores to fully bespoke platforms — we handle product catalogs, payment gateways, inventory management, and everything in between.",
      features: [
        "Custom storefront design and development",
        "Shopify and WooCommerce integration",
        "Payment gateway and checkout optimization",
        "Inventory and order management",
        "Analytics, SEO, and conversion tracking",
      ],
    },
    {
      slug: "api-development",
      title: "API & Integration Development",
      category: "app",
      icon: "Webhook" as const,
      shortDescription:
        "Robust APIs and seamless integrations that connect your systems and power your products.",
      description:
        "We architect and build APIs that are fast, secure, and a joy to work with. Whether you need REST endpoints, GraphQL schemas, or third-party integrations — we create the connective tissue that makes your tech stack work as one.",
      features: [
        "RESTful and GraphQL API design",
        "Third-party API integrations",
        "Microservices architecture",
        "API documentation and versioning",
        "Authentication, rate limiting, and security",
      ],
    },
  ],
  serviceCategories: [
    { value: "all", label: "All Services" },
    { value: "design", label: "Design" },
    { value: "web", label: "Web" },
    { value: "app", label: "Applications" },
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
      name: "Training Director",
      role: "Training Director",
      company: "TrainingX, London",
      content:
        "Azim built our e-learning platform with course flows, quizzes, and certifications — all working flawlessly for our nursing students. Clear communication, on-time delivery, and a solid final product.",
      avatar: "",
    },
    {
      name: "Operations Manager",
      role: "Operations Manager",
      company: "Valcraft Engineers",
      content:
        "He turned our requirements into a clean, professional website that truly reflects our brand. It's responsive, easy to navigate, and exactly what we needed to establish our online presence.",
      avatar: "",
    },
    {
      name: "Managing Partner",
      role: "Managing Partner",
      company: "Fils Consultancy LLC, UAE",
      content:
        "Our consultancy website looks polished and professional. Smooth animations, clean layout, and great performance on every device. Azim's attention to detail made the whole process effortless.",
      avatar: "",
    },
    {
      name: "Product Owner",
      role: "Product Owner",
      company: "Vital Hops",
      content:
        "Azim handled both frontend and backend with ease. The platform is secure, scalable, and modern — and he quickly grasped complex workflows like asset management and beneficiary tracking.",
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
