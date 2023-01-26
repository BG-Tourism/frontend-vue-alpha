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
                    slug: 'history-and-culture',
                    places_count: 124,
                    locale: {
                        bg: {
                            title: 'История и култура'
                        },
                        en: {
                            title: 'History & Culture'
                        }
                    }
                },
                {
                    id: 2,
                    slug: 'nature-and-parks',
                    places_count: 64,
                    locale: {
                        bg: {
                            title: 'Природа и паркове'
                        },
                        en: {
                            title: 'Nature & Parks'
                        }
                    }
                },
                {
                    id: 3,
                    slug: 'religion',
                    places_count: 261,
                    locale: {
                        bg: {
                            title: 'Религия'
                        },
                        en: {
                            title: 'Religion'
                        }
                    }
                },
                {
                    id: 4,
                    slug: 'architecture',
                    places_count: 91,
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
                    id: 5,
                    slug: 'beaches-and-ski-resorts',
                    places_count: 12,
                    locale: {
                        bg: {
                            title: 'Плажове и ски курорти'
                        },
                        en: {
                            title: 'Beaches & Ski Resorts'
                        }
                    }
                },
                {
                    id: 6,
                    slug: 'caves',
                    places_count: 23,
                    locale: {
                        bg: {
                            title: 'Пещери'
                        },
                        en: {
                            title: 'Caves'
                        }
                    }
                },
                {
                    id: 7,
                    slug: 'eco-trails-and-scenic-routes',
                    places_count: 157,
                    locale: {
                        bg: {
                            title: 'Екопътеки и живописни маршрути'
                        },
                        en: {
                            title: 'Eco-trails & scenic routes'
                        }
                    }
                },
                {
                    id: 8,
                    slug: 'zoos-and-aquariums',
                    places_count: 8,
                    locale: {
                        bg: {
                            title: 'Зоологически градини и аквариуми'
                        },
                        en: {
                            title: 'Zoos & Aquariums'
                        }
                    }
                },
                {
                    id: 9,
                    slug: 'art-galleries',
                    places_count: 17,
                    locale: {
                        bg: {
                            title: 'Художествени галерии'
                        },
                        en: {
                            title: 'Art galleries'
                        }
                    }
                },
                {
                    id: 10,
                    slug: 'waterfalls-and-lakes',
                    places_count: 61,
                    locale: {
                        bg: {
                            title: 'Водопади и езера'
                        },
                        en: {
                            title: 'Waterfalls'
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
