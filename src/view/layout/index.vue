<template>
  <n-layout>
		<n-layout-header class='layout_header' :bordered="true" >
			<Header />
		</n-layout-header> 
		<n-layout has-sider>
			<n-layout-sider position="absolute"  
				class="siderbar shadow" 
				:bordered="true" 
				collapse-mode="width"
				:collapsed-width="64"
				:collapsed="SideCollapsed"
				show-trigger
				@collapse="SideCollapsed = true"
				@expand="SideCollapsed = false"
				>
				<Sider
					:collapsed="SideCollapsed"
				/>
			</n-layout-sider>
			<n-layout>
				<router-view></router-view>
			</n-layout>
		</n-layout>
  </n-layout>
</template>


<script lang="ts" setup>
import { ref } from 'vue'
import { defineComponent } from 'vue'
import { NLayout, NLayoutHeader, NLayoutSider } from 'naive-ui'

// 自定义组件
import Header from './components/header'
import Sider from './components/sider'


const SideCollapsed = ref(true)

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
.siderbar {
	background-color: #395591;
}
</style>
