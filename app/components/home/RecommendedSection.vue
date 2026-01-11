<script setup lang="ts">
import type { RecommendedProduct } from "~/types/recommended-product";

const { recommendedProducts, pending } = useRecommendedProducts();
const config = useRuntimeConfig();

const items = computed(() => {
  return recommendedProducts.value.map((product) => {
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
    };
  });
});

defineProps({
  titleFirstLine: {
    type: String,
    default: "RECOMMENDED",
  },
  titleSecondLine: {
    type: String,
    default: "BY GOOD GAMING",
  },
  titleFirstLineColor: {
    type: String,
    default: "text-[#1A1A1A]",
  },
  titleSecondLineColor: {
    type: String,
    default: "text-[#E21F32]",
  },
  class: {
    type: String,
    default: "",
  },
});

const thumbWidth = 20; // Percentage
</script>

<template>
  <div class="w-full bg-[#F1F1F1] font-manrope" :class="class">
    <div class="px-12.5 container mx-auto">
      <!-- Header -->
      <div class="mb-10">
        <h2
          class="text-[40px] font-black italic font-panton uppercase leading-none"
          :class="titleFirstLineColor"
        >
          {{ titleFirstLine }}
        </h2>
        <h2
          class="text-[40px] font-black italic font-panton uppercase leading-none"
          :class="titleSecondLineColor"
        >
          {{ titleSecondLine }}
        </h2>
      </div>

      <!-- Skeleton -->
       <div v-if="pending" class="flex gap-4 overflow-hidden">
        <CommonSkeletonImage v-for="i in 4" :key="i" class="min-w-[85%] md:min-w-[calc(50%-10px)] lg:min-w-[calc(25%-15px)] aspect-[3/4] rounded-lg" />
      </div>

      <!-- Carousel -->
      <ClientOnly v-if="!pending">
        <CommonCarousel
          :thumb-width="thumbWidth"
          scrollbar-class="mt-10 mb-5 relative h-2 w-full bg-[#E3E3E3] rounded-full overflow-hidden cursor-pointer touch-none"
          thumb-class="h-full bg-[#E21F32] rounded-full absolute top-0 transition-all duration-75 ease-out"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="min-w-[85%] md:min-w-[calc(50%-10px)] lg:min-w-[calc(25%-15px)] snap-start pointer-events-none"
          >
            <CommonProductCard v-bind="item" class="h-full" />
          </div>
        </CommonCarousel>
      </ClientOnly>
    </div>
  </div>
</template>
