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
                <li>
                    <router-link :to="{ name: 'Region', params: { slug: region.slug } }">
                        {{ $t('general.navigation.region', { title: region.locale[$i18n.locale].title }) }}
                    </router-link>
                </li>
            </ul>
        </div>
    </section>

    <div class="page-content">
        <div class="page-container">
            <div class="title">
                <h1>{{ region.locale[$i18n.locale].title }}</h1>
                <p>{{ region.locale[$i18n.locale].description }}</p>
            </div>

            <hr />

            <h2>{{ $t('general.navigation.districts') }}</h2>
            <ul>
                <li v-for="district in region.districts" :key="district.id">
                    <router-link :to="{ name: 'District', params: { slug: district.slug } }">
                        {{ district.locale[$i18n.locale].title }}
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
                return i18n.t('page.region.pageTitle') + titleSuffix
            })

            const region = {
                id: 1,
                slug: 'trakia',
                image: '/images/regions/trakia.jpg',
                locale: {
                    bg: {
                        title: 'Тракия',
                        description:
                            'Тракия е красив регион в България, известен с богатата си история и култура. Регионът е известен със своето вкусно вино и вкусна храна, както и с древните си руини, включително тракийските гробници. Посетителите могат да разгледат живописни села и градове, идеални за разглеждане на забележителности, както и да участват в дейности на открито като туризъм, риболов и наблюдение на птици. Тракия предлага и традиционни фестивали и събития, които се провеждат през цялата година. Регионът е лесно достъпен от столицата София и други големи градове в България и предлага уникална комбинация от природна красота, история и култура, която със сигурност ще зарадва посетителите. Регионът е известен и с красивите си плажове, езера и реки, които са идеални за плуване и водни спортове, което го прави задължителна дестинация за всеки, който иска да опознае разнообразното културно наследство на България.'
                    },
                    en: {
                        title: 'Trakia',
                        description:
                            'Trakia is a beautiful region in Bulgaria known for its rich history and culture. The region is known for its delicious wine and delicious food, as well as its ancient ruins including the Thracian tombs. Visitors can explore picturesque villages and towns, perfect for sightseeing, as well as participating in outdoor activities such as hiking, fishing, and birdwatching. Trakia also offers traditional festivals and events held throughout the year. The region is easily accessible from the capital city of Sofia and other major cities in Bulgaria, and offers a unique blend of natural beauty, history and culture that is sure to delight visitors. The region is also known for its beautiful beaches, lakes and rivers which are perfect for swimming and water sports, making it a must-visit destination for anyone looking to explore the diverse cultural heritage of Bulgaria.'
                    }
                },
                districts: [
                    {
                        id: 1,
                        slug: 'pazardzhik',
                        locale: {
                            bg: {
                                title: 'Пазарджик'
                            },
                            en: {
                                title: 'Pazardzhik'
                            }
                        }
                    },
                    {
                        id: 2,
                        slug: 'plovdiv',
                        locale: {
                            bg: {
                                title: 'Пловдив'
                            },
                            en: {
                                title: 'Plovdiv'
                            }
                        }
                    },
                    {
                        id: 3,
                        slug: 'sliven',
                        locale: {
                            bg: {
                                title: 'Сливен'
                            },
                            en: {
                                title: 'Sliven'
                            }
                        }
                    },
                    {
                        id: 4,
                        slug: 'stara-zagora',
                        locale: {
                            bg: {
                                title: 'Стара Загора'
                            },
                            en: {
                                title: 'Stara Zagora'
                            }
                        }
                    },
                    {
                        id: 5,
                        slug: 'haskovo',
                        locale: {
                            bg: {
                                title: 'Хасково'
                            },
                            en: {
                                title: 'Haskovo'
                            }
                        }
                    },
                    {
                        id: 6,
                        slug: 'yambol',
                        locale: {
                            bg: {
                                title: 'Ямбол'
                            },
                            en: {
                                title: 'Yambol'
                            }
                        }
                    }
                ]
            }

            useTitle(pageTitle)

            return {
                region
            }
        }
    })
</script>
