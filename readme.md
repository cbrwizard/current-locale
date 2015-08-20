# current-locale
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
3. `currentLocale` variable now contains your locale.
```javascript
console.log(currentLocale); // 'en-US'
```

## Options?
It has two options:
- `supportedLocales` is an array of supported locales. If it is passed and the browser locale is not one of them, then
the function will return false.
- `fallbackLocale` is a name of a locale which should be returned if browser locale is not one of supportedLocales.

## Browser support
All modern browsers and even some IEs.

## Testing
Test it with this command:
`$ mocha`
