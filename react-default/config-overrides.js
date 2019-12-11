/* eslint-disable */
const { override, fixBabelImports, addWebpackPlugin, addLessLoader, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require('path');
const sassToJS = require('sass-vars-to-js')

const themeVariables = sassToJS(path.resolve(__dirname, 'src/styles/variables.scss'))

// refs = https://github.com/arackaf/customize-cra
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: themeVariables
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })
);