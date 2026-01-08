<script setup lang="ts">
import drop1 from '~/assets/images/products/new-drop-1.png'
import drop2 from '~/assets/images/products/new-drop-2.png'
import drop3 from '~/assets/images/products/new-drop-3.png'
import drop4 from '~/assets/images/products/new-drop-4.png'

const products = [
  { image: drop1, title: 'AKAI ŌKAMI' },
  { image: drop2, title: 'TIAMAT EDITION' },
  { image: drop3, title: 'SPECTRUM CORE' },
  { image: drop4, title: 'BLAZEHOWL XL' }
]
</script>

<template>
  <div class="relative w-full bg-[#32080C] py-20 overflow-hidden font-manrope">
    <!-- Backgound Slanted Text -->
    <div
      class="absolute -bottom-1/4 left-1/3 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0"
    >
      <h1
        class="text-[300px] lg:text-[450px] font-black italic font-panton text-[#E21F32] transform -rotate-[10deg] whitespace-nowrap leading-none"
      >
        NEW DROPS
      </h1>
    </div>

    <div class="relative z-10 px-12.5 text-white">
      <!-- Header -->
      <div class="mb-12">
        <h2
          class="text-[40px] font-black italic font-panton uppercase leading-none"
        >
          NEW DROPS <span class="text-[#E21F32]">— JUST LANDED</span>
        </h2>
        <p class="text-white/80 mt-2 text-lg">
          Fresh out of the box. Built to win
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="relative group rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
        >
          <!-- Image -->
          <img
            :src="product.image"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            draggable="false"
          >

          <!-- Gradient Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
          />

          <!-- Content -->
          <div class="absolute bottom-0 left-0 w-full p-6">
            <h3
              class="text-2xl font-black italic font-panton uppercase mb-4 text-white drop-shadow-md"
            >
              {{ product.title }}
            </h3>

            <button
              class="w-full bg-[#E21F32] text-white font-bold py-3 rounded-md uppercase hover:bg-[#c4192a] transition-colors shadow-lg"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
