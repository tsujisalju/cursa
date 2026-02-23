import { characterID } from "./character";

export interface ArtPiece {
  id: string;
  title: string;
  date: string;
  characters: characterID[];
  type: "illustration" | "concept" | "comic" | "graphic design" | "fanart";
  description?: string;
  story?: string;
  image: string;
}

export const personalArt: ArtPiece[] = [
  {
    id: "dayswork",
    title: "Day's Work",
    date: "2025-1-13",
    characters: [],
    type: "fanart",
    description: "A fanart of Zani for the Wuthering Waves Fan Creation event.",
    image: "/personal/dayswork.webp",
  },
  {
    id: "cherry",
    title: "Cherry",
    date: "2023",
    characters: ["tsubaki"],
    type: "illustration",
    description: "A concept art for a Cherry application.",
    image: "/personal/cherry.webp",
  },
  {
    id: "silverlight",
    title: "Silverlight",
    date: "2025-05-02",
    characters: ["van"],
    type: "illustration",
    description:
      "A stagnation of memories, drifting further with the flow of time, while we carry our burdens and legacy with us through the depths of space.",
    image: "/personal/silverlight.webp",
  },
  {
    id: "hellfire",
    title: "Hellfire",
    date: "2023",
    characters: [],
    type: "illustration",
    description: "A fanart of Hellfire for the DNArt UGC event.",
    image: "/personal/hellfire.webp",
  },
];
