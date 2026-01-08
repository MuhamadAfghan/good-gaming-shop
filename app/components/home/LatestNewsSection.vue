<script setup lang="ts">
import news1 from '~/assets/images/news/new-1.png'
import news2 from '~/assets/images/news/new-2.png'
import news3 from '~/assets/images/news/new-3.png'
import news4 from '~/assets/images/news/new-4.png'
import news5 from '~/assets/images/news/new-5.png'
import news6 from '~/assets/images/news/new-6.png'
import news7 from '~/assets/images/news/new-7.png'
import news8 from '~/assets/images/news/new-8.png'

const newsItems = [
  {
    image: news1,
    title: 'E-Commerce Pulse 2025: What’s Driving Growth?',
    date: '25 March 2025'
  },
  {
    image: news2,
    title: 'E-Commerce Pulse 2025: What’s Driving Growth?',
    date: '25 March 2025'
  },
  {
    image: news3,
    title: 'E-Commerce Pulse 2025: What’s Driving Growth?',
    date: '25 March 2025'
  },
  {
    image: news4,
    title: 'E-Commerce Pulse 2025: What’s Driving Growth?',
    date: '25 March 2025'
  },
  {
    image: news5,
    title: 'E-Commerce Pulse 2025: What’s Driving Growth?',
    date: '25 March 2025'
  },
  {
    image: news6,
    title: 'E-Commerce Pulse 2025: What’s Driving Growth?',
    date: '25 March 2025'
  },
  {
    image: news7,
    title: 'E-Commerce Pulse 2025: What’s Driving Growth?',
    date: '25 March 2025'
  },
  {
    image: news8,
    title: 'E-Commerce Pulse 2025: What’s Driving Growth?',
    date: '25 March 2025'
  }
]

const excerpt
  = 'A concise look at emerging product categories, funnel trends, and digital behavior shaping the e-commerce space.'
</script>

<template>
  <div class="w-full bg-white py-16 font-manrope">
    <div class="px-12.5">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-10">
        <div class="flex">
          <h2
            class="text-[40px] font-black italic font-panton uppercase leading-none text-[#1A1A1A]"
          >
            OUR <span class="text-[#E21F32]">LATEST NEWS</span>
          </h2>
        </div>

        <button
          class="px-8 py-2.5 border border-[#E21F32] text-[#E21F32] font-bold text-sm rounded-lg hover:bg-[#E21F32] hover:text-white transition-colors uppercase mt-4 md:mt-0"
        >
          See All
        </button>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(item, index) in newsItems"
          :key="index"
          class="group cursor-pointer"
        >
          <!-- Image Area -->
          <div class="rounded-lg overflow-hidden mb-4">
            <img
              :src="item.image"
              class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              draggable="false"
            >
          </div>

          <!-- Content -->
          <div>
            <h3
              class="font-bold text-lg text-[#1A1A1A] leading-tight mb-2 group-hover:text-[#E21F32] transition-colors"
            >
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-500 mb-2 line-clamp-3">
              {{ excerpt }}
            </p>
            <span class="text-xs font-bold text-gray-400">
              {{ item.date }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
