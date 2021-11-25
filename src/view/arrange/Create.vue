<template>
  <n-layout  position="absolute" has-sider >
    <n-layout-sider  :bordered="true">
      <div class='h-36'>好大一个搜索框</div>
      <draggable
        class = ''
        :list = 'list1'
        :group = '{name:"list", pull:"clone", put: false}'
        :sort = 'false'
      >
        <template #item="{ element }">
          <NCard>
            {{element.name}}
          </NCard>
        </template>
      </draggable>
    </n-layout-sider>
    <n-layout-content class="arrange-bg p-4" :native-scrollbar="false">
      <NInput>123</NInput>
      <div class='absolte bg-green-400'>
        123
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
import draggable from 'vuedraggable'
import Layout from '../layout/index.vue'
import { NInput ,NCard,NLayout, NLayoutContent, NLayoutSider } from 'naive-ui'

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