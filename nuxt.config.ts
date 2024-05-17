import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
  // ?
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  $development: {
    //
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/test.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/tailwindcss', "@element-plus/nuxt"],

  router: {
    // base: '/nuxt-test'
    // base: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
  generate: {
    // dir: 'docs',
    // subFolders: false
  }
})
