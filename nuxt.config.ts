import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  runtimeConfig: {
    // Will be available at runtime
    public: {
      googleMapApiKey: process.env.NUXT_GOOGLE_MAP_API_KEY || ''
    }
  },
  typescript: {
    typeCheck: true
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@pinia/nuxt', "@nuxt/image", "nuxt-lodash"],
  lodash: {
    prefix: "_",
    prefixSkip: ["string"],
    upperAfterPrefix: false,
    exclude: ["map"],
    alias: [
      ["camelCase", "stringToCamelCase"], // => stringToCamelCase
      ["kebabCase", "stringToKebab"], // => stringToKebab
      ["isDate", "isLodashDate"], // => _isLodashDate
    ],
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
})