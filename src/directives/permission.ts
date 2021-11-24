import { ObjectDirective } from 'vue'
import router from '@/router'

import { useLoadingBar } from 'naive-ui'

const LoadingBar = useLoadingBar()

export const permission: ObjectDirective = {
	mounted(el, binding) {
		if (binding.value == undefined) return
		router.beforeEach(async (to, from, next) => {
			console.log('进入路由守卫')
			LoadingBar.start()
			next()
		})
	}
}