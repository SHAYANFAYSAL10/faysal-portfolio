export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  projects: string[];
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    company: "Reddot Digital IT",
    role: "Associate Software Engineer",
    startDate: "Dec 2025",
    endDate: "Aug 2026",
    technologies: [
      "PHP",
      "Laravel",
      "Tailwind CSS",
      "ProcessMaker 4",
      "MySQL",
      "REST APIs",
    ],
    projects: [
      "Partner Portal",
      "ProcessMaker Workflow",
      "SecureBoard",
      "AccessCon",
    ],
    responsibilities: [
      "Developed and maintained backend functionality using PHP and Laravel.",
      "Built REST APIs, business logic, database operations, validation, and authentication/authorization.",
      "Worked extensively with ProcessMaker 4 and BPMN workflow systems.",
      "Developed reporting systems and large-dataset Excel exports using Laravel Queues.",
      "Optimized MySQL queries and Laravel queue workers to improve application performance.",
      "Contributed to the development and maintenance of the Partner Portal.",
      "Developed and customized workflow functionality using ProcessMaker 4.",
      "Contributed to SecureBoard, a BoardPAC-inspired board and meeting management system.",
      "Worked on AccessCon, an access and control management system using CodeIgniter and SQL Server.",
    ],
  },

  {
    company: "Reddot Digital IT",
    role: "Software Engineer Trainee",
    startDate: "Nov 2024",
    endDate: "Dec 2025",
    technologies: [
      "PHP",
      "Laravel",
      "Tailwind CSS",
      "ProcessMaker 4",
      "MySQL",
      "REST APIs",
    ],
    projects: [
      "Partner Portal",
      "ProcessMaker Workflow",
    ],
    responsibilities: [
      "Worked on ProcessMaker 4 workflow development and debugging.",
      "Developed custom workflow actions and automation logic.",
      "Contributed to frontend and backend development for the Partner Portal.",
      "Worked with database queries, REST APIs, validation, and dynamic data-driven interfaces.",
    ],
  },
];