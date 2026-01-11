<script setup lang="ts">
import { ref } from "vue";

// Define simpler props for the locations to avoid complex type issues for now, or use an interface
interface LocationStock {
  name: string;
  available: boolean;
}

defineProps<{
  locations: LocationStock[];
}>();
</script>

<template>
  <div class="space-y-3">
    <h3 class="font-bold text-base text-black">Stock Information</h3>
    <div class="flex items-center gap-2 text-sm text-gray-500 mb-4">
      <span>Current Location :</span>
      <div class="flex items-center text-[#E21F32] font-bold gap-1">
        <UIcon name="i-lucide-map-pin" class="w-4 h-4" />
        <span>JABODETABEK</span>
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
      <div
        v-for="(loc, index) in locations"
        :key="index"
        class="border border-gray-200 rounded-lg p-3"
      >
        <div class="font-bold text-sm text-black mb-1">{{ loc.name }}</div>
        <div class="flex items-center gap-1.5">
          <div
            class="w-2 h-2 rounded-full"
            :class="loc.available ? 'bg-green-500' : 'bg-red-500'"
          />
          <span
            class="text-xs"
            :class="loc.available ? 'text-green-600' : 'text-red-500'"
          >
            {{ loc.available ? "Stock available" : "Out of stock" }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
