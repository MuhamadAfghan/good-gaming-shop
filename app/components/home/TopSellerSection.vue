<script setup lang="ts">
import noirImage from '~/assets/images/products/noir.png'

const products = Array(8).fill({
  image: noirImage,
  title: 'Noir Timeless82 V2 Classic Edition - Gaming Keyboard',
  price: 'RP 824.000',
  originalPrice: 'RP 1.099.000'
})
</script>

<template>
  <div class="w-full bg-white py-16 font-manrope">
    <div class="px-12.5">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-10">
        <div>
          <h2
            class="text-[40px] font-black italic font-panton uppercase leading-none text-[#1A1A1A]"
          >
            TOP SELLER
          </h2>
          <h2
            class="text-[40px] font-black italic font-panton uppercase text-[#E21F32] leading-none"
          >
            GAMING GEAR
          </h2>
        </div>

        <button
          class="px-8 py-2.5 border-2 font-black border-[#E21F32] text-[#E21F32] text-sm rounded-lg hover:bg-[#E21F32] hover:text-white transition-colors uppercase mt-4 md:mt-0"
        >
          See All
        </button>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CommonProductCard
          v-for="(item, index) in products"
          :key="index"
          v-bind="item"
        />
      </div>
    </div>
  </div>
</template>
