<script>
import { defineComponent, onMounted, ref } from 'vue'

import BlockLogo from '@/views/layouts/header/logo.vue'
import BlockNavigation from '@/views/layouts/header/navigation.vue'
import BlockUserMenu from '@/views/layouts/header/user-menu.vue'

export default defineComponent({
  components: {
    BlockLogo,
    BlockNavigation,
    BlockUserMenu,
  },
  setup() {
    const opacity = ref(0)

    const handleScroll = () => {
      if (window.pageYOffset > 0)
        opacity.value = 1
      else
        opacity.value = 0
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    return {
      opacity,
    }
  },
})
</script>

<template>
  <header class="page-header">
    <div class="container">
      <BlockLogo />

      <BlockNavigation />

      <BlockUserMenu />
    </div>

    <div class="bg-blur" :style="{ opacity }" />
  </header>
</template>
