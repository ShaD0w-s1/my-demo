// 载入VUE核心
import { createApp } from 'vue'
import App from './App.vue'

// 载入核心附件
import { createPinia } from 'pinia'
import router from '@/router'

// 载入ui框架

// 载入权限校验
import '@/directives/permission'

//载入css样式
import './style/index.css'

createApp(App).use(createPinia()).use(router).mount('#app')