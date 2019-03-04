module.exports = {
  plugins: '@typescript-eslint',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-use-before-define': 1
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'require-jsdoc': 0
      }
    }
  ]
};
