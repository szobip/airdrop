import en from '../lang/en.js'
import ko from '../lang/ko.js'

export const API_ROOT = ''

export const I18N = {
  detectBrowserLanguage: {
    useCookie: true,
    alwaysRedirect: true,
  },
  fallbackLocale: 'en',
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
    },
    {
      code: 'ko',
      iso: 'ko-KO',
      name: '한국어',
    },
  ],
  defaultLocale: 'en',
  seo: false,
  routes: {},
  vueI18n: {
    messages: { en, ko },
  },
}
