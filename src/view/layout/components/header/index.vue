<template>
  <div class="flex h-14">
    <!-- 左侧logo -->
    <div class="header">
      <p class="">DIVOPS场景管理</p>
    </div>

    <!-- 中部名字 -->
    <div class="flex-1">
      <h1 class="text-center">大标题</h1>
    </div>

    <!-- 右边功能 -->
    <div class="flex ">
      <NAvatar></NAvatar>
      <InformationSquare />
      <Settings />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'

import type { Component } from 'vue'

import { NAvatar } from 'naive-ui'
import { InformationSquare, Settings } from '@vicons/carbon'
</script>

<script lang="ts">
export default defineComponent({
	name: 'LayoutHeader',
	setup() {
		return {}
	}
})
</script>

<style scoped>

</style>