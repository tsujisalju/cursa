export default function SectionHero({
  header,
  description,
}: {
  header: string;
  description?: string;
}) {
  return (
    <section className="flex flex-col text-center lg:text-start py-2">
      <h1 className="font-display font-bold text-3xl uppercase">{header}</h1>
      {description && <p className="font-sans lg:text-lg">{description}</p>}
    </section>
  );
}
