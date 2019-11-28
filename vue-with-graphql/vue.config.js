/* eslint-disable */
const sassToJS = require('sass-vars-to-js')
const path = require('path')

const themeVariables = sassToJS(path.resolve(__dirname, 'src/styles/variables.scss'))

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: themeVariables,
        javascriptEnabled: true
      }
    }
  },
};
