module.exports = {
  "parser": "babel-eslint",
  "plugins": [ "react" ],
  "extends": [
    "standard",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/all"
  ],
  "rules": {
    "comma-dangle": [2, "always-multiline"],
    "object-curly-spacing": [2, "always"],
    "react/forbid-component-props": [0],
    "react/jsx-max-props-per-line": [2, { "maximum": 3 }],
    "react/no-set-state": [0],
    "react/jsx-sort-props": [1],
    "react/require-optimization": [1]
  },
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "experimentalObjectRestSpread": true,
    "forOf": true,
    "generators": true,
    "jsx": true,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": false,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "regexYFlag": true,
    "regexUFlag": true,
    "spread": true,
    "superInFunctions": true,
    "templateStrings": true,
  },
  "env": {
    "es6": true,
  }
}
