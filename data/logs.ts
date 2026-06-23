import { characterID } from "./art/character";

export function isLessThan1Week(date: Date) {
  const msInDays = 24 * 60 * 60 * 1000;
  const today = new Date();
  const diffDays = Math.abs((date.getTime() - today.getTime()) / msInDays);
  return diffDays <= 7;
}

export interface Log {
  id: string;
  title: string;
  date: string;
  authors: characterID[];
  type: "reflection" | "report" | "opinion" | "insight" | "episodic";
  readingTimeMinutes: number;
  excerpt?: string;
}

export const logs: Log[] = [
  {
    id: "24-hours",
    title: "24 Hours",
    date: "2021-03-08",
    authors: ["cooper"],
    type: "reflection",
    readingTimeMinutes: 1,
    excerpt:
      "why does everyone progress differently when they all have the same number of hours in a day?",
  },
  {
    id: "answers-never-to-be-found",
    title: "Answers Never To Be Found",
    date: "2024-09-07",
    authors: ["van"],
    type: "reflection",
    readingTimeMinutes: 3,
    excerpt:
      "wandering aimlessly towards something will eventually lead me to everything.",
  },
  {
    id: "between-two-ends",
    title: "Between Two Ends",
    date: "2024-10-06",
    authors: ["cooper"],
    type: "reflection",
    readingTimeMinutes: 3,
    excerpt:
      "between art and software, is there really only one path that I will choose?",
  },
  {
    id: "fodder-for-the-beast",
    title: "Fodder for the Beast",
    date: "2026-06-10",
    authors: ["cooper"],
    type: "reflection",
    readingTimeMinutes: 4,
    excerpt: "your dream can only go so far",
  },
  {
    id: "high-and-low",
    title: "High and Low",
    date: "2024-07-19",
    authors: ["cooper"],
    type: "insight",
    readingTimeMinutes: 8,
    excerpt: "thoughts on high and low context cultures",
  },
  {
    id: "making-friendship-feel-like-a-chore",
    title: "Making Friendship Feel Like a Chore",
    date: "2023-09-04",
    authors: ["mynx"],
    type: "reflection",
    readingTimeMinutes: 4,
    excerpt:
      "its one thing to own up to your mistakes, but to dwell on it for too long is another.",
  },
  {
    id: "muwafaqah-bargaining",
    title: "Muwafaqah Project: Bargaining",
    date: "2024-05-17",
    authors: ["cooper"],
    type: "report",
    readingTimeMinutes: 5,
    excerpt:
      "I've given some more thought on how the hardware configuration for the server.",
  },
  {
    id: "muwafaqah-preliminary",
    title: "Muwafaqah Project: Preliminary Research",
    date: "2024-05-08",
    authors: ["cooper"],
    type: "report",
    readingTimeMinutes: 5,
    excerpt: "Assessing hardware options for building the server.",
  },
  {
    id: "muwafaqah-proposal",
    title: "Muwafaqah Project: Proposal",
    date: "2024-05-07",
    authors: ["cooper"],
    type: "report",
    readingTimeMinutes: 5,
    excerpt:
      "I am writing this report to document my research and thought process of making my very own DIY self-hosted home server.",
  },
  {
    id: "muwafaqah-snap-to-aio",
    title: "Muwafaqah Project: Snap to AIO",
    date: "2025-05-06",
    authors: ["cooper"],
    type: "report",
    readingTimeMinutes: 15,
    excerpt:
      "I will be documenting my journey of migrating all the data to a new instance of Nextcloud that can better support new features.",
  },
  {
    id: "neverpresent",
    title: "Neverpresent",
    date: "2025-05-06",
    authors: ["van"],
    type: "reflection",
    readingTimeMinutes: 3,
    excerpt:
      "Your mind is always living in the past and in the future, but never in the now.",
  },
  {
    id: "our-accustomed-perception-of-the-world",
    title: "Our Accustomed Perception of the World",
    date: "2023-08-04",
    authors: ["cooper"],
    type: "insight",
    readingTimeMinutes: 2,
    excerpt:
      "We are accustomed to the knowledge that things are classified by their different attributes.",
  },
  {
    id: "respect",
    title: "Respect",
    date: "2024-07-31",
    authors: ["cooper"],
    type: "reflection",
    readingTimeMinutes: 2,
    excerpt:
      "There is worth in every person and their every kindness, and they should be acknowledged for it.",
  },
  {
    id: "stagnant",
    title: "Stagnant",
    date: "2024-07-06",
    authors: ["van"],
    type: "reflection",
    readingTimeMinutes: 3,
  },
  {
    id: "struggling-in-amateur-hell",
    title: "Struggling in Amateur Hell",
    date: "2025-01-09",
    authors: ["cooper"],
    type: "reflection",
    readingTimeMinutes: 5,
    excerpt:
      "What is it that frustrates me so much when I'm drawing and makes me feel like I am destined to forever be stuck in amateur hell?",
  },
  {
    id: "the-listener",
    title: "The Listener",
    date: "2024-11-05",
    authors: ["van"],
    type: "reflection",
    readingTimeMinutes: 3,
    excerpt:
      "When I came crawling, you came walking. When I came walking, you came running.",
  },
  {
    id: "to-coexist",
    title: "To Coexist",
    date: "2021-03-04",
    authors: ["van"],
    type: "reflection",
    readingTimeMinutes: 1,
  },
  {
    id: "heavy",
    title: "Heavy",
    date: "2020-10-28",
    authors: ["mynx"],
    type: "episodic",
    readingTimeMinutes: 1,
  },
  {
    id: "you-have-to-do-it",
    title: "You Have To Do It",
    date: "2021-02-10",
    authors: ["mynx"],
    type: "episodic",
    readingTimeMinutes: 1,
  },
  {
    id: "leaving-it-behind",
    title: "Leaving it behind",
    date: "2020-12-23",
    authors: ["cooper"],
    type: "episodic",
    readingTimeMinutes: 2,
  },
];
