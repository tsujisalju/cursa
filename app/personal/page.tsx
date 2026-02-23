import SectionHero from "@/components/section-hero";

export default function Personal() {
  return (
    <div className="flex flex-col grow m-1 space-y-2 overflow-hidden">
      <SectionHero
        header="Personal"
        description="Tales of mythical creatures from a world not so different than ours."
      />
      <div className="flex flex-row grow space-x-4">Coming soon :3</div>
    </div>
  );
}
