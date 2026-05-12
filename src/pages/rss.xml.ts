import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import { SITE } from "@config";
import { getContentSlug } from "@utils/getContentSlug";

export async function GET() {
  const posts = await getCollection("posts");
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(post => ({
      link: `posts/${getContentSlug(post)}/`,
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.modDatetime ?? post.data.pubDatetime),
    })),
  });
}
