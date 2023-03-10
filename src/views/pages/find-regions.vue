<script>
import { defineComponent } from 'vue'

import BaseInput from '@/components/BaseInput.vue'

import useMapTooltip from '@/helpers/useMapTooltip'
import pageTitle from '@/utils/pageTitle'

export default defineComponent({
  components: {
    BaseInput,
  },
  setup() {
    pageTitle('page.regions.title')

    const { regions, showingTooltip, tooltipText, tooltipPosition, tooltipRef, tooltip, showTooltip, hideTooltip, searchQuery } = useMapTooltip()

    return {
      regions,
      showingTooltip,
      tooltipText,
      tooltipPosition,
      tooltipRef,
      tooltip,
      showTooltip,
      hideTooltip,
      searchQuery,
    }
  },
})
</script>

<template>
  <section class="top-section">
    <div class="page-content">
      <div class="title">
        <div class="subtitle">
          {{ $t('page.regions.subtitle') }}
        </div>
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
      <div class="holder">
        <div class="search-wrapper">
          <BaseInput v-model="searchQuery" :placeholder="$t('page.regions.searchPlaceholder')">
            <template #prefix>
              <i class="icon-search" />
            </template>
          </BaseInput>
        </div>
        <div v-if="showingTooltip" ref="tooltip" class="map-tooltip" v-html="tooltipText" />
        <div class="map">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1491 968" width="1491" height="968">
            <g v-for="region in regions" :id="region.slug" :key="region">
              <router-link v-for="municipality in region.municipalities" :id="region.slug" :key="municipality.slug" :to="{ name: 'Places', query: { region: region.slug, municipality: municipality.slug } }" :class="region.slug" @mouseover="showTooltip($event, $t('page.regions.municipality', { title: municipality.locale[$i18n.locale].title }), municipality.slug, region.locale[$i18n.locale].title, region.slug)" @mouseout="hideTooltip">
                <path :id="municipality.slug" :d="municipality.svg_path" />
              </router-link>
            </g>
          </svg>
          <div class="legend">
            <ul>
              <li v-for="region in regions" :key="region" :class="region.slug">
                {{ region.locale[$i18n.locale].title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="page-container">
        <ul>
          <li v-for="region in regions" :key="region">
            <router-link :to="{ name: 'Region', params: { slug: region.slug } }">
              {{ region.locale[$i18n.locale].title }}
              <span>{{ region.municipalities.length }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
