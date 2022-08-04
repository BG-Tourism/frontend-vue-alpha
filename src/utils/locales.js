import { ref } from 'vue'
import { usePreferredLanguages } from '@vueuse/core'

import { defaultLocale, locales } from '@/config/locales'

function filterLocale(locale) {
    let supportedLocales = []

    for (const code of Object.keys(locales)) {
        supportedLocales.push(code)
    }

    if (supportedLocales.includes(locale)) {
        return locale
    } else {
        return defaultLocale
    }
}

function getPreferredLanguage() {
    let locale = ref(null)
    const storageLocale = localStorage.getItem('locale')

    if (storageLocale) {
        locale = filterLocale(storageLocale)
    } else {
        const navigatorLocale = usePreferredLanguages()

        if (navigatorLocale.value.length) {
            const preferredLanguage = navigatorLocale.value[0].trim().split(/-|_/)[0].toLocaleLowerCase()

            locale = filterLocale(preferredLanguage)
        } else {
            locale = defaultLocale
        }
    }

    return locale
}

function getSupportedLocales() {
    let annotatedLocales = []

    for (const code of Object.keys(locales)) {
        annotatedLocales.push({
            code,
            name: locales[code]
        })
    }

    return annotatedLocales
}

function changeLocale(locale, set = true) {
    const html = document.querySelector('html')
    html.setAttribute('lang', locale)

    localStorage.setItem('locale', locale)

    if (set) {
        this.$i18n.locale = locale
    }
}

export { filterLocale, getPreferredLanguage, getSupportedLocales, changeLocale }
