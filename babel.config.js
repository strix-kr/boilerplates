module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'import',
      { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }
    ],
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-optional-catch-binding'
  ]
}
