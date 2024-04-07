import { map } from "nanostores";
import { createApi } from "unsplash-js";

const unsplashApiAccessKey = import.meta.env.PUBLIC_UNSPLASH_API_ACCESS_KEY;
const unsplash = createApi({ accessKey: unsplashApiAccessKey });

/** @type {import('nanostores').MapStore<Record<string, Object>>} */
export const photos = map({});
export async function fetchPhotos() {
  const result = await unsplash.users.getPhotos({ username: "HendrikPrinsZA" });
  const resultPhotos = result?.response?.results ?? [];

  for (let i = 0; i < resultPhotos.length; i++) {
    const photoId = resultPhotos[i].id;
    photos.setKey(photoId, resultPhotos[i]);
  }
}

/** @type {import('nanostores').MapStore<Record<string, Object>>} */
export const recentPhotos = map({});
export async function fetchRecentPhotos(limit = 10) {
  const result = await unsplash.users.getPhotos({
    username: "HendrikPrinsZA",
    perPage: limit,
  });
  const resultPhotos = result?.response?.results ?? [];

  for (let i = 0; i < resultPhotos.length; i++) {
    const photoId = resultPhotos[i].id;
    recentPhotos.setKey(photoId, resultPhotos[i]);
  }
}

/** @type {import('nanostores').MapStore<Record<string, Object>>} */
export const collections = map({});
export async function fetchCollections() {
  const result = await unsplash.users.getCollections({
    username: "HendrikPrinsZA",
  });
  const resultCollections = result?.response?.results ?? [];

  for (let i = 0; i < resultCollections.length; i++) {
    const slug = resultCollections[i].id;
    resultCollections[i]["fetched_photos"] = [];
    collections.setKey(slug, resultCollections[i]);
  }
}

export async function getCollectionBySlug(
  collectionSlug,
  prefetchPhotos = false
) {
  if (!collectionSlug) {
    return {};
  }

  const slug = collectionSlug;
  let lookup = collections.get();

  if (!Object.prototype.hasOwnProperty.call(lookup, slug)) {
    await fetchCollections();
    lookup = collections.get();
  }

  if (!Object.prototype.hasOwnProperty.call(lookup, slug)) {
    throw new Error(`Collection with slug ${slug} not found`);
  }

  if (prefetchPhotos) {
    await fetchCollectionPhotos(slug);
  }

  return lookup[slug];
}

export async function fetchCollectionPhotos(collectionSlug) {
  const collection = await getCollectionBySlug(collectionSlug);
  const result = await unsplash.collections.getPhotos({
    collectionId: collection.id,
  });
  const resultPhotos = result?.response?.results ?? [];

  for (let i = 0; i < resultPhotos.length; i++) {
    const photoId = resultPhotos[i].id;
    const photo = {
      title: `Photo ${photoId}`,
      width: resultPhotos[i].width,
      height: resultPhotos[i].height,
      links: {
        html: resultPhotos[i].links.html,
      },
      urls: {
        full: resultPhotos[i].urls.full,
        regular: resultPhotos[i].urls.regular,
        thumb: resultPhotos[i].urls.thumb,
      },
    };

    collection.fetched_photos.push(photo);
  }

  return collection;
}

export async function fetchCollectionPhotosMore(collectionSlug) {
  const collection = await getCollectionBySlug(collectionSlug);

  if (collection.fetched_photos?.length >= collection.total_photos) {
    return collection;
  }

  const result = await unsplash.collections.getPhotos({
    collectionId: collection.id,
    // perPage: 10, // default
    page: collection.fetched_photos.length / 10 + 1, // next page
    // orderBy: 'latest', // default
  });
  const resultPhotos = result?.response?.results ?? [];

  for (let i = 0; i < resultPhotos.length; i++) {
    const photoId = resultPhotos[i].id;
    const photo = {
      title: `Photo ${photoId}`,
      width: resultPhotos[i].width,
      height: resultPhotos[i].height,
      links: {
        html: resultPhotos[i].links.html,
      },
      urls: {
        full: resultPhotos[i].urls.full,
        regular: resultPhotos[i].urls.regular,
        thumb: resultPhotos[i].urls.thumb,
      },
    };

    collection.fetched_photos.push(photo);
  }

  return collection;
}
