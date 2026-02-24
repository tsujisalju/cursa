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
  lore: string;
  design?: string;
  artworks: string[];
}

export const characters: Character[] = [
  {
    id: "tsubaki",
    name: "Tsubaki Nishimura",
    age: 26,
    gender: "female",
    species: "Oni",
    occupation: "Archivist",
    lore: "A once revered shrine keeper stripped from her timeline into modern day Japan, Tsubaki recollects the traces of her past and discovers the fleeting joys of an ordinary life.",
    design: "/personal/tsubaki-2026.webp",
    artworks: [],
  },
  {
    id: "van",
    name: "Van Carina",
    age: 37,
    gender: "female",
    species: "Van Cat",
    occupation: "Merchant",
    lore: "Scorned by choices she could not make, Van's sorrow transforms into purpose as fate grants her the miracle of motherhood.",
    design: "/personal/van-2026.webp",
    artworks: [],
  },
];
