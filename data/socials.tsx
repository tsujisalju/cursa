import GithubLogo from "@/components/logo/github-logo";
import LinkedInLogo from "@/components/logo/linkedin-logo";
import { ReactElement } from "react";

interface Social {
  label: string;
  logo: ReactElement;
  href: string;
}

export const socials: Social[] = [
  {
    label: "LinkedIn",
    logo: <LinkedInLogo className="size-5" />,
    href: "https://www.linkedin.com/in/qayyum-yazid/",
  },
  {
    label: "Github",
    logo: <GithubLogo className="size-5" />,
    href: "https://github.com/tsujisalju",
  },
];
