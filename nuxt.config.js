import { colors } from './tailwind.js'
import { build, head, manifest, meta } from './config'
import { isDev } from './config/utils'

const axios = isDev
  ? {
    prefix: '/api/'
  }
  : {
    https: true,
    baseURL: 'https://thanks.lichter.io/api/'
  }

export default {

  // Watch config subfiles
  watch: ['~/config/*', '~/api/**/*'],
  head,
  meta,

  env: {
    stripePublicKey: process.env.STRIPE_PUBLIC_KEY || ''
  },

  css: [
    '@/assets/styles/app.pcss'
  ],

  modules: [
    'nuxt-svg-loader',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    ['nuxt-purgecss', { mode: 'postcss' }]
  ],

  axios,

  loading: { color: colors.indigo },

  manifest,
  build
}
