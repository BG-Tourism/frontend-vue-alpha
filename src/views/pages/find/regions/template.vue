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
        </div>
    </section>

    <div class="page-content">
        <div class="page-container">
            <ul>
                <li v-for="region in regions" :key="region.id">
                    <router-link :to="{ name: 'Region', params: { slug: region.slug } }">
                        {{ region.locale[$i18n.locale].title }}
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
                return i18n.t('general.navigation.regions') + titleSuffix
            })

            useTitle(pageTitle)

            let regions = [
                {
                    id: 1,
                    slug: 'trakia',
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
