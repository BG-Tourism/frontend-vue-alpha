<script>
import { defineComponent, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import mapboxgl, { NavigationControl, ScaleControl } from 'mapbox-gl'

export default defineComponent({
  name: 'MapWithMarkers',
  props: {
    accessToken: {
      type: String,
      required: true,
    },
    locations: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const { t, locale } = useI18n({ useScope: 'global' })
    const mapContainer = ref(null)
    let map

    const updateMarkers = (locations) => {
      map.getSource('locations').setData({
        type: 'FeatureCollection',
        features: locations.map((location, index) => ({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [location.coords.longitude, location.coords.latitude],
          },
          properties: {
            index,
            markerImage: import.meta.env.VITE_APP_URL + location.image,
            markerType: location.region,
          },
        })),
      })

      if (locations.length) {
        const bounds = new mapboxgl.LngLatBounds()

        locations.forEach((location) => {
          bounds.extend([location.coords.longitude, location.coords.latitude])
        })

        map.fitBounds(bounds, { padding: 100, maxZoom: 12 })
      }
    }

    onMounted(() => {
      mapboxgl.accessToken = props.accessToken

      map = new mapboxgl.Map({
        container: mapContainer.value,
        style: import.meta.env.VITE_APP_MAPBOX_MAP_STYLE,
        center: [25.485830, 42.733883],
        zoom: 10,
        scrollZoom: false,
        crossSourceCollisions: false,
        failIfMajorPerformanceCaveat: false,
        attributionControl: false,
        preserveDrawingBuffer: true,
        hash: false,
        pitchWithRotate: false,
      })

      map.on('load', () => {
        // Add the navigation control
        map.addControl(
          new NavigationControl({
            showCompass: false,
            showZoom: true,
            visualizePitch: false,
            position: 'top-right',
          }),
        )

        // Add the scale control
        map.addControl(new ScaleControl({ position: 'bottom-left' }))

        map.addSource('locations', {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [],
          },
          cluster: true,
          clusterMaxZoom: 14,
          clusterRadius: 50,
        })

        map.addLayer({
          id: 'clusters',
          type: 'circle',
          source: 'locations',
          filter: ['has', 'point_count'],
          paint: {
            'circle-color': [
              'step',
              ['get', 'point_count'],
              '#94a3b8', // default color
              50, // when >= 50 locations
              '#38bdf8',
              100, // when >= 50 locations
              '#4ade80',
              150, // when >= 150 locations
              '#fbbf24',
              200, // when >= 200 locations
              '#f87171',
            ],
            'circle-radius': [
              'step',
              ['get', 'point_count'],
              20,
              100,
              30,
              750,
              40,
            ],
          },
        })

        map.addLayer({
          id: 'cluster-count',
          type: 'symbol',
          source: 'locations',
          filter: ['has', 'point_count'],
          layout: {
            'text-field': '{point_count_abbreviated}',
            'text-size': 14,
          },
        })

        map.addLayer({
          id: 'unclustered-point',
          type: 'circle',
          source: 'locations',
          filter: ['!', ['has', 'point_count']],
          paint: {
            'circle-color': [
              'match',
              ['get', 'markerType'],
              'trakia',
              '#FACC15',
              'sofia',
              '#FB923C',
              'rila-pirin',
              '#2DD4BF',
              'rhodopes',
              '#4ADE80',
              'danube',
              '#FBBF24',
              'varna-black-sea',
              '#22D3EE',
              'bourgas-black-sea',
              '#60A5FA',
              'valley-of-roses',
              '#F87171',
              'stara-planina',
              '#A3E635',
              '#818cf8', // default color
            ],
            'circle-radius': 8,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff',
          },
        })

        updateMarkers(props.locations)

        map.on('click', 'clusters', (e) => {
          const features = map.queryRenderedFeatures(e.point, {
            layers: ['clusters'],
          })
          const clusterId = features[0].properties.cluster_id
          map.getSource('locations').getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err)
              return

            map.flyTo({
              center: features[0].geometry.coordinates,
              zoom,
            })
          })
        })

        map.on('click', 'unclustered-point', (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice()
          const locationIndex = e.features[0].properties.index

          const popupContent = `
            <div class="location-tooltip">
              <div class="name">${props.locations[locationIndex].locale[locale.value].title}</div>
              <div class="location">${props.locations[locationIndex].locale[locale.value].location}</div>

              <a href="/place/${props.locations[locationIndex].slug}">
                <span>${t('page.places.map.button.details')}</span>
              </a>
            </div>
          `

          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map)
        })

        map.on('mouseenter', 'clusters', () => {
          map.getCanvas().style.cursor = 'pointer'
        })

        map.on('mouseleave', 'clusters', () => {
          map.getCanvas().style.cursor = ''
        })

        map.on('mouseenter', 'unclustered-point', () => {
          map.getCanvas().style.cursor = 'pointer'
        })

        map.on('mouseleave', 'unclustered-point', () => {
          map.getCanvas().style.cursor = ''
        })

        watch(
          () => props.locations,
          (newLocations) => {
            if (map && map.loaded())
              updateMarkers(newLocations)
          },
          { immediate: true },
        )
      })
    })

    return {
      mapContainer,
    }
  },
})
</script>

<template>
  <div ref="mapContainer" class="map-container" />
</template>
