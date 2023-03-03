<script>
import { defineComponent } from 'vue'

import pageTitle from '@/utils/pageTitle'

export default defineComponent({
  setup() {
    pageTitle('page.about.title')
  },
})
</script>

<template>
  <section class="top-section">
    <div class="page-content">
      <div class="title">
        <h1>{{ $t('page.about.title') }}</h1>
        <p>{{ $t('page.about.description') }}</p>
      </div>
    </div>
  </section>

  <section class="about-section">
    <div class="page-content">
      <div class="page-alert">
        <i class="icon-alert-triangle" />
        <p>{{ $t('general.needsRework') }}</p>
      </div>
    </div>
  </section>
</template>
