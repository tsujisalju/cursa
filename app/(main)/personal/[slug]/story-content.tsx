"use client";

import dynamic from "next/dynamic";

export default function StoryContent({ story }: { story: string }) {
  const Story = dynamic(() => import(`@/content/art/${story}.mdx`));
  return <Story />;
}
