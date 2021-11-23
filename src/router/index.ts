import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

import layout from '../view/layout/index.vue'

const constantRouterMap: Array<RouteRecordRaw> = [ // 固定路由
	{
		path: '/',
		name: 'layout',
		component: layout 
	}
]

const asyncRouterMap : Array<RouteRecordRaw> = [ // 动态路由

]

const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRouterMap
})

export default router