export default {
  transpile: [/^vue-if-bot($|\/)/, /^vue-cookieconsent-component($|\/)/],

  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },

  extend (config, ctx) {
    if (ctx.isClient) {
      if (ctx.isDev) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
