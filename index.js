module.exports = {
  "extends": [ "standard", "plugin:import/errors", "plugin:import/warnings" ],
  "plugins": [ "react" ],
  "parser": "babel-eslint",
  "rules": {
    "comma-dangle": [2, "always-multiline"],
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
