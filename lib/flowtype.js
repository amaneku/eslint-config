module.exports = {
  extends: ['plugin:flowtype/recommended', 'prettier', 'prettier/flowtype'],
  plugins: ['flowtype', 'prettier'],
  parser: 'babel-eslint',
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'prettier/prettier': 'error'
  }
};
