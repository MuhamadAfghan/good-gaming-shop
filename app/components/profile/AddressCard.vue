<script setup lang="ts">
interface Address {
  id: string;
  label: string;
  name: string;
  phone: string;
  details: string;
}

defineProps<{
  address: Address;
}>();
</script>

<template>
  <div class="border border-gray-200 rounded-xl p-4 min-w-[300px] bg-[#fdfdfd]">
    <div class="flex justify-between items-start mb-2">
      <div class="flex items-center gap-2">
        <div class="p-1.5 bg-[#FFF0F1] rounded-full text-[#E21F32]">
          <UIcon name="i-lucide-map-pin" class="w-3.5 h-3.5" />
        </div>
        <span class="font-bold text-sm text-black">{{ address.label }}</span>
      </div>
      <button class="text-gray-400 hover:text-black">
        <UIcon name="i-lucide-more-vertical" class="w-4 h-4" />
      </button>
    </div>

    <div class="flex items-center gap-2 text-xs font-bold text-black mb-1">
      <span>{{ address.name }}</span>
      <span class="text-gray-400">{{ address.phone }}</span>
    </div>

    <p class="text-xs text-gray-500 leading-relaxed">
      {{ address.details }}
    </p>
  </div>
</template>
