module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "greasemonkey": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  "plugins": [
    "prettier",
    "@typescript-eslint",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module",
    "project": "./tsconfig.json",
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ],
    "no-console": [
      "error",
      {
        "allow": ["log", "warn", "error"]
      }
    ]
  }
};
