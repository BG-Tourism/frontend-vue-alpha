<script>
import { computed, defineComponent } from 'vue'
import { useTitle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

import { useGeneralStore } from '@/stores/GeneralStore'

export default defineComponent({
  setup() {
    const i18n = useI18n()
    const store = useGeneralStore()
    const titleSuffix = store.titleSuffix

    const pageTitle = computed(() => {
      return i18n.t('page.about.title') + titleSuffix
    })

    useTitle(pageTitle)
  },
})
</script>

<template>
  <section class="top-section">
    <div class="page-content">
      <div class="title">
        <h1>{{ $t('page.about.title') }}</h1>
        <p>{{ $t('page.about.description') }}</p>
      </div>
    </div>
  </section>

  <section class="about-section">
    <div class="page-content">
      <div class="page-alert">
        <i class="icon-alert-triangle" />
        <p>{{ $t('general.needsRework') }}</p>
      </div>
    </div>
  </section>
</template>
