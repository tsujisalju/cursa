"use client";
import { ArtPiece } from "@/data/art/personal";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function ArtGalleryItem({
  art,
  index,
  className,
}: {
  art: ArtPiece;
  index: number;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const date = new Date(art.date);
  return (
    <Link
      href={`#`}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Tilt
        tiltReverse={true}
        scale={1.02}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        className={`h-full w-full hover:z-10 parallax-tilt-outer relative flex ${index == 0 && "justify-end"} items-start`}
      >
        <Image
          src={art.thumb ?? art.image}
          alt={art.description ?? "An artwork"}
          className={`object-cover transition duration-200 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          fill
          onLoad={() => setIsLoaded(true)}
        />
        <div
          className={`flex flex-row items-center space-x-2 bg-background/50 text-lg lg:text-2xl transition ease-out duration-100 m-4 p-2 parallax-tilt-inner ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <h1 className="font-display font-bold">{art.title}</h1>
          <p className="font-sans text-sm">{date.toLocaleDateString()}</p>
        </div>
      </Tilt>
    </Link>
  );
}
