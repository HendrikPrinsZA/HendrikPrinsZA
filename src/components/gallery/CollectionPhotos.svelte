<script>
  import { onMount } from 'svelte';
  import { getCollectionBySlug, fetchCollectionPhotosMore } from '../../stores/galleryStore'
  export let slug;
  import IntersectionObserver from "svelte-intersection-observer";

  let element;
  let collection = {}
  onMount(async () => {
    collection = await getCollectionBySlug(slug, true);
  });

  // Create a variable valled hasMore
  $: hasMore = collection.fetched_photos?.length < collection?.total_photos;
</script>

{#if collection.id}
<a
  class="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
  href="{collection.links.html}"
  target="_blank"
>
  <h1 class="text-lg font-medium decoration-dashed hover:underline">{collection.title}</h1>
</a>

{#if collection.description }
  <p>{ collection.description }</p>
{/if}

<div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
  {#each Object.values(collection.fetched_photos) as photo}
    <a href="{photo.links.html}" target="_blank">
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
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-center"
    on:click={async () => {
      collection = await fetchCollectionPhotosMore(collection.id);
    }}
  >
    Load More
  </button>
{/if}  

<IntersectionObserver {element} on:intersect={async (e) => { collection = await fetchCollectionPhotosMore(collection.id);}}>
  <div bind:this={element}></div>
</IntersectionObserver>
{:else}
  <p>Loading...</p>
{/if}
