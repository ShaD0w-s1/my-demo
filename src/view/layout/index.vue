<template>
  <n-layout >
		<n-layout-header class='layout_header' :bordered="true">
			<Header />
		</n-layout-header> 
			<n-layout has-sider>
				<n-layout-sider class="layout_sider" :bordered="true">
					<Sider />
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
