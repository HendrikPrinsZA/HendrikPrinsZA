<script>
  import { onMount } from 'svelte';
	import 'photoswipe/style.css';
  import { collections, fetchCollections } from '../../stores/galleryStore';
  import CollectionPreview from './CollectionPreview.svelte';

  // onMount(async () => {
  //   await fetchCollections();
  // })
  
  fetchCollections();
</script>
<ul>
  {#each Object.values($collections) as collection}
    <li class="my-6">
      <a
        class="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        href="/gallery/{collection.id}"
      >
        <h2 class="text-lg font-medium decoration-dashed hover:underline">{collection.title}</h2>
      </a>
      {#if collection.description} 
        <p><i>{collection.description}</i></p>
      {/if}
      <CollectionPreview {collection} />
    </li>
  {/each}
</ul>
