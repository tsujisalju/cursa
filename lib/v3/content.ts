import { skills } from "@/data/v3/skills";

export const skillsWithEvidence = () =>
  skills.map((s) => ({
    ...s,
    projects: projects.filter((p) => p.stack.includes(s.id)),
    outputs: outputs.filter((o) => o.methods?.includes(s.id)),
  }));
