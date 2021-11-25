import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { Router, RouteRecordRaw } from 'vue-router'

import Arrange from './modules/arrange'

import layout from '../view/layout/index.vue'


const modules = import.meta.globEager('./modules/**/*.ts') 

const constantRouterMap: RouteRecordRaw[] = [ // 固定路由
	{ // 入口 
		path: '',
		name: 'root',
		redirect: 'redirect'
	},
	{ // 跳转路由 启动页面 
		path: '/redirect',
		name: 'redirect',
		component: () => import ('@/view/error/Redirect.vue')
	}
]

const asyncRouterMap: RouteRecordRaw[] = [ // 动态路由
	Arrange, // 编排页面
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: asyncRouterMap
})

export function setupRouter(app: App) {
	app.use(router)
	// 创建路由守卫
	createRouterGuards(router)
}


function createRouterGuards(router: Router) {
	
}

export default router