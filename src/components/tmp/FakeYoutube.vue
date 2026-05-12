<template>
  <main class="fake-youtube">
    <audio src="/assets/tmp/spinning.wav" autoplay loop></audio>
    <Transition name="fade" mode="out-in">
      <section v-if="!hasPlayed" key="video" class="video-stage">
        <img src="/assets/tmp/spinning.png" alt="YouTube" class="youtube-image">

        <button class="play-button" type="button" aria-label="Play video" @click="play">
          <span class="play-icon"></span>
        </button>
      </section>

      <section v-else class="spinning-stage" aria-live="polite">

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
  },
);

const hasPlayed = ref(false);

function play() {
    hasPlayed.value = true;

    const audio = document.querySelector('audio');
    if (audio) {
        audio.play();
    }
}
</script>

<style scoped>
.fake-youtube {
  min-height: 100vh;
  width: 100%;
  background: #0f0f0f;
  color: #fff;
  overflow: hidden;
}

.video-stage,
.welcome-stage {
  min-height: 100vh;
  width: 100%;
}

.video-stage {
  position: relative;
  display: grid;
  place-items: center;
}

.video-frame {
  width: 100%;
  height: 100vh;
  border: 0;
}

.play-button {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  width: 100%;
  border: 0;
  background: rgb(0 0 0 / 35%);
  cursor: pointer;
}

.play-icon {
  width: 96px;
  height: 68px;
  border-radius: 18px;
  background: #ff0000;
  box-shadow: 0 12px 35px rgb(0 0 0 / 35%);
  position: relative;
  transition:
    transform 160ms ease,
    background-color 160ms ease;
}

.play-icon::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%, -50%);
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  border-left: 28px solid #fff;
}

.play-button:hover .play-icon,
.play-button:focus-visible .play-icon {
  transform: scale(1.08);
  background: #cc0000;
}

.play-button:focus-visible {
  outline: 4px solid #fff;
  outline-offset: -8px;
}

.spinning-stage {
    min-height: 100vh;
    width: 100vw;
    background-image: url("/assets/tmp/spining.gif");
    background-repeat: repeat;
}

.welcome-stage {
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at center, rgb(255 255 255 / 16%), transparent 36%),
    linear-gradient(135deg, #171717, #000);
}

.welcome-stage h1 {
  margin: 0;
  font-size: clamp(3rem, 12vw, 9rem);
  letter-spacing: -0.06em;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 450ms ease,
    transform 450ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}
</style>
