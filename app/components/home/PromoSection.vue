<script setup lang="ts">
import promo1 from '~/assets/images/promos/promo-1.png'
import promo2 from '~/assets/images/promos/promo-2.png'
import promo3 from '~/assets/images/promos/promo-3.png'

// Duplicating to allow for more scrolling experience as per typical carousel behavior
const items = [promo1, promo2, promo3, promo1, promo2, promo3]

const carousel = useTemplateRef('carousel')

function prev() {
  carousel.value?.emblaApi?.scrollPrev()
}

function next() {
  carousel.value?.emblaApi?.scrollNext()
}
</script>

<template>
  <div class="py-6 border-b border-gray-100">
    <div class="px-12.5 mb-6 flex justify-between items-end">
      <!-- Title -->
      <div>
        <h2
          class="text-[48px] font-black italic font-panton uppercase text-[#1A1A1A] leading-tight"
        >
          DON'T JUST PLAY THE GAME
        </h2>
        <h2
          class="text-[48px] font-black italic font-panton text-[#DA291C] uppercase leading-tight relative"
        >
          <span class="relative z-10">— DOMINATE IT.</span>
        </h2>
      </div>

      <!-- Navigation -->
      <div class="flex gap-3">
        <button
          class="w-10 h-10 rounded-full bg-[#DA291C] flex items-center justify-center text-white hover:bg-[#b01b12] transition-colors shadow-sm"
          @click="prev"
        >
          <UIcon
            name="i-lucide-chevron-left"
            class="w-5 h-5"
          />
        </button>
        <button
          class="w-10 h-10 rounded-full bg-[#DA291C] flex items-center justify-center text-white hover:bg-[#b01b12] transition-colors shadow-sm"
          @click="next"
        >
          <UIcon
            name="i-lucide-chevron-right"
            class="w-5 h-5"
          />
        </button>
      </div>
    </div>

    <!-- Carousel -->
    <div class="px-8.5">
      <UCarousel
        ref="carousel"
        :items="items"
        :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/4 pl-4' }"
        class="w-full"
      >
        <template #default="{ item }">
          <img
            :src="item"
            class="w-full h-auto object-cover rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            draggable="false"
          >
        </template>
      </UCarousel>
    </div>
  </div>
</template>
