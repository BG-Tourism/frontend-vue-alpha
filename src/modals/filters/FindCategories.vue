<script>
import { defineComponent, ref } from 'vue'
import { onClickOutside, onKeyStroke } from '@vueuse/core'

import places from '@/api/places'
import categories from '@/api/categories'

import countPlacesWithCategory from '@/helpers/countPlacesWithCategory'
import countPlacesWithSubcategory from '@/helpers/countPlacesWithSubcategory'

import { useFinderStore } from '@/stores/Finder'

export default defineComponent({
  setup() {
    const finder = useFinderStore()
    const target = ref(null)

    const handleClose = () => {
      finder.toggleModal('category')
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
      categories,
      target,
      countPlacesWithCategory,
      countPlacesWithSubcategory,
      toggleSelection,
      handleClose,
    }
  },
})
</script>

<template>
  <div v-if="finder.modals.category.shown">
    <div
      class="modal" :class="[
        finder.modals.category.state === 1 ? 'opening' : null,
        finder.modals.category.state === 2 ? 'closing' : null,
      ]"
    >
      <div v-if="[1, 2].includes(finder.modals.category.state)" class="wrapper">
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
            <span>{{ $t('general.filters.categories') }}</span>
          </div>
          <ul class="section-content">
            <li v-for="category in categories" :key="category" :class="finder.loadings.selections ? 'disabled' : null">
              <div class="action" @click="toggleSelection('category', category.slug)">
                <button
                  class="checkbox" :class="[
                    finder.selections.category.find((item) => item === category.slug) ? 'checked' : null,
                  ]"
                />
                <div class="detail">
                  <span class="name">{{ category.locale[$i18n.locale].title }}</span>
                  <span v-if="countPlacesWithCategory(places, category.slug) > 0" class="count">{{ countPlacesWithCategory(places, category.slug) }}</span>
                </div>
              </div>
              <div v-if="finder.selections.category.includes(category.slug)" class="subitems">
                <ul>
                  <li
                    v-for="subcategory in category.subcategories"
                    :key="subcategory"
                    :class="finder.loadings.selections ? 'disabled' : null"
                  >
                    <div class="action" @click="toggleSelection('subcategory', subcategory.slug)">
                      <button
                        class="checkbox" :class="[
                          finder.selections.subcategory.find((item) => item === subcategory.slug)
                            ? 'checked'
                            : null,
                        ]"
                      />
                      <div class="detail">
                        <span class="name">{{ subcategory.locale[$i18n.locale].title }}</span>
                        <span v-if="countPlacesWithSubcategory(places, subcategory.slug) > 0" class="count">{{ countPlacesWithSubcategory(places, subcategory.slug) }}</span>
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
