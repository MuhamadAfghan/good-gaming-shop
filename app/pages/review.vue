<script setup lang="ts">
import Divider from "~/components/atoms/Divider.vue";

const items = [
  {
    label: "Cart",
    slot: "cart",
    to: "/cart",
    status: "completed",
  },
  {
    label: "Metode Pembayaran",
    slot: "payment",
    to: "/payment",
    status: "completed",
  },
  {
    label: "Cek Pesanan",
    slot: "review",
    status: "active",
  },
];

const shippingOptions = [
  {
    label: "Standard",
    slot: "standard",
    defaultOpen: true,
  },
  {
    label: "JNE Reguler (Rp10.000)",
    slot: "jne",
  },
];

const selectedShipping = ref("standard");

const selectShipping = (val: string) => {
  selectedShipping.value = val;
};

const products = [
  {
    id: 1,
    title: "Noir Timeless82 V2 Classic Edition - Gaming Keyboard",
    variant: "Black , Linear Switch",
    price: 824000,
    quantity: 1,
    image: "https://placehold.co/100x100",
  },
  {
    id: 2,
    title: "Noir Timeless82 V2 Classic Edition - Gaming Keyboard",
    variant: "Black , Linear Switch",
    price: 824000,
    quantity: 1,
    image: "https://placehold.co/100x100",
  },
];

const subtotal = computed(() =>
  products.reduce((sum, item) => sum + item.price * item.quantity, 0)
);
const shippingCost = computed(() =>
  selectedShipping.value === "standard" ? 0 : 10000
);
const total = computed(() => subtotal.value + shippingCost.value);

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(price)
    .replace("Rp", "Rp. ");
};
</script>

