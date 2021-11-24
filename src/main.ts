// 载入VUE核心
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 载入核心附件
import { createPinia } from 'pinia'
import router from '@/router'
app.use(createPinia())
app.use(router)

// 载入ui框架


// 载入权限校验
import setupDirectives from '@/directives/'
setupDirectives(app)

//载入css样式
import './style/index.css'

app.mount('#app')