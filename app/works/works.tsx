import { ReactNode } from "react";
import PurritoGeneralLogo from "./purrito-general-logo";

type Work = {
  logo: ReactNode;
  thumbUrl: string;
  thumbAlt: string;
};

export const worksData: Work[] = [
  {
    logo: (
      <PurritoGeneralLogo className="text-zinc-50 dark:text-zinc-50 w-49" />
    ),
    thumbUrl: "/works/purritogeneral/purrito-raining-coins.png",
    thumbAlt: "purrito raining coins",
  },
];
