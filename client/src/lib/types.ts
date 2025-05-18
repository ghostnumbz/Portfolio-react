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
      "https://cdn.vectorstock.com/i/1000x1000/46/50/port-scanner-vector-35924650.webp",
    technologies: [
      { name: "Python", color: "bg-blue-100 text-blue-800" },
      { name: "Socket", color: "bg-green-100 text-green-800" },
    ],
    demoUrl: "#",
    codeUrl: "#",
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
  { name: "JavaScript ", level: 30 },
  { name: "React", level: 30 },
  { name: "Tailwind CSS", level: 5 },
];

export const backendSkills: Skill[] = [
  { name: "Node.js & Express", level: 0 },
  { name: "MongoDB", level: 0 },
  { name: "SQL (MySQL, PostgreSQL)", level: 0 },
  { name: "RESTful APIs", level: 0 },
  { name: "Firebase", level: 0 },
];

export const databaseSkills: Skill[] = [
  { name: "MongoDB", level: 0 },
  { name: "PostgreSQL", level: 0 },
  { name: "MySQL", level: 0 },
  { name: "Firebase Firestore", level: 0 },
  { name: "Redis", level: 0 },
];

export const cloudSkills: Skill[] = [
  { name: "AWS", level: 0 },
  { name: "Google Cloud Platform", level: 35 },
  { name: "Azure", level: 0 },
  { name: "Heroku", level: 0 },
  { name: "Netlify/Vercel", level: 10 },
];

export const skillsInProgress: Skill[] = [
  { name: "Neural Networks", level: 45 },
  { name: "Deep Learning", level: 40 },
  { name: "Computer Networking", level: 55 },
  { name: "Blockchain Development", level: 0 },
  { name: "Cybersecurity", level: 50 },
];

export const otherSkills: OtherSkill[] = [
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "Docker", icon: "fab fa-docker" },
  { name: "AWS", icon: "fab fa-aws" },
  { name: "Responsive Design", icon: "fas fa-mobile-alt" },
  { name: "Web Accessibility", icon: "fas fa-universal-access" },
  { name: "Performance Optimization", icon: "fas fa-tachometer-alt" },
  { name: "CI/CD", icon: "fas fa-code-branch" },
  { name: "Command Line", icon: "fas fa-terminal" },
  { name: "GraphQL", icon: "fas fa-project-diagram" },
  { name: "Jest/Testing", icon: "fas fa-vial" },
  { name: "TypeScript", icon: "fab fa-js-square" },
  { name: "Agile/Scrum", icon: "fas fa-users" },
  { name: "UI/UX Design", icon: "fas fa-paint-brush" },
  { name: "Data Structures", icon: "fas fa-sitemap" },
  { name: "Algorithms", icon: "fas fa-sort-numeric-down" },
  { name: "Computer Networking", icon: "fas fa-network-wired" },
  { name: "SEO", icon: "fas fa-search" },
  { name: "System Design", icon: "fas fa-project-diagram" },
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
        credentialUrl: "#",
        description:
          "Completed HTML & CSS course from GUVI with practical experience in responsive web design.",
      },
      {
        name: "Advanced CSS and Sass",
        issuer: "Udemy",
        date: "January 2022",
        credentialUrl: "#",
        description:
          "Created complex layouts, animations, and responsive designs with modern CSS",
      },
      {
        name: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "May 2022",
        credentialUrl: "#",
        description:
          "Implemented complex algorithms and data structures in JavaScript",
      },
    ],
  },
  {
    category: "Backend",
    icon: "fas fa-server",
    certificates: [
      {
        name: "Node.js - The Complete Guide",
        issuer: "Udemy",
        date: "April 2023",
        credentialUrl: "#",
        description:
          "Built scalable backend applications with Node.js, Express, and MongoDB",
      },
      {
        name: "Advanced SQL and Database Design",
        issuer: "DataCamp",
        date: "November 2022",
        credentialUrl: "#",
        description:
          "Mastered SQL query optimization, database design, and normalization principles",
      },
      {
        name: "RESTful API Design",
        issuer: "Pluralsight",
        date: "September 2022",
        credentialUrl: "#",
        description:
          "Designed secure, efficient, and scalable RESTful APIs with industry best practices",
      },
    ],
  },
  {
    category: "Cloud",
    icon: "fas fa-cloud",
    certificates: [
      {
        name: "AWS Certified Developer - Associate",
        issuer: "Amazon Web Services",
        date: "August 2023",
        credentialUrl: "#",
        description:
          "Developed, deployed, and debugged cloud-based applications using AWS services",
      },
      {
        name: "Google Cloud Platform Fundamentals",
        issuer: "Google Cloud",
        date: "February 2023",
        credentialUrl: "#",
        description:
          "Built scalable applications using Google Cloud's compute, storage, and database services",
      },
      {
        name: "Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        date: "December 2022",
        credentialUrl: "#",
        description:
          "Gained foundational knowledge of cloud concepts and Microsoft Azure services",
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
        date: "February 2023",
        credentialUrl: "#",
        description:
          "Containerized applications with Docker and orchestrated deployments with Kubernetes",
      },
      {
        name: "Professional Scrum Master I (PSM I)",
        issuer: "Scrum.org",
        date: "April 2023",
        credentialUrl: "#",
        description:
          "Applied Agile principles and Scrum methodologies to software development projects",
      },
      {
        name: "Machine Learning Fundamentals",
        issuer: "Coursera",
        date: "June 2022",
        credentialUrl: "#",
        description:
          "Implemented machine learning algorithms for data analysis and prediction models",
      },
    ],
  },
];
