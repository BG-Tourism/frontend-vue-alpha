<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const appName = 'destination.bg'

    return {
      appName,
    }
  },
})
</script>

<template>
  <router-link :to="{ name: 'Homepage' }" class="brand">
    <div class="logo">
      <i class="icon-image" />
    </div>
    <strong>{{ appName }}</strong>
  </router-link>
</template>
