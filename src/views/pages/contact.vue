<script>
import { defineComponent } from 'vue'

import pageTitle from '@/utils/pageTitle'

export default defineComponent({
  setup() {
    pageTitle('page.contact.title')
  },
})
</script>

<template>
  <section class="top-section">
    <div class="page-content">
      <div class="title">
        <h1>{{ $t('page.contact.title') }}</h1>
        <p>{{ $t('page.contact.description') }}</p>
      </div>
    </div>
  </section>

  <section class="contact-section">
    <div class="page-content">
      <div class="page-alert">
        <i class="icon-alert-triangle" />
        <p>{{ $t('general.needsRework') }}</p>
      </div>
    </div>
  </section>
</template>
