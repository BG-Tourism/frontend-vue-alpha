<script>
import { defineComponent } from 'vue'
import { useWindowSize } from '@vueuse/core'

import { useGeneralStore } from './stores/GeneralStore'
import BlockHeader from '@/views/layouts/header/template.vue'
import BlockFooter from '@/views/layouts/footer/template.vue'

import Authentication from '@/modals/Authentication.vue'
import Languages from '@/modals/Languages.vue'
import Search from '@/modals/Search.vue'
import FindCategories from '@/modals/filters/FindCategories.vue'
import FindRegionsAndMunicipalities from '@/modals/filters/FindRegionsAndMunicipalities.vue'
import FindRatings from '@/modals/filters/FindRatings.vue'

import breakpoints from '@/utils/breakpoints'

export default defineComponent({
  components: {
    BlockHeader,
    BlockFooter,
    Authentication,
    Languages,
    Search,
    FindCategories,
    FindRegionsAndMunicipalities,
    FindRatings,
  },
  setup() {
    const store = useGeneralStore()
    const { width } = useWindowSize()
    const { sm } = breakpoints()

    const hideOverlay = () => {
      store.mobileOverlay = false
    }

    return {
      store,
      width,
      sm,
      hideOverlay,
    }
  },
})
</script>

<template>
  <BlockHeader v-if="$route.name !== 'PageError'" />

  <main :class="$route.meta.className">
    <router-view :key="$route.path" />
  </main>

  <BlockFooter v-if="$route.name !== 'PageError'" />

  <Authentication />
  <Languages />
  <Search />
  <FindCategories />
  <FindRegionsAndMunicipalities />
  <FindRatings />

  <div v-if="width <= sm && store.mobileOverlay" class="mobile-overlay">
    <div class="wrapper">
      <p>
        Съжалявам, но това е ранен прототип и той няма поддръжка за мобилни и таблетни устройства. Разработен е с
        намерението да бъде разглеждан само от десктоп устройства. Въпреки това, ако искаш да го видиш и на това
        устройство, кликни бутона, но не очаквай чудеса.
      </p>
      <button @click.prevent="hideOverlay()">
        Скрий това съобщение
      </button>
    </div>
  </div>
</template>

<style lang="scss">
    @import './assets/app.scss';
</style>
