<script>
  import { onMount } from 'svelte';
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import { recentPhotos, fetchRecentPhotos } from '../../stores/galleryStore';
	import 'photoswipe/style.css';

  let localRecentPhotos = [];
  onMount(async () => {
    let lightbox = new PhotoSwipeLightbox({
			gallery: '#home-gallery',
			children: 'a',
      showHideAnimationType: 'zoom',
			pswpModule: () => import('photoswipe'),
		});

    recentPhotos.subscribe((state) => {
      localRecentPhotos = localRecentPhotos;
      lightbox.init();
    });

    await fetchRecentPhotos(8)
  })
</script>

<div class="pswp-gallery grid grid-cols-4 md:grid-cols-4 gap-4 mt-10" id="home-gallery">
  {#each Object.values($recentPhotos) as recentPhoto}
		<a
			href={recentPhoto.urls.full}
			data-pswp-width={recentPhoto.width}
			data-pswp-height={recentPhoto.height}
			target="_blank"
			rel="noreferrer"
		>
			<img src={recentPhoto.urls.thumb} alt="" />
		</a>
  {/each}
</div>
<p>See <a href="https://unsplash.com/@hendrikprinsza" target="_blank" class="group inline-block hover:text-skin-accent underline decoration-dashed underline-offset-4 hover:text-skin-accent astro-j7pv25f6">all photos</a></p>
