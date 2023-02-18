<script>
import { defineComponent } from 'vue'
// import { useDark, useToggle } from '@vueuse/core'
import { useRoute } from 'vue-router'

import BaseDropdown from '@/components/BaseDropdown.vue'

import { changeLocale, getSupportedLocales } from '@/utils/locales'
import { useFinderStore } from '@/stores/Finder'

export default defineComponent({
  components: {
    BaseDropdown,
  },
  setup() {
    const route = useRoute()
    const finder = useFinderStore()
    // const isDark = useDark()
    // const toggleDark = useToggle(isDark)
    const user = {
      avatar: 'https://i.pravatar.cc/50?img=50',
      name: 'Шмулю Юрганчев',
      email: 'shmulyu@yurganchev.com',
    }

    const toggleSearch = () => {
      finder.modals.search.shown = true
      finder.modals.search.state = 1
    }

    return {
      route,
      // isDark,
      // toggleDark,
      user,
      getSupportedLocales,
      changeLocale,
      toggleSearch,
    }
  },
})
</script>

<template>
  <div class="user-menu">
    <div class="divider" />

    <div class="search">
      <button :title="$t('general.search')" @click="toggleSearch()">
        <i class="icon-search" />
      </button>
    </div>

    <div class="language">
      <BaseDropdown placement="right">
        <template #button>
          <button>
            <i class="icon-languages" />
          </button>
        </template>
        <template #menu>
          <ul class="dropdown-menu">
            <li v-for="(language, index) in getSupportedLocales()" :key="index">
              <a
                href="javascript:void(0);"
                :class="$i18n.locale === language.code ? 'active' : ''"
                @click="changeLocale(language.code)"
              >
                <span>{{ language.name }}</span>
              </a>
            </li>
          </ul>
        </template>
      </BaseDropdown>
    </div>

    <!-- <button
            :title="isDark ? $t('general.colorMode.toggleToLight') : $t('general.colorMode.toggleToDark')"
            class="color-mode"
            @click="toggleDark()"
        >
            <i :class="isDark ? 'icon-day' : 'icon-night'" />
        </button>

        <div class="divider" /> -->

    <div class="user-details">
      <BaseDropdown placement="right">
        <template #button>
          <button class="button">
            <i class="icon-user" />
          </button>
        </template>
        <template #menu>
          <header>
            <picture>
              <img :src="user.avatar" loading="lazy">
            </picture>
            <div class="details">
              <strong>{{ user.name }}</strong>
              <span>{{ user.email }}</span>
            </div>
          </header>
          <ul>
            <li>
              <a href="javascript:void(0);">
                <i class="icon-settings" />
                <span>{{ $t('general.settings') }}</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <i class="icon-route" />
                <span>{{ $t('general.trips') }}</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <i class="icon-review" />
                <span>{{ $t('general.reviews') }}</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <i class="icon-image" />
                <span>{{ $t('general.photos') }}</span>
              </a>
            </li>
            <li class="divider" />
            <li>
              <a href="javascript:void(0);" class="danger">
                <i class="icon-logout" />
                <span>{{ $t('general.logout') }}</span>
              </a>
            </li>
          </ul>
        </template>
      </BaseDropdown>
    </div>
  </div>
</template>
