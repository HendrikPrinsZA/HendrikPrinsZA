<script>
  export let collection;
</script>

<div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
  {#each Object.values(collection.preview_photos) as photo}
    {#if (collection.total_photos > 4 && photo === collection.preview_photos[collection.preview_photos.length - 1])}
      <div class="relative overflow-hidden rounded-lg">
        <img
          class="aspect-square w-full object-cover"
          src={photo.urls.thumb}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <a href="/gallery/{collection.id}">+{collection.total_photos - 4} more</a>
        </div>
      </div>
    {:else}
      <img
        class="aspect-square w-full rounded-lg object-cover"
        src={photo.urls.thumb}
        alt=""
        loading="lazy"
        decoding="async"
      />
    {/if}
  {/each}
</div>
