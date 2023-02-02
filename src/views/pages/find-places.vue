<template>
    <section class="top-section">
        <div class="page-content">
            <div class="title">
                <h2>{{ $t('page.places.subtitle') }}</h2>
                <h1>{{ $t('general.navigation.places') }}</h1>
                <p>{{ $t('page.places.description') }}</p>
            </div>
            <div class="filters">
                <h3>{{ $t('general.filters.filterBy') }}</h3>
                <ul>
                    <li>
                        <div :class="['filter', finder.selections.category.length ? 'contains-selections' : null]">
                            <span v-if="!finder.selections.category.length" class="name" @click="toggleModal('category')">
                                {{ $t('general.filters.categories') }}
                            </span>
                            <span v-else class="name" @click="toggleModal('category')">
                                {{ $t('general.filters.categoriesCounter', finder.selections.category.length) }}
                            </span>
                            <div v-if="finder.selections.category.length" class="clear" @click="clearSelections('category')">
                                <span>
                                    <i class="icon-close" />
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div
                            :class="[
                                'filter',
                                Number(finder.selections.region.length + finder.selections.locality.length)
                                    ? 'contains-selections'
                                    : null
                            ]"
                        >
                            <span
                                v-if="!Number(finder.selections.region.length + finder.selections.locality.length)"
                                class="name"
                                @click="toggleModal('region')"
                            >
                                {{ $t('general.filters.regionsAndLocalities') }}
                            </span>
                            <span v-else class="name" @click="toggleModal('region')">
                                {{
                                    $t(
                                        'general.filters.regionsAndLocalitiesCounter',
                                        Number(finder.selections.region.length + finder.selections.locality.length)
                                    )
                                }}
                            </span>
                            <div
                                v-if="Number(finder.selections.region.length + finder.selections.locality.length)"
                                class="clear"
                                @click="clearSelections('region')"
                            >
                                <span>
                                    <i class="icon-close" />
                                </span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div :class="['filter', finder.selections.rating.length ? 'contains-selections' : null]">
                            <span v-if="!finder.selections.rating.length" class="name" @click="toggleModal('rating')">
                                {{ $t('general.filters.rating') }}
                            </span>
                            <span v-else class="name" @click="toggleModal('rating')">
                                {{ $t('general.filters.ratingCounter', finder.selections.rating.length) }}
                            </span>
                            <div v-if="finder.selections.rating.length" class="clear" @click="clearSelections('rating')">
                                <span>
                                    <i class="icon-close" />
                                </span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="places-list">
        <div class="page-content">
            <div :class="['results', finder.loadings.selections ? 'disabled' : null]">
                <div v-if="!placesLoading">
                    <div v-if="places.length">
                        <ul class="list">
                            <li v-for="place in placesList()" :key="place">
                                <router-link :to="{ name: 'Place', params: { slug: place.slug } }">
                                    <picture>
                                        <img :src="place.image" alt="" loading="lazy" />
                                        <div class="badges">
                                            <div class="stars">
                                                <i class="icon-star-solid" />
                                                <span>{{ place.user_score.toFixed(1) }}</span>
                                            </div>
                                            <div class="visitors">
                                                <i class="icon-users" />
                                                <span>{{ place.visitors }}</span>
                                            </div>
                                        </div>
                                    </picture>
                                    <h3>{{ place.locale[$i18n.locale].title }}</h3>
                                    <p>{{ place.locale[$i18n.locale].location }}</p>
                                </router-link>
                            </li>
                        </ul>

                        <ul class="pagination">
                            <li>
                                <button :disabled="finder.list.pagination.currentPage === 1" @click="previousPage">
                                    <i class="icon-arrow-left-tail" />
                                    <span>{{ $t('general.pagination.previous') }}</span>
                                </button>
                            </li>
                            <li class="pages">
                                <p
                                    v-html="
                                        $t('general.pagination.pages', {
                                            current: finder.list.pagination.currentPage,
                                            total: numberOfPages(),
                                            places: places.length
                                        })
                                    "
                                />
                            </li>
                            <li>
                                <button :disabled="finder.list.pagination.currentPage === numberOfPages()" @click="nextPage">
                                    <span>{{ $t('general.pagination.next') }}</span>
                                    <i class="icon-arrow-right-tail" />
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div v-else class="page-container">
                        <div class="container-content padding">{{ $t('general.noResults') }}</div>
                    </div>
                </div>
                <div v-else class="page-container">
                    <div class="container-content padding">{{ $t('general.loading') }}</div>
                </div>
            </div>
        </div>
    </section>

    <FindCategories />
    <FindRegionsAndLocalities />
    <FindRatings />
</template>

<script>
    import { computed, defineComponent, onBeforeMount, onBeforeUnmount } from 'vue'
    import { useTitle } from '@vueuse/core'
    import { useI18n } from 'vue-i18n'
    import { useRoute } from 'vue-router'

    import categories from '@/api/categories'
    import regions from '@/api/regions'
    import places from '@/api/places'

    import { useGeneralStore } from '@/stores/GeneralStore'
    import { useFinderStore } from '@/stores/Finder'

    import FindCategories from '@/modals/filters/FindCategories.vue'
    import FindRegionsAndLocalities from '@/modals/filters/FindRegionsAndLocalities.vue'
    import FindRatings from '@/modals/filters/FindRatings.vue'

    export default defineComponent({
        components: {
            FindCategories,
            FindRegionsAndLocalities,
            FindRatings
        },
        setup() {
            const i18n = useI18n()
            const route = useRoute()
            const store = useGeneralStore()
            const finder = useFinderStore()
            const titleSuffix = store.titleSuffix

            let productsPerPage = 5

            const pageTitle = computed(() => {
                return i18n.t('general.navigation.places') + titleSuffix
            })
            useTitle(pageTitle)

            onBeforeMount(() => {
                const convertToJson = (parameters) => {
                    const object = {}

                    for (const key in parameters) {
                        object[key] = parameters[key].split(',').map((value) => {
                            if (!isNaN(value)) {
                                return Number(value)
                            }

                            return value
                        })

                        finder.manageItem(key, object[key])
                    }

                    return object
                }

                convertToJson(route.query)

                finder.fetch(true)
            })

            onBeforeUnmount(() => {
                finder.truncate()
            })

            const places = computed(() => {
                return finder.list.data
            })

            const placesLoading = computed(() => {
                return finder.loadings.list
            })

            const toggleModal = (type) => {
                finder.popups[type].shown = true
                finder.popups[type].state = 1
            }

            const clearSelections = (type) => {
                finder.truncateByType(type)
            }

            function numberOfPages() {
                return Math.ceil(places.value.length / productsPerPage)
            }

            function placesList() {
                const start = (finder.list.pagination.currentPage - 1) * productsPerPage
                const end = start + productsPerPage

                return places.value.slice(start, end)
            }

            function previousPage() {
                if (finder.list.pagination.currentPage > 1) {
                    finder.list.pagination.currentPage--
                }
            }

            function nextPage() {
                if (finder.list.pagination.currentPage < numberOfPages()) {
                    finder.list.pagination.currentPage++
                }
            }

            function changePage(page) {
                finder.list.pagination.currentPage = page
            }

            return {
                categories,
                regions,
                places,
                placesLoading,
                finder,
                toggleModal,
                clearSelections,
                numberOfPages,
                previousPage,
                nextPage,
                changePage,
                placesList
            }
        }
    })
</script>
