<script>
import { defineComponent } from 'vue'

import BaseSelectFile from '@/components/BaseSelectFile.vue'

import pageTitle from '@/utils/pageTitle'

export default defineComponent({
  components: {
    BaseSelectFile,
  },
  setup() {
    pageTitle('general.my.photosUpload')
  },
})
</script>

<template>
  <BaseSelectFile accept="jpg,png" />
</template>
