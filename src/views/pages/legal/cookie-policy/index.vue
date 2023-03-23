<script>
import { defineComponent } from 'vue'

import pageTitle from '@/utils/pageTitle'

export default defineComponent({
  setup() {
    pageTitle('page.cookies.title')
  },
})
</script>

<template>
  <section class="top-section">
    <div class="page-content">
      <div class="title">
        <h1>{{ $t('page.cookies.title') }}</h1>
      </div>
    </div>
  </section>

  <section class="text-section">
    <div class="page-content">
      <div class="page-alert">
        <i class="icon-alert-triangle" />
        <p>{{ $t('general.needsRework') }}</p>
      </div>
    </div>
  </section>
</template>
