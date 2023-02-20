<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import { changeLocale, getSupportedLocales } from '@/utils/locales'
import { useGeneralStore } from '@/stores/GeneralStore'
import { useFinderStore } from '@/stores/Finder'

export default defineComponent({
  setup() {
    const route = useRoute()
    const store = useGeneralStore()
    const finder = useFinderStore()

    const toggleSearch = () => {
      finder.modals.search.shown = true
      finder.modals.search.state = 1
    }

    const toggleLanguage = () => {
      store.modals.language.shown = true
      store.modals.language.state = 1
    }

    const toggleUserMenu = () => {
      store.modals.userMenu.shown = true
      store.modals.userMenu.state = 1
    }

    return {
      route,
      getSupportedLocales,
      changeLocale,
      toggleLanguage,
      toggleSearch,
      toggleUserMenu,
    }
  },
})
</script>

<template>
  <ul class="user-menu">
    <li>
      <button :title="$t('general.search')" @click="toggleSearch()">
        <i class="icon-search" />
      </button>
    </li>
    <li>
      <button :title="$t('general.languages')" @click="toggleLanguage()">
        <i class="icon-languages" />
      </button>
    </li>
    <li>
      <button :title="$t('general.menu')" @click="toggleUserMenu()">
        <i class="icon-menu" />
      </button>
    </li>
  </ul>
</template>
