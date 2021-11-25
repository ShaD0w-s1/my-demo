import layout from '@/view/layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const Arrange: RouteRecordRaw = {
	path: '/arrange',
	name: 'Arrange',
	component: layout,
	redirect: '/arrange/guide',
	children: [
		{ //场景引导
			path: 'guide',
			name: 'ArrangeGuide',
			component: () => import('@/view/arrange/Guide.vue')
		},
		{ //场景创建
			path: 'create',
			name: 'ArrangeCreate',
			component: () => import('@/view/arrange/Create.vue')
		}
	]
}


export default Arrange