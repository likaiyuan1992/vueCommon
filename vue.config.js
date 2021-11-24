const path = require('path')
const theme = process.env.VUE_APP_THEME_NAME || 'default'

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,

  chainWebpack: (config) => {
    // 设置 alias
    config.resolve.alias.store
      .set('@images', path.resolve(__dirname, 'src/assets/images'))
      .set('@styles', path.resolve(__dirname, `src/theme/${theme}`))
    config.plugin('html').tap((args) => {
      args[0].title = '商城'
      return args
    })
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.yukokigurumi.com:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/api': '',
        },
      },
      '/lky': {
        target: 'http://localhost:3002',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/lky': '',
        },
      }
    },
  },
}