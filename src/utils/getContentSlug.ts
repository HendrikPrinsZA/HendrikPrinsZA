export const getContentSlug = ({
  data,
  id,
}: {
  data: { slug?: string };
  id: string;
}) => data.slug ?? id.replace(/\.(md|mdx)$/, "");
