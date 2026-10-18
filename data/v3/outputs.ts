import { Output } from "./schema";

export const outputs = [
  {
    id: "becp",
    type: "paper",
    title:
      "Using Blockchain to Measure Skill Development for University Extracurricular Activities",
    authors: ["Qayyum Yazid"],
    venue: "Asia Pacific University",
    date: "2026-05-20",
    status: "accepted",
    areas: ["ssi"],
    projects: ["becp"],
    methods: [
      "literature-review",
      "survey",
      "case-study",
      "technical-analysis",
    ],
    links: {
      code: "https://github.com/tsujisalju/becp",
    },
    abstract:
      "University graduates need not only great academic performance but also the right technical and soft skills necessary to pursue their career of choice. Beyond the standard curriculum, these skills can be obtained by partaking in extracurricular activities (ECAs). However, the skills obtained from ECAs are fragmented and difficult to verify, leaving university students unclear of their overall skills and how they can better improve their chances of success. Moreover, this difficulty affects the hiring process as well, as candidates must undergo further probation to prove the skills they already have, resulting in inefficient use of time and resources. The current approach of resumes and applicant tracking systems (ATS) for improving application screening has the unintended effect of keyword exploitation and credential fraud, rather than authentic skill development among candidates. This research aims to develop a prototype for issuing verifiable blockchain-based certificates for university extracurricular activities and a method to quantify students’ skills based on certificate metadata to better communicate students’ employability and improve efficiency of the hiring flow. This research conducted extensive literature review on the current landscape of extracurricular activities, how the value of extracurricular activities is perceived among university students, the use of blockchain technology in the education sector and the best approach for measuring skill development using blockchain-based micro-credentials. An online survey of 30 respondents has been conducted to ascertain the claims in literature and collect feedback and concerns from university students for consideration during the development of the proposed system.",
  },
] as const satisfies readonly Output[];
