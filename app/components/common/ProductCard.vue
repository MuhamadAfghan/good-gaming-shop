<script setup lang="ts">
defineProps<{
  image: string;
  title: string;
  price: string;
  originalPrice: string;
}>();
</script>

<template>
  <div class="p-3 group cursor-pointer">
    <!-- Image Area -->
    <div
      class="relative bg-[#F9F9F9] border border-gray-200 rounded-lg mb-3 flex items-center justify-center aspect-square overflow-hidden"
    >
      <!-- Brand Logo Placeholder -->
      <div class="absolute top-4 left-0 w-full text-center z-10">
        <span class="font-panton font-black italic text-xl text-black"
          >NOIR</span
        >
      </div>

      <NuxtImg
        :src="image"
        class="w-full h-auto object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
        draggable="false"
        loading="lazy"
        format="webp"
        alt="Product Image"
      />
    </div>

    <!-- Card Content -->
    <div class="pt-2">
      <!-- Swatch -->
      <div class="flex gap-2 mb-3">
        <div
          class="w-4 h-4 rounded-full bg-[#1A1A1A] border border-gray-200 cursor-pointer ring-1 ring-offset-1 ring-transparent hover:ring-gray-300 transition-all"
        />
        <div
          class="w-4 h-4 rounded-full bg-[#E8DCC4] border border-gray-200 cursor-pointer ring-1 ring-offset-1 ring-transparent hover:ring-gray-300 transition-all"
        />
      </div>

      <!-- Title -->
      <h3
        class="text-sm font-bold text-[#1A1A1A] leading-tight mb-1 line-clamp-2 min-h-10"
      >
        {{ title }}
      </h3>

      <!-- Price -->
      <div class="flex items-end gap-2 mt-2">
        <span class="text-lg font-bold text-[#E21F32]">{{ price }}</span>
        <span class="text-xs text-gray-400 line-through mb-1">{{
          originalPrice
        }}</span>
      </div>
    </div>
  </div>
</template>
