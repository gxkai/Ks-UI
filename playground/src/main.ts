import { createApp } from 'vue'
import App from './App.vue'
import LuffUI from '@luff-ui/core'
import '@luff-ui/core/style.css'

import { plugin as pinceau } from 'pinceau/runtime'

import './assets/main.css'

const app = createApp(App)

app.use(LuffUI)
app.use(pinceau, { theme: {} })

app.mount('#app')
