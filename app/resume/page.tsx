import { HorizontalScrollContainer } from "@/components/horizontal-scroll";
import SectionHero from "@/components/section-hero";
import SectionLayout from "@/components/section-layout";
import { IExperience, IEducation, resume } from "@/data/resume";
import ProfilePhoto from "./profile-photo";
import { Badge } from "@/components/ui/badge";
import { BriefcaseBusiness, Mail } from "lucide-react";
import GithubLogo from "@/components/logo/github-logo";

function Education({ edu }: { edu: IEducation }) {
  const startDate = new Date(edu.startDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const endDate =
    edu.endDate == "Present"
      ? "Present"
      : new Date(edu.endDate).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        });
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-sans font-black text-xl">{edu.name}</h3>
      <h4 className="font-sans">{edu.degree}</h4>
      <p className="text-sm font-sans italic">{`${startDate} - ${endDate}`}</p>
      <ul className="list-disc list-inside">
        {edu.description.map((desc, index) => (
          <li key={index} className="font-sans text-sm">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Experience({ exp }: { exp: IExperience }) {
  const startDate = new Date(exp.startDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const endDate =
    exp.endDate == "Present"
      ? "Present"
      : new Date(exp.endDate).toLocaleDateString("en-US", {
          month: "long",
          year: "numeric",
        });
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-sans font-black text-xl">{exp.role}</h3>
      <h4 className="font-sans">{exp.company}</h4>
      <p className="text-sm font-sans italic">{`${startDate} - ${endDate}`}</p>
      <ul className="list-disc list-inside">
        {exp.description.map((desc, index) => (
          <li key={index} className="font-sans text-sm">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Resume() {
  return (
    <SectionLayout>
      <SectionHero
        header="Resume"
        description="Dear Sir / Madam, to whom it may concern..."
      />
      <HorizontalScrollContainer className="flex flex-row grow overflow-x-auto overflow-y-hidden py-8">
        <div className="flex flex-col px-4 h-full min-w-sm gap-4 border-l">
          <ProfilePhoto />
          <div className="space-y-2">
            <h1 className="font-display font-bold text-3xl">{resume.name}</h1>
            <p className="font-sans text-lg">{resume.title}</p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 items-center">
                <Mail className="size-5" />
                <p className="font-sans text-sm">{resume.email}</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <GithubLogo className="size-5" />
                <p className="font-sans text-sm">{resume.github}</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <BriefcaseBusiness className="size-5" />
                <p className="font-sans text-sm">{resume.linkedin}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 h-full min-w-sm gap-4 border-l overflow-y-auto">
          <h2 className="font-display font-bold text-3xl">Education</h2>
          {resume.education.map((edu, index) => (
            <Education key={"edu" + index} edu={edu} />
          ))}
        </div>
        <div className="flex flex-col px-4 h-full min-w-sm gap-4 border-l overflow-y-auto">
          <h2 className="font-display font-bold text-3xl">
            Developer Experience
          </h2>
          {resume.developer.map((dev, index) => (
            <Experience key={"dev" + index} exp={dev} />
          ))}
        </div>
        <div className="flex flex-col px-4 h-full min-w-sm gap-4 border-l ">
          <h2 className="font-display font-bold text-3xl">
            Entrepreneurial Experience
          </h2>
          {resume.entrepreneurial.map((ent, index) => (
            <Experience key={"ent" + index} exp={ent} />
          ))}
        </div>
        <div className="flex flex-col px-4 h-full min-w-sm space-y-4 border-l ">
          <h2 className="font-display font-bold text-3xl">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resume.skills.map((skill) => (
              <Badge
                key={skill}
                className="font-sans uppercase"
                variant={"secondary"}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col px-4 h-full min-w-sm space-y-4 border-l ">
          <h2 className="font-display font-bold text-3xl">Interests</h2>
          <ul className="list-disc list-inside">
            {resume.interests.map((desc, index) => (
              <li key={index} className="font-sans text-sm">
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </HorizontalScrollContainer>
    </SectionLayout>
  );
}
