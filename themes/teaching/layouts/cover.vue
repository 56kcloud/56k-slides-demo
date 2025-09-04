<script setup lang="ts">
import TeachingDefault from './default.vue'
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
