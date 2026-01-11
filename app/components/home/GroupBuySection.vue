<script setup lang="ts">
const { groupBuys, pending } = useGroupBuy()
const config = useRuntimeConfig()

const items = computed(() => {
  return groupBuys.value.map((gb) => {
    // Determine image (use thumbnail first)
    const thumbnail = gb.product.productGallery.find(g => g.type === 'thumbnail')?.path
    const image = thumbnail 
      ? (thumbnail.startsWith('http') ? thumbnail : `${config.public.apiBaseUrl}${thumbnail}`) 
      : '' // Placeholder could be added here

    // Calculate Days Left (mock for now as startDate/endDate are empty objects in example, but logic should be here)
    // Assuming 7 days default if not provided, or calculate real difference
    const daysLeft = 7 

    return {
      id: gb.id,
      image,
      title: gb.product.name,
      price: "RP -", // Price not in response 
      originalPrice: "", // Original price not in response
      participants: gb.totalSold, // Mapping totalSold to participants
      daysLeft,
      brand: gb.product.brand.name // Added brand name
    }
  })
})
</script>

<template>
  <div
    class="w-full bg-[#3E0A0F] py-16 text-white font-manrope select-none mb-0"
  >
    <div class="container mx-auto px-12.5">
      <div class="mb-10 min-h-[100px] flex flex-col justify-end">
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

      <!-- Skeleton -->
      <div v-if="pending" class="flex gap-4 overflow-hidden">
        <CommonSkeletonImage v-for="i in 4" :key="i" class="w-1/4 h-96 rounded-xl shrink-0" />
      </div>

      <ClientOnly> 
        <CommonCarousel v-if="!pending && items.length > 0">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="min-w-[85%] md:min-w-[calc(50%-10px)] lg:min-w-[calc(25%-15px)] snap-start pointer-events-none"
          >
            <div
              class="  rounded-xl overflow-hidden p-4 pointer-events-auto h-full flex flex-col"
            >
              <div class="relative bg-[#F9F9F9] rounded-lg mb-3">
                <div class="absolute top-4 left-0 w-full text-center z-10">
                  <span class="font-panton font-black italic text-xl text-black"
                    >{{ item.brand }}</span
                  >
                </div>
                <NuxtImg
                  :src="item.image"
                  class="w-full h-auto object-contain mix-blend-multiply aspect-square"
                  draggable="false"
                  loading="lazy"
                  format="webp"
                />

                <div class="absolute bottom-4 left-4 right-4 z-10">
                  <div
                    class="flex items-center justify-between text-[10px] font-bold text-white uppercase mb-1"
                  >
                    <span />
                    <span>{{ item.daysLeft }} DAYS LEFT!</span>
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

              <div class="pt-2 text-white flex-1 flex flex-col justify-between">
                <div class="flex justify-between items-center mb-3">
                  <div class="flex gap-2">
                    <!-- Color placeholders (since color data isn't directly on product root in this list) -->
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
                    <UIcon name="i-lucide-users" class="w-3 h-3 text-white" />
                    <span class="text-[10px] font-bold text-white"
                      >{{ item.participants }} Participate</span
                    >
                  </div>
                </div>
                <h3
                  class="text-base font-bold leading-tight mb-1 line-clamp-2 min-h-[40px]"
                >
                  {{ item.title }}
                </h3>
                <div class="flex items-end gap-2 mt-2">
                  <span class="text-lg font-bold text-white">{{
                    item.price
                  }}</span>
                  <!-- Original price hidden as data not available -->
                  <!-- <span class="text-xs text-gray-400 line-through mb-1">{{
                    item.originalPrice
                  }}</span> -->
                </div>
              </div>
            </div>
          </div>
        </CommonCarousel>
        <template #fallback>
             <div class="flex gap-4 overflow-hidden">
                <div v-for="i in 4" :key="i" class="min-w-[85%] md:min-w-[calc(50%-10px)] lg:min-w-[calc(25%-15px)] h-96 bg-white/10 rounded-xl"></div>
             </div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>
