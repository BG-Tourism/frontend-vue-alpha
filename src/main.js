import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import locales from './locales'

const app = createApp(App)
const store = createPinia()

app.use(store)
app.use(router)
app.use(locales)

app.mount('#app')
