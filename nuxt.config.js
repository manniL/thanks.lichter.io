import { colors } from './tailwind.js'
import { build, head, manifest, meta } from './config'
import { isDev } from './config/utils'

export default {

  // Watch config subfiles
  watch: ['~/config/*'],
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
  ].concat(isDev ? '@nuxtjs/proxy' : []),

  axios: {
    https: !isDev,
    prefix: '/.netlify/functions/'
  },
  proxy: {
    '/.netlify/functions/': {
      target: 'http://localhost:9000'
    }
  },

  loading: { color: colors.indigo },

  manifest,
  build
}
