<script>
  let hue = 200;
  let spinning = false;

  function randomHue() {
    hue = Math.floor(Math.random() * 360);
    spinning = true;
    setTimeout(() => (spinning = false), 600);
  }
</script>

<div class="island-card">
  <p class="island-label">Svelte · client:visible</p>
  <p class="island-desc">Hydrates when scrolled into view.</p>
  <button
    type="button"
    class="mood-ring"
    class:spinning
    style="--ring-hue: {hue}"
    onclick={randomHue}
    aria-label="Spin the mood ring"
  >
    <span class="ring-inner">{hue}°</span>
  </button>
  <p class="ring-hint">Tap the ring to spin a new hue</p>
</div>

<style>
  .island-card {
    @apply rounded-xl border border-skin-line bg-skin-card bg-opacity-20 p-5;
  }
  .island-label {
    @apply text-xs font-semibold uppercase tracking-wider text-skin-accent;
  }
  .island-desc {
    @apply mt-1 text-sm opacity-70;
  }
  .mood-ring {
    @apply mx-auto mt-4 flex h-28 w-28 items-center justify-center rounded-full border-0
    transition-transform duration-300;
    background: conic-gradient(
      hsl(var(--ring-hue) 80% 55%),
      hsl(calc(var(--ring-hue) + 60) 80% 55%),
      hsl(calc(var(--ring-hue) + 120) 80% 55%),
      hsl(var(--ring-hue) 80% 55%)
    );
    cursor: pointer;
  }
  .mood-ring.spinning {
    transform: rotate(360deg);
  }
  .ring-inner {
    @apply flex h-16 w-16 items-center justify-center rounded-full bg-skin-fill text-sm font-bold;
  }
  .ring-hint {
    @apply mt-3 text-center text-xs opacity-60;
  }
</style>
