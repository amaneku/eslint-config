# @amaneku/eslint-config

[![npm version](https://badge.fury.io/js/%40amaneku%2Feslint-config.svg)](https://badge.fury.io/js/%40amaneku%2Feslint-config)
[![Build Status](https://travis-ci.org/amaneku/eslint-config.svg?branch=master)](https://travis-ci.org/amaneku/eslint-config)

## Installation

Install `@amaneku/eslint-config`

```
$ npm install --save-dev @amaneku/eslint-config
```

## Usage

in `.eslintrc.js`

```js
module.exports = {
  extends: ['@amaneku/eslint-config']
};
```

flowtype:

```js
module.exports = {
  extends: ['@amaneku/eslint-config/flowtype']
};
```

es5:

```js
module.exports = {
  extends: ['@amaneku/eslint-config/es5']
};
```

## License

MIT
