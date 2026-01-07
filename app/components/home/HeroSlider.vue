<script setup lang="ts">
import heroImage from "~/assets/images/hero-1.png";

const items = [heroImage, heroImage, heroImage, heroImage];

const carousel = useTemplateRef("carousel");
const activeIndex = ref(0);

function onSelect(index: number) {
  activeIndex.value = index;
}

function select(index: number) {
  activeIndex.value = index;

  carousel.value?.emblaApi?.scrollTo(index);
}
</script>

<template>
  <div class="relative w-full container mx-auto px-12.5 py-6">
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      loop
      :autoplay="{ delay: 3000 }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden"
      @select="onSelect"
    >
      <img :src="item" class="w-full h-auto object-cover" draggable="false" />
    </UCarousel>

    <!-- Custom Indicators -->
    <div class="justify-center mt-5 flex gap-2 z-10">
      <button
        v-for="(_, index) in items"
        :key="index"
        class="h-2.5 rounded-full transition-all duration-300"
        :class="[
          activeIndex === index
            ? 'w-12 bg-[#E21F32]'
            : 'w-2.5 bg-[#E5E5E5] hover:bg-gray-300',
        ]"
        @click="select(index)"
      />
    </div>
  </div>
</template>

<style scoped>
/* No internal styles needed as we use Tailwind classes for the custom indicators */
</style>
