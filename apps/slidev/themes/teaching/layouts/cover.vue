<script setup lang="ts">
// biome-ignore lint/correctness/noUnusedImports: component used in template
import TeachingDefault from "./default.vue";
</script>

<template>
  <TeachingDefault>
    <div class="slidev-layout cover">
      <div class="my-auto w-full">
        <Logo />
        <slot />
      </div>
    </div>
  </TeachingDefault>
</template>
