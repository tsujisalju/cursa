import MacNManaLogo from "@/public/commercial/mac-n-mana/mac-n-mana-logo";
import MinswapLogo from "@/public/commercial/minswap/minswap-logo";
import PurritoGeneralLogo from "@/public/commercial/purritogeneral/purrito-general-logo";
import SteelSwapLogo from "@/public/commercial/steelswap/steelswap-logo";
import { ReactNode } from "react";

export interface CommercialWork {
  id: string;
  client: string;
  project: string;
  startDate: string;
  endDate: string;
  skills: string[];
  description: string;
  link: string;
  testimonial?: string;
  testimonialAuthor?: string;
  deliverables: string[];
  logo: ReactNode;
  images: string[];
}

export const commercialWorks: CommercialWork[] = [
  {
    id: "mac-n-mana",
    client: "Mac n' Mana",
    project: "EthGlobal Online Hackathon 2025",
    startDate: "2025-10-10",
    endDate: "2025-12-19",
    skills: ["Ethereum", "Solidity", "Hardhat", "Next.js"],
    description:
      "Mac n’ Mana is a decentralized restaurant review platform aiming to empower diners and foodies by enabling them to search for restaurants, submit reviews, and vote on others’ feedback while earning reputation on-chain.",
    link: "https://mac-n-mana.vercel.app",
    testimonial: undefined,
    testimonialAuthor: undefined,
    deliverables: ["Dapp Prototype", "Frontend"],
    logo: (
      <div className="flex flex-row space-x-2 font-sans items-center text-zinc-50 dark:text-zinc-50 w-49 text-xl">
        <span>🍔</span>
        <MacNManaLogo />
      </div>
    ),
    images: ["/commercial/mac-n-mana/mac-n-mana-cover2.webp"],
  },
  {
    id: "purrito-general",
    client: "PurritoGeneral",
    project: "Brand Revamp",
    startDate: "2024-10-01",
    endDate: "Present",
    skills: ["Illustration", "Branding", "Krita"],
    description:
      "A brand revamp for PurritoGeneral, Co-founder of Noodles Finance on Sui, Advisory for Minswap DEX on Cardano. Featuring a new mascot design and a slew of brand assets with a unique twist of cats, anime and military.",
    link: "https://x.com/purritogeneral",
    testimonial:
      "this all is super solid, im so excited to release it and evolve my character, thanks so much 🙂",
    testimonialAuthor: "Purrito General",
    deliverables: [
      "Logo Design",
      "Social Media Assets",
      "Article Illustrations",
    ],
    logo: <PurritoGeneralLogo />,
    images: [
      "/commercial/purritogeneral/purrito-raining-coins.webp",
      "/commercial/purritogeneral/purrito-storytime.webp",
      "/commercial/purritogeneral/purrito-trenches.webp",
      "/commercial/purritogeneral/purrita-busy-at-work.webp",
      "/commercial/purritogeneral/purrita-busy-at-work.webp",
      "/commercial/purritogeneral/purrito-avatar.webp",
      "/commercial/purritogeneral/purrito-header.webp",
    ],
  },
  {
    id: "steelswap",
    client: "Steelswap Aggregator",
    project: "UI/UX Design Revamp",
    startDate: "2023-12-01",
    endDate: "2024-03-01",
    skills: ["Graphic Design", "UI/UX Design", "Krita", "Figma"],
    description:
      "Led the UI/UX Design for SteelSwap Aggregator, using Figma to visualize UI components and aesthetics of the interface. Adopting innovations in trading experiences from other blockchains to Cardano with critical acclaim, >$60M USD in total trading volume.",
    link: "https://steelswap.io",
    testimonial:
      "0 regrets on this design purrnama. You are doing amazing work.",
    testimonialAuthor: "Elder Millenial, Steelswap Founder",
    deliverables: [
      "UI/UX design featuring a rusty cyberpunk aesthetic",
      "Logo design and brand assets",
    ],
    logo: <SteelSwapLogo />,
    images: [
      "/commercial/steelswap/steelswap-bg2.webp",
      "/commercial/steelswap/steelswap-bg.webp",
      "/commercial/steelswap/steelswap-ui-prototype.webp",
      "/commercial/steelswap/steelswap-graphics.webp",
    ],
  },
  {
    id: "minswap",
    client: "Minswap DEX",
    project: "Designer and Frontend Developer",
    startDate: "2021-05-01",
    endDate: "2024-01-01",
    skills: [
      "Graphic Design",
      "Frontend Development",
      "Krita",
      "Inkscape",
      "Next.js",
      "Shopify",
    ],
    description:
      "Provide graphic design for marketing and merchandise, establishing brand identity through mascot illustrations, later assisting in developing the trading interface for Minswap DEX using Next.js and Tailwindcss, worked with a global team of agile individuals. >60K followers on X.",
    link: "https://minswap.org",
    testimonial: undefined,
    testimonialAuthor: undefined,
    deliverables: [
      "Mascot design for marketing assets",
      "Merchandise design and storefront management",
      "Frontend tasks",
    ],
    logo: (
      <div className="flex flex-row space-x-2 font-sans items-center w-49">
        <MinswapLogo />
        <span>V1</span>
      </div>
    ),
    images: [
      "/commercial/minswap/minswap-volume.webp",
      "/commercial/minswap/minswap-ui.webp",
      "/commercial/minswap/minswap-governance.webp",
      "/commercial/minswap/minswap-graphics.webp",
      "/commercial/minswap/minswap-orcfax.webp",
    ],
  },
];
