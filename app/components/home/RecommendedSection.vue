<script setup lang="ts">
import { ref, onMounted } from 'vue'
import noirImage from '~/assets/images/products/noir.png'

const items = Array(8).fill({
  image: noirImage,
  title: 'Noir Timeless82 V2 Classic Edition - Gaming Keyboard',
  price: 'RP 824.000',
  originalPrice: 'RP 1.099.000'
})

const carousel = ref()
const scrollProgress = ref(0)
const thumbWidth = 20 // Percentage

onMounted(() => {
  const intervalId = setInterval(() => {
    if (!carousel.value?.emblaApi) return

    clearInterval(intervalId)

    const embla = carousel.value.emblaApi
    embla.on('scroll', () => {
      const progress = Math.max(0, Math.min(1, embla.scrollProgress()))
      scrollProgress.value = progress * (100 - thumbWidth)
    })

    // Initial sync
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()))
    scrollProgress.value = progress * (100 - thumbWidth)
  }, 100)
})
</script>

<template>
  <div class="w-full bg-[#f5f5f5] py-16 font-manrope">
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
      <UCarousel
        ref="carousel"
        :items="items"
        :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/4 pr-5' }"
        class="w-full"
      >
        <template #default="{ item }">
          <CommonProductCard
            v-bind="item"
            class="h-full"
          />
        </template>
      </UCarousel>

      <!-- Custom Scrollbar Indicator -->
      <div
        class="mt-10 mb-5 relative h-2 w-full bg-[#E5E5E5] rounded-full overflow-hidden"
      >
        <div
          class="h-full bg-[#E21F32] rounded-full absolute top-0 transition-all duration-75 ease-out"
          :style="{ width: `${thumbWidth}%`, left: `${scrollProgress}%` }"
        />
      </div>
    </div>
  </div>
</template>
