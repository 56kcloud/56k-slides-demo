<script setup lang="ts">
// biome-ignore lint/correctness/noUnusedImports: component used in template
import TeachingDefault from "./default.vue";

// biome-ignore lint/correctness/noUnusedVariables: accessed from the template
const props = defineProps<{
  logo?: string;
}>();

// biome-ignore lint/correctness/noUnusedVariables: invoked from the template
function resolveAsset(p?: string) {
  if (!p) return undefined;
  if (p.startsWith("/") || p.startsWith("http")) return p;
  return new URL(`../assets/${p}`, import.meta.url).href;
}
</script>

<template>
  <TeachingDefault>
    <div class="t-hero grid gap-6">
      <header class="flex items-center justify-between">
        <div class="rounded-full px-3 py-1 text-xs tracking-wide bg-black/5 border border-black/10">
          Teaching
        </div>
        <img
          v-if="props.logo"
          :src="resolveAsset(props.logo)"
          class="h-6 opacity-90"
          alt="logo"
        />
      </header>
      <main class="flex-1 flex flex-col justify-center">
        <slot />
      </main>
      <footer class="flex items-center justify-between text-xs opacity-70">
        <div>Slidev + Vite + Vue 3</div>
        <div>Mode Teaching</div>
      </footer>
    </div>
  </TeachingDefault>
</template>

<style scoped>
.t-hero {
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  padding: 2rem;
  background:
    radial-gradient(70rem 40rem at 110% -10%, rgba(0, 0, 0, 0.04) 0%, transparent 60%),
    radial-gradient(50rem 30rem at -10% -10%, rgba(0, 0, 0, 0.03) 0%, transparent 70%);
}
</style>
