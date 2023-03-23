<script>
import { defineComponent } from 'vue'

import { useGeneralStore } from '@/stores/GeneralStore'

import pageTitle from '@/utils/pageTitle'

export default defineComponent({
  setup() {
    const generalStore = useGeneralStore()
    const user = generalStore.user

    pageTitle('general.my.profile')

    return {
      user,
    }
  },
})
</script>

<template>
  <div class="page-alert">
    <i class="icon-alert-triangle" />
    <p>{{ $t('general.needsRework') }}</p>
  </div>

  <router-link :to="{ name: 'User', params: { slug: user.username } }" class="button big blue">
    <span>{{ $t('general.viewProfile') }}</span>
  </router-link>
</template>
