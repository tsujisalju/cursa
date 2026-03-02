"use client";

import { useHorizontalScroll } from "@/components/horizontal-scroll";
import { CommercialWork } from "@/data/art/commercial";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function CommercialItem({ work }: { work: CommercialWork }) {
  const [isloaded, setIsLoaded] = useState<boolean>(false);

  return (
    <Link href={`/commercial/${work.id}`}>
      <Tilt
        tiltReverse={true}
        scale={1.04}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        className="flex flex-col h-full w-100 justify-end items-center py-16 relative hover:z-10 parallax-tilt-outer"
      >
        <Image
          src={work.images ? work.images[0] : ""}
          alt={work.id}
          fill
          className={`object-cover transition duration-400 ${isloaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="relative text-zinc-50 dark:text-zinc-50 w-49 parallax-tilt-inner">
          <span className="shadow-lg">{work.logo}</span>
        </div>
      </Tilt>
    </Link>
  );
}
