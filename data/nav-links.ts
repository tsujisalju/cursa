export const navLinks = [
  { label: "Home", href: "/", index: 0 },
  { label: "Commercial", href: "/commercial", index: 1 },
  { label: "Personal", href: "/personal", index: 2 },
  { label: "Almanac", href: "/almanac", index: 3 },
  { label: "Logs", href: "/logs", index: 4 },
];

// Helper function to get page index by href
export function getPageIndex(href: string): number {
  const link = navLinks.find((link) => link.href === href);
  return link?.index ?? 0;
}

// Helper function to get all page routes as a map
export const pageIndexMap = new Map(
  navLinks.map((link) => [link.href, link.index]),
);
