<script setup lang="ts">
import type { TopSeller } from "~/types/top-seller";

const { topSellers, pending } = useTopSellers();
const config = useRuntimeConfig();

const products = computed(() => {
  return topSellers.value.map((product) => {
    const thumbnail = product.thumbnail?.path;
    const image = thumbnail
      ? thumbnail.startsWith("http")
        ? thumbnail
        : `${config.public.apiBaseUrl}${thumbnail}`
      : "";

    // Find the lowest price from all variations
    let minPrice = Infinity;
    let maxMarkupPrice = 0;

    product.productVariations.forEach((variation) => {
      variation.productColors.forEach((color) => {
        if (color.realPrice < minPrice) minPrice = color.realPrice;
        if (color.markupPrice > maxMarkupPrice) maxMarkupPrice = color.markupPrice;
      });
    });
    
    // If no variations/colors, defaults will show 0 or handle logic as needed
    const finalPrice = minPrice === Infinity ? 0 : minPrice;

    // Helper to format currency
    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(amount);
    };

    return {
      image,
      title: product.name,
      price: formatCurrency(finalPrice),
      originalPrice: maxMarkupPrice > 0 ? formatCurrency(maxMarkupPrice) : "",
      // Passing colors to card if needed later, currently card just has placeholders
    };
  });
});
</script>

<template>
  <div class="w-full bg-white font-manrope">
    <div class="px-12.5 container mx-auto">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-10">
        <div>
          <h2
            class="text-[40px] font-black italic font-panton uppercase leading-none text-[#1A1A1A]"
          >
            TOP SELLER
          </h2>
          <h2
            class="text-[40px] font-black italic font-panton uppercase text-[#E21F32] leading-none"
          >
            GAMING GEAR
          </h2>
        </div>

        <button
          class="px-8 py-2.5 border-2 font-black border-[#E21F32] text-[#E21F32] text-sm rounded-lg hover:bg-[#E21F32] hover:text-white transition-colors uppercase mt-4 md:mt-0"
        >
          See All
        </button>
      </div>

      <!-- Skeleton -->
      <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CommonSkeletonImage v-for="i in 4" :key="i" class="w-full aspect-[3/4] rounded-lg" />
      </div>

      <!-- Grid -->
      <div v-if="!pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CommonProductCard
          v-for="(item, index) in products"
          :key="index"
          v-bind="item"
        />
      </div>
    </div>
  </div>
</template>
