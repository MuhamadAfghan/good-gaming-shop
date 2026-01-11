<script setup lang="ts">
import ctaImage from "~/assets/images/products/cta.png";
import ggsLogo from "~/assets/images/logos/app-logo-2.svg";
</script>

<template>
  <div class="px-12.5 overflow-hidden container mx-auto">
    <div
      class="w-full bg-[#32080C] rounded-lg text-white relative overflow-hidden font-manrope"
    >
      <!-- Diagonal Red Shape -->
      <!-- Creating the slant using clip-path or absolute positioning -->
      <div
        class="absolute top-0 left-0 h-full w-[45%] bg-[#E21F32] transform skew-x-[24deg] origin-bottom-left -translate-x-10 z-0"
      />

      <div
        class="px-12.5 py-12 h-full relative z-10 flex flex-col md:flex-row items-center"
      >
        <!-- Left: Product Image -->
        <div
          class="w-full md:w-1/2 flex justify-center md:justify-start -ml-10 relative"
        >
          <!-- The image needs to sit nicely on the red/dark split -->
          <img
            :src="ctaImage"
            alt="Gaming Gear"
            class="w-auto h-[400px] -translate-x-2 translate-y-14.5 object-cover drop-shadow-2xl"
            draggable="false"
          />
        </div>

        <!-- Right: Content -->
        <div
          class="w-full md:w-1/2 flex flex-col items-center md:items-center text-center mt-8 md:mt-0"
        >
          <div class="mb-6">
            <img :src="ggsLogo" alt="Good Gaming Shop" class="h-12 w-auto" />
          </div>

          <h2
            class="text-4xl md:text-5xl font-black italic font-panton uppercase leading-none mb-2"
          >
            WE HELP YOU UNLOCK
          </h2>
          <h2
            class="text-4xl md:text-5xl font-black italic font-panton uppercase text-[#E21F32] leading-none"
          >
            YOUR FULL GAMING
          </h2>
          <h2
            class="text-4xl md:text-5xl font-black italic font-panton uppercase text-[#E21F32] leading-none"
          >
            POTENTIAL.
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
