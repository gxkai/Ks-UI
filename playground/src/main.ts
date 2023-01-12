import { createApp } from 'vue'
import App from './App.vue'
import KsUI from '@ks-ui/core'
import { lightTheme } from '@ks-ui/core'
import '@ks-ui/core/style.css'
import { plugin as pinceau } from 'pinceau/runtime'

import 'uno.css'
import './assets/main.css'

const app = createApp(App)

app.use(KsUI)
app.use(pinceau, { theme: {
}, utils: lightTheme.utils  })

app.mount('#app')
