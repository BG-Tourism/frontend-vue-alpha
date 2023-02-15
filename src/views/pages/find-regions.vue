<script>
import { computed, defineComponent } from 'vue'
import { useTitle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

import regions from '@/api/regions'

import { useGeneralStore } from '@/stores/GeneralStore'

export default defineComponent({
  setup() {
    const i18n = useI18n()
    const store = useGeneralStore()
    const titleSuffix = store.titleSuffix

    const pageTitle = computed(() => {
      return i18n.t('page.regions.title') + titleSuffix
    })

    useTitle(pageTitle)

    return {
      regions,
    }
  },
})
</script>

<template>
  <section class="top-section">
    <div class="page-content">
      <div class="title">
        <h2>{{ $t('page.regions.subtitle') }}</h2>
        <h1>{{ $t('page.regions.title') }}</h1>
        <p>{{ $t('page.regions.description') }}</p>
      </div>
    </div>
  </section>

  <section class="regions-list">
    <div class="page-content">
      <div class="page-alert">
        <i class="icon-alert-triangle" />
        <p>{{ $t('general.needsRework') }}</p>
      </div>
      <div class="page-container">
        <ul>
          <li v-for="region in regions" :key="region">
            <router-link :to="{ name: 'Region', params: { slug: region.slug } }">
              {{ region.locale[$i18n.locale].title }}
              <span>{{ region.localities.length }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
