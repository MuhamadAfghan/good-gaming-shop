<script setup lang="ts">
import { stripHtml, truncateText } from "~/utils/string";

const { newsletters, pending } = useNewsletters();

// Helper to format date (if available) assuming it might be an ISO string later or we just hide it if empty
const formatDate = (date: any) => {
  if (!date || typeof date === 'object' && Object.keys(date).length === 0) return ''; 
  try {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch (e) {
    return '';
  }
};
</script>

<template>
  <div class="w-full bg-white font-manrope">
    <div class="px-12.5 container mx-auto">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-10">
        <div class="flex">
          <h2
            class="text-[40px] font-black italic font-panton uppercase leading-none text-[#1A1A1A]"
          >
            OUR <span class="text-[#E21F32]">LATEST NEWS</span>
          </h2>
        </div>

        <button
          class="px-8 py-2.5 border border-[#E21F32] text-[#E21F32] font-bold text-sm rounded-lg hover:bg-[#E21F32] hover:text-white transition-colors uppercase mt-4 md:mt-0"
        >
          See All
        </button>
      </div>

      <!-- Skeleton -->
      <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="n in 4" :key="n" class="flex flex-col gap-4">
             <CommonSkeletonImage class="w-full h-48 rounded-lg" />
             <div class="h-4 bg-gray-200 rounded w-3/4"></div>
             <div class="h-3 bg-gray-200 rounded w-full"></div>
             <div class="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>

      <!-- Grid -->
      <div v-if="!pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, index) in newsletters"
          :key="index"
          class="group cursor-pointer"
        >
          <!-- Image Area -->
          <div class="rounded-lg overflow-hidden mb-4 aspect-video">
            <NuxtImg
              :src="item.thumbnail"
              :alt="item.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              draggable="false"
              loading="lazy"
              format="webp"
            />
          </div>

          <!-- Content -->
          <div>
            <h3
              class="font-bold text-lg text-[#1A1A1A] leading-tight mb-2 group-hover:text-[#E21F32] transition-colors line-clamp-2"
            >
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-500 mb-2 line-clamp-3">
              {{ truncateText(stripHtml(item.content), 120) }}
            </p>
            <span class="text-xs font-bold text-gray-400">
              {{ formatDate(item.publishedAt) }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
