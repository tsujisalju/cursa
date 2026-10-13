import { sketches } from "@/data/sketches";
import { ButtonLink } from "../_components/button-link";
import { Figure } from "../_components/figure";
import { Kicker } from "../_components/kicker";
import { Section } from "../_components/section";

export function HomeHero() {
  const art = sketches[0];
  return (
    <Section panelClassName="bg-panel/50">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_17rem]">
        <div>
          <Kicker>Software engineer &amp; researcher</Kicker>
          <div className="px-6 pb-12 pt-6 lg:px-9">
            <h1 className="max-w-[18ch] font-serif text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              Engineering systems for{" "}
              <em className="text-brand-fg font-bold">self-sovereignty</em>
            </h1>
            <p className="mt-6 max-w-136 text-sm leading-7 tracking-wide text-copy">
              Hi, I&apos;m Qayyum, a software engineer and researcher working
              across web, blockchain and verifiable systems. Based in Kuala
              Lumpur.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/projects" hotkey="p" variant="solid">
                Projects
              </ButtonLink>
              <ButtonLink href="/research" hotkey="r">
                Research
              </ButtonLink>
            </div>
          </div>
        </div>
        <div className="border-t border-line-strong p-4 lg:border-l lg:border-t-0">
          <Figure
            label="Fig. 01"
            caption="Sketch"
            className="lg:aspect-auto lg:h-full"
          >
            <div
              aria-hidden
              className="absolute inset-0 mask-cover mask-no-repeat bg-fg opacity-60"
              style={{
                maskImage: `url(${art.src})`,
                WebkitMaskImage: `url(${art.src})`,
                maskPosition: art.position ?? "center",
                WebkitMaskPosition: art.position ?? "center",
              }}
            />
          </Figure>
        </div>
      </div>
    </Section>
  );
}
