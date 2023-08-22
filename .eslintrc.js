module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  extends: ["google", "eslint:recommended", "plugin:prettier/recommended"], // if using WebStorm, omit plugin:prettier/recommended
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
  },
};
