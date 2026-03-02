import { Badge } from "@/components/ui/badge";
import { commercialWorks } from "@/data/art/commercial";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return commercialWorks.map((work) => ({ slug: work.id }));
}

export default async function CommercialSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = commercialWorks.find((w) => w.id === slug);
  if (!work) notFound();

  const startDate = new Date(work.startDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const endDate =
    work.endDate == "Present"
      ? "Present"
      : new Date(work.endDate).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div></div>
      <div className="flex flex-col space-y-4 p-4">
        <Link className="flex flex-row space-x-2" href="/commercial">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          <span className="font-sans">Back to Commercial</span>
        </Link>
        <div className="flex flex-col">
          <div className="w-24 mb-2">{work.logo}</div>
          <h1 className="text-5xl font-display font-extrabold">
            {work.client}
          </h1>
          <h2 className="text-lg font-sans">{work.project}</h2>
          <p className="text-sm font-sans">{`${startDate} - ${endDate}`}</p>
        </div>

        <div className="flex flex-row space-x-2">
          {work.skills.map((skill) => (
            <Badge
              key={skill}
              className="font-sans uppercase"
              variant={"secondary"}
            >
              {skill}
            </Badge>
          ))}
        </div>
        <p className="font-sans">{work.description}</p>
        <h3 className="text-xl font-display font-bold mb-2">Deliverables</h3>
        <ul className="list-inside list-disc">
          {work.deliverables.map((deliverable) => (
            <li key={deliverable} className="font-sans">
              {deliverable}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
