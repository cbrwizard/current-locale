/**
 * Gets a user locale language
 *
 * @param {Object} [options={}]
 * @param {Array} options.supportedLocales An array of supported locales
 * @param {String} options.fallbackLocale A fallback locale
 *
 * @returns {string|boolean}
 */
function getUserLanguage(options) {
  if (typeof options === 'undefined') {
    options = {};
  }

  if (typeof navigator === 'undefined') {
    if (typeof options.fallbackLocale === 'undefined') {
      return undefined;
    } else {
      return options.fallbackLocale;
    }
  } else {
    var browserLanguage = navigator.languages ? navigator.languages[0] : (navigator.language || navigator.userLanguage);

    if (typeof options.supportedLocales === 'undefined') {
      return browserLanguage;
    } else {
      if (options.supportedLocales.indexOf(browserLanguage) > -1) {
        return browserLanguage;
      } else if (typeof options.fallbackLocale !== 'undefined') {
        return options.fallbackLocale;
      } else {
        return undefined;
      }
    }
  }
}

module.exports = getUserLanguage;
