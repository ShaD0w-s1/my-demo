<template>
  <div>
    <NMenu 
      class=""
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      :collapsed="props.collapsed"
    />
  </div>
</template>

<script lang="ts" setup>
// vue功能
import { defineProps, defineEmits, h } from 'vue'

// 依赖功能
import { NMenu, NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'

import { ThunderboltOutlined ,} from '@vicons/antd'

const props = defineProps<{
  collapsed: boolean
}>()

const emits = defineEmits<{
  (e: 'collapsed', id: string) : void
}>()

function renderIcon (icon:any) {
	return () => h(NIcon, null, { default: () => h(icon) })
}


const menuOptions: MenuOption[] = [
	{
		label: '场景执行',
		key: '1',
		icon: renderIcon(ThunderboltOutlined),
		children:[
			{
				label: '场景清单',
			},
			{
				label: '历史清单'
			}
		]
	},
]

</script>

