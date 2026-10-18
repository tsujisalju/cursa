import { Project } from "./schema";

export const projects = [
  {
    slug: "zk-identity",
    title: "Zero-knowledge Identity Research",
    summary:
      "Personal information is constantly being overshared and scattered across online services. One small leak and your identity is compromised. Building a decentralized identity solution using W3C Verifiable Credentials and ZK proofs to enable self-custody and selective disclosure.",
    kind: "research-prototype",
    status: "active",
    period: { start: "2026-09-01" },
    role: "Associate Researcher: W3C Verifiable Credentials integration",
    stack: ["ts", "expo", "react"],
    areas: ["ssi", "zk-disclosure"],
    featured: true,
    figure: {
      media: "",
      caption: "sketch",
    },
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    summary:
      "I continuously update my website with my creative and commercial works with my own unique flare and presentation. Built on Next.js, working towards schema-driven content. Pivoting focus to research, while paying homage to designer legacy.",
    kind: "project",
    status: "active",
    period: { start: "2022-07-30" },
    role: "Solo: whole project structure and content",
    stack: ["ts", "nextjs", "tailwind", "react", "vercel"],
    areas: [],
    featured: true,
    figure: {
      media: "",
      caption: "screenshot",
    },
  },
  {
    slug: "koshirae",
    title: "Koshirae",
    summary:
      "AI agents can now hold financial autonomy. But a prompt does not guarantee that an agent will behave within limits. Koshirae enforces those limits at the protocol level using on-chain policy objects on Sui blockchain. All actions are checked against policy. Anything exceeding the policy fails, protecting against compromised agent actions.",
    kind: "project",
    status: "active",
    period: { start: "2026-08-26" },
    role: "Main developer: Smart contracts, API and SDK packages",
    stack: ["move", "ts", "nextjs"],
    areas: ["agent-policy"],
    links: {
      repo: "https://github.com/tsujisalju/koshirae",
    },
    featured: true,
    figure: {
      media: "",
      caption: "sketch",
    },
  },
  {
    slug: "becp",
    title: "Blockchain Extracurricular Credentials Platform",
    summary:
      "Extracurricular activities verification remain fragmented and unstructured, making it hard for students to prove the skills they developed. Demonstrated on-chain issuance of skill micro-credentials for extracurricular participation on Optimism L2 network.",
    kind: "research-prototype",
    status: "prototype",
    period: { start: "2026-03-07", end: "2026-06-10" },
    role: "Solo: research, technical analysis, prototype development",
    stack: [
      "ts",
      "solidity",
      "nextjs",
      "tailwind",
      "optimism",
      "postgres",
      "neon",
    ],
    areas: ["ssi"],
    links: {
      repo: "https://github.com/tsujisalju/becp",
      live: "https://becp.vercel.app/",
      demo: "https://youtu.be/tPhLIrAUc38",
    },
    featured: true,
    figure: {
      media: "/commercial/becp/screenshot-1.webp",
      caption: "screenshot",
    },
  },
  {
    slug: "mac-n-mana",
    title: "Mac n' Mana",
    summary:
      "Mac n’ Mana is a decentralized restaurant review platform aiming to empower diners and foodies by enabling them to search for restaurants, submit reviews, and vote on others’ feedback while earning reputation on-chain.",
    kind: "hackathon",
    status: "archived",
    period: { start: "2025-10-10", end: "2025-12-19" },
    role: "Smart contract, frontend",
    stack: ["ts", "solidity", "hardhat", "nextjs"],
    areas: [],
    links: {
      repo: "https://github.com/tsujisalju/mac-n-mana",
      live: "https://mac-n-mana.vercel.app/",
      demo: "https://ethglobal.com/showcase/mac-n-mana-q2oxp",
    },
    featured: false,
    figure: {
      media: "/commercial/mac-n-mana/mac-n-mana-desktop.webp",
      caption: "screenshot",
    },
  },
  {
    slug: "steelswap",
    title: "Steelswap Aggregator",
    summary:
      "Led the UI/UX Design for SteelSwap Aggregator, using Figma to visualize UI components and aesthetics of the interface. Adopting innovations in trading experiences from other blockchains to Cardano with critical acclaim, >$60M USD in total trading volume.",
    kind: "client",
    status: "shipped",
    period: { start: "2023-12-01", end: "2024-03-01" },
    role: "Interface, logo and brand assets design",
    stack: ["figma", "krita"],
    areas: [],
    links: {
      repo: "",
      live: "https://steelswap.io",
    },
    featured: false,
  },
  {
    slug: "minswap",
    title: "Minswap V1",
    summary:
      "Provide graphic design for marketing and merchandise, establishing brand identity through mascot illustrations, later assisting in developing the trading interface for Minswap DEX using Next.js and Tailwindcss, worked with a global team of agile individuals. >60K followers on X.",
    kind: "client",
    status: "shipped",
    period: { start: "2021-05-01", end: "2024-01-01" },
    role: "",
    stack: ["figma", "krita"],
    areas: [],
    links: {
      repo: "",
      live: "https://minswap.org",
    },
    featured: false,
  },
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];
