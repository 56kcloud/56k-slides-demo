<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../layoutHelper";

const props = defineProps({
  logo: {
    type: String,
  },
  image: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: "cover",
  },
});

// biome-ignore lint/correctness/noUnusedVariables: used in template
const backgroundStyle = computed(() => handleBackground(props.image, false, props.backgroundSize));
</script>

<template>
  <div class="grid grid-cols-[40%_60%] w-full h-full auto-rows-fr">
    <!-- Colonne image -->
    <div class="w-full h-full" :style="backgroundStyle" />

    <!-- Colonne texte -->
    <div class="slidev-layout reference flex flex-col items-center justify-center text-center relative px-8">
      <!-- logo optionnel -->
      <img v-if="props.logo" :src="props.logo" class="w-36 h-auto absolute top-6 right-6" alt="logo" />
      
      <!-- contenu centre -->
      <slot />
    </div>
  </div>
</template>
