<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../layoutHelper";
// biome-ignore lint/correctness/noUnusedImports: component used in template
import TeachingDefault from "./default.vue";

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

// biome-ignore lint/correctness/noUnusedVariables: bound in the template
const style = computed(() => handleBackground(props.image, false, props.backgroundSize));
</script>

<template>
  <TeachingDefault>
    <div class="grid grid-cols-[40%_60%] w-full h-full auto-rows-fr">
      <div class="w-full h-full" :style="style" />
      <div class="slidev-layout reference flex flex-col items-center justify-center text-center relative px-8">
        <img v-if="props.logo" :src="props.logo" class="w-36 h-auto absolute top-6 right-6" alt="logo" />
        <slot />
      </div>
    </div>
  </TeachingDefault>
</template>
