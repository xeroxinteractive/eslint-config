module.exports = {
  plugins: ['jest', 'prettier'],
  extends: [
    'plugin:jest/recommended',
    'prettier',
    'prettier/babel',
    'prettier/standard'
  ],

  env: {
    node: true,
    es6: true
  },

  rules: {
    'linebreak-style': [2, 'unix'],
    'arrow-parens': [2, 'always'],
    'prettier/prettier': 'error'
  }
};
