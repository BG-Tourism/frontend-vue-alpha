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

    <section class="category-heading">
        <div class="page-content">
            <div class="container-content">
                <p>{{ $route.params.slug }}</p>
            </div>
        </div>
    </section>
</template>

<script>
    import { computed, defineComponent } from 'vue'
    import { useTitle } from '@vueuse/core'
    import { useI18n } from 'vue-i18n'

    import { useGeneralStore } from '@/stores/GeneralStore'

    export default defineComponent({
        setup() {
            const i18n = useI18n()
            const store = useGeneralStore()
            const titleSuffix = store.titleSuffix

            const pageTitle = computed(() => {
                return i18n.t('page.category.pageTitle') + titleSuffix
            })

            const category = {
                id: 1,
                slug: 'nature',
                locale: {
                    bg: {
                        title: 'Природа'
                    },
                    en: {
                        title: 'Nature'
                    }
                }
            }

            useTitle(pageTitle)

            return {
                category
            }
        }
    })
</script>
