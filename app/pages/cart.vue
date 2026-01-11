<script setup lang="ts">
const items = ref([
  {
    id: 1,
    title: "Noir Timeless82 V2 Classic Edition - Gaming Keyboard",
    variant: "Black , Linear Switch",
    image: "https://placehold.co/100x100", // Placeholder
    price: 824000,
    originalPrice: 824000,
    quantity: 1,
    selected: false,
    stockAvailable: true,
  },
  {
    id: 2,
    title: "Noir Timeless82 V2 Classic Edition - Gaming Keyboard",
    variant: "Black , Linear Switch",
    image: "https://placehold.co/100x100", // Placeholder
    price: 824000,
    originalPrice: 824000,
    quantity: 1,
    selected: false,
    stockAvailable: true,
  },
  {
    id: 3,
    title: "Noir Timeless82 V2 Classic Edition - Gaming Keyboard",
    variant: "Black , Linear Switch",
    image: "https://placehold.co/100x100", // Placeholder
    price: 824000,
    originalPrice: 824000,
    quantity: 1,
    selected: false,
    stockAvailable: true,
  },
]);

// Computed properties
const allSelected = computed({
  get: () =>
    items.value.length > 0 && items.value.every((item) => item.selected),
  set: (val) => items.value.forEach((item) => (item.selected = val)),
});

const selectedItems = computed(() =>
  items.value.filter((item) => item.selected)
);

const totalPrice = computed(() =>
  selectedItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

// Actions
const incrementQuantity = (item: any) => {
  item.quantity++;
};

const decrementQuantity = (item: any) => {
  if (item.quantity > 1) {
    item.quantity--;
  }
};

const deleteItem = (index: number) => {
  items.value.splice(index, 1);
};

const deleteAll = () => {
  items.value = [];
};

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
    <div class="mb-8">
      <h1 class="text-4xl font-black italic mb-2">YOUR CART</h1>
      <p class="text-gray-500">
        Review your selected gears before heading to battle.
      </p>
    </div>

    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Cart Items List -->
      <div class="flex-grow">
        <div class="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <UCheckbox v-model="allSelected" color="error" />
              <span class="font-bold">Select All</span>
            </div>
            <button
              @click="deleteAll"
              class="text-[#E21F32] font-bold hover:underline flex items-center gap-1"
            >
              Delete All
              <UIcon name="i-heroicons-trash" />
            </button>
          </div>

          <div
            v-if="items.length === 0"
            class="text-center py-10 text-gray-500"
          >
            Your cart is empty.
          </div>

          <div
            v-for="(item, index) in items"
            :key="item.id"
            class="flex gap-4 py-4 border-b border-gray-100 last:border-0"
          >
            <div class="flex items-start pt-4">
              <UCheckbox v-model="item.selected" color="error" />
            </div>

            <div
              class="w-24 h-24 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center p-2"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full h-full object-contain mix-blend-multiply"
              />
            </div>

            <div class="flex-grow">
              <div class="flex justify-between items-start mb-1">
                <h3 class="font-bold text-lg pr-4">{{ item.title }}</h3>
                <span class="font-bold">{{ formatPrice(item.price) }}</span>
              </div>
              <p class="text-gray-400 text-sm mb-2">{{ item.variant }}</p>

              <div v-if="item.stockAvailable" class="flex flex-col gap-4">
                <button
                  class="text-[#E21F32] text-xs font-bold flex items-center gap-1 w-fit"
                >
                  <UIcon name="i-heroicons-information-circle" />
                  Check Stocks
                </button>

                <div class="flex justify-end">
                  <div
                    class="flex items-center border border-gray-200 rounded-md"
                  >
                    <button
                      @click="decrementQuantity(item)"
                      class="px-3 py-1 text-gray-500 hover:bg-gray-50"
                      :disabled="item.quantity <= 1"
                    >
                      -
                    </button>
                    <span
                      class="px-3 py-1 font-bold min-w-[30px] text-center"
                      >{{ item.quantity }}</span
                    >
                    <button
                      @click="incrementQuantity(item)"
                      class="px-3 py-1 text-gray-500 hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Transaction Review Sidebar -->
      <div class="w-full lg:w-[380px] flex-shrink-0">
        <div
          class="bg-white rounded-lg border border-gray-200 p-6 sticky top-4"
        >
          <h2 class="text-xl font-bold mb-4">Transaction Review</h2>

          <div class="mb-6">
            <div class="flex justify-between items-start mb-2">
              <span class="font-bold">Ruko Mangga Dua</span>
              <span class="text-[#E21F32] text-sm font-bold">Selected</span>
            </div>
            <p class="text-gray-500 text-sm mb-2">
              Ruko Mangga 2 Mall No.45A Ruko Mangga Dua mall, Deretan Bank
              Panin, RT.1/RW.12, South Mangga Dua, Sawah Besar, Jakarta 10730
            </p>
            <div
              class="flex items-center gap-1 text-green-500 text-xs font-bold"
            >
              <div class="w-2 h-2 rounded-full bg-green-500"></div>
              All Stock available
            </div>
          </div>

          <div class="border-t border-gray-100 py-4">
            <div class="flex justify-between items-center cursor-pointer mb-4">
              <span class="text-gray-500"
                >Total ({{ selectedItems.length }} items)</span
              >
              <div class="flex items-center gap-2">
                <span class="font-bold">{{ formatPrice(totalPrice) }}</span>
                <UIcon name="i-heroicons-chevron-up" />
              </div>
            </div>

            <!-- Selected Items Summary List -->
            <div class="flex flex-col gap-3 mb-4">
              <div
                v-for="item in selectedItems"
                :key="item.id"
                class="flex gap-3 bg-white"
              >
                <div
                  class="w-12 h-12 bg-gray-50 rounded border border-gray-200 flex-shrink-0 flex items-center justify-center p-1"
                >
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <div class="flex-grow min-w-0">
                  <div class="flex justify-between items-start">
                    <p class="font-bold text-xs truncate pr-2">
                      {{ item.title }}
                    </p>
                    <span class="text-xs font-bold whitespace-nowrap">{{
                      formatPrice(item.price)
                    }}</span>
                  </div>
                  <p class="text-xs text-gray-400 truncate">
                    {{ item.variant }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <UButton
            block
            color="error"
            size="xl"
            :ui="{ rounded: 'rounded-md', font: 'font-bold' }"
            class="mt-2 font-black py-3.5"
            to="/payment"
          >
            CHECKOUT
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
