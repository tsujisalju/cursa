import SectionHero from "@/components/section-hero";

export default function Almanac() {
  return (
    <div className="flex flex-col grow m-1 space-y-2 overflow-hidden">
      <SectionHero
        header="Logs"
        description="Reports, recollections, and reflections. Dive into the narrative threads that weave through my journey."
      />
      <div className="flex flex-row grow space-x-4">Coming soon :3</div>
    </div>
  );
}
