import SectionHero from "@/components/section-hero";
import SectionLayout from "@/components/section-layout";

export default function Almanac() {
  return (
    <SectionLayout>
      <SectionHero
        header="Almanac"
        description="Hardship, longing, refuge and nostalgia. Get to know the characters that shape the parts of my story."
      />
      <div className="flex flex-row grow space-x-4">Coming soon :3</div>
    </SectionLayout>
  );
}
