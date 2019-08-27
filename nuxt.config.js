import { colors } from './config/tailwind-values'
import { build, head, manifest, meta } from './config'
import { isDev } from './config/utils'

export default {
  modern: !isDev && 'client',
  generate: {
    fallback: true
  },
  // Watch config subfiles
  watch: ['~/config/*'],
  head,
  meta,

  env: {
    stripePublicKey: isDev ? 'pk_test_9hUFtiNMcseCbvLBySY7D8P6' : (process.env.STRIPE_PUBLIC_KEY || '')
  },

  modules: [
    'nuxt-svg-loader',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss'
  ].concat(isDev ? '@nuxtjs/proxy' : ['nuxt-purgecss', { mode: 'postcss' }]),

  axios: {
    https: !isDev,
    prefix: '/.netlify/functions/'
  },

  tailwindcss: {
    configPath: '~/config/tailwind.js',
    cssPath: '~/assets/styles/app.pcss'
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
