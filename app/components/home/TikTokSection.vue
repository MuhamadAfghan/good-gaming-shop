<script setup lang="ts">
import { onMounted } from 'vue'
import tiktokLogo from '~/assets/images/logos/tiktok.png'

onMounted(() => {
  // Load TikTok Embed Script
  const script = document.createElement('script')
  script.src = 'https://www.tiktok.com/embed.js'
  script.async = true
  document.body.appendChild(script)
})

// Using the same video 4 times for the layout since only one ID was provided.
// In a real scenario, we'd have a list of different video IDs.
const videos = Array(4).fill('7494215382199307575')
</script>

<template>
  <div class="relative w-full py-20 overflow-hidden font-manrope bg-[#32080C]">
    <!-- Slanted Red Background -->
    <div
      class="absolute top-0 left-0 w-full h-[120%] bg-[#E21F32] transform -skew-y-12 origin-top-right z-0 translate-y-1/3"
    />

    <div class="relative z-10 px-12.5">
      <!-- Header -->
      <div class="flex flex-col items-center mb-12">
        <img
          :src="tiktokLogo"
          alt="TikTok"
          class="h-12 w-auto brightness-0 invert"
        >
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(id, index) in videos"
          :key="index"
          class="overflow-hidden rounded-xl bg-black"
        >
          <blockquote
            class="tiktok-embed"
            :cite="`https://www.tiktok.com/@goodgamingshop/video/${id}`"
            :data-video-id="id"
            data-embed-from="oembed"
            style="max-width: 605px; min-width: 325px"
          >
            <section>
              <a
                target="_blank"
                title="@goodgamingshop"
                href="https://www.tiktok.com/@goodgamingshop?refer=embed"
              >@goodgamingshop</a>
            </section>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>
