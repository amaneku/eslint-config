module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2019
  },
  rules: {
    'class-methods-use-this': 'error',
    'no-return-await': 'error',
    'no-template-curly-in-string': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'symbol-description': 'error',

    'prettier/prettier': 'error'
  }
};
