import { Skill } from "./schema";

export const skills = [
  {
    id: "js",
    label: "JavaScript",
    group: "language",
  },
  {
    id: "ts",
    label: "TypeScript",
    group: "language",
  },
  {
    id: "react",
    label: "React",
    group: "framework",
  },
  {
    id: "nextjs",
    label: "Next.js",
    group: "framework",
  },
  {
    id: "angular",
    label: "Angular",
    group: "framework",
  },

  {
    id: "tailwind",
    label: "TailwindCSS",
    group: "design",
  },
  {
    id: "shadcn",
    label: "shadcn/ui",
    group: "design",
  },
  {
    id: "scss",
    label: "Sass CSS",
    group: "design",
  },
  {
    id: "node",
    label: "NodeJS",
    group: "framework",
  },
  {
    id: "bun",
    label: "Bun",
    group: "framework",
  },

  {
    id: "solidity",
    label: "Solidity",
    group: "blockchain",
  },
  {
    id: "hardhat",
    label: "Hardhat",
    group: "framework",
  },
  {
    id: "move",
    label: "Move",
    group: "blockchain",
  },
  {
    id: "java",
    label: "Java",
    group: "language",
  },
  {
    id: "csharp",
    label: "C#",
    group: "language",
  },
  {
    id: "aspnet",
    label: "ASP.NET",
    group: "framework",
  },
  {
    id: "py",
    label: "Python",
    group: "language",
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    group: "language",
  },
  {
    id: "sqlserver",
    label: "SQL Server",
    group: "language",
  },
  {
    id: "c",
    label: "C",
    group: "language",
  },
  {
    id: "c++",
    label: "C++",
    group: "language",
  },
  {
    id: "linux",
    label: "Linux Administration",
    group: "infrastructure",
  },
  {
    id: "figma",
    label: "Figma",
    group: "design",
  },
  {
    id: "krita",
    label: "Krita",
    group: "design",
  },
  {
    id: "aftereffects",
    label: "Adobe After Effects",
    group: "design",
  },
  {
    id: "azure",
    label: "Microsoft Azure",
    group: "infrastructure",
  },
  {
    id: "aws",
    label: "Amazon Web Services",
    group: "infrastructure",
  },
  {
    id: "vercel",
    label: "Vercel",
    group: "infrastructure",
  },
  {
    id: "optimism",
    label: "Optimism",
    group: "blockchain",
  },
  {
    id: "neon",
    label: "Neon Postgres",
    group: "infrastructure",
  },
  {
    id: "expo",
    label: "Expo",
    group: "framework",
  },
  {
    id: "literature-review",
    label: "Literature Review",
    group: "research",
  },
  {
    id: "survey",
    label: "Survey",
    group: "research",
  },
  {
    id: "case-study",
    label: "Case Study",
    group: "research",
  },
  {
    id: "technical-analysis",
    label: "Technical Analysis",
    group: "research",
  },
] as const satisfies readonly Skill[];

export type SkillId = (typeof skills)[number]["id"];
