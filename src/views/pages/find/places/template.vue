<template>
    <section class="category-heading">
        <div class="page-content">
            <ul class="breadcrumbs">
                <li>
                    <router-link :to="{ name: 'Homepage' }">
                        {{ $t('general.navigation.homepage') }}
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'Places' }">
                        {{ $t('general.navigation.places') }}
                    </router-link>
                </li>
            </ul>

            <div class="title">
                <h1>{{ $t('general.navigation.places') }}</h1>
                <p>{{ $t('page.category.description.version' + (Math.random() * 5).toFixed(0)) }}</p>
            </div>
        </div>
    </section>

    <section class="categories-list">
        <div class="page-content">
            <div class="page-container">
                <ul>
                    <li v-for="place in places" :key="place.id">
                        <router-link :to="{ name: 'Place', params: { slug: place.slug } }">
                            {{ place.locale[$i18n.locale].title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import { computed, defineComponent } from 'vue'
    import { useTitle } from '@vueuse/core'
    import { useI18n } from 'vue-i18n'

    import places from '@/api/places'

    import { useGeneralStore } from '@/stores/GeneralStore'

    export default defineComponent({
        setup() {
            const i18n = useI18n()
            const store = useGeneralStore()
            const titleSuffix = store.titleSuffix

            const pageTitle = computed(() => {
                return i18n.t('general.navigation.places') + titleSuffix
            })

            useTitle(pageTitle)

            return {
                places
            }
        }
    })
</script>
