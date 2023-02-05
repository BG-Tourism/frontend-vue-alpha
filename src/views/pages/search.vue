<template>
    <section class="top-section">
        <div class="page-content">
            <div class="title">
                <h1>{{ $t('page.search.title') }}</h1>
                <p>{{ $t('page.search.description') }}</p>
            </div>

            <div class="filters">
                <BaseInput v-model="searchTerm" :placeholder="$t('general.filters.searchPlaceholder')">
                    <template #prefix>
                        <i class="icon-search" />
                    </template>
                </BaseInput>
            </div>
        </div>
    </section>

    <section class="search-list">
        <div class="page-content">
            <ul class="list">
                <li v-if="results.places.length" class="type">
                    <h3>{{ $t('page.places.title') }}</h3>
                    <ul>
                        <li v-for="place in results.places" :key="place">
                            <p v-html="highlight(place.locale[$i18n.locale].title, searchTerm)" />
                        </li>
                    </ul>
                </li>
                <li v-if="results.regions.length" class="type">
                    <h3>{{ $t('page.regions.title') }}</h3>
                    <ul>
                        <li v-for="region in results.regions" :key="region">
                            <p v-html="highlight(region.locale[$i18n.locale].title, searchTerm)" />
                        </li>
                    </ul>
                </li>
                <li v-if="results.localities.length" class="type">
                    <h3>{{ $t('page.localities.title') }}</h3>
                    <ul>
                        <li v-for="locality in results.localities" :key="locality">
                            <p v-html="highlight(locality.locale[$i18n.locale].title, searchTerm)" />
                        </li>
                    </ul>
                </li>
                <li v-if="results.categories.length" class="type">
                    <h3>{{ $t('page.categories.title') }}</h3>
                    <ul>
                        <li v-for="category in results.categories" :key="category">
                            <p v-html="highlight(category.locale[$i18n.locale].title, searchTerm)" />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
    import { computed, defineComponent, ref } from 'vue'
    import { useI18n } from 'vue-i18n'

    import categories from '@/api/categories'
    import places from '@/api/places'
    import regions from '@/api/regions'

    import BaseInput from '@/components/BaseInput.vue'

    export default defineComponent({
        name: 'SearchForm',
        components: {
            BaseInput
        },
        setup() {
            const { locale } = useI18n({ useScope: 'global' })
            const searchTerm = ref('')

            const results = computed(() => {
                if (!searchTerm.value.trim() || searchTerm.value.trim().length <= 2)
                    return {
                        places: [],
                        regions: [],
                        localities: [],
                        categories: []
                    }

                const filteredPlaces = places.filter((place) =>
                    place.locale[locale.value].title.toLowerCase().includes(searchTerm.value.toLowerCase().trim())
                )

                const filteredRegions = regions.filter((region) =>
                    region.locale[locale.value].title.toLowerCase().includes(searchTerm.value.toLowerCase().trim())
                )

                const filteredLocalities = regions.flatMap((region) =>
                    region.localities.filter((locality) =>
                        locality.locale[locale.value].title.toLowerCase().includes(searchTerm.value.toLowerCase().trim())
                    )
                )

                const filteredCategories = categories.filter((category) =>
                    category.locale[locale.value].title.toLowerCase().includes(searchTerm.value.toLowerCase().trim())
                )

                return {
                    places: filteredPlaces,
                    regions: filteredRegions,
                    localities: filteredLocalities,
                    categories: filteredCategories
                }
            })

            function highlight(title, searchTerm) {
                return title.replace(new RegExp(searchTerm, 'gi'), '<span>$&</span>')
            }

            return {
                searchTerm,
                results,
                highlight
            }
        }
    })
</script>
