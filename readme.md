# current_locale.js
## What
A simple function which returns current locale.

## How
Call it using getUserLanguage(options), where options - is an optional object.

## Options?
It has two options:
- supportedLocales is an array of supported locales. If it is passed and the browser locale is not one of them, then 
the function will return false.
- fallbackLocale is a name of a locale which should be returned if browser locale is not one of supportedLocales.

## Browser support
All modern browsers and even some IEs.

## Testing
Test it with this command:
`$ mocha`