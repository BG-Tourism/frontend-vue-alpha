<template>
    <div v-if="!loading">
        <section class="category-heading">
            <div class="page-content">
                <ul class="breadcrumbs">
                    <li>
                        <router-link :to="{ name: 'Homepage' }">
                            {{ $t('general.navigation.homepage') }}
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Categories' }">
                            {{ $t('general.navigation.categories') }}
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Category', params: { slug: category.slug } }">
                            {{ $t('general.navigation.category', { title: category.locale[$i18n.locale].title }) }}
                        </router-link>
                    </li>
                </ul>

                <div class="title">
                    <h1>{{ category.locale[$i18n.locale].title }}</h1>
                    <p>{{ $t('page.category.description.version' + (Math.random() * 5).toFixed(0)) }}</p>
                </div>
            </div>
        </section>

        <section class="categories-list">
            <div class="page-content">
                <div class="page-container">
                    <div :class="['container-content', filteredPlaces.length ? null : 'padding']">
                        <ul v-if="filteredPlaces.length">
                            <li v-for="place in filteredPlaces" :key="place">
                                <router-link :to="{ name: 'Place', params: { slug: place.slug } }">
                                    {{ place.locale[$i18n.locale].title }}
                                </router-link>
                            </li>
                        </ul>
                        <p v-else>{{ $t('general.noResults') }}</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { computed, onBeforeMount, defineComponent, ref } from 'vue'
    import { useTitle } from '@vueuse/core'
    import { useI18n } from 'vue-i18n'
    import { useRoute, useRouter } from 'vue-router'

    import places from '@/api/places'
    import categories from '@/api/categories'

    import getPlacesByCategory from '@/helpers/getPlacesByCategory'

    import { useGeneralStore } from '@/stores/GeneralStore'

    export default defineComponent({
        setup() {
            const i18n = useI18n()
            const route = useRoute()
            const router = useRouter()
            const { locale } = useI18n({ useScope: 'global' })
            const store = useGeneralStore()
            const titleSuffix = store.titleSuffix
            const loading = ref(true)

            let category = categories.find((item) => item.slug === route.params.slug)
            onBeforeMount(() => {
                if (!category) {
                    router.push({ name: 'Categories' })
                } else {
                    loading.value = false
                }
            })

            const pageTitle = computed(() => {
                return i18n.t('page.category.pageTitle') + titleSuffix
            })
            useTitle(pageTitle)

            let filteredPlaces = getPlacesByCategory(places, category.slug)

            return {
                loading,
                locale,
                route,
                category,
                filteredPlaces
            }
        }
    })
</script>
