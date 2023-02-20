<script>
import { defineComponent } from 'vue'

import category from '@/utils/category'

export default defineComponent({
  setup() {
    return {
      category,
    }
  },
})
</script>

<template>
  <nav class="navigation">
    <ul>
      <li>
        <router-link :to="{ name: 'Places' }" class="link" :class="category('places')">
          <span>{{ $t('general.navigation.places') }}</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Categories' }" class="link" :class="category('categories')">
          <span>{{ $t('general.navigation.categories') }}</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Regions' }" class="link" :class="category('regions')">
          <span>{{ $t('general.navigation.regions') }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
