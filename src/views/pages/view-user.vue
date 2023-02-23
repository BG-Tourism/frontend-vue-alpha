<script>
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import { useTitle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

import users from '@/api/users'

import { useGeneralStore } from '@/stores/GeneralStore'

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const { locale } = useI18n({ useScope: 'global' })
    const store = useGeneralStore()
    const titleSuffix = store.titleSuffix
    const user = users.find(item => item.username === route.params.slug)
    const loading = ref(true)

    onBeforeMount(() => {
      if (!users.find(item => item.username === route.params.slug))
        router.push({ name: 'Home' })
      else
        loading.value = false
    })

    const pageTitle = computed(() => {
      return `${user.firstName} ${user.lastName} (${user.username})${titleSuffix}`
    })
    useTitle(pageTitle)

    return {
      loading,
      locale,
      route,
      user,
    }
  },
})
</script>

<template>
  <div v-if="!loading">
    <section class="top-section">
      <div class="page-content">
        <div class="details">
          <picture>
            <img :src="`${user.avatar}?size=150`" alt="">
          </picture>

          <h1>{{ user.firstName }} {{ user.lastName }}</h1>
          <p>@{{ user.username }}</p>

          <ul class="buttons">
            <li>
              <button>
                <i class="icon-star-solid" />
                <span>Дай звезда</span>
              </button>
            </li>
          </ul>
        </div>
        <ul class="tabs">
          <li>
            <a href="javascript:void(0);" class="active">
              За мен
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              Снимки
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              Ревюта
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              Пътешествия
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section class="profile-content">
      <div class="page-content">
        {{ user.description }}
      </div>
    </section>
  </div>
  <div v-else>
    <section class="top-section">
      <div class="page-content">
        <div class="title">
          <h1>{{ $t('page.region.title') }}</h1>
        </div>
      </div>
    </section>

    <section class="regions-list">
      <div class="page-content">
        <div class="page-container">
          <div class="container-content padding">
            {{ $t('general.loading') }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
