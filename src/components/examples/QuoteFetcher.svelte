<script>
  let quote = null;
  let color = null;
  let loading = false;
  let error = null;

  async function fetchQuote() {
    loading = true;
    error = null;
    try {
      const res = await fetch("/api/examples/quote/");
      if (!res.ok) throw new Error("Quote fetch failed");
      quote = await res.json();
    } catch (e) {
      error = e instanceof Error ? e.message : "Request failed";
    } finally {
      loading = false;
    }
  }

  async function fetchColor() {
    loading = true;
    error = null;
    try {
      const res = await fetch("/api/examples/color/");
      if (!res.ok) throw new Error("Color fetch failed");
      color = await res.json();
    } catch (e) {
      error = e instanceof Error ? e.message : "Request failed";
    } finally {
      loading = false;
    }
  }
</script>

<div class="playground">
  <div class="actions">
    <button
      type="button"
      class="play-btn"
      onclick={fetchQuote}
      disabled={loading}
    >
      {loading ? "Fetching…" : "Random quote"}
    </button>
    <button
      type="button"
      class="play-btn play-btn--alt"
      onclick={fetchColor}
      disabled={loading}
    >
      {loading ? "Fetching…" : "Random color"}
    </button>
  </div>

  {#if error}
    <p class="error">{error}</p>
  {/if}

  {#if quote}
    <blockquote class="quote-result">
      <p>"{quote.text}"</p>
      <footer>— {quote.author}</footer>
    </blockquote>
  {/if}

  {#if color}
    <div
      class="color-result"
      style="--swatch: {color.hex}; --swatch-name: '{color.name}'"
    >
      <div class="swatch" aria-hidden="true"></div>
      <div class="color-meta">
        <p class="color-name">{color.name}</p>
        <p class="color-hex">{color.hex}</p>
        <p class="color-hsl">hsl({color.h}, {color.s}%, {color.l}%)</p>
      </div>
    </div>
  {/if}
</div>

<style>
  .playground {
    @apply rounded-xl border border-skin-line bg-skin-card bg-opacity-20 p-5;
  }
  .actions {
    @apply flex flex-wrap gap-3;
  }
  .play-btn {
    @apply rounded-lg border border-skin-accent px-4 py-2 text-sm font-medium
    text-skin-accent transition-colors hover:bg-skin-accent hover:text-skin-inverted
    disabled:cursor-not-allowed disabled:opacity-50;
  }
  .play-btn--alt {
    @apply border-skin-line text-skin-base hover:border-skin-accent hover:bg-skin-accent;
  }
  .error {
    @apply mt-4 text-sm text-red-500;
  }
  .quote-result {
    @apply mt-5 border-l-4 border-skin-accent pl-4 italic;
  }
  .quote-result footer {
    @apply mt-2 text-sm not-italic opacity-70;
  }
  .color-result {
    @apply mt-5 flex items-center gap-4;
  }
  .swatch {
    @apply h-20 w-20 shrink-0 rounded-xl border border-skin-line;
    background: var(--swatch);
  }
  .color-name {
    @apply text-lg font-semibold;
  }
  .color-hex,
  .color-hsl {
    @apply font-mono text-sm opacity-80;
  }
</style>
