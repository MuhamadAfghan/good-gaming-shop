<script setup>
  import AppLogo from "~/components/AppLogo.vue";
import NotificationLine from "~/components/icons/NotificationLine.vue";
import CartLine from "~/components/icons/CartLine.vue";
import Divider from "~/components/atoms/Divider.vue";
import userAvatar from "~/assets/images/user-avatar.png";
</script>

<template>
  <div
    class="w-full bg-white font-sans sticky border-b border-[#F0F0F0] top-0 z-50"
  >
    <div class="w-full">
      <div class="py-2.5 container mx-auto px-12.5 text-center bg-white">
        <!-- Top Promotion Banner -->
        <p
          class="text-[13px] font-bold text-[#E21F32] font-manrope tracking-wide uppercase"
        >
          Diskon 20% Untuk Semua Barang Noir!
        </p>
      </div>

      <Divider />
      <!-- Main Navbar -->
      <nav class="px-12.5 container mx-auto w-full py-4.5">
        <div class="gap-7.5 flex items-center w-full">
          <!-- Logo -->
          <NuxtLink to="/" class="flex-shrink-0">
            <AppLogo class="text-black h-8 w-auto" />
          </NuxtLink>

          <div class="flex items-center w-full gap-5">
            <!-- Search & Category Section -->
            <div class="flex items-center gap-2.5 flex-1">
              <!-- Category Button -->
              <UButton
                color="white"
                variant="solid"
                class="bg-[#F9F9F9] py-[9px] px-[15px] border border-[#E5E5E5] text-[#1A1A1A] font-bold px-4 rounded-lg hover:bg-gray-100 transition-colors gap-3 font-manrope"
              >
                <template #leading>
                  <UIcon name="i-lucide-menu" class="w-5 h-5 text-[#1A1A1A]" />
                </template>
                Category
              </UButton>

              <!-- Search Input -->
              <div class="flex-1">
                <UInput
                  icon="i-lucide-search"
                  placeholder="Search Items"
                  size="xl"
                  :ui="{
                    wrapper: 'relative w-full',
                    base: 'w-full py-[9px] px-[17px] rounded-lg border border-[#E5E5E5] bg-[#F9F9F9] text-sm text-[#1A1A1A] placeholder-[#808080] focus:ring-1 focus:ring-gray-300 focus:border-gray-300',
                    icon: {
                      training: 'text-gray-400',
                      leading: {
                        pointer: '',
                        wrapper:
                          'absolute inset-y-0 left-0 flex items-center pl-3.5',
                      },
                    },
                  }"
                  variant="none"
                  class="w-full font-manrope"
                />
              </div>
              <!-- Divider -->
              <div class="h-8 w-px bg-[#E5E5E5] mx-1" />
              <!-- Compare Product -->
              <button
                class="flex items-center gap-[10px] border border-[#DBDBDB] rounded-lg py-[9px] px-[15px] text-[#1A1A1A] hover:text-gray-700 font-bold text-sm font-manrope"
              >
                <UIcon name="i-lucide-arrow-left-right" class="w-5 h-5" />
                Compare Product
              </button>
            </div>

            <!-- Right Actions -->
            <div class="flex items-center gap-5">
              <!-- Notification -->
              <button class="relative text-[#1A1A1A] hover:text-gray-700 p-1" name="notification">
                <NotificationLine />
              </button>

              <!-- Cart -->
              <button class="relative text-[#1A1A1A] hover:text-gray-700 p-1" name="cart">
                <CartLine />
                <span
                  class="absolute -top-0.5 -right-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#E21F32] text-[10px] text-white font-bold border-2 border-white leading-none"
                >
                  2
                </span>
              </button>

              <!-- Divider -->
              <div class="h-8 w-px bg-[#E5E5E5] mx-1" />

              <!-- User Profile -->
              <div class="flex items-center gap-3 cursor-pointer pl-1">
                <UAvatar
                  :src="userAvatar"
                  alt="Anggana Putra"
                  size="md"
                  class="bg-[#FCD34D] text-[#854D0E]"
                />
                <div class="flex items-center gap-2">
                  <span class="font-bold text-sm text-[#1A1A1A] font-manrope"
                    >Anggana Putra</span
                  >
                  <UIcon
                    name="i-lucide-chevron-down"
                    class="w-5 h-5 text-[#1A1A1A]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
