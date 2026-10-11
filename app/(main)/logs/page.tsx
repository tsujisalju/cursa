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
        description="Reports, recollections, and reflections. Signals received from another realm not so different than ours."
      />
      <LogList />
    </SectionLayout>
  );
}
