<script setup lang="ts">
import { ref } from "vue";
import noirImage from "~/assets/images/products/noir.png";
import Divider from "~/components/atoms/Divider.vue";

import RecommendedSection from "~/components/home/RecommendedSection.vue";

// Mock Product Data
const product = {
  id: "1",
  id: "1",
  title: "NOIR TIMELESS82 V2 CLASSIC EDITION - GAMING KEYBOARD",
  sku: "500 pcs Sold",
  brand: "NOIR",
  price: "Rp 824.000,00",
  originalPrice: "Rp 1.099.000",
  description:
    "Timeless82 V2 Classic adalah keyboard mekanik 75% yang dirancang untuk memberikan pengalaman mengetik premium dengan harga terjangkau. Dengan fitur-fitur seperti gasket mount, knob multifungsi, dan layar TFT, keyboard ini cocok untuk pemula maupun pengguna berpengalaman.",
  images: [noirImage, noirImage, noirImage, noirImage, noirImage],
  colors: [
    { name: "Black", value: "black", hex: "#000000" },
    { name: "Beige", value: "beige", hex: "#F5F5DC" },
  ],
  switches: [
    { name: "Linear Switch", value: "linear" },
    { name: "Tactile Switch", value: "tactile" },
    { name: "Silent Switch", value: "silent" },
  ],
  locations: [
    { name: "Toko Jakarta", available: true },
    { name: "Toko Bandung", available: true },
    { name: "Toko Depok", available: true },
    { name: "Toko Bogor", available: true },
  ],
  specs: {
    Layout: "75% (ANSI & ISO, supports 7u spacebar)",
    Connection: "Wired (USB Type-C)",
    "Mounting Style": "Gasket mount with Poron foam",
    Keycaps: "PBT doubleshot with additional accent keycaps",
    "Switch Options": "Linear, Tactile, or Silent switches",
    Knob: "Programmable rotary knob",
    Display: "TFT LCD screen",
    Dimensions: "328mm x 138mm x 42mm",
    Weight: "±1300 grams",
    "Case Material": "ABS plastic",
    Warranty: "1 year",
  },
};
</script>

<template>
  <div class="bg-white pb-20">
    <div class="container mx-auto px-4 md:px-6 py-8 space-y-13.25">
      <!-- Breadcrumb (Optional but good for UX) -->
      <!-- <div class="text-sm text-gray-400 mb-6">Home / Keyboard / Noir ...</div> -->

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <!-- Left: Gallery -->
        <div class="lg:col-span-5">
          <ProductGallery :images="product.images" />
        </div>

        <!-- Right: Info -->
        <div class="lg:col-span-7">
          <ProductInfo :product="product" />
        </div>
      </div>

      <Divider />

      <!-- Recommendations -->
      <RecommendedSection
        class="bg-white"
        title-first-line="OTHER RECOMMENDED"
        title-second-line="NOIR PRODUCTS"
        title-first-line-color="text-black"
        title-second-line-color="text-[#E21F32]"
      />
    </div>
  </div>
</template>
