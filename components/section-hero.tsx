import { CSSProperties } from "react";

export default function SectionHero({
  header,
  description,
}: {
  header: string;
  description?: string;
}) {
  return (
    <section className="relative flex flex-col text-center lg:text-start py-2">
      <h1 className="font-display font-bold text-3xl uppercase">{header}</h1>
      {description && <p className="font-sans lg:text-lg">{description}</p>}
      <span className="hidden lg:inline absolute inset-y-0 right-0 font-nyght font-bold italic text-9xl text-transparent text-outline opacity-10">
        {header}
      </span>
    </section>
  );
}
