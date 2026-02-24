"use client";

import SectionHero from "@/components/section-hero";
import SectionLayout from "@/components/section-layout";
import ArtGallery from "./art-gallery";

export default function Personal() {
  return (
    <SectionLayout>
      <SectionHero
        header="Personal"
        description="Tales of mythical creatures from a world not so different than ours."
      />
      <ArtGallery />
    </SectionLayout>
  );
}