<template>
  <div class="container mx-auto px-12.5 py-8 font-manrope">
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="w-full space-y-6">
        <!-- Stepper -->
        <div class="flex items-center justify-between relative">
          <div
            v-for="(step, index) in items"
            :key="index"
            class="flex items-center bg-white px-2"
          >
            <div class="flex items-center gap-2">
              <div
                class="w-4 h-4 rounded-full border-2 flex items-center justify-center p-0.5"
                :class="[
                  step.status === 'completed' || step.status === 'active'
                    ? 'border-[#E21F32]'
                    : 'border-gray-300',
                ]"
              >
                <div
                  class="w-full h-full rounded-full"
                  :class="[
                    step.status === 'completed' || step.status === 'active'
                      ? 'bg-[#E21F32]'
                      : 'bg-gray-300',
                  ]"
                ></div>
              </div>
              <span
                class="text-sm font-medium"
                :class="[
                  step.status === 'active' ? 'text-black' : 'text-gray-500',
                ]"
              >
                {{ step.label }}
              </span>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="space-y-4">
          <!-- Address -->
          <div class="border border-[#EAEAEA] rounded-xl p-4.5">
            <div class="flex justify-between items-start mb-2">
              <div class="flex items-center gap-2">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="w-5 h-5 text-[#E21F32]"
                />
                <h3 class="font-bold">Alamat Pengiriman</h3>
              </div>
              <button class="text-blue-500 hover:text-blue-600">
                <UIcon name="i-heroicons-pencil-square" class="w-5 h-5" />
              </button>
            </div>
            <div class="ml-7">
              <p class="text-sm font-bold mb-1">
                Rumah
                <span class="font-normal text-gray-500"
                  >| Muhamad Ramdhani Akbar</span
                >
              </p>
              <p class="text-sm text-gray-500 mb-1">
                Jl. Kedondong 2 No.22, RT.10/RW.6, Sunter Jaya, Kec. Tj. Priok,
                Jkt Utara, Daerah Khusus Ibukota Jakarta 14360
              </p>
              <p class="text-sm text-gray-500">Phone: 083811655736</p>
            </div>
          </div>

          <!-- Package -->
          <div class="border border-[#EAEAEA] rounded-xl p-4.5">
            <div class="flex items-center gap-2 mb-4">
              <UIcon name="i-heroicons-cube" class="w-5 h-5 text-[#0F172A]" />
              <h3 class="font-bold">Paket 1 (2 produk)</h3>
            </div>
            <p class="ml-7 text-sm text-gray-500 mb-6">Ruko Mangga Dua</p>

            <!-- Shipping Selection -->
            <div class="ml-0 md:ml-7 mb-6">
              <div class="flex items-center gap-2 mb-3">
                <UIcon name="i-heroicons-truck" class="w-5 h-5" />
                <h4 class="font-bold">Opsi Pengiriman</h4>
              </div>

              <div class="border border-[#EAEAEA] rounded-xl">
                <UAccordion :items="shippingOptions" class="px-4">
                  <template #default="{ item, open }">
                    <UButton
                      color="white"
                      variant="ghost"
                      class="border-b border-gray-100 last:border-0 w-full justify-between py-4"
                      :ui="{ padded: false }"
                    >
                      <span class="truncate text-black font-bold">{{
                        item.label
                      }}</span>
                      <template #trailing>
                        <UIcon
                          name="i-heroicons-chevron-up"
                          class="w-5 h-5 ms-auto transform transition-transform duration-200"
                          :class="[open && 'rotate-180']"
                        />
                      </template>
                    </UButton>
                  </template>
                  <template #standard>
                    <div
                      @click="selectShipping('standard')"
                      class="py-2 cursor-pointer flex justify-between items-center"
                    >
                      <div>
                        <p class="font-bold text-sm">Standard</p>
                        <p class="text-xs text-gray-500">
                          Layanan pengiriman standard
                        </p>
                      </div>
                      <UIcon
                        v-if="selectedShipping === 'standard'"
                        name="i-heroicons-check"
                        class="text-green-500 w-5 h-5"
                      />
                    </div>
                  </template>
                  <template #jne>
                    <div
                      @click="selectShipping('jne')"
                      class="py-2 cursor-pointer flex justify-between items-center"
                    >
                      <div>
                        <p class="font-bold text-sm">JNE Reguler (Rp10.000)</p>
                        <p class="text-xs text-gray-500">
                          Estimated arrival time 1 - 2 days
                        </p>
                      </div>
                      <UIcon
                        v-if="selectedShipping === 'jne'"
                        name="i-heroicons-check"
                        class="text-green-500 w-5 h-5"
                      />
                    </div>
                  </template>
                  <template #jne2>
                    <div
                      @click="selectShipping('jne2')"
                      class="py-2 cursor-pointer flex justify-between items-center"
                    >
                      <div>
                        <p class="font-bold text-sm">JNE Reguler (Rp10.000)</p>
                        <p class="text-xs text-gray-500">
                          Estimated arrival time 1 - 2 days
                        </p>
                      </div>
                      <UIcon
                        v-if="selectedShipping === 'jne2'"
                        name="i-heroicons-check"
                        class="text-green-500 w-5 h-5"
                      />
                    </div>
                  </template>
                </UAccordion>
              </div>
            </div>

            <!-- Product List -->
            <div class="ml-0 md:ml-7 space-y-4">
              <div
                v-for="product in products"
                :key="product.id"
                class="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0"
              >
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 bg-gray-100 rounded-lg p-1 flex items-center justify-center"
                  >
                    <img
                      :src="product.image"
                      class="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <h5 class="font-bold text-sm line-clamp-1">
                      {{ product.title }}
                    </h5>
                    <p class="text-xs text-gray-500">{{ product.variant }}</p>
                    <p class="text-xs text-gray-500">
                      Qty: {{ product.quantity }}
                    </p>
                  </div>
                </div>
                <span class="font-bold text-sm whitespace-nowrap">{{
                  formatPrice(product.price)
                }}</span>
              </div>
            </div>
          </div>

          <div class="border border-[#EAEAEA] rounded-xl p-4.5 space-y-3">
            <!-- Payment Method Summary -->
            <div>
              <div class="flex justify-between items-start mb-1">
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-credit-card"
                    class="w-5 h-5 text-[#0F172A]"
                  />
                  <div>
                    <h3 class="font-bold">Metode Pembayaran</h3>
                    <p class="text-sm text-gray-500">Bayar di Tempat</p>
                  </div>
                </div>
                <button class="text-blue-500 hover:text-blue-600">
                  <UIcon name="i-heroicons-pencil-square" class="w-5 h-5" />
                </button>
              </div>
            </div>

            <Divider />

            <!-- Billing Address -->
            <div>
              <div class="flex justify-between items-start mb-1">
                <div class="flex items-center gap-2">
                  <UIcon
                    name="i-heroicons-map-pin"
                    class="w-5 h-5 text-[#0F172A]"
                  />
                  <div>
                    <h3 class="font-bold">Alamat Penagihan</h3>
                    <p class="text-sm text-gray-500">
                      Sama dengan Alamat Pengiriman
                    </p>
                  </div>
                </div>
                <button class="text-blue-500 hover:text-blue-600">
                  <UIcon name="i-heroicons-pencil-square" class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <!-- Voucher -->
          <div class="border border-[#EAEAEA] rounded-xl p-4.5 pt-2 pb-2">
            <div class="flex items-center gap-2 mb-2"></div>
            <h3 class="font-bold text-sm mb-2">Voucher Stackable & Cashback</h3>
            <div class="flex justify-between items-center cursor-pointer py-2">
              <div class="flex items-center gap-2 text-sm">
                <UIcon
                  name="i-heroicons-ticket"
                  class="w-5 h-5 text-[#E21F32]"
                />
                <span>Pilih atau masukkan kode voucher</span>
              </div>
              <UIcon
                name="i-heroicons-chevron-right"
                class="w-5 h-5 text-black"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Order Summary Sidebar -->
      <div class="w-full lg:w-[380px] flex-shrink-0 pt-11">
        <div
          class="bg-white rounded-2xl border border-gray-200 p-6 sticky top-4"
        >
          <div class="space-y-3 mb-6">
            <div class="flex justify-between text-sm font-bold">
              <span>Subtotal ({{ products.length }} produk)</span>
              <span>{{ formatPrice(subtotal) }}</span>
            </div>
            <div class="flex justify-between text-sm font-bold">
              <span>Shipping</span>
              <span>{{ formatPrice(shippingCost) }}</span>
            </div>
          </div>

          <div class="border-t border-gray-100 pt-4 mb-6">
            <div class="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{{ formatPrice(total) }}</span>
            </div>
          </div>

          <UButton
            block
            color="error"
            size="xl"
            :ui="{ rounded: 'rounded-md', font: 'font-bold' }"
            class="mt-2 font-black py-3.5"
          >
            CHECKOUT NOW
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
