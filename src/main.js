import { createApp } from 'vue'
import { createPinia } from 'pinia'
import MapVue from 'mapvue'
import VueGtag from 'vue-gtag'

import App from './App.vue'
import router from './router'
import locales from './locales'

const app = createApp(App)
const store = createPinia()

app.use(store)
app.use(router)
app.use(locales)
app.use(MapVue)

if (import.meta.env.VITE_APP_ENV === 'production') {
  app.use(VueGtag, {
    config: { id: import.meta.env.VITE_APP_GOOGLE_TAG },
  })
}

app.mount('#app')
