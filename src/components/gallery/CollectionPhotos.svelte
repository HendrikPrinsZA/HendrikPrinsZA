<script>
  import { onMount } from 'svelte';
  import { getCollectionBySlug, fetchCollectionPhotosMore } from "@stores/galleryStore";
  import IntersectionObserver from "svelte-intersection-observer";

  export let slug;

  let element;
  let collection = {};
  let loadingMore = false;

  onMount(async () => {
    collection = await getCollectionBySlug(slug, true);
  });

  $: hasMore = collection.fetched_photos?.length < collection?.total_photos;

  async function loadMore() {
    if (loadingMore || !hasMore) return;

    loadingMore = true;
    try {
      collection = await fetchCollectionPhotosMore(slug);
    } finally {
      loadingMore = false;
    }
  }
</script>
{#if collection.id}
<a
  class="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
  href="{collection.links.html}"
  target="_blank"
  rel="noopener noreferrer"
>
  <h1 class="text-lg font-medium decoration-dashed hover:underline">{collection.title}</h1>
</a>

{#if collection.description }
  <p>{ collection.description }</p>
{/if}

<div class="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2">
  {#each collection.fetched_photos ?? [] as photo (photo.id)}
    <a href="{photo.links.html}" target="_blank" rel="noopener noreferrer">
      <img
        class="h-auto max-w-full rounded-lg"
        src={photo.urls.regular}
        alt=""
      />
    </a>
  {/each}
</div>

{#if hasMore}
  <button
    type="button"
    class="group inline-block hover:text-skin-accent"
    disabled={loadingMore}
    on:click={loadMore}
  >
    Load more
    <svg xmlns="http://www.w3.org/2000/svg">
      <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
    </svg>
  </button>
{/if}  

{#if hasMore}
  <IntersectionObserver
    {element}
    on:intersect={(e) => {
      if (e.detail.isIntersecting) loadMore();
    }}
  >
    <div bind:this={element}></div>
  </IntersectionObserver>
{/if}
{:else}
  <p>Loading...</p>
{/if}
