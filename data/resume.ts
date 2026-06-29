export interface IEducation {
  name: string;
  location: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface IExperience {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface Social {
  logo: string;
}

interface Resume {
  name: string;
  title: string;
  profilePhoto: string;
  fakeProfilePhoto: string;
  email: string;
  github: string;
  linkedin: string;
  education: IEducation[];
  developer: IExperience[];
  entrepreneurial: IExperience[];
  skills: string[];
  interests: string[];
}

export const resume: Resume = {
  name: "Qayyum Yazid",
  title:
    "Prospective Graduate in Software Engineering | Freelance Developer and Designer",
  profilePhoto: "/resume/qayyum.webp",
  fakeProfilePhoto: "/personal/solare/solare-avatar.webp",
  email: "purrnama@proton.me",
  github: "https://github.com/tsujisalju",
  linkedin: "https://www.linkedin.com/in/qayyum-yazid/",
  education: [
    {
      name: "Asia Pacific University of Technology and Innovation",
      location: "Selangor, Malaysia",
      degree: "Bachelor of Science in Software Engineering",
      startDate: "2023-06-01",
      endDate: "2026-11-01",
      description: [
        "Completed over 3 years of coursework in software development phases, enterprise systems, AWS cloud applications, concurrent programming and blockchain development",
        "Hosted talk events and sharing sessions within APU as part of workplace professional development and project management leadership",
      ],
    },
    {
      name: "Technische Hochschule Deggendorf",
      location: "Deggendorf, Germany",
      degree: "Bachelor of Engineering in Applied Computer Science",
      startDate: "2022-10-01",
      endDate: "2022-12-01",
      description: [
        "Completed 3 months of coursework in C Programming, Mathematics and Foundation in Electronics",
        "Graduated early due to personal circumstances, but gained substantial knowledge and skills in Computer Science and cultural awareness",
      ],
    },
    {
      name: "German-Malaysian Institute",
      location: "Selangor, Malaysia",
      degree: "Cambridge International A Levels",
      startDate: "2020-01-01",
      endDate: "2022-11-01",
      description: [
        "Vice Academic Committee in Student Representative Council",
        "Completed A-Levels in Mathematics, Physics, Chemistry, Mechanics and German Language",
        "Completed pre-practical engineering courses on welding, turning and CNC machinery",
      ],
    },
  ],
  developer: [
    {
      role: "Blockchain Consultant",
      company: "MIMOS Berhad",
      startDate: "2026-07-01",
      endDate: "Present",
      description: [],
    },
    {
      role: "Frontend Engineer Intern for Digital Cloud",
      company: "Telekom Research and Development",
      startDate: "2025-05-01",
      endDate: "2025-09-01",
      description: [
        "Led the maintenance of the integrated OSHE management system at Telekom Malaysia built on Angular and NestJS, delivering timely improvements and enhancements from priority feedback",
        "Deeply involved in the migration of frontend technologies for several platforms to their latest versions",
        "Taking independent initiative to refactor internal systems to follow best practices and improve maintainability",
      ],
    },
    {
      role: "Microsoft Certified Azure Developer Associate",
      company: "Microsoft",
      startDate: "2025-09-18",
      endDate: "2026-09-18",
      description: [
        "Credential ID 203EC5626359154A",
        "Undergone a 5-day training session and online examination for developing, testing, and maintaining cloud solutions using Microsoft Azure, with transferable knowledge to other cloud service providers such as AWS.",
      ],
    },
    {
      role: "UI Designer",
      company: "Cardem Labs",
      startDate: "2023-12-01",
      endDate: "2024-03-01",
      description: [
        "Led the UI/UX Design for SteelSwap Aggregator, using Figma to visualize UI components and aesthetics of the interface. Adopting innovations in trading experiences from other blockchains to Cardano with critical acclaim, >$60M USD in total trading volume",
      ],
    },
    {
      role: "Frontend Developer, Graphic Designer",
      company: "Minswap Labs",
      startDate: "2021-05-01",
      endDate: "2024-01-01",
      description: [
        "Contributed development of trading interface for Minswap DEX using Next.js and Tailwind CSS, worked with a global team of agile individuals",
        "Provide graphic design for marketing and merchandise, establishing brand identity through mascot illustrations, >60K followers on X",
      ],
    },
  ],
  entrepreneurial: [
    {
      role: "Freelance Developer and Designer",
      company: "Tsujisalju",
      startDate: "2017-01-01",
      endDate: "Present",
      description: [
        "Provide development and design services for independent clients, help clients realize their creative vision through personal branding and presentation",
        "Continuously building a portfolio website as a creative outlet for lifelong personal development and learning, learned key web development skills such as responsive web design, accessiblity, core web vitals and standards.",
      ],
    },
    {
      role: "Minor Shareholder",
      company: "Atlascore Industrial",
      startDate: "2026-03-01",
      endDate: "Present",
      description: [
        "Participating closely in the establishment of a storage hardware supplier startup, with exposure to company proceedings and storage hardware manufacturing industry",
      ],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "TailwindCSS",
    "shadcn/ui",
    "SCSS",
    "NodeJS",
    "Bun",
    "Solidity",
    "Java",
    "C#",
    "ASP.NET",
    "Python",
    "PostgreSQL",
    "SQL Server",
    "C",
    "C++",
    "Linux Administration",
    "Figma",
    "Krita",
    "Adobe After Effects",
    "Microsoft Azure",
    "Amazon Web Services",
  ],
  interests: [
    "Maintaining a Nextcloud home server running on a Raspberry Pi 5 and Ubuntu Server",
    "Personal storytelling and world-building through character illustrations",
    "Repairing and servicing laptops and PCs",
    "Open source advocate",
  ],
};
