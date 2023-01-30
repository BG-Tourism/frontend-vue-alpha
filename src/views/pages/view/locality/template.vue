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
                        <router-link :to="{ name: 'Region', params: { slug: region.slug } }">
                            {{ $t('general.navigation.region', { title: region.locale[$i18n.locale].title }) }}
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Locality', params: { region: region.slug, locality: locality.slug } }">
                            {{ $t('general.navigation.locality', { title: locality.locale[$i18n.locale].title }) }}
                        </router-link>
                    </li>
                </ul>

                <div class="title">
                    <h1>{{ locality.locale[$i18n.locale].title }}</h1>
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
    import regions from '@/api/regions'

    import getPlacesByLocality from '@/helpers/getPlacesByLocality'

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

            let region = regions.find((item) => item.slug === route.params.region)
            let locality = region.localities.find((item) => item.slug === route.params.locality)
            onBeforeMount(() => {
                if (!region || !locality) {
                    router.push({ name: 'Regions' })
                } else {
                    loading.value = false
                }
            })

            const pageTitle = computed(() => {
                return i18n.t('page.locality.pageTitle') + titleSuffix
            })
            useTitle(pageTitle)

            let filteredPlaces = getPlacesByLocality(places, locality.slug)

            return {
                loading,
                locale,
                route,
                region,
                locality,
                filteredPlaces
            }
        }
    })
</script>
