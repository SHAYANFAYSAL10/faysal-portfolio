export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "SecureBoard",
    description:
      "A multi-tenant SaaS platform for board and meeting management, built on stancl/tenancy. Developed secure REST APIs with Laravel Passport token authentication and permission checks, encrypted file storage with role-based downloads, and lean API responses that keep sensitive data out.",
    technologies: [
      "Laravel",
      "PHP",
      "stancl/tenancy",
      "Laravel Passport",
      "MySQL",
      "REST API",
    ],
  },

  {
    title: "PMP / Partner Portal",
    description:
      "Full-stack work on an enterprise partner portal: REST APIs, business logic, validation, authentication and authorization in Laravel, plus data-driven pages built with Tailwind CSS, Bootstrap and JavaScript.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "Tailwind CSS",
      "JavaScript",
    ],
  },

  {
    title: "Workflow Automation",
    description:
      "Extended a ProcessMaker 4 BPMN workflow engine to handle complex business rules and connect multiple systems. Built custom workflow actions that cut manual work, and tuned queries and queue processing so workflows run faster.",
    technologies: [
      "ProcessMaker 4",
      "BPMN",
      "Laravel",
      "PHP",
      "MySQL",
      "Laravel Queues",
    ],
  },

  {
    title: "Reporting & Excel Export System",
    description:
      "A reporting module with advanced filters and search for operations teams. Exports large datasets to formatted Excel files through Laravel Queues, with no timeouts or memory errors.",
    technologies: [
      "Laravel",
      "PHP",
      "Laravel Queues",
      "MySQL",
    ],
  },

  {
    title: "AccessCon",
    description:
      "An access and control management system. Worked on backend features, database operations, APIs and business logic using CodeIgniter and SQL Server.",
    technologies: [
      "PHP",
      "CodeIgniter",
      "SQL Server",
      "REST API",
      "JavaScript",
    ],
  },
];
