import { AreaId } from "./areas";
import { ProjectSlug } from "./projects";
import { SkillId } from "./skills";

export type ISODate = `${number}-${number}` | `${number}-${number}-${number}`;

export interface Area {
  id: string;
  title: string;
  question: string;
  summary: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  kind:
    "project" | "research-prototype" | "hackathon" | "coursework" | "client";
  status: "active" | "shipped" | "prototype" | "archived";
  period: { start: ISODate; end?: ISODate }; // no end = ongoing
  role: string;
  stack: SkillId[];
  areas?: AreaId[];
  links?: { repo: string; live?: string; demo?: string };
  featured?: boolean;
  figure?: { media?: string; caption: string };
}

export interface Output {
  id: string;
  type:
    "paper" | "preprint" | "thesis" | "report" | "talk" | "poster" | "patent";
  title: string;
  authors: string[];
  venue?: string;
  date: ISODate;
  status: "published" | "accepted" | "under-review" | "in-preparation";
  areas: AreaId[];
  projects?: ProjectSlug[];
  methods?: SkillId[];
  links?: { pdf?: string; doi?: string; slides?: string; code?: string };
  abstract?: string;
}

export interface Skill {
  id: string;
  label: string;
  group:
    | "language"
    | "framework"
    | "blockchain"
    | "infrastructure"
    | "research"
    | "design";
}
