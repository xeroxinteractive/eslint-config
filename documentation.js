module.exports = {
  plugins: ["jsdoc"],
  rules: {
    "jsdoc/check-examples": 1,
    "jsdoc/check-param-names": 2,
    "jsdoc/check-tag-names": 2,
    "jsdoc/check-types": 1,
    "jsdoc/newline-after-description": 2,
    "jsdoc/no-undefined-types": 0,
    "jsdoc/require-description": 0,
    "jsdoc/require-description-complete-sentence": 2,
    "jsdoc/require-example": 0,
    "jsdoc/require-hyphen-before-param-description": 2,
    "jsdoc/require-param": 2,
    "jsdoc/require-param-description": 2,
    "jsdoc/require-param-name": 2,
    "jsdoc/require-param-type": 0,
    "jsdoc/require-returns": 2,
    "jsdoc/require-returns-check": 2,
    "jsdoc/require-returns-description": 2,
    "jsdoc/require-returns-type": 0,
    "jsdoc/valid-types": 0,
    "require-jsdoc": [
      2,
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: false,
          FunctionExpression: false
        }
      }
    ]
  },
  settings: {
    jsdoc: {
      additionalTagNames: {
        customTags: ["remarks"]
      }
    }
  }
};
