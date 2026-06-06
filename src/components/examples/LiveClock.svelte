<script>
  import { onMount, onDestroy } from "svelte";

  let now = new Date();
  let interval;

  onMount(() => {
    interval = setInterval(() => {
      now = new Date();
    }, 1000);
  });

  onDestroy(() => {
    clearInterval(interval);
  });

  $: formatted = now.toLocaleString("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
  });
</script>

<div class="time-card client">
  <p class="time-label">Client-hydrated</p>
  <p class="time-value">{formatted}</p>
  <p class="time-note">
    Updates every second via a Svelte island with <code>client:load</code>.
  </p>
</div>

<style>
  .time-card {
    @apply rounded-xl border border-skin-line bg-skin-card bg-opacity-20 p-5;
  }
  .time-label {
    @apply text-xs font-semibold uppercase tracking-wider text-skin-accent;
  }
  .time-value {
    @apply mt-3 font-mono text-lg;
  }
  .time-note {
    @apply mt-2 text-sm opacity-70;
  }
  .time-note code {
    @apply rounded bg-skin-card px-1 text-xs;
  }
</style>
