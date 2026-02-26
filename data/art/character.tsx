import LongingEmblem from "@/components/logo/longing-emblem";
import NostalgiaEmblem from "@/components/logo/nostalgia-emblem";
import { ReactNode } from "react";

export type characterID =
  | "cooper"
  | "van"
  | "mynx"
  | "tsubaki"
  | "acura"
  | "ghost"
  | "emmie";

export interface Character {
  id: characterID;
  name: string;
  age: number;
  gender: "male" | "female";
  species: string;
  occupation: string;
  shortDesc: string;
  design?: string;
  emblem?: ReactNode;
  class_position?: string;
  class_bg?: string;
  class_font?: string;
  artworks: string[];
}

export const characters: Character[] = [
  {
    id: "tsubaki",
    name: "Tsubaki Nishimura",
    age: 26,
    gender: "female",
    species: "Oni",
    occupation: "Archivist/Shrine Guardian",
    shortDesc:
      "A once revered shrine keeper stripped from her timeline into modern day Japan, Tsubaki recollects the traces of her past and discovers the fleeting joys of an ordinary life.",
    design: "/personal/tsubaki-2026.webp",
    emblem: <NostalgiaEmblem className="h-8 w-auto" />,
    class_bg: "bg-gradient-to-b from-transparent to-fuchsia-900/50",
    class_font: "font-nyght font-extrabold",
    artworks: [],
  },
  {
    id: "van",
    name: "Van Carina",
    age: 37,
    gender: "female",
    species: "Van Cat",
    occupation: "Merchant",
    shortDesc:
      "Scorned by choices she could not make, Van's sorrow transforms into purpose as fate grants her the miracle of motherhood.",
    design: "/personal/van-2026.webp",
    emblem: <LongingEmblem className="h-8 w-auto" />,
    class_position: "-top-[15%] -left-[50%]",
    class_bg:
      "bg-gradient-to-b from-transparent via-cyan-800/50 to-yellow-800/50",
    class_font: "font-isenheim",
    artworks: [],
  },
  {
    id: "cooper",
    name: "Cooper Baihaqi",
    age: 25,
    gender: "male",
    species: "Sand Cat",
    occupation: "Engineer",
    shortDesc:
      "What was once a dream come true now became his greatest regret, Cooper Baihaqi is willing to risk his very existence to return to his past.",
    design: undefined,
    class_bg: "bg-gradient-to-b from-transparent via-zinc-800/50 to-red-900/50",
    class_font: "font-display font-bold",
    artworks: [],
  },
  {
    id: "mynx",
    name: "Mynx Amina",
    age: 24,
    gender: "female",
    species: "Russian Blue Cat",
    occupation: "DJ/Dream Dweller",
    shortDesc:
      "Born of heartbreak and futility, Mynx Amina offers refuge to those lost in the void.",
    design: undefined,
    class_bg: "bg-gradient-to-b from-transparent to-teal-900/50",
    class_font: "font-pilowlava",
    artworks: [],
  },
];
