import TransitionLink from "@/components/transition-link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getCharacter } from "@/data/art/character";
import { artPieces } from "@/data/art/personal";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import StoryContent from "./story-content";
import ImageView from "./image-view";

export function generateStaticParams() {
  return artPieces.map((art) => ({ slug: art.id }));
}

export default async function ArtSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const art = artPieces.find((a) => a.id === slug);
  if (!art) notFound();

  const date = new Date(art.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const Story = art.story
    ? dynamic(() => import(`@/content/art/${art.story}.mdx`))
    : null;

  return (
    <div className="relative lg:static w-full flex flex-col lg:flex-row overflow-clip">
      <div className="w-full h-full flex items-center lg:col-span-2 justify-center p-8 relative">
        <ImageView art={art} />
      </div>
      <div className="w-full lg:w-200 h-full flex flex-col space-y-4 p-8 overflow-y-auto">
        <TransitionLink
          className="flex flex-row space-x-2"
          href="/personal"
          variant="zoom-out"
        >
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
          <span className="font-sans">Back to Gallery</span>
        </TransitionLink>
        <div className="flex flex-col space-y-2">
          <h1 className="text-4xl lg:text-5xl font-display font-extrabold">
            {art.title}
          </h1>
          <p className="text-sm font-sans">{date}</p>
          {art.characters.length > 0 && (
            <div className="flex flex-row space-x-4 items-center">
              <h2 className="text-sm font-sans">In this artwork</h2>
              <div>
                {art.characters.map((ch) => (
                  <Tooltip key={ch}>
                    <TooltipTrigger>
                      <Avatar>
                        <AvatarImage src={getCharacter(ch)?.icon} />
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <span className="font-sans">
                        {getCharacter(ch)?.name ?? "Unknown"}
                      </span>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          )}
          <hr />
          {art.description && <p className="font-sans">{art.description}</p>}
          <hr />
          {art.story && <StoryContent story={art.story} />}
        </div>
      </div>
    </div>
  );
}
