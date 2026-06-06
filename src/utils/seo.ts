import { SITE, SOCIALS } from "@config";
import { profile } from "@data/profile";

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.website).href;
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: SITE.website,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amsterdam",
      addressCountry: "NL",
    },
    sameAs: SOCIALS.filter(social => social.active).map(social => social.href),
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.title,
    description: SITE.desc,
    url: SITE.website,
    author: personSchema(),
  };
}

export function articleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = SITE.author,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: author,
      url: SITE.website,
    },
    publisher: {
      "@type": "Person",
      name: SITE.author,
      url: SITE.website,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

export function creativeWorkSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author = SITE.author,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: title,
    description,
    url,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: {
      "@type": "Person",
      name: author,
      url: SITE.website,
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; url?: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: absoluteUrl(item.url) } : {}),
    })),
  };
}
