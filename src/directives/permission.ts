import router from '@/router'

import { useLoadingBar } from 'naive-ui'

const LoadingBar = useLoadingBar()

router.beforeEach(async (to, from, next) => {
	console.log('进入路由守卫')
	LoadingBar.start()
	next()
})