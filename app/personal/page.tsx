import SectionHero from "@/components/section-hero";
import SectionLayout from "@/components/section-layout";
import ArtGallery from "./art-gallery";

export default function Personal() {
  return (
    <SectionLayout>
      <SectionHero
        header="Personal"
        description="Works for myself. And soon to be yours if you're interested!"
      />
      <ArtGallery />
    </SectionLayout>
  );
}
