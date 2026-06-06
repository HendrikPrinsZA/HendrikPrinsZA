import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"posts">["data"];
  secHeading?: boolean;
  showTime?: boolean;
}

export default function Card({
  href,
  frontmatter,
  secHeading = true,
  showTime = true,
}: Props) {
  const { title, pubDatetime, modDatetime, description } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6 rounded-lg border border-transparent px-3 py-2 transition-colors duration-200 -mx-3 hover:border-skin-line hover:bg-skin-card hover:bg-opacity-30">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime
        pubDatetime={pubDatetime}
        modDatetime={modDatetime}
        showTime={showTime}
      />
      <p>{description}</p>
    </li>
  );
}
