"use client";

import SectionHero from "@/components/section-hero";
import { commercialWorks } from "@/data/art/commercial";
import Image from "next/image";

export default function Commercial() {
  return (
    <div className="flex flex-col grow m-1 space-y-2 overflow-hidden">
      <SectionHero
        header="Commercial"
        description="From individuals, startups to global teams, traces of my art travel along in their journey."
      />
      <div className="flex flex-row grow space-x-4 overflow-y-visible overflow-x-auto">
        {commercialWorks.map((work, index) => (
          <div className="flex flex-col p-16 justify-end relative" key={index}>
            <Image
              src={work.images ? work.images[0] : ""}
              alt={work.id}
              fill
              className="object-cover rounded-lg"
            />
            <div className="relative">{work.logo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
