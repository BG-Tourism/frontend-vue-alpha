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
  <router-link :to="{ name: 'MyPhotosUpload' }" class="button big blue">
    <span>{{ $t('general.photoUpload') }}</span>
  </router-link>
</template>
