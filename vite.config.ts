import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { join } from 'path'

function resolve(dir: string) {
	return join(__dirname, dir)
}

import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		legacy({
			targets: ['defaults', 'not IE 11']
		})
	],
	resolve: {
		alias: {
			'@': resolve('src')
		}
	}
})
