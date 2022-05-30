import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

createApp(App).mount('#app') /*burasi ok mi ?*/

const app = createApp(App)

app.use(router)

app.mount('#app')