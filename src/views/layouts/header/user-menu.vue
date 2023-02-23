<script>
import { defineComponent, ref } from 'vue'
import { onClickOutside, onKeyStroke } from '@vueuse/core'

import { useGeneralStore } from '@/stores/GeneralStore'

export default defineComponent({
  setup() {
    const generalStore = useGeneralStore()
    const user = generalStore.user
    const dropdownMenu = ref(false)
    const dropdownMenuTarget = ref(null)

    const handleDropdownOpen = () => {
      dropdownMenu.value = true
    }

    const handleDropdownClose = (modal = null) => {
      dropdownMenu.value = false

      if (modal != null) {
        generalStore.modals[modal].state = 1
        generalStore.modals[modal].shown = true
      }
    }

    const handleModal = (modal) => {
      generalStore.modals[modal].state = 1
      generalStore.modals[modal].shown = true
    }

    const handleLogout = () => {
      handleDropdownClose()

      generalStore.user.logged = false
    }

    onKeyStroke('Escape', () => {
      handleDropdownClose()
    })

    onClickOutside(dropdownMenuTarget, () => {
      handleDropdownClose()
    })

    return {
      user,
      dropdownMenu,
      dropdownMenuTarget,
      handleDropdownOpen,
      handleDropdownClose,
      handleModal,
      handleLogout,
    }
  },
})
</script>

<template>
  <aside>
    <div v-if="user.logged" class="user-menu">
      <div class="trigger" @click="handleDropdownOpen">
        <picture>
          <img :src="`${user.avatar}?size=50`" alt="">
        </picture>
        <span>{{ user.names }}</span>
        <i class="icon-arrow-down" />
      </div>
      <div ref="dropdownMenuTarget" class="menu-container" :class="[dropdownMenu ? 'shown' : 'hidden']">
        <ul>
          <li>
            <router-link :to="{ name: 'User', params: { slug: user.username } }" @click="handleDropdownClose()">
              <i class="icon-user" />
              <span>{{ $t('general.viewProfile') }}</span>
            </router-link>
          </li>
          <li>
            <a href="javascript:void(0);" @click="handleDropdownClose()">
              <i class="icon-settings" />
              <span>{{ $t('general.settings') }}</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="handleDropdownClose()">
              <i class="icon-route" />
              <span>{{ $t('general.trips') }}</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="handleDropdownClose()">
              <i class="icon-review" />
              <span>{{ $t('general.reviews') }}</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);" @click="handleDropdownClose()">
              <i class="icon-image" />
              <span>{{ $t('general.photos') }}</span>
            </a>
          </li>
          <li class="divider" />
          <li>
            <a href="javascript:void(0);" class="button-like" @click="handleLogout()">
              <span>{{ $t('general.logout') }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="buttons">
      <button class="login" @click="handleModal('authentication')">
        <span>{{ $t('general.login') }}</span>
      </button>

      <button class="register" @click="handleModal('authentication')">
        <span>{{ $t('general.register') }}</span>
      </button>
    </div>
    <div class="general">
      <button class="search" :title="$t('general.search')" @click="handleModal('search')">
        <i class="icon-search" />
      </button>

      <button class="languages" :title="$t('general.languages')" @click="handleModal('language')">
        <i class="icon-languages" />
      </button>
    </div>
  </aside>
</template>
