<script setup>
useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Nuxt Starter Template'
const description
  = 'A production-ready starter template powered by Nuxt UI. Build beautiful, accessible, and performant applications in minutes, not hours.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})

const colorMode = useColorMode()
colorMode.preference = 'light'
</script>

<template>
  <UApp>
    <div class="min-h-screen flex justify-center font-manrope">
      <div class="w-full bg-white min-h-screen flex flex-col">
        <LayoutNavbar />

        <UMain class="flex-grow">
          <NuxtPage />
        </UMain>

        <LayoutFooter />
      </div>
    </div>
  </UApp>
</template>
