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
      "stancl/tenancy",
      "Laravel Passport",
      "Laravel Queues",
    ],
    projects: [
      "SecureBoard",
      "Partner Portal",
      "ProcessMaker Workflow",
      "AccessCon",
    ],
    responsibilities: [
      "Built SecureBoard, a multi-tenant SaaS board and meeting platform, using stancl/tenancy for tenant isolation.",
      "Secured APIs with Laravel Passport token authentication, role-based permissions and encrypted file storage.",
      "Extended the ProcessMaker 4 BPMN engine to handle complex business rules and connect multiple systems.",
      "Built a reporting module with advanced filters and queued Excel exports of large datasets, with no timeouts or memory errors.",
      "Sped up slow MySQL queries, removed N+1 query problems, and tuned queue workers and Supervisor to cut job wait times.",
      "Worked on AccessCon, an access and control management system built with CodeIgniter and SQL Server.",
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
      "Bootstrap",
      "JavaScript",
    ],
    projects: [
      "Partner Portal",
      "ProcessMaker Workflow",
    ],
    responsibilities: [
      "Built REST APIs, business logic, validation, authentication and authorization in Laravel for the Partner Portal.",
      "Built data-driven pages with Tailwind CSS, Bootstrap and JavaScript, connected to backend APIs.",
      "Developed custom ProcessMaker 4 workflow actions that reduced manual work and made processes more reliable.",
      "Debugged and improved BPMN workflows across connected systems.",
    ],
  },
];
