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
                    <router-link :to="{ name: 'Categories' }">
                        {{ $t('general.navigation.categories') }}
                    </router-link>
                </li>
            </ul>

            <div class="title">
                <h1>{{ $t('general.navigation.categories') }}</h1>
                <p>{{ $t('page.category.description.version' + (Math.random() * 5).toFixed(0)) }}</p>
            </div>
        </div>
    </section>

    <section class="categories-list">
        <div class="page-content">
            <div class="page-container">
                <ul>
                    <li v-for="category in categories" :key="category.id">
                        <router-link :to="{ name: 'Category', params: { slug: category.slug } }">
                            {{ category.locale[$i18n.locale].title }}
                            <span>{{ category.places_count }}</span>
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

    import categories from '@/api/categories'

    import { useGeneralStore } from '@/stores/GeneralStore'

    export default defineComponent({
        setup() {
            const i18n = useI18n()
            const store = useGeneralStore()
            const titleSuffix = store.titleSuffix

            const pageTitle = computed(() => {
                return i18n.t('general.navigation.categories') + titleSuffix
            })

            useTitle(pageTitle)

            return {
                categories
            }
        }
    })
</script>
