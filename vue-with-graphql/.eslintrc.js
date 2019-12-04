const schema = require('./src/graphql/schema.json');

module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'max-len': 'off',
    'import/prefer-default-export': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
    'no-param-reassign': ['error', { props: false }],
    'graphql/template-strings': ['error', {
      // Import default settings for your GraphQL client. Supported values:
      // 'apollo', 'relay', 'lokka', 'fraql', 'literal'
      env: 'literal',
      // no need to specify schema here, it will be automatically determined using .graphqlconfig
      // eslint-disable-line global-require
      schemaJson: schema,
    }],
  },
  plugins: [
    'graphql',
  ],
};
