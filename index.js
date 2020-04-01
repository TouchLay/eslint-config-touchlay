module.exports = {
  "parser": "babel-eslint",
  "extends": [ "standard", "standard-react", "plugin:flowtype/recommended" ],
  "plugins": [ "standard", "react", "flowtype", "jest" ],
  "rules": {
    "comma-dangle": [2, {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never"
    }],
    "object-curly-spacing": [2, "always"],
    "array-bracket-spacing": [2, "always", { "singleValue": false }],
    "react/forbid-component-props": [0],
    "react/jsx-max-props-per-line": [2, { "maximum": 3 }],
    "react/no-set-state": [0],
    "react/jsx-sort-props": [1],
    "react/require-optimization": [1],
    "react/jsx-no-bind": [1, { "allowArrowFunctions": true }],
    "react/require-default-props": [0],
    "react/no-multi-comp": [2, { "ignoreStateless": true }],
    "react/jsx-curly-brace-presence": [0],
    "react/jsx-curly-newline": [1, { multiline: "consistent", singleline: "consistent" }]
  },
  "env": {
    "es6": true,
  }
}
