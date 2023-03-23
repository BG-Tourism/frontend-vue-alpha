<script>
import { defineComponent } from 'vue'

import pageTitle from '@/utils/pageTitle'

export default defineComponent({
  setup() {
    pageTitle('general.my.tripsCreate')
  },
})
</script>

<template>
  <div class="page-alert">
    <i class="icon-alert-triangle" />
    <p>{{ $t('general.needsRework') }}</p>
  </div>
</template>
