<script>
import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { onClickOutside, onKeyStroke } from '@vueuse/core'

import { useGeneralStore } from '@/stores/GeneralStore'

export default defineComponent({
  setup() {
    const store = useGeneralStore()
    const { locale } = useI18n()
    const target = ref(null)
    const user = {
      avatar: 'https://i.pravatar.cc/50?img=50',
      name: 'Шмулю Юрганчев',
      email: 'shmulyu@yurganchev.com',
    }

    const handleClose = () => {
      store.toggleModal('userMenu')
    }

    onKeyStroke('Escape', () => {
      handleClose()
    })

    onClickOutside(target, () => {
      handleClose()
    })

    return {
      store,
      locale,
      target,
      user,
      handleClose,
    }
  },
})
</script>

<template>
  <div v-if="store.modals.userMenu.shown">
    <div
      class="modal" :class="[
        store.modals.userMenu.state === 1 ? 'opening' : null,
        store.modals.userMenu.state === 2 ? 'closing' : null,
      ]"
    >
      <div v-if="[1, 2].includes(store.modals.userMenu.state)" class="wrapper">
        <div class="close">
          <button>
            <span class="icon-holder">
              <i class="icon-close" />
            </span>
            <span>{{ $t('general.close') }}</span>
          </button>
        </div>
        <div ref="target" class="user-menu-container">
          <div class="section-content">
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
                <a href="javascript:void(0);" @click="handleClose">
                  <i class="icon-settings" />
                  <span>{{ $t('general.settings') }}</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" @click="handleClose">
                  <i class="icon-route" />
                  <span>{{ $t('general.trips') }}</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" @click="handleClose">
                  <i class="icon-review" />
                  <span>{{ $t('general.reviews') }}</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);" @click="handleClose">
                  <i class="icon-image" />
                  <span>{{ $t('general.photos') }}</span>
                </a>
              </li>
              <li class="divider" />
              <li>
                <a href="javascript:void(0);" class="danger" @click="handleClose">
                  <i class="icon-logout" />
                  <span>{{ $t('general.logout') }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
