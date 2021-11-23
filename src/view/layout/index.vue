<template>
  <n-layout >
		<n-layout-header class='app_header' :bordered="true">
			<div class="content"></div>
		</n-layout-header> 
			<n-layout has-sider>
				<n-layout-sider class="app_sider" :bordered="true">侧边栏</n-layout-sider>
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

<style lang="scss" scoped>
.app_header {
	height: 54px;

}

.app_sider {
	width: 200px;
	background-color: #2e4474;
}
</style>
