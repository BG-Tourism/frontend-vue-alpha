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
        </div>
    </section>

    <div class="page-content">
        <div class="page-container">
            <ul>
                <li v-for="category in categories" :key="category.id">
                    <router-link :to="{ name: 'Category', params: { slug: category.slug } }">
                        {{ category.locale[$i18n.locale].title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
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
                return i18n.t('general.navigation.categories') + titleSuffix
            })

            const categories = [
                {
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
                },
                {
                    id: 2,
                    slug: 'architecture',
                    locale: {
                        bg: {
                            title: 'Архитектура'
                        },
                        en: {
                            title: 'Architecture'
                        }
                    }
                },
                {
                    id: 3,
                    slug: 'monuments',
                    locale: {
                        bg: {
                            title: 'Паметници'
                        },
                        en: {
                            title: 'Monuments'
                        }
                    }
                },
                {
                    id: 4,
                    slug: 'seasonal',
                    locale: {
                        bg: {
                            title: 'Сезонен туризъм'
                        },
                        en: {
                            title: 'Seasonal'
                        }
                    }
                }
            ]

            useTitle(pageTitle)

            return {
                categories
            }
        }
    })
</script>
