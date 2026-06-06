import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://hendrikprinsloo.co.za/",
  author: "Hendrik Prinsloo",
  desc: "Technical lead and full stack developer based in Amsterdam. Portfolio, projects, writing, and career history.",
  title: "Hendrik Prinsloo",
  ogImage: "og.png",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/HendrikPrinsZA",
    linkTitle: `${SITE.title} on GitHub`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hendrikprinsza/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Medium",
    href: "https://medium.com/@hendrikprinsza",
    linkTitle: `${SITE.title} on Medium`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://x.com/HendrikPrinsZA",
    linkTitle: `${SITE.title} on X`,
    active: false,
  },
];
