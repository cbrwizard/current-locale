var assert = require("assert");
var simple = require('simple-mock');
var getUserLanguage = require('./../index.js');

describe('getUserLanguage', function() {
  context('when navigator is not defined', function() {
    context('when no options are passed', function() {
      it('returns undefined', function() {
        assert.equal(undefined, getUserLanguage());
      });
    });

    context('when options are passed', function() {
      context('when fallbackLocale is passed', function() {
        var fallbackLocale = 'ru';

        it('returns fallbackLocale', function() {
          assert.equal(fallbackLocale, getUserLanguage({
            fallbackLocale: fallbackLocale
          }));
        });
      });
    });
  });

  context('when navigator is defined', function() {
    beforeEach(function() {
      // Stub
      GLOBAL.navigator = {};
    });

    context('when no options are passed', function() {
      var browserLocale = 'ru';

      beforeEach(function() {
        simple.mock(navigator, 'language', browserLocale);
      });

      it('returns a browser language', function() {
        assert.equal(browserLocale, getUserLanguage());
      });
    });

    context('when options are passed', function() {
      context('when supportedLocales are passed', function() {
        var supportedLocales = ['en', 'ru', 'fr'];

        context('when browser locale is one of supportedLocales', function() {
          var browserLocale = 'ru';

          beforeEach(function() {
            simple.mock(navigator, 'language', browserLocale);
          });

          it('returns a browser language', function() {
            assert.equal(browserLocale, getUserLanguage({
              supportedLocales: supportedLocales
            }));
          });
        });

        context('when browser locale is not one of supportedLocales', function() {
          var browserLocale = 'jp';

          beforeEach(function() {
            simple.mock(navigator, 'language', browserLocale);
          });

          context('when fallbackLocale is passed', function() {
            var fallbackLocale = 'ru';

            it('returns a fallbackLocale language', function() {
              assert.equal(fallbackLocale, getUserLanguage({
                supportedLocales: supportedLocales,
                fallbackLocale: fallbackLocale
              }));
            });
          });

          context('when fallbackLocale is not passed', function() {
            it('returns undefined', function() {
              assert.equal(undefined, getUserLanguage({
                supportedLocales: supportedLocales
              }));
            });
          });
        });
      });
    });
  });
});
