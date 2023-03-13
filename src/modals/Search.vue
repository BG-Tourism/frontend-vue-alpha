<script>
import { computed, defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { onClickOutside, onKeyStroke } from '@vueuse/core'

import BaseInput from '@/components/BaseInput.vue'
import TabsList from '@/components/TabsList.vue'

import categories from '@/api/categories'
import places from '@/api/places'
import regions from '@/api/regions'

import { useGeneralStore } from '@/stores/GeneralStore'

export default defineComponent({
  components: {
    BaseInput,
    TabsList,
  },
  setup() {
    const { locale } = useI18n({ useScope: 'global' })
    const generalStore = useGeneralStore()
    const target = ref(null)
    const search = ref('')
    const activeTab = ref(1)
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
          municipalities: [],
          categories: [],
          subcategories: [],
        }
      }

      const filteredPlaces = places.filter(place =>
        place.locale[locale.value].title.toLowerCase().includes(searchTerm.value.toLowerCase().trim()),
      )

      const filteredRegions = regions.filter(region =>
        region.locale[locale.value].title.toLowerCase().includes(searchTerm.value.toLowerCase().trim()),
      )

      const filteredMunicipalities = regions.flatMap(region =>
        region.municipalities.filter(municipality =>
          municipality.locale[locale.value].toLowerCase().includes(searchTerm.value.toLowerCase().trim()),
        ),
      )

      const filteredCategories = categories.filter(category =>
        category.locale[locale.value].title.toLowerCase().includes(searchTerm.value.toLowerCase().trim()),
      )

      const filteredSubcategories = categories.flatMap(region =>
        region.subcategories.filter(subcategory =>
          subcategory.locale[locale.value].toLowerCase().includes(searchTerm.value.toLowerCase().trim()),
        ),
      )

      return {
        places: filteredPlaces,
        regions: filteredRegions,
        municipalities: filteredMunicipalities,
        categories: filteredCategories,
        subcategories: filteredSubcategories,
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
      activeTab.value = 1
    }

    const showTab = (id) => {
      activeTab.value = id
    }

    const handleClose = () => {
      handleClear()

      generalStore.toggleModal('search')
    }

    onKeyStroke('Escape', () => {
      handleClose()
    })

    onClickOutside(target, () => {
      handleClose()
    })

    return {
      generalStore,
      target,
      search,
      categories,
      places,
      regions,
      searchTerm,
      results,
      activeTab,
      updateValue,
      handleClear,
      handleClose,
      showTab,
      highlight,
    }
  },
})
</script>

