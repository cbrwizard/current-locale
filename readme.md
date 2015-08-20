# current-locale
[![npm version](https://badge.fury.io/js/current-locale.svg)](https://www.npmjs.com/package/current-locale)
## What
A simple function which returns current locale.

### Example usage
1. Install it with:
` $ npm install current_locale `

2. Write in your code:

```javascript
var currentLocaleFunction = require('current-locale');

var currentLocale = currentLocaleFunction({
  supportedLocales: ['ru', 'en-US'],
  fallbackLocale: 'en-US'
});
```
`currentLocale` variable now contains your locale.
```javascript
console.log(currentLocale); // 'en-US'
```

## Options?
It has two options:
- `supportedLocales` is an array of supported locales. If it is passed and the browser locale is not one of them, then
the function will return false.
- `fallbackLocale` is a name of a locale which should be returned if browser locale is not one of supportedLocales.

If you do not provide any options, this function will return whatever browser says about current locale, which is usually right.

## Browser support
All modern browsers and even some IEs.

## Testing
Test it with this command:
`$ mocha`
