import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import countPlacesWithMunicipality from '@/helpers/countPlacesWithMunicipality'

import places from '@/api/places'
import regions from '@/api/regions'

export default function useMapTooltip() {
  const { locale, t } = useI18n()

  const tooltip = ref(null)
  const tooltipRef = ref(null)
  const showingTooltip = ref(false)
  const showLabels = ref(true)
  const tooltipText = ref(null)
  const tooltipPosition = ref({ x: 0, y: 0 })
  const searchQuery = ref(null)

  function showTooltip(event, municipality, municipalitySlug, region, regionSlug) {
    showingTooltip.value = true
    tooltipText.value = `
      <div class="municipality">
        ${municipality}
      </div>
      <div class="places">
        ${t('page.regions.places', countPlacesWithMunicipality(places, municipalitySlug))}
      </div>
      <div class="region ${regionSlug}">
        ${region}
      </div>
    `
    tooltipPosition.value = { x: event.pageX, y: event.pageY }

    moveTooltip(event)
  }

  function hideTooltip() {
    showingTooltip.value = false
  }

  function moveTooltip(event) {
    const el = tooltip.value

    if (!el)
      return

    const offset = 15
    const tooltipWidth = el.offsetWidth
    const tooltipHeight = el.offsetHeight
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    let top = event.y + offset
    let left = event.x + offset

    // Check if tooltip overflows the viewport horizontally
    if (left + tooltipWidth > viewportWidth)
      left = viewportWidth - tooltipWidth

    // Check if tooltip overflows the viewport vertically
    if (top + tooltipHeight > viewportHeight)
      top = viewportHeight - tooltipHeight

    el.style.top = `${top}px`
    el.style.left = `${left}px`
  }

  function updatePathOpacity() {
    const pathElements = document.querySelectorAll('.map svg path[data-type="municipality"]')

    pathElements.forEach((pathElement) => {
      const municipalityTitle = pathElement.id
      const regionSlug = pathElement.parentNode.id
      const region = regions.find(r => r.slug === regionSlug)
      const municipality = region.municipalities.find(m => m.slug === municipalityTitle)

      if (!searchQuery.value || municipality.locale[locale.value].title.toLowerCase().includes(searchQuery.value.toLowerCase()))
        pathElement.style.opacity = 1
      else
        pathElement.style.opacity = 0.5
    })
  }

  function toggleLabels() {
    showLabels.value = !showLabels.value
  }

  onMounted(() => {
    tooltip.value = tooltipRef.value
    window.addEventListener('mousemove', moveTooltip)
  })

  watch(searchQuery, () => {
    updatePathOpacity()
  })

  return {
    regions,
    showingTooltip,
    showLabels,
    tooltipText,
    tooltipPosition,
    tooltipRef,
    tooltip,
    showTooltip,
    hideTooltip,
    toggleLabels,
    searchQuery,
  }
}
