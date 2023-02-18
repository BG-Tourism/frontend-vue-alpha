<script>
import { defineComponent, ref } from 'vue'
import { onClickOutside, onKeyStroke } from '@vueuse/core'

import places from '@/api/places'
import regions from '@/api/regions'

import countPlacesWithRegion from '@/helpers/countPlacesWithRegion'
import countPlacesWithMunicipality from '@/helpers/countPlacesWithMunicipality'

import { useFinderStore } from '@/stores/Finder'

export default defineComponent({
  setup() {
    const finder = useFinderStore()
    const target = ref(null)

    const handleClose = () => {
      finder.toggleModal('region')
    }

    const toggleSelection = (type, item) => {
      finder.manageItem(type, item)
    }

    onKeyStroke('Escape', () => {
      handleClose()
    })

    onClickOutside(target, () => {
      handleClose()
    })

    return {
      finder,
      places,
      regions,
      target,
      countPlacesWithRegion,
      countPlacesWithMunicipality,
      toggleSelection,
      handleClose,
    }
  },
})
</script>

<template>
  <div v-if="finder.modals.region.shown">
    <div
      class="modal" :class="[
        finder.modals.region.state === 1 ? 'opening' : null,
        finder.modals.region.state === 2 ? 'closing' : null,
      ]"
    >
      <div v-if="[1, 2].includes(finder.modals.region.state)" class="wrapper">
        <div class="close">
          <button>
            <span class="icon-holder">
              <i class="icon-close" />
            </span>
            <span>{{ $t('general.close') }}</span>
          </button>
        </div>
        <div ref="target" class="finder-container">
          <div class="section-name">
            <span>{{ $t('general.filters.regionsAndMunicipalities') }}</span>
          </div>
          <ul class="section-content">
            <li v-for="region in regions" :key="region" :class="finder.loadings.selections ? 'disabled' : null">
              <div class="action" @click="toggleSelection('region', region.slug)">
                <button
                  class="checkbox" :class="[
                    finder.selections.region.find((item) => item === region.slug) ? 'checked' : null,
                  ]"
                />
                <div class="detail">
                  <span class="name">{{ region.locale[$i18n.locale].title }}</span>
                  <span v-if="countPlacesWithRegion(places, region.slug) > 0" class="count">{{ countPlacesWithRegion(places, region.slug) }}</span>
                </div>
              </div>
              <div v-if="finder.selections.region.includes(region.slug)" class="subitems">
                <ul>
                  <li
                    v-for="municipality in region.municipalities"
                    :key="municipality"
                    :class="finder.loadings.selections ? 'disabled' : null"
                  >
                    <div class="action" @click="toggleSelection('municipality', municipality.slug)">
                      <button
                        class="checkbox" :class="[
                          finder.selections.municipality.find((item) => item === municipality.slug)
                            ? 'checked'
                            : null,
                        ]"
                      />
                      <div class="detail">
                        <span class="name">{{ municipality.locale[$i18n.locale].title }}</span>
                        <span v-if="countPlacesWithMunicipality(places, municipality.slug) > 0" class="count">{{ countPlacesWithMunicipality(places, municipality.slug) }}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <footer>
            <p>{{ $t('general.filters.autosaving') }}</p>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
