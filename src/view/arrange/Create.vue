<template>
  <n-layout style="height:100%" has-sider>
    <div style='position:absolute; z-index:9999' >
      <FullscreenOutlined/>
    </div>
    <n-layout-sider
      :collapsed='listsCollapsed'
      collapse-mode='width'
      collapsed-width='50'
      @collapse="listsCollapsed = true"
			@expand="listsCollapsed = false"
    >

    <div v-if='listsCollapsed === false'>
      <div class='deep-blue' style='height: 45px'>
        <n-icon size="25" @click='listsCollapsedHandle'>
          <MenuFoldOutlined/>
        </n-icon>
        <span>语句列表</span>
      </div>
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
    </div>
    <div v-else></div>
 
    </n-layout-sider>
    <n-layout-content position="absolute" class="arrange-bg p-4" style="left:272px;">
      <!-- 场景名称 -->
      <NInput style="width:350px"/>
      <!-- 场景名称End -->
      
      <!-- 开始标题 -->
      <div class='bg-green-400 h-8 rounded-full border-2 border-black' style="line-height: 28px;padding-left: 25px;">
        <span>开始</span>
        <span>场景执行最大限时</span>
        <input/>
        <span>分钟</span>
      </div>
      <div style='height:20px; margin-left: 75px; width:2px; overflow: hidden; background-color:#aaa'></div>
      <div style='width:0px; height:0px; border-right:6px soild transparent; border-left:6px soild transparent ;border-top:6px soild #aaa'></div>
      <!-- 开始标题 End-->

      <!-- 拖拽语句区 -->
      <div class='placeholder'>
        <draggable :list='list2' :group='{name: "list"}'>
          <template #item="element">{{element.name}}</template>
        </draggable>
      </div>
      <div style='height:20px; margin-left: 75px; width:2px; overflow: hidden; background-color:#aaa'></div>
      <div style='width:0px; height:0px; border-right:6px soild transparent; border-left:6px soild transparent ;border-top:6px soild #aaa'></div>

      <!-- 拖拽语句区 -->

      <div class='bg-green-400 h-8 rounded-full border-2 border-black' style="line-height: 28px;padding-left: 25px;" >
        结束
      </div>
    </n-layout-content>  

  </n-layout>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { FullscreenOutlined, MenuFoldOutlined } from '@vicons/antd'
import draggable from 'vuedraggable'

const listsCollapsed = ref(false)
function listsCollapsedHandle () {
	listsCollapsed.value = !listsCollapsed.value
}



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


.placeholder {
  width: 200px;
  border: 1px dotted #aaa;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius:12px;

}
</style>