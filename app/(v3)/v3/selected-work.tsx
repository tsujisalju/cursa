import { works } from "@/data/work";
import { Cell, CellGrid } from "../_components/cell-grid";
import { Kicker } from "../_components/kicker";
import { Section } from "../_components/section";

export function SelectedWork() {
  return (
    <Section panelClassName="pb-0">
      <Kicker className="pb-4">Selected work</Kicker>
      <h2 className="px-6 pb-8 font-serif text-3xl tracking-tight lg:px-9">
        What I&apos;ve been building
      </h2>
      <CellGrid>
        {works.map((w) => (
          <Cell
            key={w.title}
            title={w.title}
            tag={w.tag}
            tagTone={w.live ? "live" : "neutral"}
          >
            {w.excerpt}
          </Cell>
        ))}
      </CellGrid>
    </Section>
  );
}
