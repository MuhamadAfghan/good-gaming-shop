<script setup lang="ts">
defineProps<{
  class?: string
}>()
</script>

<template>
  <div
    :class="['animate-pulse bg-gray-200 dark:bg-gray-700 rounded', $props.class]"
  />
</template>
