<template>
  <div style="height: 100vh; position: relative">
    <n-layout position="absolute" :theme="darkTheme">
      <n-layout-header bordered> 
				<Header></Header>
			</n-layout-header>
      <n-layout has-sider position="absolute" style="top: 57px;">
        <n-layout-sider 
					v-show='sideHidden===false'
					class="siderbar text-white font-extrabold"
					bordered
					collapse-mode="width"
					:collapsed-width="64"
					:collapsed="sideCollapsed"
					@collapse="sideCollapsed = true"
					@expand="sideCollapsed = false"
				> 
					<div class='flex flex-col items-center'>
						<n-avatar></n-avatar>
						<div>
							<span>许可有效期</span>
							<span>2555-55-55</span>
						</div>
					</div>
					<NMenu
						collapsed-icon-size='34'
						collapsed-width='63'
						:options='menuOptions'
					/>
					<div class='absolute bottom-0 w-full hover:bg-red-700' style="height: 50px;" @click="collapsedhandle">
						<n-icon class="float-right" style="line-height: 50px;" size='30'>
							<ArrowLeftOutlined/>
						</n-icon>
					</div>
				</n-layout-sider>
        <n-layout class="h-full">
					<n-layout-header bordered class="h-12">  
						<n-breadcrumb>
							<n-icon v-show='sideHidden' class="text-black " size='40' @click="sideshowHandle" >
								<DoubleRightOutlined />
							</n-icon>
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

import { NIcon } from 'naive-ui'
import type { MenuOption }from 'naive-ui'
import { darkTheme } from 'naive-ui'

import { EditFilled, SettingFilled, CaretRightFilled, ArrowLeftOutlined, DoubleRightOutlined } from '@vicons/antd'








function renderIcon( icon: any) {
	return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
	{
		label: '场景执行',
		key: '1',
		icon: renderIcon(CaretRightFilled),
		children:[{label: '场景清单',},{label: '历史清单'}]
	},
	{
		label: '场景编排',
		key: '2',
		icon: renderIcon(EditFilled),
		children:[{label: '新建场景'},{label: '我的场景'},{label: '场景审核'}]
	},
	{
		label: '系统管理',
		key: '3',
		icon: renderIcon(SettingFilled),
		children:[{label: '模板管理'}, {label: '语句管理'} ,{label: '系统配置'}]
	}
]


const sideCollapsed = ref(false)
const sideHidden = ref(false)
function collapsedhandle () {
	if (!sideCollapsed.value) {sideCollapsed.value = !sideCollapsed.value} else if (!sideHidden.value) { sideHidden.value = !sideHidden.value}
}
function sideshowHandle () {
	sideCollapsed.value = !sideCollapsed.value
	sideHidden.value = ! sideHidden.value 
}



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
