<script>
import { defineComponent } from 'vue'

import pageTitle from '@/utils/pageTitle'

import categories from '@/api/categories'

export default defineComponent({
  setup() {
    pageTitle('page.categories.title')

    return {
      categories,
    }
  },
})
</script>

<template>
  <section class="top-section">
    <div class="page-content">
      <div class="title">
        <h2>{{ $t('page.categories.subtitle') }}</h2>
        <h1>{{ $t('page.categories.title') }}</h1>
        <p>{{ $t('page.categories.description') }}</p>
      </div>
    </div>
  </section>

  <section class="categories-list">
    <div class="page-content">
      <div class="page-alert">
        <i class="icon-alert-triangle" />
        <p>{{ $t('general.needsRework') }}</p>
      </div>
      <div class="page-container">
        <ul>
          <li v-for="category in categories" :key="category">
            <router-link :to="{ name: 'Category', params: { slug: category.slug } }">
              {{ category.locale[$i18n.locale].title }}
              <span>{{ category.subcategories.length }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
