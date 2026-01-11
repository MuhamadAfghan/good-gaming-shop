<script setup lang="ts">
import Divider from "../atoms/Divider.vue";

defineProps<{
  specs: Record<string, string>;
}>();
</script>

<template>
  <div class="space-y-4">
    <h3 class="font-bold text-lg text-black">Product Specification</h3>

    <div>
      <div
        class="grid grid-cols-12 py-3 text-sm md:text-base font-semibold text-gray-500"
      >
        <div class="col-span-4 md:col-span-3">Features</div>
        <div class="col-span-8 md:col-span-9">Detail</div>
      </div>
      <Divider />

      <div v-for="(value, key) in specs" :key="key">
        <div class="grid grid-cols-12 py-4.5 text-sm md:text-base">
          <div class="col-span-4 md:col-span-3 font-bold text-black">
            {{ key }}
          </div>
          <div class="col-span-8 md:col-span-9 text-gray-600">{{ value }}</div>
        </div>
        <Divider />
      </div>
    </div>
  </div>
</template>
