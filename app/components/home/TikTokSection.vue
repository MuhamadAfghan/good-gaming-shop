<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import tiktokLogo from "~/assets/images/logos/tiktok.png";

const { tikTokEmbeds, pending } = useTikTokEmbeds();
const containerRef = ref<HTMLElement | null>(null);
const observer = ref<IntersectionObserver | null>(null);

const loadTikTokScript = () => {
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
};

onMounted(() => {
  // Create intersection observer
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Use requestIdleCallback to defer execution until browser is idle
        if ('requestIdleCallback' in window) {
           (window as any).requestIdleCallback(() => {
              loadTikTokScript();
           });
        } else {
           // Fallback for browsers that don't support requestIdleCallback
           setTimeout(loadTikTokScript, 200);
        }
        
        // Disconnect after loading
        if (observer.value) observer.value.disconnect();
      }
    });
  }, {
    rootMargin: '100px' // Load slightly before it comes into view
  });

  if (containerRef.value) {
    observer.value.observe(containerRef.value);
  }
});

onUnmounted(() => {
  if (observer.value) observer.value.disconnect();
});

watch(tikTokEmbeds, () => {
    // If we have new embeds and the script is already loaded, we might need to reload it?
    // Usually TikTok's embed.js handles DOM mutations if observed, but standard embed flow is just script injection.
    // If the observer has already triggered, try reloading layout if needed, but standard script usually runs once.
    // If not triggered yet, observer handles it.
     if (document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
          // Force re-scan if needed by removing/re-adding or similar, but simplified:
          // Just ensure script is present.
          loadTikTokScript();
     }
});
</script>

<template>
  <div ref="containerRef" class="relative w-full py-20 overflow-hidden font-manrope bg-[#32080C]">
    <div class="container mx-auto">
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
          />
        </div>

        <!-- Skeleton -->
        <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="n in 4" :key="n" class="w-full h-[500px] bg-gray-200 rounded-xl animate-pulse"></div>
        </div>

        <!-- Grid -->
        <div v-if="!pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(embed, index) in tikTokEmbeds"
            :key="index"
            class="overflow-hidden rounded-xl bg-black flex justify-center items-center"
          >
             <!-- Render the raw HTML from the API -->
             <div v-html="embed.link" class="w-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
