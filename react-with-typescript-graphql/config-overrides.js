const {
  override,
  disableChunk,
  addLessLoader,
  removeModuleScopePlugin,
  addWebpackAlias,
  addWebpackPlugin,
  fixBabelImports,
  addWebpackModuleRule,
} = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const {resolve } = require('path');
const sassToJS = require('sass-vars-to-js');

const themeVariables = sassToJS(
  resolve(__dirname, 'src/styles/variables.scss'),
);

// refs = https://github.com/arackaf/customize-cra
module.exports = override(
  removeModuleScopePlugin(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackModuleRule(
    {
      test: /\.(graphql|gql)$/,
      use: 'graphql-tag/loader'
    }
  ),
  addLessLoader({
    javascriptEnabled: true,
    importLoaders: true,
    modifyVars: themeVariables,
  }),
  disableChunk(),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addWebpackAlias({
    ['@']: resolve(__dirname, 'src')
  }),
);