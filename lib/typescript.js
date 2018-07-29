module.exports = {
  extends: ['prettier', 'prettier/flowtype'],
  plugins: ['typescript', 'prettier'],
  parser: 'typescript-eslint-parser',
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
