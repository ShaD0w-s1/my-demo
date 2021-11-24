<template>
  <n-layout class="flex flex-col">
		<n-layout-header class='layout_header' :bordered="true">
			<Header />
		</n-layout-header> 
			<n-layout has-sider class="flex-1">
				<n-layout-sider 
					class="bg-darkblue shadow" 
					:bordered="true" 
					collapse-mode="width"
					:collapsed-width="64"
					:collapsed="collapsed"
					show-trigger
					:width="240"
					@collapse="collapsed = true"
					@expand="collapsed = false"
					>
					<Sider 
						:collapse="collapsed"
					/>
				</n-layout-sider>
				<n-layout>
					<router-view></router-view>
				</n-layout>
			</n-layout>
  </n-layout>
</template>


<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { defineComponent } from 'vue'
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutSider } from 'naive-ui'

// 自定义组件
import Header from './components/header'
import Sider from './components/sider'


const collapsed = ref(true)

</script>


<script lang="ts">



export default defineComponent({
	name: 'AppLayout',
	components:{

	},
	setup() {
		return {
		}
	},
})
</script>

<style scoped>

</style>
