<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  images: string[];
}>();

const selectedImage = ref(props.images[0]);

watch(
  () => props.images,
  (newImages) => {
    if (newImages.length > 0) {
      selectedImage.value = newImages[0];
    }
  }
);
</script>

<template>
  <div class="flex flex-col gap-4">
    <!-- Main Image -->
    <div
      class="border border-gray-200 rounded-2xl p-6 flex items-center justify-center bg-[#F9F9F9] aspect-square"
    >
      <img
        :src="selectedImage"
        alt="Product Image"
        class="w-full h-auto object-contain mix-blend-multiply"
      />
    </div>

    <!-- Thumbnails -->
    <div class="flex gap-4 overflow-x-auto">
      <button
        v-for="(img, index) in images"
        :key="index"
        @click="selectedImage = img"
        class="border rounded-xl p-2 w-20 h-20 flex-shrink-0 flex items-center justify-center bg-[#F9F9F9] transition-all"
        :class="
          selectedImage === img
            ? 'border-black ring-1 ring-black'
            : 'border-gray-200 hover:border-gray-400'
        "
      >
        <img
          :src="img"
          alt="Thumbnail"
          class="w-full h-full object-contain mix-blend-multiply"
        />
      </button>
    </div>
  </div>
</template>
