import { Area } from "./schema";

export const areas = [
  {
    id: "ssi",
    title: "Self-sovereingn identity",
    question:
      "How do people hold and present credentials without a central custodian?",
    summary: "",
  },
  {
    id: "zk-disclosure",
    title: "Selective disclosure",
    question: "How little can you reveal and still be trusted?",
    summary: "",
  },
  {
    id: "agent-policy",
    title: "Policy for autonomous agents",
    question:
      "Can limits on an agent be enforced by protocol rather than prompt?",
    summary: "",
  },
] as const satisfies readonly Area[];

export type AreaId = (typeof areas)[number]["id"];
