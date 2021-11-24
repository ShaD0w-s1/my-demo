import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Arrange from './modules/arrange'

import layout from '../view/layout/index.vue'

const constantRouterMap: Array<RouteRecordRaw> = [ // 固定路由
	{ // 入口 
		path: '',
		redirect: 'redirect'
	},
	{ // 跳转路由 启动页面 
		path: '/redirect',
		name: 'redirect',
		component: () => import ('@/view/error/redirect.vue')
	}
]

const asyncRouterMap : Array<RouteRecordRaw> = [ // 动态路由
	Arrange
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRouterMap
})

export default router