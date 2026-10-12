export interface Work {
  title: string;
  tag: "Project" | "Research" | "Hackathon" | "Work";
  live?: boolean;
  excerpt: string;
}

export const works: Work[] = [
  {
    title: "Koshirae: Scoped agent wallets",
    tag: "Project",
    live: true,
    excerpt:
      "AI agents can now hold financial autonomy. But a prompt does not guarantee an agent will behave within limits. Koshirae enforces limits at the protocol level using on-chain policy objects on Sui blockchain.",
  },
  {
    title: "Blockchain extracurricular credentials platform",
    tag: "Project",
    live: true,
    excerpt:
      "Extracurricular activities verification remain fragmented and unstructured, making it hard for students to prove the skills they developed. Demonstrated on-chain issuance of skill micro-credentials for extracurricular participation on Optimism L2 network.",
  },
  {
    title: "Zero-knowledge identity research",
    tag: "Research",
    excerpt:
      "Personal information is constantly being overshared and scattered across online services. One small leak and your identity is compromised. Building a decentralized identity solution using W3C Verifiable Credentials and ZK proofs to enable self-custody and selective disclosure.",
  },
];
