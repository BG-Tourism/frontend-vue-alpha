<script>
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import categories from '@/api/categories'
import regions from '@/api/regions'

export default defineComponent({
  name: 'BlockFooter',
  setup() {
    const { locale } = useI18n()

    const environment = import.meta.env.VITE_APP_ENV

    const appName = computed(() => {
      if (locale.value === 'bg')
        return import.meta.env.VITE_APP_NAME_BG

      return import.meta.env.VITE_APP_NAME_EN
    })

    const gitRepository = import.meta.env.VITE_APP_GIT_REPO
    const pageDiscord = import.meta.env.VITE_APP_DISCORD
    const pageFacebook = import.meta.env.VITE_APP_FACEBOOK
    const pageInstagram = import.meta.env.VITE_APP_INSTAGRAM
    const pageTwitter = import.meta.env.VITE_APP_TWITTER

    const currentYear = new Date().getFullYear()

    return {
      appName,
      environment,
      gitRepository,
      pageDiscord,
      pageFacebook,
      pageInstagram,
      pageTwitter,
      currentYear,
      categories,
      regions,
    }
  },
})
</script>

<template>
  <footer class="page-footer">
    <div class="header-line">
      <div class="container">
        <div class="wrapper">
          <div class="about">
            <router-link :to="{ name: 'Homepage' }" class="brand">
              <div class="logo">
                <i class="icon-image" />
              </div>
              <strong>{{ appName }}</strong>
            </router-link>
            <div class="description" v-html="$t('general.footer.description')" />
            <ul class="socials">
              <li>
                <a :href="pageTwitter" target="_blank" rel="noopener" :title="`${appName} - Twitter`">
                  <i class="icon-social-twitter" />
                </a>
              </li>
              <li>
                <a :href="pageFacebook" target="_blank" rel="noopener" :title="`${appName} - Facebook`">
                  <i class="icon-social-facebook" />
                </a>
              </li>
              <li>
                <a :href="pageInstagram" target="_blank" rel="noopener" :title="`${appName} - Instagram`">
                  <i class="icon-social-instagram" />
                </a>
              </li>
              <li>
                <a :href="gitRepository" target="_blank" rel="noopener" :title="`${appName} - GitHub`">
                  <i class="icon-social-github" />
                </a>
              </li>
              <li>
                <a :href="pageDiscord" target="_blank" rel="noopener" :title="`${appName} - Discord`">
                  <i class="icon-social-discord" />
                </a>
              </li>
            </ul>
          </div>

          <div class="columns">
            <div class="column">
              <h1>{{ $t('general.footer.regarding') }}</h1>
              <ul>
                <li>
                  <router-link :to="{ name: 'About' }">
                    <span>{{ $t('general.footer.links.about') }}</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Contact' }">
                    <span>{{ $t('general.footer.links.contact') }}</span>
                  </router-link>
                </li>
                <li class="divider" />
                <li>
                  <router-link :to="{ name: 'TermsAndConditions' }">
                    <span>{{ $t('general.footer.links.terms') }}</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'PrivacyPolicy' }">
                    <span>{{ $t('general.footer.links.privacyPolicy') }}</span>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name: 'Cookies' }">
                    <span>{{ $t('general.footer.links.cookies') }}</span>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="column">
              <h1>{{ $t('page.categories.title') }}</h1>
              <ul>
                <li v-for="category in categories" :key="category">
                  <router-link :to="{ name: 'Places', query: { category: category.slug } }">
                    <span>{{ category.locale[$i18n.locale].title }}</span>
                  </router-link>
                </li>
              </ul>
            </div>
            <div class="column">
              <h1>{{ $t('page.regions.title') }}</h1>
              <ul>
                <li v-for="region in regions" :key="region">
                  <router-link :to="{ name: 'Region', params: { slug: region.slug } }">
                    <span>{{ region.locale[$i18n.locale].title }}</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="$i18n.locale === 'bg'" class="open-source">
      <div class="container">
        <div class="wrapper">
          <div class="call-to-action">
            <h1>Присъедини се към общността ни</h1>
            <p>
              Ние изграждаме този уебсайт заедно с помощта на хора като теб. Ако си запален по историята и културата
              на България, ще се радваме да допринесеш за нашия проект. Твоят принос ще помогне да направим този
              проект още по-вълнуващ и ангажиращ за обществеността.
            </p>
          </div>
          <a :href="gitRepository" target="_blank" rel="noopener">Научи повече</a>
        </div>
      </div>
    </div>

    <div class="footer-line">
      <div class="container">
        <div class="wrapper">
          <p>
            &copy; {{ currentYear }}
            <strong>{{ appName }}</strong>
            - {{ $t('general.footer.rights') }}.
          </p>
        </div>
      </div>
    </div>
  </footer>

  <div v-if="environment" class="info-line" :class="[environment]">
    <span v-html="$t(`general.headerEnvironment.${environment}`, { repo: gitRepository })" />
  </div>
</template>
