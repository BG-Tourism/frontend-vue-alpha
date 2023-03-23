<script>
import { defineComponent } from 'vue'

import pageTitle from '@/utils/pageTitle'

export default defineComponent({
  setup() {
    pageTitle('general.my.photosList')
  },
})
</script>

<template>
  <div class="page-alert">
    <i class="icon-alert-triangle" />
    <p>{{ $t('general.needsRework') }}</p>
  </div>

  <router-link :to="{ name: 'MyPhotosUpload' }" class="button big blue">
    <span>{{ $t('general.photoUpload') }}</span>
  </router-link>
</template>
