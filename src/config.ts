import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://hendrikprinsloo.co.za/", // replace this with your deployed domain
  author: "Hendrik Prinsloo",
  desc: "Online portfolio",
  title: "Hendrik Prinsloo",
  ogImage: "astropaper-og.jpg",
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
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/HendrikPrinsZA",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hendrikprinslooza/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hendrikprinsza/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:info@hendrikprinsloo.co.za",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/HendrikPrinsZA",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/HendrikPrinsZA/",
    linkTitle: `${SITE.title} on Reddit`,
    active: true,
  },
];
