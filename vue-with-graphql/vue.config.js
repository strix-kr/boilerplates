/* eslint-disable */
const sassToJS = require('sass-vars-to-js')
const path = require('path')

const themeVariables = sassToJS(path.resolve(__dirname, 'src/styles/variables.scss'))

module.exports = {
  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule('graphql')
      .test(/\.(graphql|gql)$/)
      .use('graphql-tag/loader')
      .loader('graphql-tag/loader')
      .end();
    config.module
    .rule('vue')
    .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transpileOptions = {
          transforms: {
            dangerousTaggedTemplateString: true,
          },
        }
        return options
      })
  },
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
