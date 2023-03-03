import { computed } from 'vue'
import { useTitle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

export default function pageTitle(value, translation = true) {
  const { t, locale } = useI18n()
  let title

  if (translation) {
    title = computed(() => {
      return t(value)
    })
  }
  else {
    title = computed(() => {
      return value
    })
  }

  const appName = computed(() => {
    if (locale.value === 'bg')
      return import.meta.env.VITE_APP_NAME_BG

    return import.meta.env.VITE_APP_NAME_EN
  })

  const pageTitle = computed(() => {
    return `${title.value} - ${appName.value}`
  })

  useTitle(pageTitle)
}
