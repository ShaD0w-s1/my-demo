<template>
  <n-layout style="height:100%" has-sider>
    <div style='position:absolute; z-index:9999' >
      <FullscreenOutlined/>
    </div>
    <n-layout-sider>
      <draggable
        
        :list='list1'
        :group="{ name: 'list', pull: 'clone', put: false }"
      >
        <template #item='{ element }'>
          <n-card>
            {{element.name}}
          </n-card>
        </template>
      </draggable>
    </n-layout-sider>
    <n-layout-content position="absolute" class="arrange-bg p-4" style="left:272px;">
      <NInput style="width:350px"/>
      <div class='bg-green-400 h-8 w-96 rounded-full border-2 border-black' style="line-height: 28px;padding-left: 25px;">
        <span>开始</span>
        <span>场景执行最大限时</span>
        <input/>
        <span>分钟</span>
      </div>
      <draggable
        class = 'w-96'
        :list = 'list2'
        :group = '{name: "list"}'
      >
        <template #item="{ element }">
          <NCard>
            {{element.name}}
          </NCard>
        </template>
      </draggable>
    </n-layout-content>  

  </n-layout>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { FullscreenOutlined } from '@vicons/antd'
import draggable from 'vuedraggable'

const list1 = reactive([
	{ name: 'John', id: 1 },
	{ name: 'Joao', id: 2 },
	{ name: 'Jean', id: 3 },
	{ name: 'Gerard', id: 4 }
])

const list2 = reactive([

])
</script>

<style scoped>
.arrange-bg {
    background-color: #F5F9F4;
    background-size: 30px 30px, 30px 30px;
    background-image: linear-gradient(90deg, #B8BBB7 1px, transparent 2px),linear-gradient(0, #B8BBB7 1px, transparent 2px);

}

</style>