import SectionHero from "@/components/section-hero";

export default function Almanac() {
  return (
    <div className="flex flex-col grow m-1 space-y-2 overflow-hidden">
      <SectionHero
        header="Almanac"
        description="Hardship, longing, refuge and nostalgia. Get to know the characters that shape the parts of my story."
      />
      <div className="flex flex-row grow space-x-4">Coming soon :3</div>
    </div>
  );
}
