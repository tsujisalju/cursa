import SectionHero from "@/components/section-hero";
import SectionLayout from "@/components/section-layout";
import { characters } from "@/data/art/character";
import CharacterItem from "./character-item";
import { HorizontalScrollContainer } from "@/components/horizontal-scroll";

export default function Almanac() {
  return (
    <SectionLayout>
      <SectionHero
        header="Almanac"
        description="Hardship, longing, refuge and nostalgia. Get to know the characters who drive my narrative."
      />
      <HorizontalScrollContainer
        className={"flex flex-row grow space-x-1 overflow-x-auto"}
      >
        {characters.map((character, index) => (
          <CharacterItem key={character.id} character={character} />
        ))}
      </HorizontalScrollContainer>
    </SectionLayout>
  );
}
