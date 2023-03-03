<script>
import { defineComponent } from 'vue'

import pageTitle from '@/utils/pageTitle'

import BaseButton from '@/components/BaseButton.vue'

export default defineComponent({
  components: {
    BaseButton,
  },
  setup() {
    pageTitle('page.error.title')
  },
})
</script>

<template>
  <div class="container">
    <h1><span>404</span></h1>
    <h2>{{ $t('page.error.message') }}</h2>

    <BaseButton type="blue" element="router" route="Homepage">
      {{ $t('page.error.button') }}
    </BaseButton>
  </div>
</template>
