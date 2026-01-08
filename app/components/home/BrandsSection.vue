<script setup lang="ts">
// Product Backgrounds
import ajazzBg from '~/assets/images/products/ajazz.png'
import razerBg from '~/assets/images/products/razer.png'
import logitechBg from '~/assets/images/products/logitech.png'
import msiBg from '~/assets/images/products/msi.png'
import fantechBg from '~/assets/images/products/fantech.png'

// Logos
import ajazzLogo from '~/assets/images/logos/ajazz.png'
import razerLogo from '~/assets/images/logos/razer.png'
import logitechLogo from '~/assets/images/logos/logitech.png'
import msiLogo from '~/assets/images/logos/msi.png'
import fantechLogo from '~/assets/images/logos/fantech.png'

const brands = [
  { name: 'AJAZZ', bg: ajazzBg, logo: ajazzLogo },
  { name: 'RAZER', bg: razerBg, logo: razerLogo },
  { name: 'LOGITECH', bg: logitechBg, logo: logitechLogo },
  { name: 'MSI', bg: msiBg, logo: msiLogo },
  { name: 'FANTECH', bg: fantechBg, logo: fantechLogo }
]
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
            GEAR UP WITH
          </h2>
          <h2
            class="text-[40px] font-black italic font-panton uppercase text-[#E21F32] leading-none"
          >
            THE BEST BRANDS
          </h2>
        </div>

        <button
          class="px-8 py-2.5 border border-[#E21F32] text-[#E21F32] font-bold text-sm rounded-lg hover:bg-[#E21F32] hover:text-white transition-colors uppercase mt-4 md:mt-0"
        >
          See All
        </button>
      </div>

      <!-- Grid -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        <div
          v-for="(brand, index) in brands"
          :key="index"
          class="group relative rounded-2xl overflow-hidden aspect-[3/5] cursor-pointer"
        >
          <!-- Background Image -->
          <img
            :src="brand.bg"
            class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            draggable="false"
          >

          <!-- Dark Overlay -->
          <div
            class="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-300"
          />

          <!-- Logo -->
          <div class="absolute inset-0 flex items-center justify-center p-6">
            <img
              :src="brand.logo"
              :alt="brand.name"
              class="w-3/4 h-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-110"
              draggable="false"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
