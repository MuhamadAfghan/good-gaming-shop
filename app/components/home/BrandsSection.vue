<script setup lang="ts">
const { gearUpBrands, pending } = useGearUpBrands();
const config = useRuntimeConfig();

const brands = computed(() => {
  return gearUpBrands.value.map((brand) => {
    // Determine Background (look for "Cover")
    const bgPath = brand.galleries.find((g) => g.name.toLowerCase().includes("cover"))?.path;
    const bg = bgPath
      ? bgPath.startsWith("http")
        ? bgPath
        : `${config.public.apiBaseUrl}${bgPath}`
      : ""; // Placeholder could be added

    // Determine Logo (look for "Logo GearUp" first, then "Logo")
    const logoGearUp = brand.galleries.find((g) => g.name.toLowerCase().includes("logo gearup"))?.path;
    const logoNormal = brand.galleries.find((g) => g.name.toLowerCase().includes("logo") && !g.name.toLowerCase().includes("gearup"))?.path;
    const logoPath = logoGearUp || logoNormal;
    const logo = logoPath
      ? logoPath.startsWith("http")
        ? logoPath
        : `${config.public.apiBaseUrl}${logoPath}`
      : ""; // Placeholder could be added

    return {
      name: brand.name,
      bg,
      logo,
    };
  });
});
</script>

<template>
  <div class="w-full bg-white font-manrope">
    <div class="px-12.5 container mx-auto">
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

      <!-- Skeleton -->
      <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <CommonSkeletonImage v-for="i in 5" :key="i" class="w-full aspect-[3/5] rounded-2xl" />
      </div>

      <!-- Grid -->
      <div
        v-if="!pending"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        <div
          v-for="(brand, index) in brands"
          :key="index"
          class="group relative rounded-2xl overflow-hidden aspect-[3/5] cursor-pointer"
        >
          <!-- Background Image -->
          <img :src="brand.bg"
               class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               draggable="false"/>

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
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
