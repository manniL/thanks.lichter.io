import { colors } from './tailwind.js'
import { build, head, manifest, meta, render } from './config'
import { isDev } from './config/utils'

export default {

  // Watch config subfiles
  watch: ['~/config/*', '~/api/**/*'],
  head,
  meta,

  css: [
    '@/assets/styles/app.scss'
  ],

  serverMiddleware: [
    '~/api/index.js'
  ],

  /*
   * Modules
   */

  modules: [
    'nuxt-svg-loader',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    'nuxt-purgecss'
  ],

  axios: {
    https: !isDev,
    baseURL: isDev ? undefined : 'https://thanks.lichter.io/api/',
    prefix: isDev ? '/api/' : undefined
  },

  purgeCSS: {
    whitelistPatterns: [/cookie-consent/]
  },
  /*
   * Customize the progress bar color
   */
  loading: { color: colors.red },
  loadingIndicator: {
    name: 'rectangle-bounce',
    color: 'white',
    background: colors.red
  },

  manifest,
  render,
  build
}
