# eslint-config-touchlay

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

StandardJS with ES6 features, babel, JSX, [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react), [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) and special rules ([dangling commas](https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8) and arrow functions without parens allowed).

## Install

```
npm install --save-dev eslint-config-touchlay
```

## Use

Add to your `.eslintrc`:

```js
{
  "extends": "touchlay"
}
```

You can additionally set environments, pick some!

```js
{
  "extends": "touchlay",
  "env": {
    "browser": true,
    "meteor": true,
    "mongo": true,
    "node": true,
  }
}
```
