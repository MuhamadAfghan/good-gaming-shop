<script setup lang="ts">
import { ref, onMounted } from 'vue' // Added ref and onMounted
import noirImage from '~/assets/images/products/noir.png'

const items = Array(5).fill({
  image: noirImage,
  title: 'Noir Timeless82 V2 Classic Edition - Gaming Keyboard',
  price: 'RP 824.000',
  originalPrice: 'RP 1.099.000',
  participants: 200,
  daysLeft: 7
})

const carousel = ref()
const scrollProgress = ref(0)
const thumbWidth = 20 // Percentage

onMounted(() => {
  // A small delay/interval to ensure hydration and emblaApi is available.
  // In a real application, you might want a more robust check or use nextTick
  // if UCarousel's internal setup is asynchronous.
  const intervalId = setInterval(() => {
    if (!carousel.value?.emblaApi) return

    clearInterval(intervalId) // Stop the interval once emblaApi is found

    const embla = carousel.value.emblaApi
    embla.on('scroll', () => {
      const progress = Math.max(0, Math.min(1, embla.scrollProgress()))
      scrollProgress.value = progress * (100 - thumbWidth)
    })

    // Initial sync
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()))
    scrollProgress.value = progress * (100 - thumbWidth)
  }, 100) // Check every 100ms
})
</script>

<template>
  <div class="w-full bg-[#3E0A0F] py-16 text-white font-manrope mb-0">
    <div class="px-12.5">
      <!-- Header -->
      <div class="mb-10">
        <h2
          class="text-[48px] font-black italic font-panton uppercase leading-none"
        >
          GROUP BUY DEALS
        </h2>
        <h2
          class="text-[48px] font-black italic font-panton uppercase text-[#E21F32] leading-none"
        >
          — POWER UP TOGETHER!
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
          <div class="bg-white rounded-xl overflow-hidden p-4 group">
            <!-- Image Area -->
            <div class="relative bg-[#F9F9F9] rounded-lg mb-3">
              <!-- Brand Logo Placeholder (simulated with text for now if no logo asset) -->
              <div class="absolute top-4 left-0 w-full text-center z-10">
                <span class="font-panton font-black italic text-xl text-black">NOIR</span>
              </div>

              <img
                :src="item.image"
                class="w-full h-auto object-contain mix-blend-multiply"
                draggable="false"
              >

              <!-- Progress Bar Overlay -->
              <div class="absolute bottom-4 left-4 right-4 z-10">
                <div
                  class="flex items-center justify-between text-[10px] font-bold text-white uppercase mb-1 drop-shadow-md"
                >
                  <span />
                  <span>{{ item.daysLeft }} DAYS LEFT!</span>
                </div>
                <div
                  class="h-1.5 w-full bg-white/50 rounded-full overflow-hidden backdrop-blur-sm"
                >
                  <div class="h-full bg-[#E21F32] w-[70%]" />
                </div>
              </div>

              <!-- Status Badge -->
              <div
                class="absolute bottom-0 left-0 w-full bg-[#E21F32] py-1.5 px-4 flex justify-between items-center"
              >
                <span class="text-[10px] font-bold text-white uppercase">GROUP BUY IS LIVE!</span>
                <UIcon
                  name="i-lucide-info"
                  class="w-3.5 h-3.5 text-white"
                />
              </div>
            </div>

            <!-- Card Content -->
            <div class="pt-2">
              <!-- Swatch & Participants -->
              <div class="flex justify-between items-center mb-3">
                <div class="flex gap-2">
                  <div
                    class="w-4 h-4 rounded-full bg-[#1A1A1A] border border-gray-200 cursor-pointer"
                  />
                  <div
                    class="w-4 h-4 rounded-full bg-[#E8DCC4] border border-gray-200 cursor-pointer"
                  />
                </div>

                <div
                  class="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-2 py-1 shadow-sm"
                >
                  <UIcon
                    name="i-lucide-users"
                    class="w-3 h-3 text-black"
                  />
                  <span class="text-[10px] font-bold text-black">{{ item.participants }} Participate</span>
                </div>
              </div>

              <!-- Title -->
              <h3
                class="text-sm font-bold text-[#1A1A1A] leading-tight mb-1 line-clamp-2 min-h-[40px]"
              >
                {{ item.title }}
              </h3>

              <!-- Price -->
              <div class="flex items-end gap-2 mt-2">
                <span class="text-lg font-bold text-[#1A1A1A]">{{
                  item.price
                }}</span>
                <span class="text-xs text-gray-400 line-through mb-1">{{
                  item.originalPrice
                }}</span>
              </div>
            </div>
          </div>
        </template>
      </UCarousel>

      <!-- Custom Scrollbar Indicator -->
      <div
        class="mt-10 mb-5 relative h-2 w-full bg-white/10 rounded-full overflow-hidden"
      >
        <div
          class="h-full bg-white rounded-full absolute top-0 transition-all duration-75 ease-out"
          :style="{ width: `${thumbWidth}%`, left: `${scrollProgress}%` }"
        />
      </div>
    </div>
  </div>
</template>
