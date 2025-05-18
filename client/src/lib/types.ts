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
    title: "E-commerce Platform",
    description: "A full-featured online store with product catalog, shopping cart, and secure checkout process.",
    image: "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: [
      { name: "React", color: "bg-blue-100 text-blue-800" },
      { name: "Node.js", color: "bg-green-100 text-green-800" },
      { name: "MongoDB", color: "bg-purple-100 text-purple-800" },
      { name: "Stripe API", color: "bg-yellow-100 text-yellow-800" }
    ],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity tool for managing projects, tracking tasks, and collaborating with team members.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: [
      { name: "Vue.js", color: "bg-blue-100 text-blue-800" },
      { name: "Firebase", color: "bg-red-100 text-red-800" },
      { name: "Tailwind CSS", color: "bg-teal-100 text-teal-800" },
      { name: "Chart.js", color: "bg-orange-100 text-orange-800" }
    ],
    demoUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Weather Forecast App",
    description: "A weather application that provides real-time forecasts and historical data for any location.",
    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: [
      { name: "JavaScript", color: "bg-blue-100 text-blue-800" },
      { name: "OpenWeather API", color: "bg-gray-100 text-gray-800" },
      { name: "Express.js", color: "bg-green-100 text-green-800" },
      { name: "D3.js", color: "bg-purple-100 text-purple-800" }
    ],
    demoUrl: "#",
    codeUrl: "#"
  }
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
  { name: "HTML5 & CSS3", level: 90 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "React", level: 80 },
  { name: "Tailwind CSS", level: 85 },
  { name: "Vue.js", level: 70 }
];

export const backendSkills: Skill[] = [
  { name: "Node.js & Express", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "SQL (MySQL, PostgreSQL)", level: 70 },
  { name: "RESTful APIs", level: 85 },
  { name: "Firebase", level: 75 }
];

export const databaseSkills: Skill[] = [
  { name: "MongoDB", level: 85 },
  { name: "PostgreSQL", level: 80 },
  { name: "MySQL", level: 75 },
  { name: "Firebase Firestore", level: 70 },
  { name: "Redis", level: 65 }
];

export const cloudSkills: Skill[] = [
  { name: "AWS", level: 75 },
  { name: "Google Cloud Platform", level: 70 },
  { name: "Azure", level: 65 },
  { name: "Heroku", level: 80 },
  { name: "Netlify/Vercel", level: 85 }
];

export const skillsInProgress: Skill[] = [
  { name: "Neural Networks", level: 45 },
  { name: "Deep Learning", level: 40 },
  { name: "Computer Networking", level: 55 },
  { name: "Blockchain Development", level: 35 },
  { name: "Cybersecurity", level: 50 }
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
  { name: "System Design", icon: "fas fa-project-diagram" }
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
        name: "Advanced React and Redux",
        issuer: "Udemy",
        date: "March 2023",
        credentialUrl: "#",
        description: "Mastered advanced React concepts, Redux state management, and frontend architecture"
      },
      {
        name: "Advanced CSS and Sass",
        issuer: "Udemy",
        date: "January 2022",
        credentialUrl: "#",
        description: "Created complex layouts, animations, and responsive designs with modern CSS"
      },
      {
        name: "JavaScript Algorithms and Data Structures",
        issuer: "freeCodeCamp",
        date: "May 2022",
        credentialUrl: "#",
        description: "Implemented complex algorithms and data structures in JavaScript"
      }
    ]
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
        description: "Built scalable backend applications with Node.js, Express, and MongoDB"
      },
      {
        name: "Advanced SQL and Database Design",
        issuer: "DataCamp",
        date: "November 2022",
        credentialUrl: "#",
        description: "Mastered SQL query optimization, database design, and normalization principles"
      },
      {
        name: "RESTful API Design",
        issuer: "Pluralsight",
        date: "September 2022",
        credentialUrl: "#",
        description: "Designed secure, efficient, and scalable RESTful APIs with industry best practices"
      }
    ]
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
        description: "Developed, deployed, and debugged cloud-based applications using AWS services"
      },
      {
        name: "Google Cloud Platform Fundamentals",
        issuer: "Google Cloud",
        date: "February 2023",
        credentialUrl: "#",
        description: "Built scalable applications using Google Cloud's compute, storage, and database services"
      },
      {
        name: "Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        date: "December 2022",
        credentialUrl: "#",
        description: "Gained foundational knowledge of cloud concepts and Microsoft Azure services"
      }
    ]
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
        description: "Containerized applications with Docker and orchestrated deployments with Kubernetes"
      },
      {
        name: "Professional Scrum Master I (PSM I)",
        issuer: "Scrum.org",
        date: "April 2023",
        credentialUrl: "#",
        description: "Applied Agile principles and Scrum methodologies to software development projects"
      },
      {
        name: "Machine Learning Fundamentals",
        issuer: "Coursera",
        date: "June 2022",
        credentialUrl: "#",
        description: "Implemented machine learning algorithms for data analysis and prediction models"
      }
    ]
  }
];
