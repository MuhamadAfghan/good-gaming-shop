<script setup lang="ts">
import { ref } from "vue";
import Divider from "../atoms/Divider.vue";

interface Product {
  title: string;
  sku: string; // e.g. "500 pcs Sold"
  brand: string;
  price: string;
  originalPrice?: string;
  description: string;
  colors: { name: string; value: string; hex: string }[];
  switches: { name: string; value: string }[];
  locations: { name: string; available: boolean }[];
  specs: { name: string; value: string }[];
}

const props = defineProps<{
  product: Product;
}>();

const selectedColor = ref(props.product.colors[0]?.value);
const selectedSwitch = ref(props.product.switches[0]?.value);
</script>

<template>
  <div class="font-manrope space-y-5.75">
    <!-- Title & Stats -->
    <div>
      <h1
        class="text-3xl text-black md:text-4xl font-black italic font-panton uppercase mb-2"
      >
        {{ product.title }}
      </h1>

      <div class="flex items-center gap-3 text-sm text-gray-500 mb-4">
        <div class="flex items-center gap-1">
          <UIcon name="i-lucide-box" class="w-4 h-4" />
          <span class="font-bold text-black">{{ product.sku }}</span>
        </div>
        <span>•</span>
        <div class="flex items-center gap-1 text-[#E21F32]">
          <span>{{ product.brand }}</span>
          <UIcon name="i-lucide-arrow-up-right" class="w-3 h-3" />
        </div>
      </div>
    </div>

    <div>
      <!-- Price -->
      <div class="mb-6">
        <div class="text-[#E21F32] text-3xl font-bold mb-1">
          {{ product.price }}
        </div>
        <div v-if="product.originalPrice" class="text-gray-400 line-through">
          {{ product.originalPrice }}
        </div>
      </div>

      <!-- Description -->
      <div>
        <div class="text-gray-600 leading-relaxed line-clamp-3">
          {{ product.description }}
        </div>
        <button class="text-[#E21F32] font-bold text-sm underline">
          Show More
        </button>
      </div>
    </div>

    <Divider />

    <!-- Variants: Color -->
    <div class="mb-6">
      <div class="text-sm font-bold mb-3">
        Selected Color :
        <span class="text-[#E21F32]">{{
          product.colors.find((c) => c.value === selectedColor)?.name
        }}</span>
      </div>
      <div class="flex flex-wrap gap-3">
        <button
          v-for="color in product.colors"
          :key="color.value"
          @click="selectedColor = color.value"
          class="flex items-center gap-2 px-4 py-2 border rounded-lg transition-all"
          :class="
            selectedColor === color.value
              ? 'border-black ring-1 ring-black'
              : 'border-gray-200 hover:border-gray-400'
          "
        >
          <div
            class="w-4 h-4 rounded-full border border-gray-200"
            :style="{ backgroundColor: color.hex }"
          />
          <span class="text-sm font-medium">{{ color.name }}</span>
        </button>
      </div>
    </div>

    <Divider />

    <!-- Variants: Switch -->
    <div class="mb-8">
      <div class="text-sm font-bold mb-3">
        Selected Variant :
        <span class="text-[#E21F32]">{{
          product.switches.find((s) => s.value === selectedSwitch)?.name
        }}</span>
      </div>
      <div class="flex flex-wrap gap-3">
        <button
          v-for="sw in product.switches"
          :key="sw.value"
          @click="selectedSwitch = sw.value"
          class="px-4 py-2 border rounded-lg text-sm font-medium transition-all"
          :class="
            selectedSwitch === sw.value
              ? 'border-black ring-1 ring-black text-black'
              : 'border-gray-200 text-gray-500 hover:border-gray-400'
          "
        >
          {{ sw.name }}
        </button>
      </div>
    </div>

    <Divider />

    <!-- Actions -->
    <div class="flex flex-col sm:flex-row gap-4">
      <button
        class="flex-1 bg-[#E21F32] text-white font-black italic font-panton uppercase py-3.5 rounded-lg hover:bg-[#c41b2b] transition-colors"
      >
        ADD TO CART
      </button>
      <button
        class="flex-1 bg-white border border-[#E21F32] text-[#E21F32] font-black italic font-panton uppercase py-3.5 rounded-lg hover:bg-gray-50 transition-colors"
      >
        COMPARE PRODUCT
      </button>
    </div>

    <ProductStockStatus :locations="product.locations" />

    <ProductSpecifications :specs="product.specs" />
  </div>
</template>
