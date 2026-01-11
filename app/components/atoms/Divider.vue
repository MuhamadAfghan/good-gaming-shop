<script setup lang="ts">
// parameters
const props = defineProps({
  color: {
    type: String,
    default: "#E5E5E5",
  },
  height: {
    type: String,
    default: "1px",
  },
  width: {
    type: String,
    default: "full",
  },
  class: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    :style="{
      height: props.height,
      width: props.width,
      backgroundColor: props.color,
    }"
    :class="props.class"
  ></div>
</template>
