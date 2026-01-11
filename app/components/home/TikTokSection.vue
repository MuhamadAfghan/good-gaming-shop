<script setup lang="ts">
import { onMounted } from "vue";
import tiktokLogo from "~/assets/images/logos/tiktok.png";

const { tikTokEmbeds, pending } = useTikTokEmbeds();

const loadTikTokScript = () => {
    // Check if script already exists to avoid duplication
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
        // If script exists, we might need to trigger a reload or re-process embeds
        // TikTok embed.js usually processes on load. If content is added dynamically,
        // we might not encounter issues if the script is loaded *after* or if we assume global window object handling.
        // However, standard embed usually works if script is present.
        // Sometimes reloading the script path with a query param helps force re-execution if needed,
        // but let's stick to standard first.
        // Actually, TikTok's embed script usually runs once.
        // Safe bet: ensure the script is present.
    }
};

onMounted(() => {
  loadTikTokScript();
});

// Watch for data changes to ensure script re-runs if needed (though usually script handles existing DOM)
watch(tikTokEmbeds, () => {
    setTimeout(loadTikTokScript, 100);
});
</script>

<template>
  <div class="relative w-full py-20 overflow-hidden font-manrope bg-[#32080C]">
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
