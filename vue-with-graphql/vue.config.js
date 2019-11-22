const variable = require('./src/styles/ant-variable')

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',

  css: {
    loaderOptions: {
      less: {
        modifyVars: variable.antVars,
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    port : 8081,
    host: "0.0.0.0"
  },
}
