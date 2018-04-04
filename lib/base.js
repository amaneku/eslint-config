module.exports = {
  extends: ['eslint:recommended', 'plugin:eslint-comments/recommended', 'prettier'],
  plugins: ['eslint-comments', 'prettier'],
  env: {
    browser: true
  },
  rules: {
    'prettier/prettier': 'error'
  }
};
