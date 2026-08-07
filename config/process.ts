import {
  Search,
  ClipboardList,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
} from "lucide-react";

export const processSteps = [
  {
    id: "01",
    title: "Discover",
    description:
      "Understand project goals, business requirements and user needs before writing code.",
    icon: Search,
  },
  {
    id: "02",
    title: "Plan",
    description:
      "Choose the right technologies, database structure and scalable architecture.",
    icon: ClipboardList,
  },
  {
    id: "03",
    title: "Design",
    description:
      "Create clean, responsive and accessible interfaces with reusable UI components.",
    icon: Palette,
  },
  {
    id: "04",
    title: "Develop",
    description:
      "Build secure frontend, backend APIs, authentication and database integration.",
    icon: Code2,
  },
  {
    id: "05",
    title: "Test",
    description:
      "Optimize performance, fix bugs and ensure reliability across all devices.",
    icon: ShieldCheck,
  },
  {
    id: "06",
    title: "Deploy",
    description:
      "Deploy production-ready applications with modern cloud platforms and best practices.",
    icon: Rocket,
  },
] as const;