<template>
  <div v-if="generalStore.modals.search.shown">
    <div
      class="modal" :class="[
        generalStore.modals.search.state === 1 ? 'opening' : null,
        generalStore.modals.search.state === 2 ? 'closing' : null,
      ]"
    >
      <div v-if="[1, 2].includes(generalStore.modals.search.state)" class="wrapper">
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
                <span>{{ $t('general.clear') }}</span>
              </button>
            </template>
          </BaseInput>

          <div v-if="searchTerm.length >= 2" class="results">
            <div class="result-tabs">
              <TabsList>
                <li :class="activeTab === 1 ? 'active' : null">
                  <button @click.prevent="showTab(1)">
                    <span class="title">{{ $t('general.allResults') }}</span>
                    <span class="count">{{ Number(results.places.length + results.regions.length + results.municipalities.length + results.categories.length + results.subcategories.length) }}</span>
                  </button>
                </li>
                <li :class="activeTab === 2 ? 'active' : null">
                  <button @click.prevent="showTab(2)">
                    <span class="title">{{ $t('page.places.title') }}</span>
                    <span class="count">{{ results.places.length }}</span>
                  </button>
                </li>
                <li :class="activeTab === 3 ? 'active' : null">
                  <button @click.prevent="showTab(3)">
                    <span class="title">{{ $t('page.regions.title') }}</span>
                    <span class="count">{{ results.regions.length }}</span>
                  </button>
                </li>
                <li :class="activeTab === 4 ? 'active' : null">
                  <button @click.prevent="showTab(4)">
                    <span class="title">{{ $t('page.municipalities.title') }}</span>
                    <span class="count">{{ results.municipalities.length }}</span>
                  </button>
                </li>
                <li :class="activeTab === 5 ? 'active' : null">
                  <button @click.prevent="showTab(5)">
                    <span class="title">{{ $t('page.categories.title') }}</span>
                    <span class="count">{{ results.categories.length }}</span>
                  </button>
                </li>
                <li :class="activeTab === 6 ? 'active' : null">
                  <button @click.prevent="showTab(6)">
                    <span class="title">{{ $t('page.subcategories.title') }}</span>
                    <span class="count">{{ results.subcategories.length }}</span>
                  </button>
                </li>
              </TabsList>
            </div>
            <div class="result-tab-contents">
              <div v-if="activeTab === 1">
                <ul class="list">
                  <li v-if="results.places.length" class="type">
                    <div class="title">
                      {{ $t('page.places.title') }}
                    </div>
                    <ul>
                      <li v-for="place in results.places" :key="place" class="place">
                        <router-link :to="{ name: 'Place', params: { slug: place.slug } }" @click="handleClose">
                          <picture :class="place.image === null ? 'empty' : null">
                            <img v-if="place.image !== null" :src="place.image" alt="">
                          </picture>
                          <span
                            class="name"
                            v-html="
                              highlight(place.locale[$i18n.locale].title, searchTerm)
                            "
                          />
                          <span class="address">{{ place.locale[$i18n.locale].location }}</span>
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li v-if="results.regions.length" class="type">
                    <div class="title">
                      {{ $t('page.regions.title') }}
                    </div>
                    <ul>
                      <li v-for="region in results.regions" :key="region">
                        <router-link :to="{ name: 'Region', params: { slug: region.slug } }" @click="handleClose">
                          <span v-html="highlight(region.locale[$i18n.locale].title, searchTerm)" />
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li v-if="results.municipalities.length" class="type">
                    <div class="title">
                      {{ $t('page.municipalities.title') }}
                    </div>
                    <ul>
                      <li v-for="municipality in results.municipalities" :key="municipality" class="municipality">
                        <router-link
                          :to="{ name: 'Places', query: { municipality: municipality.slug } }"
                          @click="handleClose"
                        >
                          <picture :class="municipality.image === null ? 'empty' : null">
                            <img v-if="municipality.image !== null" :src="municipality.image" alt="">
                          </picture>
                          <span v-html="highlight(municipality.locale[$i18n.locale], searchTerm)" />
                        </router-link>
                      </li>
                    </ul>
                  </li>
                  <li v-if="results.categories.length" class="type">
                    <div class="title">
                      {{ $t('page.categories.title') }}
                    </div>
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
                  <li v-if="results.subcategories.length" class="type">
                    <div class="title">
                      {{ $t('page.subcategories.title') }}
                    </div>
                    <ul>
                      <li v-for="subcategory in results.subcategories" :key="subcategory">
                        <router-link
                          :to="{ name: 'Places', query: { subcategory: subcategory.slug } }"
                          @click="handleClose"
                        >
                          <span v-html="highlight(subcategory.locale[$i18n.locale], searchTerm)" />
                        </router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <p
                  v-if="
                    searchTerm.length >= 2
                      && !results.places.length
                      && !results.regions.length
                      && !results.municipalities.length
                      && !results.categories.length
                      && !results.subcategories.length
                  "
                  class="no-results"
                  v-html="$t('general.noResults')"
                />
              </div>
              <div v-if="activeTab === 2" class="content">
                <ul v-if="results.places.length">
                  <li v-for="place in results.places" :key="place" class="place">
                    <router-link :to="{ name: 'Place', params: { slug: place.slug } }" @click="handleClose">
                      <picture :class="place.image === null ? 'empty' : null">
                        <img v-if="place.image !== null" :src="place.image" alt="">
                      </picture>
                      <span
                        class="name"
                        v-html="
                          highlight(place.locale[$i18n.locale].title, searchTerm)
                        "
                      />
                      <span class="address">{{ place.locale[$i18n.locale].location }}</span>
                    </router-link>
                  </li>
                </ul>
                <p v-else class="no-results" v-html="$t('general.noResults')" />
              </div>
              <div v-if="activeTab === 3" class="content">
                <ul v-if="results.regions.length">
                  <li v-for="region in results.regions" :key="region">
                    <router-link :to="{ name: 'Region', params: { slug: region.slug } }" @click="handleClose">
                      <span v-html="highlight(region.locale[$i18n.locale].title, searchTerm)" />
                    </router-link>
                  </li>
                </ul>
                <p v-else class="no-results" v-html="$t('general.noResults')" />
              </div>
              <div v-if="activeTab === 4" class="content">
                <ul v-if="results.municipalities.length">
                  <li v-for="municipality in results.municipalities" :key="municipality" class="municipality">
                    <router-link
                      :to="{ name: 'Places', query: { municipality: municipality.slug } }"
                      @click="handleClose"
                    >
                      <picture :class="municipality.image === null ? 'empty' : null">
                        <img v-if="municipality.image !== null" :src="municipality.image" alt="">
                      </picture>
                      <span v-html="highlight(municipality.locale[$i18n.locale], searchTerm)" />
                    </router-link>
                  </li>
                </ul>
                <p v-else class="no-results" v-html="$t('general.noResults')" />
              </div>
              <div v-if="activeTab === 5" class="content">
                <ul v-if="results.categories.length">
                  <li v-for="category in results.categories" :key="category">
                    <router-link
                      :to="{ name: 'Places', query: { category: category.slug } }"
                      @click="handleClose"
                    >
                      <span v-html="highlight(category.locale[$i18n.locale].title, searchTerm)" />
                    </router-link>
                  </li>
                </ul>
                <p v-else class="no-results" v-html="$t('general.noResults')" />
              </div>
              <div v-if="activeTab === 6" class="content">
                <ul v-if="results.subcategories.length">
                  <li v-for="subcategory in results.subcategories" :key="subcategory">
                    <router-link
                      :to="{ name: 'Places', query: { subcategory: subcategory.slug } }"
                      @click="handleClose"
                    >
                      <span v-html="highlight(subcategory.locale[$i18n.locale], searchTerm)" />
                    </router-link>
                  </li>
                </ul>
                <p v-else class="no-results" v-html="$t('general.noResults')" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
