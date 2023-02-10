const locales = {
  bg: 'Български език',
  en: 'English',
}

const defaultLocale = 'bg'

const dateTimeFormats = {
  // bg: 01 януари 2021 г., 13:23 ч.
  // en: January 01, 2021 at 01:23 PM
  full: {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  },

  // bg: 01 януари 2021 г.
  // en: January 01, 2021
  long: {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  },

  // bg: януари 2021 г.
  // en: January 2021
  medium: {
    year: 'numeric',
    month: 'long',
  },

  // bg: 2021 г.
  // en: 2021
  short: {
    year: 'numeric',
  },
}

export { locales, defaultLocale, dateTimeFormats }
