<script setup lang="ts">
import AppLogo from '~/components/AppLogo.vue'

const footerLinks = [
  {
    title: 'OUR SERVICE',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Contact Us', to: '/contact' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Return and Warranty', to: '/warranty' }
    ]
  },
  {
    title: 'OTHER',
    links: [{ label: 'Keeb Corner', to: '/keeb-corner' }]
  }
]

const socialLinks = [
  { icon: 'i-simple-icons-linkedin', to: '#' },
  { icon: 'i-simple-icons-tiktok', to: '#' },
  { icon: 'i-simple-icons-x', to: '#' }
]
</script>

<template>
  <footer class="w-full text-[16px]">
    <!-- Top Section (Red & Black) -->
    <div class="flex flex-col lg:flex-row w-full font-manrope bg-black">
      <!-- Red Section -->
      <div
        class="relative w-full lg:w-[45%] bg-[#E21F32] text-white py-12 px-8 lg:px-16 overflow-hidden clip-diagonal lg:pr-32 z-10"
      >
        <div class="relative z-10 w-full max-w-md">
          <button
            class="flex items-center gap-2 text-3xl font-bold italic mb-6 font-panton"
          >
            JAKARTA
            <UIcon
              name="i-lucide-chevron-down"
              class="w-8 h-8"
            />
          </button>

          <div class="w-full max-w-xs">
            <p class="text-sm mb-2 opacity-90">
              Shop Location
            </p>
            <div class="relative">
              <label for="location sr-only">Location</label>
              <select
                id="location"
                class="w-full appearance-none bg-[#E54545] border border-white/20 rounded-md py-3 px-4 pr-10 text-white focus:outline-none cursor-pointer"
              >
                <option>Jakarta Pusat</option>
              </select>
              <UIcon
                name="i-lucide-chevron-down"
                class="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Black Section -->
      <div class="flex-1 text-white py-12 px-8 lg:px-16 relative z-0">
        <!-- We need the red shape to overlap the black one on the left. -->
        <!-- Re-implementing structure for the diagonal layout -->

        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start h-full items-center"
        >
          <div>
            <h3 class="text-xl font-bold mb-4 font-panton uppercase">
              TOKO JAKARTA
            </h3>

            <div class="space-y-4 text-sm text-gray-300">
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-lucide-phone"
                  class="w-5 h-5 shrink-0 mt-0.5"
                />
                <span>(021) 62302218</span>
              </div>
              <div class="flex items-start gap-3">
                <!-- Placeholder for location icon if needed, or just text alignment -->
                <span class="leading-relaxed">
                  Ruko Mangga 2 Mall No.45A Ruko Mangga Dua Mall, Deretan Bank
                  Panin, RT.1 / RW.12, South Mangga Dua, Sawah Besar, Jakarta
                  10730
                </span>
              </div>

              <button
                class="flex items-center gap-2 border border-white/30 rounded px-4 py-2 mt-4 hover:bg-white/10 transition"
              >
                Open In Google Maps
                <UIcon
                  name="i-lucide-map-pin"
                  class="w-4 h-4"
                />
              </button>
            </div>
          </div>

          <div>
            <div class="space-y-4 text-sm text-gray-300">
              <h4 class="text-white font-bold mb-2">
                Open Hours
              </h4>
              <div class="flex items-start gap-3">
                <UIcon
                  name="i-lucide-clock"
                  class="w-5 h-5 shrink-0 mt-0.5"
                />
                <span>Mon - Sat ( 11:00 am to 18:00 pm )</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fix for the diagonal separator:
         We can wrap the top section.
         Actually, simpler approach: Parent black, Red child with clip-path.
    -->

    <!-- Main Footer Content -->
    <div
      class="container mx-auto px-8 lg:px-16 py-16 flex flex-col lg:flex-row gap-12 lg:gap-24"
    >
      <!-- Left Branding -->
      <div class="flex-1 max-w-2xl">
        <h2 class="font-black text-[48px] italic mb-2 font-panton uppercase">
          LEVEL UP YOUR GEAR.
        </h2>
        <h2
          class="text-[#DA291C] -mt-7 font-black text-[48px] italic mb-2 font-panton uppercase"
        >
          GAME LIKE A PRO.
        </h2>

        <div class="flex gap-4 my-12">
          <UButton
            v-for="social in socialLinks"
            :key="social.icon"
            :icon="social.icon"
            color="gray"
            variant="ghost"
            class="rounded-full bg-gray-100 hover:bg-gray-200 w-16 h-16 flex items-center justify-center text-black"
            :ui="{ rounded: 'rounded-full' }"
          />
        </div>

        <div
          class="flex flex-col md:flex-row items-start md:items-center gap-6 mt-auto"
        >
          <AppLogo class="h-8 text-black" />
          <p class="text-gray-500 text-sm">
            Copyright © 2025 GoodGamingShop All rights reserved.
          </p>
        </div>
      </div>

      <!-- Right Links -->
      <div class="flex gap-16 lg:gap-32 font-manrope">
        <div
          v-for="section in footerLinks"
          :key="section.title"
        >
          <h3 class="font-black italic text-lg mb-6 font-panton uppercase">
            {{ section.title }}
          </h3>
          <ul class="space-y-4">
            <li
              v-for="link in section.links"
              :key="link.label"
            >
              <NuxtLink
                :to="link.to"
                class="text-[#1A1A1A] hover:text-[#DA291C] transition-colors font-medium"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Custom clip path for the red section to create the diagonal cut */
@media (min-width: 1024px) {
  .clip-diagonal {
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  }
}
</style>
