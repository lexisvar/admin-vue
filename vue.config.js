const webpack = require('webpack')
const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        _: 'lodash',
        echarts: 'echarts',
        // moment: 'moment'
      }),
    ],
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '~': path.join(__dirname, './src'),
        '@sass': path.join(__dirname, './src/sass'),
      },
    },
  },
})
