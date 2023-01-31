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
                        <router-link :to="{ name: 'Regions' }">
                            {{ $t('general.navigation.regions') }}
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Region', params: { slug: region.slug } }">
                            {{ $t('general.navigation.region', { title: region.locale[$i18n.locale].title }) }}
                        </router-link>
                    </li>
                </ul>

                <div class="title">
                    <h1>{{ region.locale[$i18n.locale].title }}</h1>
                    <p>{{ region.locale[$i18n.locale].description }}</p>
                </div>
            </div>
        </section>

        <section class="categories-list">
            <div class="page-content">
                <div class="page-container">
                    <h2>{{ $t('general.navigation.localities', { count: region.localities.length }) }}</h2>
                    <ul>
                        <li v-for="locality in region.localities" :key="locality">
                            <router-link
                                :to="{ name: 'Locality', params: { region: route.params.slug, locality: locality.slug } }"
                            >
                                {{ locality.locale[$i18n.locale].title }}
                                <span v-if="countPlacesWithLocality(places, locality.slug)">
                                    {{ countPlacesWithLocality(places, locality.slug) }}
                                </span>
                            </router-link>
                        </li>
                    </ul>
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

    import countPlacesWithLocality from '@/helpers/countPlacesWithLocality'

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

            let region = regions.find((item) => item.slug === route.params.slug)
            onBeforeMount(() => {
                if (!region) {
                    router.push({ name: 'Regions' })
                } else {
                    loading.value = false
                }
            })

            const pageTitle = computed(() => {
                return i18n.t('page.region.pageTitle') + titleSuffix
            })
            useTitle(pageTitle)

            return {
                loading,
                locale,
                route,
                region,
                places,
                countPlacesWithLocality
            }
        }
    })
</script>
