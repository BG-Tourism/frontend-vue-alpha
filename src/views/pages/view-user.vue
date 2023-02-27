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
      return `${user.firstName} ${user.lastName} (@${user.username})${titleSuffix}`
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
    <section class="user-details">
      <div class="page-content">
        <div class="container">
          <aside>
            <picture>
              <img :src="`${user.avatarWide}`" alt="">
            </picture>

            <h1>{{ user.firstName }} {{ user.lastName }}</h1>
            <h2>
              <router-link :to="{ name: 'User', params: { slug: user.username } }">
                @{{ user.username }}
              </router-link>
            </h2>

            <p>{{ user.description }}</p>

            <button class="primary">
              <span>{{ $t('page.user.rate') }}</span>
            </button>

            <div class="information">
              <dl>
                <dt>{{ $t('page.user.location') }}</dt>
                <dd>София, България</dd>
              </dl>
              <dl>
                <dt>{{ $t('page.user.website') }}</dt>
                <dd>
                  <a href="https://xen.gg/" target="_blank" class="external-link">xen.gg</a>
                </dd>
              </dl>
              <dl>
                <dt>{{ $t('page.user.email') }}</dt>
                <dd>
                  <a href="mailto:me@xen.gg">me@xen.gg</a>
                </dd>
              </dl>
              <ul class="socials">
                <li>
                  <a href="https://instagram.com/tom.atanasov" target="_blank" title="Instagram">
                    <i class="icon-social-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/tom.atanasov" target="_blank" title="Facebook">
                    <i class="icon-social-facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/xenbg" target="_blank" title="Twitter">
                    <i class="icon-social-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </aside>
          <div class="contents">
            <div class="block">
              <div class="title">
                <h1>{{ $t('page.user.photos') }}</h1>
              </div>
              <div class="photos">
                <div class="photo">
                  <a href="javascript:void(0);">
                    <picture>
                      <img src="/images/photos/2-1.jpg">
                    </picture>
                  </a>
                </div>
                <div class="photo">
                  <a href="javascript:void(0);">
                    <picture>
                      <img src="/images/photos/2-2.jpg">
                    </picture>
                  </a>
                </div>
                <div class="photo">
                  <a href="javascript:void(0);">
                    <picture>
                      <img src="/images/photos/3-1.jpg">
                    </picture>
                  </a>
                </div>
                <div class="photo">
                  <a href="javascript:void(0);">
                    <picture>
                      <img src="/images/photos/3-2.jpg">
                    </picture>
                  </a>
                </div>
                <div class="photo">
                  <a href="javascript:void(0);">
                    <picture>
                      <img src="/images/photos/4-1.jpg">
                    </picture>
                  </a>
                </div>
                <div class="photo">
                  <a href="javascript:void(0);">
                    <picture>
                      <img src="/images/photos/4-2.jpg">
                    </picture>
                  </a>
                </div>
                <div class="photo">
                  <a href="javascript:void(0);">
                    <picture>
                      <img src="/images/photos/5-1.jpg">
                    </picture>
                  </a>
                </div>
                <div class="photo">
                  <a href="javascript:void(0);">
                    <picture>
                      <img src="/images/photos/5-2.jpg">
                    </picture>
                  </a>
                </div>
              </div>
            </div>
            <div class="block">
              <div class="title">
                <h1>{{ $t('page.user.reviews') }}</h1>
              </div>
              <div class="reviews">
                ...
              </div>
            </div>
          </div>
        </div>
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
