<template>
  <main class="fake-youtube">
    <audio
      ref="audioEl"
      src="/assets/tmp/spinning.wav"
      loop
      preload="auto"
      aria-hidden="true"
    ></audio>

    <Transition name="stage" mode="out-in">
      <section v-if="!hasPlayed" key="video" class="video-stage">
        <div class="video-card">
          <img
            src="/assets/tmp/spinning.png"
            :alt="props.title"
            class="youtube-image"
            decoding="async"
          />

          <button
            class="play-button"
            type="button"
            :aria-label="`Play ${props.title}`"
            @click="play"
          >
            <span class="play-icon"></span>
          </button>
        </div>
      </section>

      <section v-else key="spinning" class="spinning-stage" aria-live="polite">
        <div class="spinning-glow"></div>
      </section>
    </Transition>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(
  defineProps<{
    title?: string;
    videoId?: string;
  }>(),
  {
    title: "YouTube video",
    videoId: "jNQXAC9IVRw",
  }
);

const hasPlayed = ref(false);
const audioEl = ref<HTMLAudioElement | null>(null);

function play() {
  hasPlayed.value = true;

  const audio = audioEl.value;
  if (audio) {
    void audio.play().catch(() => undefined);
  }
}
</script>

<style scoped>
.fake-youtube {
  position: relative;
  min-height: 100svh;
  min-height: 100dvh;
  width: 100%;
  background:
    radial-gradient(
      circle at 50% 18%,
      rgb(255 255 255 / 8%),
      transparent 30rem
    ),
    #0f0f0f;
  color: #fff;
  overflow: hidden;
  isolation: isolate;
  touch-action: manipulation;
}

.video-stage,
.spinning-stage {
  box-sizing: border-box;
  min-height: 100svh;
  min-height: 100dvh;
  width: 100%;
  max-width: none;
  margin: 0;
}

.video-stage {
  position: relative;
  display: grid;
  place-items: center;
  padding: max(1rem, env(safe-area-inset-top))
    max(1rem, env(safe-area-inset-right)) max(1rem, env(safe-area-inset-bottom))
    max(1rem, env(safe-area-inset-left));
}

.video-card {
  position: relative;
  width: min(100%, 1100px);
  max-height: calc(100dvh - 2rem);
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #000;
  border-radius: clamp(1rem, 3vw, 1.75rem);
  box-shadow: 0 2rem 5rem rgb(0 0 0 / 45%);
  transform: translateZ(0);
}

.youtube-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-button {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  width: 100%;
  padding: 0;
  border: 0;
  background:
    radial-gradient(circle at center, rgb(0 0 0 / 6%), rgb(0 0 0 / 48%)),
    rgb(0 0 0 / 18%);
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition:
    background-color 220ms ease,
    backdrop-filter 220ms ease;
}

.play-icon {
  position: relative;
  width: clamp(4.5rem, 16vw, 6rem);
  height: clamp(3.25rem, 11vw, 4.25rem);
  border-radius: clamp(0.875rem, 3vw, 1.125rem);
  background: #ff0000;
  box-shadow: 0 12px 35px rgb(0 0 0 / 35%);
  transition:
    transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
    background-color 220ms ease,
    box-shadow 220ms ease;
}

.play-icon::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%, -50%);
  border-top: clamp(0.75rem, 3vw, 1.125rem) solid transparent;
  border-bottom: clamp(0.75rem, 3vw, 1.125rem) solid transparent;
  border-left: clamp(1.125rem, 4vw, 1.75rem) solid #fff;
}

.play-button:hover .play-icon,
.play-button:focus-visible .play-icon {
  transform: scale(1.08) translateZ(0);
  background: #cc0000;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 45%);
}

.play-button:active .play-icon {
  transform: scale(0.96);
}

.play-button:focus-visible {
  outline: 4px solid #fff;
  outline-offset: -8px;
}

.spinning-stage {
  position: relative;
  overflow: hidden;
  background-color: #000;
  background-image: url("/assets/tmp/spinning.gif");
  background-repeat: repeat;
  background-size: clamp(6rem, 28vw, 13.75rem);
  animation: spin-pan 18s linear infinite;
}

.spinning-stage::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    transparent 32%,
    rgb(0 0 0 / 38%)
  );
  pointer-events: none;
}

.spinning-glow {
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(circle at 30% 20%, rgb(255 0 0 / 18%), transparent 24rem),
    radial-gradient(
      circle at 70% 80%,
      rgb(255 255 255 / 10%),
      transparent 22rem
    );
  pointer-events: none;
  animation: glow-pulse 2400ms ease-in-out infinite alternate;
}

.stage-enter-active,
.stage-leave-active {
  transition:
    opacity 480ms ease,
    transform 480ms cubic-bezier(0.22, 1, 0.36, 1),
    filter 480ms ease;
  will-change: opacity, transform, filter;
}

.stage-enter-from {
  opacity: 0;
  filter: blur(10px);
  transform: scale(1.03);
}

.stage-leave-to {
  opacity: 0;
  filter: blur(8px);
  transform: scale(0.96);
}

@keyframes spin-pan {
  from {
    background-position: 0 0;
  }

  to {
    background-position: clamp(6rem, 28vw, 13.75rem) clamp(6rem, 28vw, 13.75rem);
  }
}

@keyframes glow-pulse {
  from {
    opacity: 0.55;
    transform: scale(1);
  }

  to {
    opacity: 0.95;
    transform: scale(1.05);
  }
}

@media (max-width: 640px) {
  .video-stage {
    padding: max(0.75rem, env(safe-area-inset-top))
      max(0.75rem, env(safe-area-inset-right))
      max(0.75rem, env(safe-area-inset-bottom))
      max(0.75rem, env(safe-area-inset-left));
  }

  .video-card {
    width: calc(100vw - 1.5rem);
    max-height: calc(100svh - 1.5rem);
    border-radius: 1rem;
  }
}

@media (orientation: landscape) and (max-height: 520px) {
  .video-card {
    width: auto;
    height: calc(100svh - 1.5rem);
    max-width: calc(100vw - 1.5rem);
  }
}

@media (prefers-reduced-motion: reduce) {
  .spinning-stage,
  .spinning-glow {
    animation: none;
  }

  .stage-enter-active,
  .stage-leave-active,
  .play-button,
  .play-icon {
    transition-duration: 1ms;
  }
}
</style>
