const NODE_ENV = process.env.NODE_ENV
const { resolve } = require('path')

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        components: resolve('src/components')
      }
    },
    entry: {
      app: './src/main.ts'
    }
  },
  css: {

  },
  chainWebpack: config => {
    const imagesRule = config.module.rule('images')

    NODE_ENV === 'production' &&
      imagesRule
        .use('image-webpack-loader')
        .loader('image-webpack-loader')
        .options({ bypassOnDebug: true })

    imagesRule
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 5000 }))

    // config
    //   .plugin('html')
    //   .tap(args => {
    //     args[0].title = '鳌江智慧城市安全生产可视化平台'
    //     return args
    //   })
  },
  devServer: {
    open: true
  },
  productionSourceMap: false
}
