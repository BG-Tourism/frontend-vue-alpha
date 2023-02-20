<script>
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { onClickOutside, onKeyStroke } from '@vueuse/core'

import { changeLocale, getSupportedLocales } from '@/utils/locales'
import { useGeneralStore } from '@/stores/GeneralStore'

export default defineComponent({
  setup() {
    const store = useGeneralStore()
    const { locale } = useI18n()
    const target = ref(null)

    const handleClose = () => {
      store.toggleModal('language')
    }

    onKeyStroke('Escape', () => {
      handleClose()
    })

    onClickOutside(target, () => {
      handleClose()
    })

    return {
      store,
      locale,
      target,
      getSupportedLocales,
      changeLocale,
      handleClose,
    }
  },
})
</script>

<template>
  <div v-if="store.modals.language.shown">
    <div
      class="modal" :class="[
        store.modals.language.state === 1 ? 'opening' : null,
        store.modals.language.state === 2 ? 'closing' : null,
      ]"
    >
      <div v-if="[1, 2].includes(store.modals.language.state)" class="wrapper">
        <div class="close">
          <button>
            <span class="icon-holder">
              <i class="icon-close" />
            </span>
            <span>{{ $t('general.close') }}</span>
          </button>
        </div>
        <div ref="target" class="language-container">
          <div class="section-name">
            <span>{{ $t('general.languages') }}</span>
          </div>
          <ul class="section-content">
            <li v-for="(language, index) in getSupportedLocales()" :key="index" @click.prevent="handleClose">
              <button
                :disabled="$i18n.locale === language.code ? true : false"
                @click="changeLocale(language.code)"
              >
                <span>{{ language.name }}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
