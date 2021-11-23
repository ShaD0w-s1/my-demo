<template>
  <div class="warpper">
    <!-- 左侧logo -->
    <div class="header">
      <p>DIVOPS场景管理</p>
    </div>

    <!-- 中部名字 -->
    <div class="titie">

    </div>

    <!-- 右边功能 -->
    <div class="btn">

    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
</script>

<script lang="ts">
export default defineComponent({
	name: 'LayoutHeader',
	setup() {
		return {}
	}
})
</script>

<style lang="scss" scoped>
.warpper {
  display: flex;
  height: 55px;

  .header {
    width: 200xp;

    p {
      line-height: 55px;
    }
  }
}


</style>