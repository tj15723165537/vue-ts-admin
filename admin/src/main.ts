import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import {router} from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.scss'
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate);
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus).use(router).use(pinia).mount('#app')

