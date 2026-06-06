import { map } from "nanostores";
import { createApi } from "unsplash-js";

const unsplashApiAccessKey = import.meta.env.PUBLIC_UNSPLASH_API_ACCESS_KEY;
const unsplashUsername = import.meta.env.PUBLIC_UNSPLASH_USERNAME;

if (!unsplashApiAccessKey || !unsplashUsername) {
  console.warn(
    "Unsplash gallery is disabled: set PUBLIC_UNSPLASH_API_ACCESS_KEY and PUBLIC_UNSPLASH_USERNAME."
  );
}

const unsplash = createApi({ accessKey: unsplashApiAccessKey ?? "" });
const PHOTOS_PER_PAGE = 10;

function isUnsplashConfigured() {
  return Boolean(unsplashApiAccessKey && unsplashUsername);
}

function mapPhoto(resultPhoto) {
  const photoId = resultPhoto.id;
  return {
    id: photoId,
    title: `Photo ${photoId}`,
    width: resultPhoto.width,
    height: resultPhoto.height,
    links: {
      html: resultPhoto.links.html,
    },
    urls: {
      full: resultPhoto.urls.full,
      regular: resultPhoto.urls.regular,
      thumb: resultPhoto.urls.thumb,
    },
  };
}

function updateCollectionPhotos(collectionSlug, newPhotos) {
  const lookup = collections.get();
  const collection = lookup[collectionSlug];
  const fetched_photos = [...(collection.fetched_photos ?? []), ...newPhotos];
  const updated = { ...collection, fetched_photos };
  collections.setKey(collectionSlug, updated);
  return updated;
}

/** @type {import('nanostores').MapStore<Record<string, Object>>} */
export const photos = map({});
export async function fetchPhotos() {
  if (!isUnsplashConfigured()) return;
  const result = await unsplash.users.getPhotos({ username: unsplashUsername });
  const resultPhotos = result?.response?.results ?? [];

  for (let i = 0; i < resultPhotos.length; i++) {
    const photoId = resultPhotos[i].id;
    photos.setKey(photoId, resultPhotos[i]);
  }
}

/** @type {import('nanostores').MapStore<Record<string, Object>>} */
export const recentPhotos = map({});
export async function fetchRecentPhotos(limit = 10) {
  if (!isUnsplashConfigured()) return;
  const result = await unsplash.users.getPhotos({
    username: unsplashUsername,
    perPage: limit,
    orientation: "landscape",
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
  if (!isUnsplashConfigured()) return;
  const result = await unsplash.users.getCollections({
    username: unsplashUsername,
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
    return fetchCollectionPhotos(slug);
  }

  return collections.get()[slug];
}

export async function fetchCollectionPhotos(collectionSlug) {
  const collection = await getCollectionBySlug(collectionSlug);

  if (collection.fetched_photos?.length > 0) {
    return collection;
  }

  const result = await unsplash.collections.getPhotos({
    collectionId: collection.id,
    perPage: PHOTOS_PER_PAGE,
  });
  const resultPhotos = result?.response?.results ?? [];

  return updateCollectionPhotos(collectionSlug, resultPhotos.map(mapPhoto));
}

export async function fetchCollectionPhotosMore(collectionSlug) {
  const collection = await getCollectionBySlug(collectionSlug);

  if (collection.fetched_photos?.length >= collection.total_photos) {
    return collection;
  }

  const page =
    Math.floor(collection.fetched_photos.length / PHOTOS_PER_PAGE) + 1;

  const result = await unsplash.collections.getPhotos({
    collectionId: collection.id,
    perPage: PHOTOS_PER_PAGE,
    page,
  });
  const resultPhotos = result?.response?.results ?? [];

  if (resultPhotos.length === 0) {
    return collection;
  }

  return updateCollectionPhotos(collectionSlug, resultPhotos.map(mapPhoto));
}
