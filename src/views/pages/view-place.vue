<template>
    <div v-if="!loading">
        <section class="location-heading">
            <div class="page-content">
                <ul class="breadcrumbs">
                    <li>
                        <router-link :to="{ name: 'Homepage' }">
                            <i class="icon-home" />
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Region', params: { slug: place.region.slug } }">
                            {{ $t('general.navigation.region', { title: place.region.locale[$i18n.locale].title }) }}
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            :to="{ name: 'Places', query: { region: place.region.slug, locality: place.locality.slug } }"
                        >
                            {{ $t('general.navigation.locality', { title: place.locality.locale[$i18n.locale].title }) }}
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Place', params: { slug: place.slug } }">
                            {{ place.locale[$i18n.locale].title }}
                        </router-link>
                    </li>
                </ul>

                <div class="title">
                    <h1>{{ place.locale[$i18n.locale].title }}</h1>
                    <aside>
                        <button>
                            <i class="icon-route" />
                            <div class="tooltip-container center">
                                <div class="tooltip-content">
                                    {{ $t('page.place.buttons.map') }}
                                </div>
                            </div>
                        </button>
                        <button :class="['favorite', isFavorite ? 'active' : null]" @click.prevent="isFavorite = !isFavorite">
                            <i :class="isFavorite ? 'icon-heart-solid' : 'icon-heart'" />
                            <div class="tooltip-container right">
                                <div class="tooltip-content">
                                    {{
                                        isFavorite
                                            ? $t('page.place.buttons.favorite.undo')
                                            : $t('page.place.buttons.favorite.make')
                                    }}
                                </div>
                            </div>
                        </button>
                        <button>
                            <i class="icon-share" />
                            <div class="tooltip-container right">
                                <div class="tooltip-content">
                                    {{ $t('page.place.buttons.share') }}
                                </div>
                            </div>
                        </button>
                    </aside>
                </div>

                <ul class="information">
                    <li class="rating">
                        <div class="information-holder">
                            <i class="icon-star-solid" />
                            <strong>{{ place.user_score.toFixed(1) }}</strong>
                            <span>{{ $t('page.place.reviews.text', place.reviews_count) }}</span>
                        </div>
                    </li>
                    <li>
                        <div class="information-holder">
                            <i class="icon-users" />
                            <span>{{ $t('page.place.visitors.score', place.visitors) }}</span>
                        </div>
                        <div class="tooltip-container center">
                            <div class="tooltip-content" v-html="$t('page.place.visitors.describe')" />
                        </div>
                    </li>
                    <li>
                        <div class="information-holder">
                            <i class="icon-location" />
                            <span>{{ place.locale[$i18n.locale].location }}</span>
                        </div>
                        <div class="tooltip-container center">
                            <div
                                class="tooltip-content"
                                v-html="
                                    $t('general.unit.coords', {
                                        latitude: place.coords.latitude,
                                        longitude: place.coords.longitude
                                    })
                                "
                            />
                        </div>
                    </li>
                    <li>
                        <div class="information-holder">
                            <i class="icon-weather-cloudy" />
                            <span>
                                {{
                                    $t('page.place.weather.cloudy', {
                                        temperature: place.weather[0].temperature[0],
                                        unit: $t('general.unit.celsius')
                                    })
                                }}
                            </span>
                        </div>
                        <div class="tooltip-container center">
                            <div class="weather-days">
                                <div v-for="day in place.weather" :key="day" class="weather-day">
                                    <span class="weather-heading">
                                        <span class="weather-title">
                                            {{ $t(`general.nameOfDay.${day.date.number}`) }}
                                        </span>
                                        <span class="weather-date">{{ day.date.long }}</span>
                                    </span>
                                    <div class="weather-icon">
                                        <i :class="'icon-weather-' + day.state" />
                                    </div>
                                    <span class="weather-degrees">
                                        <span class="weather-degree-day">
                                            {{ day.temperature[0] }}
                                            <small>{{ $t('general.unit.celsius') }}</small>
                                        </span>
                                        <span class="divider"></span>
                                        <span class="weather-degree-night">
                                            {{ day.temperature[1] }}
                                            <small>{{ $t('general.unit.celsius') }}</small>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="information-holder">
                            <i class="icon-mountain-altitude" />
                            <span>{{ place.altitude }} {{ $t('general.unit.altitude.short') }}</span>
                        </div>
                        <div class="tooltip-container center">
                            <div class="tooltip-content">
                                {{ $t('general.unit.altitude.long') }}
                            </div>
                        </div>
                    </li>
                    <li v-if="place.unesco">
                        <div class="information-holder">
                            <i class="icon-award" />
                            <span>{{ $t('page.place.unesco.label') }}</span>
                        </div>
                        <div class="tooltip-container center">
                            <div class="tooltip-content">
                                {{ $t('page.place.unesco.title') }}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

        <section class="location-gallery">
            <div class="page-content">
                <div class="wrapper">
                    <div v-for="(photo, index) in place.photos" :key="photo" class="photo">
                        <picture @click.prevent="toggleGallery(index + 1)">
                            <img :src="photo.image" alt="" />
                        </picture>
                        <button v-if="index === 0" @click.prevent="toggleGallery(index + 1)">
                            <i class="icon-image" />
                            <span>{{ $t('page.place.photography.more') }}</span>
                        </button>
                        <p class="copyrights">
                            {{ $t('page.place.photography.author', { author: photo.author }) }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="location-contents">
            <div class="page-content">
                <div class="wrapper">
                    <div class="ai-generated">
                        <i class="icon-alert-triangle" />
                        <p v-html="$t('page.place.contents.aiGenerated', { repo: gitRepository })" />
                    </div>
                    <div class="table-of-contents">
                        <ul>
                            <li v-for="(content, index) in place.contents" :key="index">
                                <a href="javascript:void(0);">
                                    {{ content.locale[$i18n.locale].title }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="contents">
                        <div v-for="(content, index) in place.contents" :key="index" class="content">
                            <div class="title">
                                <h1>{{ content.locale[$i18n.locale].title }}</h1>
                            </div>
                            <div class="markdown" v-html="content.locale[$i18n.locale].text"></div>
                        </div>
                    </div>
                    <div class="copyrights">
                        <p>
                            <i class="icon-alert-triangle" />
                            <span v-html="$t('page.place.contents.copyrights', { repo: gitRepository })" />
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="location-reviews">
            <div class="page-content">
                <div class="wrapper">
                    <div class="title flex">
                        <h2>{{ $t('page.place.reviews.title') }}</h2>
                        <p>{{ $t('page.place.reviews.description') }}</p>
                    </div>
                    <div class="list">
                        <div v-for="review in place.reviews" :key="review" class="item">
                            <div class="author">
                                <picture>
                                    <img :src="review.author.photo" alt="" />
                                </picture>
                                <div class="info">
                                    <h3>{{ review.author.names }}</h3>
                                    <div class="rating" :title="$t('page.place.reviews.stars', review.rating)">
                                        <i
                                            v-for="(star, i) in 5"
                                            :key="i"
                                            :class="star <= review.rating ? 'icon-star-solid' : 'icon-star'"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="review">
                                <TruncateString :string="review.comment" />

                                <div
                                    v-if="review.attachment.type != null"
                                    :class="[
                                        'attachment',
                                        review.attachment.type,
                                        review.attachment.ratio === 'invert' ? 'invert' : null
                                    ]"
                                >
                                    <picture v-if="review.attachment.type === 'photo'">
                                        <img :src="`/images/photos/${review.attachment.source}`" />
                                    </picture>

                                    <picture v-if="review.attachment.type === 'video'">
                                        <img :src="review.attachment.source" />
                                    </picture>
                                </div>
                            </div>
                            <div class="dates">
                                <time>{{ $d(new Date(review.date_added), 'full', String(locale)) }}</time>
                            </div>
                        </div>
                    </div>
                    <div class="buttons">
                        <button>{{ $t('page.place.reviews.addReview') }}</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div v-else>
        <section class="top-section">
            <div class="page-content">
                <div class="title">
                    <h1>{{ $t('page.place.subtitle') }}</h1>
                </div>
            </div>
        </section>

        <section class="place-content">
            <div class="page-content">
                <div class="page-container">
                    <div class="container-content padding">{{ $t('general.loading') }}</div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import { computed, onBeforeMount, defineComponent, ref } from 'vue'
    import { useTitle } from '@vueuse/core'
    import { useI18n } from 'vue-i18n'
    import { useRoute, useRouter } from 'vue-router'

    import places from '@/api/places'

    import TruncateString from '@/components/TruncateString.vue'

    import { useGeneralStore } from '@/stores/GeneralStore'

    export default defineComponent({
        components: {
            TruncateString
        },
        setup() {
            const i18n = useI18n()
            const route = useRoute()
            const router = useRouter()
            const { locale } = useI18n({ useScope: 'global' })
            const store = useGeneralStore()
            const titleSuffix = store.titleSuffix
            const gitRepository = import.meta.env.VITE_APP_GIT_REPO_FRONTEND
            const place = places.find((item) => item.slug === route.params.slug)
            const loading = ref(true)

            onBeforeMount(() => {
                if (!places.find((item) => item.slug === route.params.slug)) {
                    router.push({ name: 'Places' })
                } else {
                    loading.value = false
                }
            })

            const pageTitle = computed(() => {
                return i18n.t('page.place.subtitle') + ' "' + place.locale[locale.value].title + '"' + titleSuffix
            })
            useTitle(pageTitle)

            const isFavorite = ref(false)
            const isGalleryOpened = ref(false)

            const toggleGallery = (id) => {
                isGalleryOpened.value = !isGalleryOpened.value

                if (isGalleryOpened.value) {
                    console.log(`Gallery opened with Photo ID: ${id}.`)
                } else {
                    console.log(`Gallery closed with Photo ID: ${id}.`)
                }
            }

            return {
                loading,
                locale,
                place,
                gitRepository,
                isFavorite,
                toggleGallery
            }
        }
    })
</script>
