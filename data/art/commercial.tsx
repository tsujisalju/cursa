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
  testimonial?: string;
  testimonialAuthor?: string;
  deliverables: string[];
  logo: ReactNode;
  images?: string[];
}

export const commercialWorks: CommercialWork[] = [
  {
    id: "purrito-general",
    client: "Purrito General",
    project: "Brand Revamp",
    startDate: "2024-10-01",
    endDate: "Present",
    skills: ["Illustration", "Branding"],
    testimonial:
      "this all is super solid, im so excited to release it and evolve my character, thanks so much 🙂",
    testimonialAuthor: "Purrito General",
    deliverables: [
      "Logo Design",
      "Social Media Assets",
      "Article Illustrations",
    ],
    logo: (
      <PurritoGeneralLogo className="text-zinc-50 dark:text-zinc-50 w-49" />
    ),
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
    skills: ["Graphic Design", "UI/UX Design"],
    testimonial:
      "0 regrets on this design purrnama. You are doing amazing work.",
    testimonialAuthor: "Elder Millenial, Steelswap Founder",
    deliverables: ["UI/UX Design", "Brand Assets"],
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
    skills: ["Graphic Design", "Frontend Development"],
    testimonial: undefined,
    testimonialAuthor: undefined,
    deliverables: ["Marketing Assets", "Merchandise", "Frontend"],
    logo: <MinswapLogo />,
    images: [
      "/commercial/minswap/minswap-volume.webp",
      "/commercial/minswap/minswap-ui.webp",
      "/commercial/minswap/minswap-governance.webp",
      "/commercial/minswap/minswap-graphics.webp",
      "/commercial/minswap/minswap-orcfax.webp",
    ],
  },
];
