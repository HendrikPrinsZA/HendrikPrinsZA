<script>
  export let collection;
</script>

<div class="grid grid-cols-4 md:grid-cols-4 gap-4 mt-10">
  {#each Object.values(collection.preview_photos) as photo}
    {#if (collection.total_photos > 4 && photo === collection.preview_photos[collection.preview_photos.length - 1])}
      <div class="relative">
        <img
          class="h-auto max-w-full rounded-lg"
          src={photo.urls.thumb}
          alt=""
        />
        <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
          <a href="/gallery/{collection.id}">+{collection.total_photos - 4} more</a>
        </div>
      </div>
    {:else}
      <img
        class="h-auto max-w-full rounded-lg"
        src={photo.urls.thumb}
        alt=""
      />
    {/if}
  {/each} 
</div>

