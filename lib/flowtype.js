module.exports = {
  extends: ['plugin:flowtype/recommended', 'prettier', 'prettier/flowtype'],
  plugins: ['flowtype'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true
  },
  rules: {
    'prettier/prettier': 'error'
  }
};
