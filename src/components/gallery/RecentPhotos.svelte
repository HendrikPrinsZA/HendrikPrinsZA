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

<div class="pswp-gallery grid grid-cols-4 md:grid-cols-4 gap-4 mt-10" id="home-gallery">
  {#each photos as recentPhoto (recentPhoto.id)}
    <a
      href={recentPhoto.urls.full}
      data-pswp-width={recentPhoto.width}
      data-pswp-height={recentPhoto.height}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={recentPhoto.urls.thumb}
        alt={recentPhoto.alt ?? ""}
        width={recentPhoto.width}
        height={recentPhoto.height}
      />
    </a>
  {/each}
</div>
