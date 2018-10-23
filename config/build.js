import tailwindcss from 'tailwindcss'

export default {
  extractCSS: true,
  optimization: {
    splitChunks: {
      name: true
    }
  },
  transpile: [/^vue-if-bot($|\/)/, /^vue-cookieconsent-component($|\/)/],

  postcss: [
    tailwindcss('./tailwind.js')
  ],
  extend(config, ctx) {
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
