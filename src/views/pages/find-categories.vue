<template>
    <section class="top-section">
        <div class="page-content">
            <div class="title">
                <h2>{{ $t('page.categories.subtitle') }}</h2>
                <h1>{{ $t('page.categories.title') }}</h1>
                <p>{{ $t('page.categories.description') }}</p>
            </div>
        </div>
    </section>

    <section class="categories-list">
        <div class="page-content">
            <div class="page-container">
                <ul>
                    <li v-for="category in categories" :key="category">
                        <router-link :to="{ name: 'Places', query: { category: category.slug } }">
                            {{ category.locale[$i18n.locale].title }}
                            <span v-if="countPlacesWithCategory(places, category.slug)">
                                {{ countPlacesWithCategory(places, category.slug) }}
                            </span>
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
    import categories from '@/api/categories'

    import countPlacesWithCategory from '@/helpers/countPlacesWithCategory'

    import { useGeneralStore } from '@/stores/GeneralStore'

    export default defineComponent({
        setup() {
            const i18n = useI18n()
            const store = useGeneralStore()
            const titleSuffix = store.titleSuffix

            const pageTitle = computed(() => {
                return i18n.t('page.categories.title') + titleSuffix
            })

            useTitle(pageTitle)

            return {
                places,
                categories,
                countPlacesWithCategory
            }
        }
    })
</script>
