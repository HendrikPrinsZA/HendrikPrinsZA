<script>
  import { onMount } from "svelte";
  import PhotoSwipeLightbox from "photoswipe/lightbox";
  import Masonry from "svelte-bricks";
  import { createApi } from "unsplash-js";
  import {
    PUBLIC_UNSPLASH_API_ACCESS_KEY,
    PUBLIC_UNSPLASH_USERNAME,
  } from "astro:env/client";
  import "photoswipe/style.css";

  const unsplashApiAccessKey = PUBLIC_UNSPLASH_API_ACCESS_KEY;
  const unsplashUsername = PUBLIC_UNSPLASH_USERNAME;
  const unsplash = createApi({ accessKey: unsplashApiAccessKey });

  let lightbox;
  onMount(async () => {
    lightbox = new PhotoSwipeLightbox({
      gallery: ".home-gallery",
      children: "a",
      showHideAnimationType: "zoom",
      pswpModule: () => import("photoswipe"),
    });
  });

  async function fetch_photos() {
    const result = await unsplash.users.getPhotos({
      username: unsplashUsername,
      perPage: 10,
    });

    setTimeout(() => lightbox && lightbox.init(), 150);

    return result.response.results;
  }
</script>

{#await fetch_photos()}
  <p>Loading data...</p>
{:then files}
  <Masonry
    items={files}
    idKey="id"
    gap={2}
    minColWidth={110}
    class="home-gallery"
    animate={true}
  >
    {#snippet children({ item })}
      <a
        href={item.urls.full}
        data-pswp-width={item.width}
        data-pswp-height={item.height}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={item.urls.thumb}
          alt=""
          width={item.width}
          height={item.height}
        />
      </a>
    {/snippet}
  </Masonry>
{/await}
