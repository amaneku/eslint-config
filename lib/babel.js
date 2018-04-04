module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true
  },
  rules: {
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',

    'prettier/prettier': 'error'
  }
};
