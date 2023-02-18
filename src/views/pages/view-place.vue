<script>
import { computed, defineComponent, onBeforeMount, reactive, ref, watch } from 'vue'
import { onKeyStroke, useTitle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

import places from '@/api/places'
import regions from '@/api/regions'

import TruncateString from '@/components/TruncateString.vue'

import { useGeneralStore } from '@/stores/GeneralStore'

export default defineComponent({
  components: {
    TruncateString,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { locale } = useI18n({ useScope: 'global' })
    const store = useGeneralStore()
    const titleSuffix = store.titleSuffix
    const gitRepository = import.meta.env.VITE_APP_GIT_REPO_FRONTEND

    const place = places.find(p => p.slug === route.params.slug)
    const region = regions.find(r => r.slug === place.region)
    const municipality = region.municipalities.find(l => l.slug === place.municipality)

    const mapRef = ref(null)
    const loading = ref(true)

    onBeforeMount(() => {
      if (!places.find(item => item.slug === route.params.slug))
        router.push({ name: 'Places' })
      else
        loading.value = false
    })

    const mapLocation = reactive({
      accessToken: import.meta.env.VITE_APP_MAPBOX_ACCESS_TOKEN,
      style: import.meta.env.VITE_APP_MAPBOX_MAP_STYLE,
      center: [place.coords.longitude, place.coords.latitude],
      zoom: 15,
      scrollZoom: false,
      crossSourceCollisions: false,
      failIfMajorPerformanceCaveat: false,
      attributionControl: false,
      preserveDrawingBuffer: true,
      hash: false,
      pitchWithRotate: false,
    })

    const mapMarker = reactive({
      center: mapLocation.center,
      draggable: false,
      visible: true,
      scale: 1,
      text: place.locale[locale.value].title,
    })

    const handleClick = () => {
      mapMarker.visible = true
    }

    const handleMouseEnter = () => {
      mapMarker.visible = true
    }

    const copyCoordinates = (latitude, longitude) => {
      const textArea = document.createElement('textarea')

      textArea.value = `${latitude},${longitude}`
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }

    watch(locale, async (newLocale, oldLocale) => {
      if (newLocale !== oldLocale)
        mapMarker.text = place.locale[newLocale].title
    })

    const pageTitle = computed(() => {
      return `${place.locale[locale.value].title}${titleSuffix}`
    })
    useTitle(pageTitle)

    const isFavorite = ref(false)
    const isMapEnabled = ref(false)
    const isGalleryOpened = ref(false)

    const toggleMap = () => {
      isMapEnabled.value = !isMapEnabled.value
    }

    onKeyStroke('Escape', () => {
      if (isMapEnabled.value)
        isMapEnabled.value = false
    })

    const toggleGallery = (id) => {
      isGalleryOpened.value = !isGalleryOpened.value

      if (isGalleryOpened.value)
        console.log(`Gallery opened with Photo ID: ${id}.`)
      else
        console.log(`Gallery closed with Photo ID: ${id}.`)
    }

    return {
      loading,
      locale,
      place,
      region,
      municipality,
      gitRepository,
      mapRef,
      mapLocation,
      mapMarker,
      isFavorite,
      isMapEnabled,
      toggleMap,
      toggleGallery,
      handleClick,
      handleMouseEnter,
      copyCoordinates,
    }
  },
})
</script>

<template>
  <div v-if="!loading">
    <section class="location-heading">
      <div class="page-content">
        <div class="title">
          <h2>
            <router-link :to="{ name: 'Region', params: { slug: place.region } }">
              {{ $t('general.navigation.region', { title: region.locale[$i18n.locale].title }) }}
            </router-link>
            <i class="icon-arrow-right-tail" />
            <router-link :to="{ name: 'Places', query: { region: place.region, municipality: place.municipality } }">
              {{ $t('general.navigation.municipality', { title: municipality.locale[$i18n.locale].title }) }}
            </router-link>
          </h2>
          <h1>{{ place.locale[$i18n.locale].title }}</h1>
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
          </li>
          <li>
            <div class="information-holder">
              <i class="icon-weather-cloudy" />
              <span>
                {{
                  $t('page.place.weather.cloudy', {
                    temperature: place.weather[0].temperature[0],
                    unit: $t('general.unit.celsius'),
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
                    <i :class="`icon-weather-${day.state}`" />
                  </div>
                  <span class="weather-degrees">
                    <span class="weather-degree-day">
                      {{ day.temperature[0] }}
                      <small>{{ $t('general.unit.celsius') }}</small>
                    </span>
                    <span class="divider" />
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

        <ul class="buttons">
          <li>
            <button @click.prevent="toggleMap()">
              <i class="icon-route" />
              <span v-if="isMapEnabled">{{ $t('page.place.buttons.map.hide') }}</span>
              <span v-else>{{ $t('page.place.buttons.map.show') }}</span>
            </button>
          </li>
          <li>
            <button class="only-icon">
              <i class="icon-menu-dots" />
            </button>
          </li>
        </ul>
      </div>
    </section>

    <section v-if="isMapEnabled" class="location-map">
      <div ref="mapRef" class="map">
        <div class="coordinates">
          <p>{{ $t('page.place.buttons.map.coordinates') }}</p>
          <div class="coords">
            <span>{{ place.coords.latitude }}, {{ place.coords.longitude }}</span>
            <button @click="copyCoordinates(place.coords.latitude, place.coords.longitude)">
              <i class="icon-copy" />
            </button>
          </div>
        </div>
        <v-map :options="mapLocation">
          <v-navigation-control :show-compass="false" :show-zoom="true" :visualize-pitch="false" position="top-right" />

          <v-scale-control position="bottom-left" />

          <v-marker
            v-model:center="mapMarker.center"
            :options="mapMarker"
            @click="handleClick"
            @mouseenter="handleMouseEnter"
          />

          <v-popup
            v-model:visible="mapMarker.visible"
            :center="mapMarker.center"
            :options="{
              anchor: 'bottom',
              offset: [0, -36],
              closeOnMove: false,
            }"
          >
            {{ mapMarker.text }}
          </v-popup>
        </v-map>
      </div>
    </section>

    <section class="location-gallery">
      <div class="page-content">
        <div class="wrapper">
          <div v-for="(photo, index) in place.photos" :key="photo" class="photo">
            <picture @click.prevent="toggleGallery(index + 1)">
              <img :src="photo.image" alt="">
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
          <div class="page-alert">
            <i class="icon-alert-triangle" />
            <p v-html="$t('page.place.contents.aiGenerated', { repo: gitRepository })" />
          </div>
          <div class="markdown-body">
            <div class="table-of-contents">
              <ol>
                <li v-for="(content, index) in place.contents" :key="index">
                  <a href="javascript:void(0);">
                    {{ content.locale[$i18n.locale].title }}
                  </a>
                </li>
              </ol>
            </div>
            <div v-for="(content, index) in place.contents" :key="index">
              <h1>{{ content.locale[$i18n.locale].title }}</h1>
              <div v-html="content.locale[$i18n.locale].text" />
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
                  <img :src="review.author.photo" alt="">
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
                  v-if="review.attachment.type !== null"
                  class="attachment" :class="[
                    review.attachment.type,
                    review.attachment.ratio === 'invert' ? 'invert' : null,
                  ]"
                >
                  <picture v-if="review.attachment.type === 'photo'">
                    <img :src="`/images/photos/${review.attachment.source}`">
                  </picture>

                  <picture v-if="review.attachment.type === 'video'">
                    <img :src="review.attachment.source">
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
          <div class="container-content padding">
            {{ $t('general.loading') }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
