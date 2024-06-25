import { createApp } from 'vue'
import { createBootstrap } from 'bootstrap-vue-next'

import './assets/bootstrap.scss'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import './assets/kop.css'

import App from './App.vue'

const app = createApp(App)
app.use(createBootstrap())
app.mount('#app')
