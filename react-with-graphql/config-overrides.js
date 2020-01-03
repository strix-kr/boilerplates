const {
  override,
  fixBabelImports,
  addWebpackPlugin,
  addLessLoader,
  addWebpackAlias,
} = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const { resolve } = require('path');
const sassToJS = require('sass-vars-to-js');

const themeVariables = sassToJS(
  resolve(__dirname, 'src/styles/variables.scss'),
);

// refs = https://github.com/arackaf/customize-cra
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: themeVariables,
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addWebpackAlias({
    '@': resolve(__dirname, 'src'),
  }),
);
