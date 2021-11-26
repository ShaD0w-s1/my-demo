<template>
  <div>
    <NMenu 
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

const props = defineProps<{
  collapsed: boolean
}>()

const emits = defineEmits<{
  (e: 'collapsed', id: string) : void
}>()

function renderIcon (icon:any) {
	return () => h(NIcon, null, { default: () => h(icon) })
}




</script>

