import { ArtPiece } from "@/data/art/personal";
import Image from "next/image";
import { useState } from "react";

export default function ArtGalleryItem({
  art,
  className,
}: {
  art: ArtPiece;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const date = new Date(art.date);
  return (
    <div
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={art.image}
        alt={art.description ?? "An artwork"}
        className="object-cover"
        fill
      />
      <div
        className={`absolute bottom-4 left-4 flex flex-row space-x-2 text-white mix-blend-difference transition duration-100 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"}`}
      >
        <h1 className="font-sans font-bold text-2xl">{art.title}</h1>
        <p className="font-sans text-2xl">{date.toLocaleDateString()}</p>
      </div>
    </div>
  );
}
