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
                    <router-link :to="{ name: 'Regions' }">
                        {{ $t('general.navigation.regions') }}
                    </router-link>
                </li>
            </ul>

            <div class="title">
                <h1>{{ $t('general.navigation.regions') }}</h1>
                <p>{{ $t('page.category.description.version' + (Math.random() * 5).toFixed(0)) }}</p>
            </div>
        </div>
    </section>

    <section class="categories-list">
        <div class="page-content">
            <div class="page-container">
                <ul>
                    <li v-for="region in regions" :key="region.id">
                        <router-link :to="{ name: 'Region', params: { slug: region.slug } }">
                            {{ region.locale[$i18n.locale].title }}
                            <span>{{ region.places_count }}</span>
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
                return i18n.t('general.navigation.regions') + titleSuffix
            })

            useTitle(pageTitle)

            let regions = [
                {
                    id: 1,
                    slug: 'trakia',
                    places_count: 244,
                    locale: {
                        bg: {
                            title: 'Тракия'
                        },
                        en: {
                            title: 'Trakia'
                        }
                    }
                },
                {
                    id: 2,
                    slug: 'sofia',
                    places_count: 124,
                    locale: {
                        bg: {
                            title: 'София'
                        },
                        en: {
                            title: 'Sofia'
                        }
                    }
                },
                {
                    id: 3,
                    slug: 'rila-pirin',
                    places_count: 162,
                    locale: {
                        bg: {
                            title: 'Рила и Пирин'
                        },
                        en: {
                            title: 'Rila & Pirin'
                        }
                    }
                },
                {
                    id: 4,
                    slug: 'rhodopes',
                    places_count: 93,
                    locale: {
                        bg: {
                            title: 'Родопи'
                        },
                        en: {
                            title: 'Rhodopes'
                        }
                    }
                },
                {
                    id: 5,
                    slug: 'danube',
                    places_count: 367,
                    locale: {
                        bg: {
                            title: 'Дунав'
                        },
                        en: {
                            title: 'Danube'
                        }
                    }
                },
                {
                    id: 6,
                    slug: 'varna',
                    places_count: 45,
                    locale: {
                        bg: {
                            title: 'Варна'
                        },
                        en: {
                            title: 'Varna'
                        }
                    }
                },
                {
                    id: 7,
                    slug: 'bourgas',
                    places_count: 56,
                    locale: {
                        bg: {
                            title: 'Бургас'
                        },
                        en: {
                            title: 'Bourgas'
                        }
                    }
                },
                {
                    id: 8,
                    slug: 'valley-of-roses',
                    places_count: 73,
                    locale: {
                        bg: {
                            title: 'Долината на розите'
                        },
                        en: {
                            title: 'Тhe Valley of Roses'
                        }
                    }
                },
                {
                    id: 9,
                    slug: 'stara-planina',
                    places_count: 106,
                    locale: {
                        bg: {
                            title: 'Стара Планина'
                        },
                        en: {
                            title: 'Stara Planina'
                        }
                    }
                }
            ]

            return {
                regions
            }
        }
    })
</script>
