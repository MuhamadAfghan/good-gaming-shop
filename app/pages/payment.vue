<script setup lang="ts">
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
    status: "active",
  },
  {
    label: "Cek Pesanan",
    slot: "review",
    status: "pending",
  },
];

const paymentMethods = [
  {
    label: "Bank Transfer - Virtual Account",
    slot: "bankBox",
    defaultOpen: true,
  },
  {
    label: "Bayar Di Tempat",
    slot: "codBox",
  },
];
const selectedBank = ref("");
const selectedPayment = ref("bank"); // 'bank' or 'cod'

const banks = [
  {
    name: "Mandiri",
    logo: "https://placehold.co/80x30?text=Mandiri",
    value: "mandiri",
  },
  { name: "BCA", logo: "https://placehold.co/80x30?text=BCA", value: "bca" },
  { name: "BNI", logo: "https://placehold.co/80x30?text=BNI", value: "bni" },
  {
    name: "Bank BRI",
    logo: "https://placehold.co/80x30?text=BRI",
    value: "bri",
  },
];

const selectBank = (value: string) => {
  selectedBank.value = value;
  selectedPayment.value = "bank";
};

const selectCOD = () => {
  selectedPayment.value = "cod";
  selectedBank.value = "";
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
              <!-- Indicator -->
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
              <!-- Label -->
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
        <div class="flex-grow rounded-2xl p-4.5 border border-[#EAEAEA]">
          <div class="flex items-center gap-2 mb-6">
            <UIcon name="i-heroicons-credit-card" class="w-5 h-5" />
            <h2 class="font-bold">Metode Pembayaran</h2>
          </div>

          <div class="border-[#EAEAEA] border rounded-xl">
            <UAccordion :items="paymentMethods" class="flex flex-col px-4">
              <template #bankBox>
                <div class="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div
                    v-for="bank in banks"
                    :key="bank.value"
                    @click="selectBank(bank.value)"
                    class="border rounded-lg p-4 flex items-center justify-center cursor-pointer transition-all h-20"
                    :class="
                      selectedBank === bank.value
                        ? 'border-black'
                        : 'border-gray-200 hover:border-gray-300'
                    "
                  >
                    <img
                      :src="bank.logo"
                      :alt="bank.name"
                      class="h-8 object-contain"
                    />
                  </div>
                </div>
              </template>
              <template #codBox>
                <div class="p-4">
                  <div
                    @click="selectCOD"
                    class="flex items-center justify-between cursor-pointer"
                  >
                    <p class="text-sm text-gray-600">
                      Memilih metode pembayaran selain 'Bayar di Tempat' dapat
                      mengurangi risiko penyebaran Covid-19
                    </p>
                    <div
                      class="w-5 h-5 rounded-full border flex items-center justify-center"
                      :class="
                        selectedPayment === 'cod'
                          ? 'border-[#E21F32]'
                          : 'border-gray-300'
                      "
                    >
                      <div
                        v-if="selectedPayment === 'cod'"
                        class="w-3 h-3 rounded-full bg-[#E21F32]"
                      ></div>
                    </div>
                  </div>
                </div>
              </template>
            </UAccordion>
          </div>
        </div>
      </div>

      <!-- Transaction Review Sidebar -->
      <div class="w-full lg:w-[380px] flex-shrink-0 pt-11">
        <div
          class="bg-white rounded-2xl border border-gray-200 p-6 sticky top-4"
        >
          <h2 class="text-xl font-bold mb-4">Pilih Metode Pembayaran</h2>
          <p class="text-xs text-gray-500 mb-6">
            Tidak ada biaya yang akan dikenakan sampai anda meninjau dan
            melakukan pesanan di langkah berikutnya.
          </p>

          <UButton
            block
            color="error"
            size="xl"
            :ui="{ rounded: 'rounded-md', font: 'font-bold' }"
            class="mt-2 font-black py-3.5"
            to="/review"
          >
            CONTINUE TO REVIEW
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
