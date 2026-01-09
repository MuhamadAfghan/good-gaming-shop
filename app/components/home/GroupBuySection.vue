<script setup lang="ts">
import noirImage from "~/assets/images/products/noir.png";

const items = Array(12).fill({
  image: noirImage,
  title: "Noir Timeless82 V2 Classic Edition - Gaming Keyboard",
  price: "RP 824.000",
  originalPrice: "RP 1.099.000",
  participants: 200,
  daysLeft: 7,
});
</script>

<template>
  <div
    class="w-full bg-[#3E0A0F] py-16 text-white font-manrope select-none mb-0"
  >
    <div class="px-12.5">
      <div class="mb-10">
        <h2
          class="text-[48px] font-black italic font-panton uppercase leading-none"
        >
          GROUP BUY DEALS
        </h2>
        <h2
          class="text-[48px] font-black italic font-panton uppercase text-[#E21F32] leading-none"
        >
          — POWER UP TOGETHER!
        </h2>
      </div>

      <CommonCarousel>
        <div
          v-for="(item, index) in items"
          :key="index"
          class="min-w-[85%] md:min-w-[calc(50%-10px)] lg:min-w-[calc(25%-15px)] snap-start pointer-events-none"
        >
          <div
            class="bg-white rounded-xl overflow-hidden p-4 pointer-events-auto"
          >
            <div class="relative bg-[#F9F9F9] rounded-lg mb-3">
              <div class="absolute top-4 left-0 w-full text-center z-10">
                <span class="font-panton font-black italic text-xl text-black"
                  >NOIR</span
                >
              </div>
              <img
                :src="item.image"
                class="w-full h-auto object-contain mix-blend-multiply"
                draggable="false"
              />

              <div class="absolute bottom-4 left-4 right-4 z-10">
                <div
                  class="flex items-center justify-between text-[10px] font-bold text-white uppercase mb-1"
                >
                  <span />
                  <span>7 DAYS LEFT!</span>
                </div>
                <div
                  class="h-1.5 w-full bg-white/50 rounded-full overflow-hidden"
                >
                  <div class="h-full bg-[#E21F32] w-[70%]" />
                </div>
              </div>

              <div
                class="absolute bottom-0 left-0 w-full bg-[#E21F32] py-1.5 px-4 flex justify-between items-center"
              >
                <span class="text-[10px] font-bold text-white uppercase"
                  >GROUP BUY IS LIVE!</span
                >
                <UIcon name="i-lucide-info" class="w-3.5 h-3.5 text-white" />
              </div>
            </div>

            <div class="pt-2 text-black">
              <div class="flex justify-between items-center mb-3">
                <div class="flex gap-2">
                  <div
                    class="w-4 h-4 rounded-full bg-[#1A1A1A] border border-gray-200"
                  />
                  <div
                    class="w-4 h-4 rounded-full bg-[#E8DCC4] border border-gray-200"
                  />
                </div>
                <div
                  class="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-2 py-1"
                >
                  <UIcon name="i-lucide-users" class="w-3 h-3 text-black" />
                  <span class="text-[10px] font-bold text-black"
                    >200 Participate</span
                  >
                </div>
              </div>
              <h3
                class="text-sm font-bold leading-tight mb-1 line-clamp-2 min-h-[40px]"
              >
                {{ item.title }}
              </h3>
              <div class="flex items-end gap-2 mt-2">
                <span class="text-lg font-bold text-[#1A1A1A]">{{
                  item.price
                }}</span>
                <span class="text-xs text-gray-400 line-through mb-1">{{
                  item.originalPrice
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </CommonCarousel>
    </div>
  </div>
</template>
