<script setup lang="ts">
import lightningIcon from "~/assets/icons/lightning.svg";
import fastForwardIcon from "~/assets/icons/fast-forward.svg";
import medalIcon from "~/assets/icons/medal.svg";
import coinIcon from "~/assets/icons/coin.svg";
import shieldIcon from "~/assets/icons/shield.svg";

const features = [
  {
    icon: lightningIcon,
    title: "The Ultimate Gaming Gears",
    description:
      "Complete your battlestation with top-tier gaming headsets, keyboards, mice, and chairs - all in one place.",
  },
  {
    icon: fastForwardIcon,
    title: "Fast Delivery, No Waiting Game",
    description:
      "COD, pickup, and 1-day shipping available to get your gear faster than ever.",
  },
  {
    icon: medalIcon,
    title: "Gamer-Approved Quality",
    description:
      "Handpicked gaming essentials from trusted brands. Only the best for real players.",
  },
  {
    icon: coinIcon,
    title: "Epic Deals for Every Gamer",
    description:
      "Upgrade your setup without breaking the bank — premium gear at unbeatable prices.",
  },
  {
    icon: shieldIcon,
    title: "Direct from Source, No Middleman",
    description: "Best price guaranteed - no extra markup, just pure value.",
  },
];
</script>

<template>
  <div class="w-full bg-white font-manrope">
    <div class="px-12.5 container mx-auto">
      <!-- Header -->
      <div class="mb-10">
        <h2
          class="text-[40px] font-black italic font-panton uppercase leading-none text-[#1A1A1A]"
        >
          WHY CHOOSE
        </h2>
        <h2
          class="text-[40px] font-black italic font-panton uppercase text-[#E21F32] leading-none"
        >
          GOOD GAMING SHOP?
        </h2>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="rounded-xl p-4.5 group relative overflow-hidden"
          style="
            background: linear-gradient(160deg, #f1f1f1 30%, #f7f7f7 30.1%);
          "
        >
          <!-- Background Decoration CSS technique to make it look diagonal if needed, but keeping it simple for now -->

          <!-- Icon -->
          <div class="mb-10 w-14 h-14 flex items-center justify-center">
            <img
              :src="feature.icon"
              :alt="feature.title"
              class="w-full h-full object-contain"
              draggable="false"
            />
          </div>

          <!-- Content -->
          <h3
            class="font-bold text-xl text-[#1A1A1A] mb-3 leading-tight min-h-[3rem]"
          >
            {{ feature.title }}
          </h3>
          <p class="text-sm text-gray-500 leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
