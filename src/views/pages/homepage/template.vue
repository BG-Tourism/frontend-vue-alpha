<template>
    <section class="hero">
        <div class="page-content">
            <div class="preview">
                <picture>
                    <img src="/images/photos/6.jpg" alt="" loading="lazy" />
                </picture>
                <div class="content">
                    <h1 v-html="$t('page.homepage.slogan.title')" />
                    <p v-html="$t('page.homepage.slogan.description')" />
                    <button class="see-more" v-html="$t('page.homepage.slogan.button')" />
                </div>
            </div>
            <div class="search-box">
                <div class="wrapper">
                    <BaseInput :placeholder="$t('page.homepage.slogan.search')">
                        <template #prefix>
                            <i class="icon-navigation" />
                        </template>
                    </BaseInput>
                    <button>
                        <i class="icon-search" />
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section class="locations">
        <div class="page-content">
            <div class="featured">
                <div class="title">
                    <h2>{{ $t('page.homepage.locations.featured.title') }}</h2>
                    <p>{{ $t('page.homepage.locations.featured.description') }}</p>
                </div>

                <ul class="list">
                    <li v-for="place in categoryPopularNow" :key="place.id">
                        <router-link :to="{ name: 'Place', params: { slug: place.slug } }">
                            <picture>
                                <img :src="place.image" alt="" loading="lazy" />
                            </picture>
                            <h3>{{ place.locale[$i18n.locale].title }}</h3>
                            <p>{{ place.locale[$i18n.locale].location }}</p>
                        </router-link>
                    </li>
                </ul>

                <button class="see-more">
                    {{ $t('general.showMore') }}
                </button>
            </div>

            <div class="categories">
                <div class="title">
                    <h2>{{ $t('page.homepage.locations.categories.title') }}</h2>
                    <p>{{ $t('page.homepage.locations.categories.description') }}</p>
                </div>

                <ul class="tabs">
                    <li>
                        <button class="active">
                            <i class="icon-category-nature" />
                            <span>{{ $t('page.homepage.locations.categories.tabs.nature') }}</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="icon-category-architecture" />
                            <span>{{ $t('page.homepage.locations.categories.tabs.architecture') }}</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="icon-category-monuments" />
                            <span>{{ $t('page.homepage.locations.categories.tabs.monuments') }}</span>
                        </button>
                    </li>
                    <li>
                        <button>
                            <i class="icon-category-seasonal" />
                            <span>{{ $t('page.homepage.locations.categories.tabs.seasonal') }}</span>
                        </button>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <router-link :to="{ name: 'Categories' }">
                            <i class="icon-category-all" />
                            <span>{{ $t('page.homepage.locations.categories.tabs.viewAll') }}</span>
                        </router-link>
                    </li>
                </ul>

                <div class="tab-content">
                    <ul class="list">
                        <li v-for="place in categoryNature" :key="place.id">
                            <router-link :to="{ name: 'Place', params: { slug: place.slug } }">
                                <picture>
                                    <img :src="place.image" alt="" loading="lazy" />
                                    <div class="badges">
                                        <div class="stars">
                                            <i class="icon-star-solid" />
                                            <span>{{ place.user_score.toFixed(1) }}</span>
                                        </div>
                                        <div class="visitors">
                                            <i class="icon-users" />
                                            <span>{{ place.visitors }}</span>
                                        </div>
                                    </div>
                                </picture>
                                <h3>{{ place.locale[$i18n.locale].title }}</h3>
                                <p>{{ place.locale[$i18n.locale].location }}</p>
                            </router-link>
                        </li>
                    </ul>

                    <router-link :to="{ name: 'Category', params: { slug: 'nature' } }" class="see-more">
                        {{ $t('general.seeMore') }}
                    </router-link>
                </div>
            </div>
        </div>
    </section>

    <section class="destinations">
        <div class="page-content">
            <div class="wrapper">
                <div class="title">
                    <h2>{{ $t('page.homepage.destinations.title') }}</h2>
                    <p>{{ $t('page.homepage.destinations.description') }}</p>
                </div>

                <ul class="list">
                    <li v-for="region in regions" :key="region.id">
                        <router-link :to="{ name: 'Region', params: { slug: region.slug } }">
                            <picture>
                                <img :src="region.image" alt="" loading="lazy" />
                            </picture>
                            <h3>{{ region.locale[$i18n.locale].title }}</h3>
                            <p v-html="$t('page.homepage.destinations.locations_count', { count: region.locations_count })" />
                        </router-link>
                    </li>
                </ul>

                <router-link :to="{ name: 'Regions' }" class="see-more">
                    {{ $t('general.seeMore') }}
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    import { computed, defineComponent } from 'vue'
    import { useTitle } from '@vueuse/core'
    import { useI18n } from 'vue-i18n'

    import BaseInput from '@/components/BaseInput.vue'

    import { useGeneralStore } from '@/stores/GeneralStore'

    export default defineComponent({
        components: {
            BaseInput
        },
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
                }
            ]

            const categoryNature = [
                {
                    id: 5,
                    slug: 'belogradchishkite-skali',
                    image: '/images/photos/9.jpg',
                    user_score: 4.2,
                    visitors: 2345,
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
                    user_score: 5,
                    visitors: 1244,
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
                    user_score: 3.6,
                    visitors: 614,
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
                    user_score: 4.7,
                    visitors: 3821,
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

            let regions = [
                {
                    id: 1,
                    slug: 'trakia',
                    image: '/images/regions/trakia.jpg',
                    locations_count: 213,
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
                    image: '/images/regions/sofia.jpg',
                    locations_count: 52,
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
                    image: '/images/regions/rila-pirin.jpg',
                    locations_count: 85,
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
                    image: '/images/regions/rhodopes.jpg',
                    locations_count: 61,
                    locale: {
                        bg: {
                            title: 'Родопи'
                        },
                        en: {
                            title: 'Rhodopes'
                        }
                    }
                }
            ]

            return {
                categoryPopularNow,
                categoryNature,
                regions
            }
        }
    })
</script>
