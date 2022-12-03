<template>
    <section class="hero">
        <div class="page-content">
            <h1 v-html="$t('page.homepage.slogan.title')" />
            <p v-html="$t('page.homepage.slogan.description')" />
        </div>
    </section>

    <section class="locations">
        <div class="page-content">
            <div class="category">
                <div class="title">
                    <h2>{{ $t('page.homepage.locations.categories.popular.slogan.title') }}</h2>
                    <p>{{ $t('page.homepage.locations.categories.popular.slogan.description') }}</p>
                </div>

                <ul class="list">
                    <li v-for="place in categoryPopularNow" :key="place.id">
                        <router-link :to="{ name: 'Place', params: { slug: place.slug } }">
                            <picture>
                                <img :src="place.image" alt="" loading="lazy" />
                            </picture>
                            <h3>
                                <span>{{ place.locale[$i18n.locale].title }}</span>
                            </h3>
                        </router-link>
                    </li>
                </ul>

                <router-link :to="{ name: 'Category', params: { category: 'popular' } }" class="button big blue">
                    <span>{{ $t('page.homepage.locations.viewMore') }}</span>
                </router-link>
            </div>
            <div class="category">
                <div class="title">
                    <h2>{{ $t('page.homepage.locations.categories.winter.slogan.title') }}</h2>
                    <p>{{ $t('page.homepage.locations.categories.winter.slogan.description') }}</p>
                </div>

                <ul class="list">
                    <li v-for="place in categoryWinter" :key="place.id">
                        <router-link :to="{ name: 'Place', params: { slug: place.slug } }">
                            <picture>
                                <img :src="place.image" alt="" loading="lazy" />
                            </picture>
                            <h3>
                                <span>{{ place.locale[$i18n.locale].title }}</span>
                            </h3>
                        </router-link>
                    </li>
                </ul>

                <router-link :to="{ name: 'Category', params: { category: 'winter' } }" class="button big blue">
                    <span>{{ $t('page.homepage.locations.viewMore') }}</span>
                </router-link>
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
                return i18n.t('page.homepage.pageTitle') + titleSuffix
            })

            useTitle(pageTitle)

            const categoryPopularNow = [
                {
                    id: 4,
                    slug: 'yazovir-batak',
                    image: '/images/photos/8.jpg',
                    locale: {
                        bg: {
                            title: 'Язовир "Батак"',
                            location: 'до гр. Батак'
                        },
                        en: {
                            title: 'Batak Dam',
                            location: 'next to Batak City'
                        }
                    }
                },
                {
                    id: 7,
                    slug: 'dyavolski-most',
                    image: '/images/photos/1.jpg',
                    locale: {
                        bg: {
                            title: 'Дяволски мост',
                            location: 'до гр. Дядовци'
                        },
                        en: {
                            title: "The Devil's Bridge",
                            location: 'next to Dyadovtsi City'
                        }
                    }
                },
                {
                    id: 2,
                    slug: 'vrachanski-balkan',
                    image: '/images/photos/7.jpg',
                    locale: {
                        bg: {
                            title: 'Врачански Балкан',
                            location: 'до гр. Враца'
                        },
                        en: {
                            title: 'Vratsa Balkan',
                            location: 'next to Vratsa City'
                        }
                    }
                },
                {
                    id: 3,
                    slug: 'priroden-park-rilski-manastir',
                    image: '/images/photos/2.jpg',
                    locale: {
                        bg: {
                            title: 'Природен парк "Рилски манастир"',
                            location: 'гр. Рила'
                        },
                        en: {
                            title: 'Rila Monastery Nature Park',
                            location: 'Rila City'
                        }
                    }
                },
                {
                    id: 9,
                    slug: 'podkovata-zavoyat-na-yazovir-kardzhali',
                    image: '/images/photos/6.jpg',
                    locale: {
                        bg: {
                            title: '"Подковата" завоят на язовир Кърджали',
                            location: 'до гр. Кърджали'
                        },
                        en: {
                            title: 'The "horseshoe" bend of the Kardzhali dam',
                            location: 'next to Kardzhali City'
                        }
                    }
                }
            ]

            const categoryWinter = [
                {
                    id: 5,
                    slug: 'belogradchishkite-skali',
                    image: '/images/photos/9.jpg',
                    locale: {
                        bg: {
                            title: 'Белоградчишките скали',
                            location: 'гр. Белоградчик'
                        },
                        en: {
                            title: 'The Rocks of Belogradchik',
                            location: 'Belogradchik City'
                        }
                    }
                },
                {
                    id: 6,
                    slug: 'natsionalen-park-muzey-shipka',
                    image: '/images/photos/5.jpg',
                    locale: {
                        bg: {
                            title: 'Национален парк-музей "Шипка"',
                            location: 'до гр. Шипка'
                        },
                        en: {
                            title: 'Shipka National Park-Museum',
                            location: 'next to Shipka City'
                        }
                    }
                },
                {
                    id: 8,
                    slug: 'krepost-tsarevets',
                    image: '/images/photos/3.jpg',
                    locale: {
                        bg: {
                            title: 'Крепост Царевец',
                            location: 'гр. Велико Търново'
                        },
                        en: {
                            title: 'Fortress Tsarevets',
                            location: 'Veliko Tarnovo City'
                        }
                    }
                },
                {
                    id: 1,
                    slug: 'hram-pametnik-sveti-aleksandar-nevski',
                    image: '/images/photos/4.jpg',
                    locale: {
                        bg: {
                            title: 'Храм-паметник "Свети Александър Невски"',
                            location: 'гр. София'
                        },
                        en: {
                            title: 'St. Alexander Nevsky Temple-Monument',
                            location: 'Sofia City'
                        }
                    }
                }
            ]

            return {
                categoryPopularNow,
                categoryWinter
            }
        }
    })
</script>
