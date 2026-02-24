import SectionHero from "@/components/section-hero";
import SectionLayout from "@/components/section-layout";
import { commercialWorks } from "@/data/art/commercial";
import Image from "next/image";

export default function Commercial() {
  return (
    <SectionLayout>
      <SectionHero
        header="Commercial"
        description="From individuals, startups to global teams, traces of my art travel along in their separate journeys."
      />
      <div className="flex flex-row grow space-x-1 overflow-x-auto">
        {commercialWorks.map((work, index) => (
          <div className="flex flex-col p-16 justify-end relative" key={index}>
            <Image
              src={work.images ? work.images[0] : ""}
              alt={work.id}
              fill
              className="object-cover"
            />
            <div className="relative">{work.logo}</div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
