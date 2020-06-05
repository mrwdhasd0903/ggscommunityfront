module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'utlis': '@/utlis',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    },
    // externals: {
    //   vue: 'Vue',
    //   'vue-router': 'VueRouter',
    //   'element-ui': 'ElementUI',
    //   'axios': 'axios',
    //   'highlight.js':'hljs'
    // }
  },
  // publicPath: './' 
}