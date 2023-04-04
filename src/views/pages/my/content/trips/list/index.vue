<script>
import { defineComponent } from 'vue'

import pageTitle from '@/utils/pageTitle'

export default defineComponent({
  setup() {
    pageTitle('general.my.tripsList')
  },
})
</script>

<template>
  <router-link :to="{ name: 'MyTripsCreate' }" class="button big blue">
    <span>{{ $t('general.createTrip') }}</span>
  </router-link>
</template>
