<script>
import { computed, defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { onClickOutside, onKeyStroke } from '@vueuse/core'

import BaseInput from '@/components/BaseInput.vue'

import categories from '@/api/categories'
import places from '@/api/places'
import regions from '@/api/regions'

import { useFinderStore } from '@/stores/Finder'

export default defineComponent({
  components: {
    BaseInput,
  },
  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    const finder = useFinderStore()
    const target = ref(null)
    const search = ref('')
    const searchTerm = computed(() => {
      // console.log(transliterateToBulgarian(search.value))

      if (locale.value === 'bg')
        return transliterateToBulgarian(search.value)

      return search.value
    })

    const results = computed(() => {
      if (!searchTerm.value.trim() || searchTerm.value.trim().length < 2) {
        return {
          places: [],
          regions: [],
          localities: [],
          categories: [],
        }
      }

      const filteredPlaces = places.filter(place =>
        place.locale[locale.value].title.toLowerCase().includes(searchTerm.value.toLowerCase().trim()),
      )

      const filteredRegions = regions.filter(region =>
        region.locale[locale.value].title.toLowerCase().includes(searchTerm.value.toLowerCase().trim()),
      )

      const filteredLocalities = regions.flatMap(region =>
        region.localities.filter(locality =>
          locality.locale[locale.value].title.toLowerCase().includes(searchTerm.value.toLowerCase().trim()),
        ),
      )

      const filteredCategories = categories.filter(category =>
        category.locale[locale.value].title.toLowerCase().includes(searchTerm.value.toLowerCase().trim()),
      )

      return {
        places: filteredPlaces,
        regions: filteredRegions,
        localities: filteredLocalities,
        categories: filteredCategories,
      }
    })

    function highlight(title, term) {
      return title.replace(new RegExp(term, 'gi'), '<span class="highlight">$&</span>')
    }

    function transliterateToBulgarian(text) {
      const letters = {
        a: 'а',
        b: 'б',
        v: 'в',
        g: 'г',
        d: 'д',
        e: 'е',
        zh: 'ж',
        z: 'з',
        i: 'и',
        y: 'й',
        k: 'к',
        l: 'л',
        m: 'м',
        n: 'н',
        o: 'о',
        p: 'п',
        r: 'р',
        s: 'с',
        t: 'т',
        u: 'у',
        f: 'ф',
        h: 'х',
        c: 'ц',
        ts: 'ц',
        ch: 'ч',
        sh: 'ш',
        sht: 'щ',
        yu: 'ю',
        ya: 'я',
      }

      return text
        .split('')
        .map(char => letters[char.toLowerCase()] || char)
        .join('')
    }

    const updateValue = (event) => {
      search.value = event.target.value
    }

    const handleClear = () => {
      search.value = ''
    }

    const handleClose = () => {
      handleClear()

      finder.toggleModal('search')
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
      search,
      categories,
      places,
      regions,
      searchTerm,
      results,
      updateValue,
      handleClear,
      handleClose,
      highlight,
    }
  },
})
</script>

<template>
  <div v-if="finder.modals.search.shown">
    <div
      class="modal" :class="[
        finder.modals.search.state === 1 ? 'opening' : null,
        finder.modals.search.state === 2 ? 'closing' : null,
      ]"
    >
      <div v-if="[1, 2].includes(finder.modals.search.state)" class="wrapper">
        <div class="close">
          <button>
            <span class="icon-holder">
              <i class="icon-close" />
            </span>
            <span>{{ $t('general.close') }}</span>
          </button>
        </div>
        <div ref="target" class="search-container" :class="[searchTerm.length >= 2 ? 'has-results' : null]">
          <BaseInput
            v-model="search"
            :placeholder="$t('general.filters.searchPlaceholder')"
            :autofocus="true"
            autocomplete="off"
            @input="updateValue"
          >
            <template #prefix>
              <i class="icon-search" />
            </template>
            <template v-if="searchTerm.length" #suffix>
              <button class="clear" :title="$t('general.clear')" @click="handleClear">
                <div class="icon-holder">
                  <i class="icon-clear" />
                </div>
              </button>
            </template>
          </BaseInput>

          <div
            v-if="
              results.places.length
                || results.regions.length
                || results.localities.length
                || results.categories.length
            "
            class="results"
          >
            <ul class="list">
              <li v-if="results.places.length" class="type">
                <h1>{{ $t('page.places.title') }}</h1>
                <ul>
                  <li v-for="place in results.places" :key="place">
                    <router-link :to="{ name: 'Place', params: { slug: place.slug } }" @click="handleClose">
                      <span
                        v-html="
                          `${highlight(place.locale[$i18n.locale].title, searchTerm)
                          }, ${
                            place.locale[$i18n.locale].location}`
                        "
                      />
                    </router-link>
                  </li>
                </ul>
              </li>
              <li v-if="results.regions.length" class="type">
                <h1>{{ $t('page.regions.title') }}</h1>
                <ul>
                  <li v-for="region in results.regions" :key="region">
                    <router-link :to="{ name: 'Region', params: { slug: region.slug } }" @click="handleClose">
                      <span v-html="highlight(region.locale[$i18n.locale].title, searchTerm)" />
                    </router-link>
                  </li>
                </ul>
              </li>
              <li v-if="results.localities.length" class="type">
                <h1>{{ $t('page.localities.title') }}</h1>
                <ul>
                  <li v-for="locality in results.localities" :key="locality">
                    <router-link
                      :to="{ name: 'Places', query: { locality: locality.slug } }"
                      @click="handleClose"
                    >
                      <span v-html="highlight(locality.locale[$i18n.locale].title, searchTerm)" />
                    </router-link>
                  </li>
                </ul>
              </li>
              <li v-if="results.categories.length" class="type">
                <h1>{{ $t('page.categories.title') }}</h1>
                <ul>
                  <li v-for="category in results.categories" :key="category">
                    <router-link
                      :to="{ name: 'Places', query: { category: category.slug } }"
                      @click="handleClose"
                    >
                      <span v-html="highlight(category.locale[$i18n.locale].title, searchTerm)" />
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <p
            v-if="
              searchTerm.length >= 2
                && !results.places.length
                && !results.regions.length
                && !results.localities.length
                && !results.categories.length
            "
            class="no-results"
            v-html="$t('general.noResults')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
