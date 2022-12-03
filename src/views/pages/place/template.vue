<template>
    <div class="page-content">
        <div class="top-section">
            <div class="photo">
                <picture>
                    <img :src="place.image" alt="" loading="lazy" />
                </picture>
            </div>
            <div class="main-details">
                <h1>{{ place.locale[$i18n.locale].title }}</h1>
                <div class="description" v-html="place.locale[$i18n.locale].description" />
            </div>
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
                return i18n.t('page.place.pageTitle') + titleSuffix
            })

            const place = {
                id: 1,
                category: 2,
                slug: 'hram-pametnik-sveti-aleksandar-nevski',
                image: '/images/photos/4.jpg',
                coords: {
                    latitude: 42.69577,
                    longitude: 23.33286
                },
                locale: {
                    bg: {
                        title: 'Храм-паметник "Свети Александър Невски"',
                        location: 'гр. София',
                        description:
                            '<p>Катедралният храм "Св. Ал. Невски" е считан за символ на българската столица. Намира се в центъра на София, на едноименния площад, а отблясъкът на златните му кубета привлича погледа от километри разстояние.</p><p>Храмът е построен в чест на руския император Александър II, наричан още "Цар Освободител", чиято армия през 1878г освобождава България от петвековното османско владичество. Св. Александър Невски, чието име носи катедралата, е руски княз (1220-1263г) - велик пълководец и дипломат. Той е светец-покровител на руския император Александър II и е символ на руската бойна слава.</p><p>Храмът е изграден по предложение на българския политик и общественик Петко Каравелов (1843-1903г). Първоначално е било решено той да бъде издигнат в Търново, но българският княз Батенберг (управлявал 1879-1886г) настоява да е в София. Една част от средствата за построяването на храма се отпускат от държавния бюджет, друга от дарения на видни граждани, включително и от княз Батенберг, който дарява сумата от 6000 златни лева.</p>'
                    },
                    en: {
                        title: 'St. Alexander Nevsky Temple-Monument',
                        location: 'Sofia City',
                        description:
                            '<p>The cathedral "St. Al. Nevsky" is considered a symbol of the Bulgarian capital. It is located in the center of Sofia, on the square of the same name, and the glare of its golden cubes attracts the eye from kilometers away.</p><p>The temple was built in honor of the Russian Emperor Alexander II, also called "Tsar Osvoboditel", whose army in 1878 he freed Bulgaria from the five-century Ottoman rule. St. Alexander Nevsky, whose name bears the cathedral, was a Russian prince (1220-1263) - a great commander and diplomat. He is the patron saint of the Russian Emperor Alexander II and is a symbol of Russian military glory.</p><p>The temple was built at the suggestion of the Bulgarian politician and public figure Petko Karavelov (1843-1903). Initially, it was decided that it would be erected in Tarnovo, but the Bulgarian Prince Battenberg (ruled 1879-1886) insisted that it be in Sofia. One part of the funds for the construction of the temple is allocated from the state budget, another from donations of prominent citizens, including Prince Battenberg, who donated the sum of 6,000 gold leva.</p>'
                    }
                }
            }

            useTitle(pageTitle)

            return {
                place
            }
        }
    })
</script>
