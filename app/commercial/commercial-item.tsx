"use client";

import { CommercialWork } from "@/data/art/commercial";
import Image from "next/image";
import { useState } from "react";

export default function CommercialItem({ work }: { work: CommercialWork }) {
  const [isloaded, setIsLoaded] = useState<boolean>(false);
  return (
    <div className="flex flex-col w-100 py-16 justify-end items-center relative">
      <Image
        src={work.images ? work.images[0] : ""}
        alt={work.id}
        fill
        className={`object-cover transition duration-200 ${isloaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="relative">{work.logo}</div>
    </div>
  );
}
