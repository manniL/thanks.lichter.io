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

  css: [
    '@/assets/styles/app.pcss'
  ],

  serverMiddleware: [
    // TODO: Workaround until https://github.com/nuxt/nuxt.js/pull/4656 is merged
    { path: '/api', handler: '~/api/index.js' }
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
