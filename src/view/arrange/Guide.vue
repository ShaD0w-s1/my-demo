<template>
  <NButton @click="$router.push({path:'/arrange/create'})">创建模板</NButton>
</template>

<script lang="ts" setup>
  import { NButton } from 'naive-ui'

   function handleclick () {
     console.log('123')
   }



</script>