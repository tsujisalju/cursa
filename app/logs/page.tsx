"use client";

import SectionHero from "@/components/section-hero";
import SectionLayout from "@/components/section-layout";

export default function Almanac() {
  return (
    <SectionLayout>
      <SectionHero
        header="Logs"
        description="Reports, recollections, and reflections. Dive into the narrative threads that weave through my journey."
      />
      <div className="flex flex-row grow space-x-4">Coming soon :3</div>
    </SectionLayout>
  );
}
