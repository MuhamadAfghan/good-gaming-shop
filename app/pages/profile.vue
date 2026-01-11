<script setup lang="ts">
// Page meta if needed
</script>

<template>
  <div class="bg-white min-h-screen pb-20">
    <div class="container mx-auto px-4 md:px-12.5 py-8">
      <!-- Back & Title -->
      <div class="flex items-center gap-4 mb-8">
        <button
          class="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
        >
          <UIcon name="i-lucide-chevron-left" class="w-8 h-8 text-black" />
        </button>
        <h1
          class="text-4xl md:text-[40px] font-black italic font-panton uppercase text-black"
        >
          YOUR PROFILE
        </h1>
      </div>

      <!-- Main Card -->
      <ProfileCard />
    </div>
  </div>
</template>
