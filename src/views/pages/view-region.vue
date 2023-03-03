<script>
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import { useTitle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

import places from '@/api/places'
import regions from '@/api/regions'

import countPlacesWithMunicipality from '@/helpers/countPlacesWithMunicipality'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { locale } = useI18n({ useScope: 'global' })
    const appName = computed(() => {
      if (locale.value === 'bg')
        return import.meta.env.VITE_APP_NAME_BG

      return import.meta.env.VITE_APP_NAME_EN
    })
    const region = regions.find(item => item.slug === route.params.slug)
    const loading = ref(true)

    onBeforeMount(() => {
      if (!regions.find(item => item.slug === route.params.slug))
        router.push({ name: 'Regions' })
      else
        loading.value = false
    })

    const pageTitle = computed(() => {
      return `${region.locale[locale.value].title} - ${appName.value}`
    })
    useTitle(pageTitle)

    return {
      loading,
      locale,
      route,
      region,
      regions,
      places,
      countPlacesWithMunicipality,
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
          <h2>{{ $t('general.navigation.municipalities', { count: region.municipalities.length }) }}</h2>
          <ul>
            <li v-for="municipality in region.municipalities" :key="municipality">
              <router-link :to="{ name: 'Places', query: { region: route.params.slug, municipality: municipality.slug } }">
                {{ municipality.locale[$i18n.locale].title }}
                <span v-if="countPlacesWithMunicipality(places, municipality.slug)">
                  {{ countPlacesWithMunicipality(places, municipality.slug) }}
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
