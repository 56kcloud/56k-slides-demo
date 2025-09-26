<template>
  <div class="teaching-layout">
    <header class="teaching-header">
      <h1>Mode Teaching</h1>
    </header>
    <main class="teaching-content">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.teaching-layout {
  background: #f7f7f7;
  color: #222;
  font-family: "Segoe UI", sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.teaching-header {
  background: #ffcc00;
  padding: 1.5rem;
  text-align: center;
  font-weight: bold;
}
.teaching-content {
  flex: 1;
  padding: 2rem;
}
</style>
