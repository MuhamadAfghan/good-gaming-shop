<script setup lang="ts">
import { ref } from "vue";
import avatarImage from "~/assets/images/products/noir.png"; // Placeholder
import Divider from "../atoms/Divider.vue";

// Mock User Data
const user = {
  name: "Anggana Putra",
  gender: "Male",
  phone: "08123456789",
  email: "angganaputra@gmail.com",
};

// Mock Addresses
const addresses = [
  {
    id: "1",
    label: "Rumah",
    name: "Anggana Putra",
    phone: "08123456789",
    details:
      "Jl. Kedondong 2 No.22, RT.10/RW.6, Sunter Jaya, Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14360",
  },
  {
    id: "2",
    label: "Rumah 2",
    name: "Anggana Putra",
    phone: "08123456789",
    details:
      "Jl. Kedondong 2 No.22, RT.10/RW.6, Sunter Jaya, Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14360",
  },
  {
    id: "3",
    label: "Rumah 3",
    name: "Anggana Putra",
    phone: "08123456789",
    details:
      "Jl. Kedondong 2 No.22, RT.10/RW.6, Sunter Jaya, Kec. Tj. Priok, Jkt Utara, Daerah Khusus Ibukota Jakarta 14360",
  },
];
</script>

<template>
  <div
    class="bg-white rounded-[32px] p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 md:gap-12"
  >
    <!-- Left: Profile Picture -->
    <div class="flex flex-col gap-4 items-center md:items-start shrink-0">
      <div
        class="w-[200px] h-[200px] bg-[#B095FF] rounded-3xl overflow-hidden relative flex items-center justify-center"
      >
        <!-- Placeholder for Illustration -->
        <!-- In real app, this would be an image -->
        <UIcon name="i-lucide-user" class="w-24 h-24 text-white opacity-50" />
      </div>
      <button
        class="w-full border border-[#E21F32] text-[#E21F32] font-black italic font-panton uppercase py-3 rounded-lg hover:bg-red-50 transition-colors text-sm"
      >
        CHANGE PICTURE
      </button>
    </div>

    <!-- Right: Details -->
    <div class="flex-1 w-full font-manrope">
      <!-- Profile Detail Section -->
      <div class="mb-8">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold text-black">Profile Detail</h3>
          <button class="text-[#E21F32] text-sm font-bold hover:underline">
            Edit Detail
          </button>
        </div>

        <div class="space-y-4 max-w-lg">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-4 text-gray-500 text-sm">Name :</div>
            <div class="col-span-8 font-bold text-black text-sm">
              {{ user.name }}
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-4 text-gray-500 text-sm">Gender :</div>
            <div class="col-span-8 font-bold text-black text-sm">
              {{ user.gender }}
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-4 text-gray-500 text-sm">Phone Number :</div>
            <div class="col-span-8 font-bold text-black text-sm">
              {{ user.phone }}
            </div>
          </div>
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-4 text-gray-500 text-sm">Email :</div>
            <div class="col-span-8 font-bold text-black text-sm">
              {{ user.email }}
            </div>
          </div>
        </div>
      </div>

      <Divider class="my-8" />

      <!-- Saved Addresses Section -->
      <div>
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold text-black">Saved Addresses</h3>
          <button class="text-[#E21F32] text-sm font-bold hover:underline">
            Add Address
          </button>
        </div>

        <div
          class="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar"
        >
          <ProfileAddressCard
            v-for="addr in addresses"
            :key="addr.id"
            :address="addr"
            class="min-w-[300px] md:min-w-[320px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
