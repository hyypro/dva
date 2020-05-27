export default {
  alias: {
    '@': `${__dirname}/src`
  },
  disableCSSModules: true,
  publicPath: '/',
  proxy: {
    '/aps': {
      target: 'https://api.baxiaobu.com',
      changeOrigin: true,
      pathRewrite: {
        '^/aps': '',
      }
    },
    
    '/api': {
      target: 'https://blogs.zdldove.top',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      }
    }
  }
}