"use client";

import SectionHero from "@/components/section-hero";
import SectionLayout from "@/components/section-layout";
import LogItem from "./log-item";
import LogList from "./log-list";

export default function Almanac() {
  return (
    <SectionLayout>
      <SectionHero
        header="Logs"
        description="Reports, recollections, and reflections. Dive into the narrative threads that weave through my journey."
      />
      <LogList />
    </SectionLayout>
  );
}
