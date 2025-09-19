<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  count: {
    default: 0,
  },
});

const _counter = ref(props.count);
</script>

<template>
  <div flex="~" w="min" border="~ main rounded-md">
    <button
      border="r main"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="_counter -= 1"
    >
      -
    </button>
    <span m="auto" p="2">{{ _counter }}</span>
    <button
      border="l main"
      p="2"
      font="mono"
      outline="!none"
      hover:bg="gray-400 opacity-20"
      @click="_counter += 1"
    >
      +
    </button>
  </div>
</template>
