<script setup lang="ts">
// biome-ignore lint/correctness/noUnusedVariables: used in template
const { logo } = withDefaults(defineProps<{ logo?: boolean }>(), {
  logo: true,
});
</script>

<template>
  <div class="slidev-layout hero-56k grid gap-6">
    <header class="flex items-center justify-between">
      <div class="rounded-full px-3 py-1 text-xs tracking-wide bg-[color:var(--slidev-theme-background-lightened)]/50 border border-white/10">
        56k.cloud
      </div>
      <Logo v-if="logo" class="h-6 opacity-90" />
    </header>
    <main class="flex-1 flex flex-col justify-center">
      <slot />
    </main>
    <footer class="flex items-center justify-between text-xs opacity-70">
      <div>Slidev + Vite + Vue 3</div>
      <div>AWS S3 + CloudFront</div>
    </footer>
  </div>
</template>

<style scoped>
.hero-56k {
  --ring: rgba(255,255,255,.08);
  background:
    radial-gradient(80rem 40rem at 110% -10%, var(--slidev-theme-background-lightened) 0%, transparent 60%),
    radial-gradient(60rem 40rem at -10% -10%, var(--slidev-theme-background-via) 0%, transparent 70%);
  border: 1px solid var(--ring);
  border-radius: 16px;
  padding: 2rem;
}
</style>
