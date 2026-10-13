export const navLinks = [
  { label: "Home", href: "/", index: 0 },
  { label: "Resume", href: "/resume", index: 1 },
  { label: "Commercial", href: "/commercial", index: 2 },
  { label: "Personal", href: "/personal", index: 3 },
  { label: "Almanac", href: "/almanac", index: 4 },
];

export const navLinksV3 = [
  ["Home", "/v3"], //temporarily set to v3
  ["Projects", "/projects"],
  ["Research", "/research"],
  ["Writing", "/writing"],
  ["About", "/about"],
];

const HOME_V3 = navLinksV3[0][1];

// Active-link rule shared by the desktop rail and the mobile drawer
export function isActiveV3(path: string, href: string): boolean {
  if (href === HOME_V3) return path === href;
  return path === href || path.startsWith(`${href}/`);
}

// Helper function to get page index by href
export function getPageIndex(href: string): number {
  const link = navLinks.find((link) => link.href.includes(href));
  return link?.index ?? -1;
}

// Helper function to check if a page exists in nav-links
export function isNavPage(href: string): boolean {
  return getPageIndex(href) !== -1;
}

// Helper function to get all page routes as a map
export const pageIndexMap = new Map(
  navLinks.map((link) => [link.href, link.index]),
);
