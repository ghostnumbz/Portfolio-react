// Project data
export interface Technology {
  name: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  demoUrl: string;
  codeUrl: string;
}

export const projectsData: Project[] = [
  {
    title: "Python port scanner",
    description:
      "A fast and lightweight Python-based port scanner for quickly identifying open ports on target hosts",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBMzWgTAFowO3-TkRJdUUV36-SwH1fbxuTAw&s",
    technologies: [
      { name: "Python", color: "bg-blue-100 text-blue-800" },
      { name: "Socket", color: "bg-green-100 text-green-800" },
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/ghostnumbz/NumbScan",
  },

  {
    title: "Portfolio-React Website",
    description:
      "A modern React-based portfolio showcasing my projects, skills, and experience in web development with a clean and responsive design.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFGBTwrc-m2PX_3YlVq-RcE25W8wv96dBTw&s",
    technologies: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "TypeScript", color: "bg-green-100 text-green-800" },
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/ghostnumbz/Portfolio-react",
  },

  {
    title: "Bookify - Node.js REST API",
    description:
      "A simple Node.js-based REST API for managing a book collection, supporting CRUD operations with clean routing and structured JSON responses.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQSIPr1mX9ym5PDF5_-pPXz4X27uIQNUaNOMIsbbjx59b28EhwaN6_AVStJbLNilF0LGg&usqp=CAU",
    technologies: [
      { name: "Node.js", color: "bg-green-100 text-green-800" },
      { name: "Express.js", color: "bg-yellow-100 text-yellow-800" },
      { name: "REST API", color: "bg-blue-100 text-blue-800" },
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/ghostnumbz/bookify.git",
  },
];

// Skills data
export interface Skill {
  name: string;
  level: number;
}

export interface OtherSkill {
  name: string;
  icon: string;
}

export const frontendSkills: Skill[] = [
  { name: "HTML5 & CSS3", level: 70 },
  { name: "JavaScript ", level: 70 },
  { name: "React", level: 50 },
  { name: "Tailwind CSS", level: 30 },
];

export const backendSkills: Skill[] = [
  { name: "Node.js & Express", level: 60 },
  { name: "MongoDB", level: 45 },
  { name: "SQL (MySQL, PostgreSQL)", level: 30 },
  { name: "RESTful APIs", level: 50 },
  { name: "Firebase", level: 10 },
];

export const databaseSkills: Skill[] = [
  { name: "MongoDB", level: 0 },
  { name: "PostgreSQL", level: 0 },
  { name: "MySQL", level: 0 },
];

export const cloudSkills: Skill[] = [
  { name: "AWS", level: 60 },
  { name: "Google Cloud Platform", level: 70 },
  { name: "Netlify/Vercel", level: 40 },
];

export const skillsInProgress: Skill[] = [
  { name: "Neural Networks & Deep Learning", level: 30 },
  { name: "Computer Networking", level: 55 },
  { name: "Cybersecurity", level: 50 },
];

export const otherSkills: OtherSkill[] = [
  { name: "Git & GitHub", icon: "fab fa-git-alt" },
  { name: "Linux/Command Line", icon: "fas fa-terminal" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "AWS (EC2, S3)", icon: "fab fa-aws" },
  { name: "Google Cloud Platform", icon: "fas fa-cloud" },
  { name: "CI/CD", icon: "fas fa-code-branch" },
  { name: "Cybersecurity Basics", icon: "fas fa-user-shield" },
  { name: "Networking Fundamentals", icon: "fas fa-network-wired" },
  { name: "REST APIs", icon: "fas fa-plug" },
  { name: "Postman/API Testing", icon: "fas fa-vial" },
  { name: "TypeScript", icon: "fab fa-js-square" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "MongoDB", icon: "fas fa-database" },
  { name: "Express.js", icon: "fas fa-server" },
  { name: "Data Structures", icon: "fas fa-sitemap" },
  { name: "Algorithms", icon: "fas fa-sort-numeric-down" },
  { name: "Agile/Scrum", icon: "fas fa-users" },
  { name: "System Design Basics", icon: "fas fa-project-diagram" },
];

// Certificate data
export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  description?: string;
}

export interface CertificateCategory {
  category: string;
  icon: string;
  certificates: Certificate[];
}

export const certificatesData: CertificateCategory[] = [
  {
    category: "Frontend",
    icon: "fas fa-laptop-code",
    certificates: [
      {
        name: "HTML & CSS",
        issuer: "GUVI Geek Network",
        date: "May 2025",
        credentialUrl:
          "https://www.guvi.in/share-certificate/41526TqSeU75l0VM66",
        description:
          "Completed HTML & CSS course from GUVI with practical experience in responsive web design.",
      },

      {
        name: "JavaScript For Beginners",
        issuer: "GUVI Geek Network",
        date: "May 2025",
        credentialUrl:
          "https://www.guvi.in/share-certificate/772dls13PaU34175A5",
        description:
          "A beginner-friendly JavaScript course designed to build a strong foundation in web development through hands-on learning",
      },

      {
        name: "React",
        issuer: "GUVI Geek Network",
        date: "June 2025",
        credentialUrl:
          "https://www.guvi.in/share-certificate/b9UBp231503n7e92LD",
        description: "Master React.js to build fast, interactive web apps.",
      },
    ],
  },
  {
    category: "Backend",
    icon: "fas fa-server",
    certificates: [
      {
        name: "Node.js - The Complete Guide",
        issuer: "GUVI Geek Network",
        date: "currently learning",
        credentialUrl: "#",
        description:
          "Built scalable backend applications with Node.js, Express, and MongoDB",
      },
    ],
  },

  {
    category: "Cloud",
    icon: "fas fa-cloud",
    certificates: [
      {
        name: "Google Cloud Data Analytics Certificate",
        issuer: "Google Cloud Platform",
        date: "December 2024",
        credentialUrl:
          "https://www.credly.com/badges/cf09f88c-092f-4036-aa8b-6ca538c20c47/public_url",
        description:
          "Learn to collect, analyze, and visualize data using Google Cloud tools",
      },
    ],
  },
  {
    category: "Others",
    icon: "fas fa-cogs",
    certificates: [
      {
        name: "Docker and Kubernetes: The Complete Guide",
        issuer: "Udemy",
        date: "comming soon",
        credentialUrl: "#",
        description:
          "Containerized applications with Docker and orchestrated deployments with Kubernetes",
      },
    ],
  },
];
