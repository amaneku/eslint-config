module.exports = {
  extends: ['plugin:flowtype/recommended', 'prettier', 'prettier/flowtype'],
  plugins: ['flowtype', 'prettier'],
  parser: 'babel-eslint',
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2019
  },
  rules: {
    'prettier/prettier': 'error'
  }
};
