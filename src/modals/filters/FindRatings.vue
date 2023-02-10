<script>
import { defineComponent, ref } from 'vue'
import { onClickOutside, onKeyStroke } from '@vueuse/core'

import { useFinderStore } from '@/stores/Finder'

export default defineComponent({
  setup() {
    const finder = useFinderStore()
    const target = ref(null)

    const handleClose = () => {
      finder.toggleModal('rating')
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
      target,
      toggleSelection,
      handleClose,
    }
  },
})
</script>

<template>
  <div v-if="finder.modals.rating.shown">
    <div
      class="modal" :class="[
        finder.modals.rating.state === 1 ? 'opening' : null,
        finder.modals.rating.state === 2 ? 'closing' : null,
      ]"
    >
      <div v-if="[1, 2].includes(finder.modals.rating.state)" class="wrapper">
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
            <span>{{ $t('general.filters.rating') }}</span>
          </div>
          <ul class="section-content">
            <li
              v-for="rating in [5, 4, 3, 2, 1]"
              :key="rating"
              :class="finder.loadings.selections ? 'disabled' : null"
            >
              <div class="action" @click="toggleSelection('rating', rating)">
                <button
                  class="checkbox" :class="[
                    finder.selections.rating.find((item) => item === rating) ? 'checked' : null,
                  ]"
                />
                <span class="stars" :class="[`style-${rating}`]">
                  <i v-for="icon in rating" :key="icon" class="icon-star-solid" />
                </span>
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
