export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "PMP / Partner Portal",
    description:
      "Contributed to an enterprise partner portal by developing backend functionality, REST APIs, database operations, business logic, validation, and dynamic user interfaces.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "ProcessMaker",
      "Tailwind CSS",
    ],
  },

  {
    title: "Workflow / E-Approval System",
    description:
      "Worked on workflow automation and electronic approval processes using ProcessMaker 4 and BPMN, including custom workflow actions, integrations, business logic, and backend services.",
    technologies: [
      "Laravel",
      "PHP",
      "ProcessMaker 4",
      "BPMN",
      "MySQL",
      "REST API",
    ],
  },

  {
    title: "SecureBoard",
    description:
      "Contributed to a board and meeting management platform inspired by BoardPAC, working on backend functionality, APIs, database operations, business logic, and application features.",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "REST API",
    ],
  },

  {
    title: "AccessCon",
    description:
      "Worked on an access and control management system, contributing to backend development, database operations, APIs, and business logic using CodeIgniter and SQL Server.",
    technologies: [
      "PHP",
      "CodeIgniter",
      "SQL Server",
      "REST API",
      "JavaScript",
    ],
  },
];