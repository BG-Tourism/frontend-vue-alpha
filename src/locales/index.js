import { createI18n } from 'vue-i18n'

import { dateTimeFormats, locales } from '@/config/locales'

import { changeLocale, getPreferredLanguage } from '@/utils/locales'

changeLocale(getPreferredLanguage(), false)

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    warnHtmlInMessage: false,
    warnHtmlMessage: false,
    fallbackLocale: 'bg',
    locale: getPreferredLanguage()
})

for (const code of Object.keys(locales)) {
    const messages = await import(/* webpackChunkName: "locale-[request]" */ `./messages/${code}/index.js`)

    i18n.global.setLocaleMessage(code, messages.default)
    i18n.global.setDateTimeFormat(code, dateTimeFormats)
}

export default i18n
