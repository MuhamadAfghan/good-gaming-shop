<script setup lang="ts">
const { banners, pending } = useBanners()

const carousel = useTemplateRef('carousel')
const activeIndex = ref(0)
const items = computed(() => banners.value)

function onSelect(index: number) {
  activeIndex.value = index
}

function select(index: number) {
  activeIndex.value = index
  carousel.value?.emblaApi?.scrollTo(index)
}
</script>

<template>
  <div class="relative w-full">
    <!-- Skeleton Loader -->
    <div v-if="pending" class="relative w-full h-screen">
      <CommonSkeletonImage class="h-full w-full" />
    </div>

    <!-- Carousel -->
    <ClientOnly>
      <UCarousel
        v-if="!pending && items.length > 0"
        ref="carousel"
        v-slot="{ item }"
        loop
        :autoplay="{ delay: 3000 }"
        :items="items"
        :ui="{ item: 'basis-full' }"
        class="overflow-hidden"
        @select="onSelect"
      >
        <NuxtImg
          :src="item.image"
          class="h-173.25 object-cover w-full"
          draggable="false"
          format="webp"
          loading="eager"
          fetchpriority="high"
          :alt="item.title"
        />
      </UCarousel>
      <template #fallback>
        <div v-if="!pending && items.length > 0" class="overflow-hidden">
             <NuxtImg
              :src="items[0].image"
              class="h-173.25 object-cover w-full"
              draggable="false"
              format="webp"
              loading="eager"
              fetchpriority="high"
              :alt="items[0].title"
            />
        </div>
      </template>
    </ClientOnly>

    <!-- Custom Indicators -->
    <div v-if="!pending && items.length > 0" class="justify-center mt-5 flex gap-2 z-10">
      <button
        v-for="(_, index) in items"
        :key="index"
        class="h-2.5 rounded-full transition-all duration-300"
        name="indicator"
        :class="[
          activeIndex === index
            ? 'w-12 bg-[#E21F32]'
            : 'w-2.5 bg-[#E5E5E5] hover:bg-gray-300'
        ]"
        @click="select(index)"
      />
    </div>
  </div>
</template>

<style scoped>
/* No internal styles needed as we use Tailwind classes for the custom indicators */
</style>
