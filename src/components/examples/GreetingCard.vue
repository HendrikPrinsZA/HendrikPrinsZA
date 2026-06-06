<script setup lang="ts">
import { ref } from "vue";

const greetings = [
  "Howdy",
  "Ahoy",
  "G'day",
  "Salut",
  "Hola",
  "Namaste",
  "Kia ora",
];
const name = ref("Astro");
const greeting = ref(greetings[0]);

function shuffle() {
  greeting.value =
    greetings[Math.floor(Math.random() * greetings.length)] ?? "Hello";
}
</script>

<template>
  <div class="island-card">
    <p class="island-label">Vue · client:idle</p>
    <p class="island-desc">Hydrates when the browser is idle.</p>
    <p class="greeting-text">
      {{ greeting }}, <strong>{{ name }}</strong
      >!
    </p>
    <label class="name-label">
      Your name
      <input v-model="name" type="text" class="name-input" />
    </label>
    <button type="button" class="island-btn" @click="shuffle">
      Shuffle greeting
    </button>
  </div>
</template>

<style scoped>
.island-card {
  @apply rounded-xl border border-skin-line bg-skin-card bg-opacity-20 p-5;
}
.island-label {
  @apply text-xs font-semibold uppercase tracking-wider text-skin-accent;
}
.island-desc {
  @apply mt-1 text-sm opacity-70;
}
.greeting-text {
  @apply mt-4 text-2xl font-semibold;
}
.name-label {
  @apply mt-4 block text-sm opacity-80;
}
.name-input {
  @apply mt-1 w-full rounded border border-skin-line bg-skin-fill px-3 py-2 text-skin-base;
}
.island-btn {
  @apply mt-4 rounded-lg border border-skin-accent px-4 py-2 text-sm font-medium
  text-skin-accent transition-colors hover:bg-skin-accent hover:text-skin-inverted;
}
</style>
