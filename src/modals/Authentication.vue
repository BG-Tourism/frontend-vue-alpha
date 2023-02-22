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

    const handleClose = (action = null) => {
      store.toggleModal('authentication')

      if (action != null)
        store.user.logged = true
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
      handleClose,
    }
  },
})
</script>

<template>
  <div v-if="store.modals.authentication.shown">
    <div
      class="modal" :class="[
        store.modals.authentication.state === 1 ? 'opening' : null,
        store.modals.authentication.state === 2 ? 'closing' : null,
      ]"
    >
      <div v-if="[1, 2].includes(store.modals.authentication.state)" class="wrapper">
        <div class="close">
          <button>
            <span class="icon-holder">
              <i class="icon-close" />
            </span>
            <span>{{ $t('general.close') }}</span>
          </button>
        </div>
        <div ref="target" class="authentication-container">
          <div class="section-content">
            <p>Вписването и регистрацията ще се показват в модален прозорец.<br><br>За демонстрацията използвай бутона, ако искаш да виждаш прототипа като потребител.</p>
            <button @click.prevent="handleClose('login')">
              <span>Вход в тестов акаунт</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
