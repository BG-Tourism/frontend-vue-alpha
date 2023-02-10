<script>
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import { useTitle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

import places from '@/api/places'
import regions from '@/api/regions'

import countPlacesWithLocality from '@/helpers/countPlacesWithLocality'

import { useGeneralStore } from '@/stores/GeneralStore'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { locale } = useI18n({ useScope: 'global' })
    const store = useGeneralStore()
    const titleSuffix = store.titleSuffix
    const region = regions.find(item => item.slug === route.params.slug)
    const loading = ref(true)

    onBeforeMount(() => {
      if (!regions.find(item => item.slug === route.params.slug))
        router.push({ name: 'Regions' })
      else
        loading.value = false
    })

    const pageTitle = computed(() => {
      return `${region.locale[locale.value].title}${titleSuffix}`
    })
    useTitle(pageTitle)

    return {
      loading,
      locale,
      route,
      region,
      regions,
      places,
      countPlacesWithLocality,
    }
  },
})
</script>

<template>
  <div v-if="!loading">
    <section class="top-section">
      <div class="page-content">
        <div class="title">
          <h2>{{ $t('page.region.subtitle') }}</h2>
          <h1>{{ region.locale[$i18n.locale].title }}</h1>
          <p>{{ region.locale[$i18n.locale].description }}</p>
        </div>
      </div>
    </section>

    <section class="regions-list">
      <div class="page-content">
        <div class="page-container">
          <h2>{{ $t('general.navigation.localities', { count: region.localities.length }) }}</h2>
          <ul>
            <li v-for="locality in region.localities" :key="locality">
              <router-link :to="{ name: 'Places', query: { region: route.params.slug, locality: locality.slug } }">
                {{ locality.locale[$i18n.locale].title }}
                <span v-if="countPlacesWithLocality(places, locality.slug)">
                  {{ countPlacesWithLocality(places, locality.slug) }}
                </span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  <div v-else>
    <section class="top-section">
      <div class="page-content">
        <div class="title">
          <h1>{{ $t('page.region.title') }}</h1>
        </div>
      </div>
    </section>

    <section class="regions-list">
      <div class="page-content">
        <div class="page-container">
          <div class="container-content padding">
            {{ $t('general.loading') }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
