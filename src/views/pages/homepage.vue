<template>
    <section class="heading">
        <picture>
            <img src="/images/nuxt-hero-gradient.svg" alt="" />
        </picture>
        <div class="page-content">
            <div class="wrapper">
                <div class="content">
                    <h1 v-html="$t('page.homepage.slogan.title')" />
                    <p v-html="$t('page.homepage.slogan.descriptions.v' + number)" />
                    <div class="buttons">
                        <router-link :to="{ name: 'Places' }" class="see-more">
                            <span>{{ $t('page.homepage.slogan.button') }}</span>
                        </router-link>
                        <button class="generate" @click="generateNumber">
                            <i class="icon-refresh" />
                        </button>
                    </div>
                </div>
                <div class="object">
                    <span>
                        По идея на Nuxt уебсайта тук може да има въртящ се 3D модел на връх Шипка, Мадарският конник, НДК,
                        Античният театър или друг обект.
                    </span>
                    <span>
                        Изображението за фон също е взето от сайта на Nuxt, затова трябва да се създаде ново, което да наподобява
                        сияние и да е подходящо спрямо 3D модела, който ще застане върху него.
                    </span>
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
                    <li v-for="place in limitedPlaces" :key="place">
                        <router-link :to="{ name: 'Place', params: { slug: place.slug } }">
                            <picture>
                                <img :src="place.image" alt="" loading="lazy" />
                            </picture>
                            <h3>{{ place.locale[$i18n.locale].title }}</h3>
                            <p>{{ place.locale[$i18n.locale].location }}</p>
                        </router-link>
                    </li>
                </ul>

                <router-link :to="{ name: 'Places' }" class="see-more">
                    <span>{{ $t('general.showMore') }}</span>
                </router-link>
            </div>

            <div class="categories">
                <div class="title">
                    <h2>{{ $t('page.homepage.locations.categories.title') }}</h2>
                    <p>{{ $t('page.homepage.locations.categories.description') }}</p>
                </div>

                <ul class="tabs">
                    <li v-for="(category, index) in limitedCategories" :key="category">
                        <button :class="index === 0 ? 'active' : null">
                            <!--<i :class="'icon-category-' + category.slug" />-->
                            <span>{{ category.locale[$i18n.locale].title }}</span>
                        </button>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <router-link :to="{ name: 'Categories' }">
                            <span>{{ $t('page.homepage.locations.categories.viewAllCategories', categories.length) }}</span>
                        </router-link>
                    </li>
                </ul>

                <div class="tab-content">
                    <ul class="list">
                        <li v-for="place in categoryPlaces" :key="place">
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

                    <router-link :to="{ name: 'Places', query: { category: 'nature-and-parks' } }" class="see-more">
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
                    <li v-for="region in regions.slice(0, 4)" :key="region">
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
    import { computed, defineComponent, ref } from 'vue'
    import { useTitle } from '@vueuse/core'
    import { useI18n } from 'vue-i18n'

    import places from '@/api/places.js'
    import categories from '@/api/categories'
    import regions from '@/api/regions'

    import { useGeneralStore } from '@/stores/GeneralStore'

    export default defineComponent({
        setup() {
            const i18n = useI18n()
            const store = useGeneralStore()
            const titleSuffix = store.titleSuffix
            let number = ref((Math.random() * 19).toFixed(0))

            const pageTitle = computed(() => {
                return i18n.t('page.homepage.title') + titleSuffix
            })

            useTitle(pageTitle)

            const limitedPlaces = places.sort(() => 0.5 - Math.random()).slice(0, 3)
            const limitedCategories = categories.sort(() => 0.5 - Math.random()).slice(0, 4)
            const categoryPlaces = places.filter((place) => place.category.slug === limitedCategories[0].slug)

            const generateNumber = () => {
                number.value = (Math.random() * 19).toFixed(0)
            }

            return {
                number,
                categories,
                regions,
                categoryPlaces,
                limitedPlaces,
                limitedCategories,
                generateNumber
            }
        }
    })
</script>
