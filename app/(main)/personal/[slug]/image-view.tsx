"use client";

import { ArtPiece } from "@/data/art/personal";
import Image from "next/image";
import { PhotoProvider, PhotoView } from "react-photo-view";

export default function ImageView({ art }: { art: ArtPiece }) {
  return (
    <PhotoProvider>
      <PhotoView src={art.image}>
        <Image
          src={art.image}
          alt={art.description ?? "drawing"}
          className="object-contain lg:py-8"
          fill
        />
      </PhotoView>
    </PhotoProvider>
  );
}
