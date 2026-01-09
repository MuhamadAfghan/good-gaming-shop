<script setup lang="ts">
import noirImage from "~/assets/images/products/noir.png";

const items = Array(8).fill({
  image: noirImage,
  title: "Noir Timeless82 V2 Classic Edition - Gaming Keyboard",
  price: "RP 824.000",
  originalPrice: "RP 1.099.000",
});

const thumbWidth = 20; // Percentage
</script>

<template>
  <div class="w-full bg-[#F1F1F1] py-16 font-manrope mb-0">
    <div class="px-12.5">
      <!-- Header -->
      <div class="mb-10">
        <h2
          class="text-[40px] font-black italic font-panton uppercase leading-none text-[#1A1A1A]"
        >
          RECOMMENDED
        </h2>
        <h2
          class="text-[40px] font-black italic font-panton uppercase text-[#E21F32] leading-none"
        >
          BY GOOD GAMING
        </h2>
      </div>

      <!-- Carousel -->
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
    </div>
  </div>
</template>
