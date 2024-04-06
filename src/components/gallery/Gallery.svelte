<script>
  import { counter, incrementCounter } from '../../stores/galleryStore';
</script>

<button on:click={incrementCounter}>
  Counter is {$counter}
</button>
