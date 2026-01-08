export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@pinia/nuxt'],
  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  experimental: {
    defaults: {
      prefetchOn: {
        interaction: true
      }
    }
  },

  compatibilityDate: '2025-01-15',

  typescript: {
    strict: false,
    typeCheck: false
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        commaDangle: 'never'
      }
    }
  },

  fonts: {
    families: [
      {
        name: 'Manrope',
        provider: 'google',
        weights: [400, 500, 600, 700, 800]
      }
    ]
  }
})
