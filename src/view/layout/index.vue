<template>
  <div style="height: 100vh; position: relative">
    <n-layout position="absolute">
      <n-layout-header bordered> 
				<Header></Header>
			</n-layout-header>
      <n-layout has-sider position="absolute" style="top: 64px;">
        <n-layout-sider 
					class="siderbar"
					bordered
					collapse-mode="width"
					:collapsed-width="64"
					:collapsed="SideCollapsed"
					show-trigger
					@collapse="SideCollapsed = true"
					@expand="SideCollapsed = false"
				>
					<NMenu
						:options='menuOptions'
					/>
				</n-layout-sider>
        <n-layout class="h-full">
					<n-layout-header bordered class="h-12">  
						<n-breadcrumb>
							<n-breadcrumb-item> 这里是面包屑	</n-breadcrumb-item>
						</n-breadcrumb>
					</n-layout-header>
					<n-layout-content position="absolute" class="h-full" style="top:48px">
						<router-view />
					</n-layout-content>
        </n-layout>
      </n-layout>
    </n-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { defineComponent, h } from 'vue'

// 自定义组件
import Header from './components/header'
import Sider from './components/sider'

import type {MenuOption }from 'naive-ui'

const SideCollapsed = ref(true)

const menuOptions: MenuOption[] = [
	{
		label: '场景执行',
		key: '1',
		children:[{label: '场景清单',},{label: '历史清单'}]
	},
]

</script>

<script lang="ts">
export default defineComponent({
	name: 'AppLayout',
	components: {},
	setup() {
		return {}
	},
})
</script>

<style scoped>
.siderbar {
  background-color: #395591;
}
</style>
