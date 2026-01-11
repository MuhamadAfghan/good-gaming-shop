<script setup lang="ts">
const { promotions, pending } = usePromotions()
const items = computed(() => promotions.value)

const carousel = useTemplateRef("carousel");

function prev() {
  carousel.value?.emblaApi?.scrollPrev();
}

function next() {
  carousel.value?.emblaApi?.scrollNext();
}

// Auto scroll functionality could be added if needed, but not requested for this section
</script>

<template>
  <div class="border-b border-gray-100 container mx-auto">
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
      <div v-if="!pending && items.length > 0" class="flex gap-3">
        <button
          class="w-10 h-10 rounded-full bg-[#DA291C] flex items-center justify-center text-white hover:bg-[#b01b12] transition-colors shadow-sm"
          @click="prev"
        >
          <UIcon name="i-lucide-chevron-left" class="w-5 h-5" />
        </button>
        <button
          class="w-10 h-10 rounded-full bg-[#DA291C] flex items-center justify-center text-white hover:bg-[#b01b12] transition-colors shadow-sm"
          @click="next"
        >
          <UIcon name="i-lucide-chevron-right" class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Carousel -->
    <div class="px-8.5">
      <!-- Skeleton -->
      <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <CommonSkeletonImage v-for="i in 4" :key="i" class="w-full h-64 rounded-2xl" />
      </div>

      <ClientOnly>
        <UCarousel
          v-if="!pending && items.length > 0"
          ref="carousel"
          :items="items"
          :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/4 pl-4' }"
          class="w-full"
        >
          <template #default="{ item }">
            <NuxtImg
              :src="item.image"
              class="w-full h-auto object-cover rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              draggable="false"
              loading="lazy"
              format="webp"
            />
          </template>
        </UCarousel>
      </ClientOnly>
    </div>
  </div>
</template> 
