"use client";

import { Character } from "@/data/art/character";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CharacterItem({ character }: { character: Character }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div
      key={character.id}
      className={`flex flex-col min-w-100 ${character.class_bg ?? ""} relative overflow-clip ${character.design && "hover:overflow-x-visible"} p-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {character.design ? (
        <div
          className={`absolute ${character.class_position ?? "-top-[10%] -left-[50%]"} h-375 w-250 pointer-events-none transition duration-400 ease-out ${isHovered ? "z-50 translate-x-5 mix-blend-normal" : "translate-x-0 mix-blend-overlay"}`}
        >
          <Image
            src={character.design}
            alt={character.name}
            fill
            onLoad={() => setIsLoaded(true)}
            className={`object-contain overflow-visible transition duration-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      ) : (
        <div className="absolute top-1/2 -left-[10%] w-[120%] h-max bg-primary/10 -rotate-5 text-center py-4">
          <span className="font-display text-xl">Coming Soon!</span>
        </div>
      )}
      <div className="flex flex-row space-x-2 justify-center items-center w-max [writing-mode:vertical-lr]">
        {character.emblem}
        <h3
          className={`${character.class_font ?? "font-display font-bold"} text-5xl uppercase`}
        >
          {character.name}
        </h3>
      </div>
    </div>
  );
}
