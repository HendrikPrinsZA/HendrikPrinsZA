<script>
  import { onMount } from "svelte";
  import PhotoSwipeLightbox from "photoswipe/lightbox";
  import "photoswipe/style.css";

  export let photos = [];

  onMount(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#home-gallery",
      children: "a",
      showHideAnimationType: "zoom",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();

    return () => lightbox.destroy();
  });
</script>

<div
  class="pswp-gallery mt-6 grid grid-cols-2 gap-3 sm:grid-cols-8 sm:gap-4"
  id="home-gallery"
>
  {#each photos as recentPhoto (recentPhoto.id)}
    <a
      href={recentPhoto.urls.full}
      data-pswp-width={recentPhoto.width}
      data-pswp-height={recentPhoto.height}
      target="_blank"
      rel="noopener noreferrer"
      class="group block overflow-hidden rounded-lg"
    >
      <img
        src={recentPhoto.urls.thumb}
        alt={recentPhoto.alt ?? ""}
        width={recentPhoto.width}
        height={recentPhoto.height}
        loading="lazy"
        decoding="async"
        class="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
    </a>
  {/each}
</div>
