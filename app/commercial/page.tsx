import SectionHero from "@/components/section-hero";
import SectionLayout from "@/components/section-layout";
import { commercialWorks } from "@/data/art/commercial";
import Image from "next/image";
import CommercialItem from "./commercial-item";

export default function Commercial() {
  return (
    <SectionLayout>
      <SectionHero
        header="Commercial"
        description="From individuals, startups to global teams, traces of my art travel along in their separate journeys."
      />
      <div className="flex flex-row grow space-x-1 overflow-x-auto">
        {commercialWorks.map((work, index) => (
          <CommercialItem work={work} key={index} />
        ))}
      </div>
    </SectionLayout>
  );
}
