<template>
  <div>
    <h5>{{ userStore.name }}</h5>
    <h3>Mouse: {{x}} x {{y}}</h3>
    <a-button type="primary">Primary Button</a-button>
  </div>
  
</template>
<script lang="ts" setup>
import { useMouse } from '@vueuse/core'
import { useUserStore } from '../store/user'
const userStore = useUserStore()
userStore.updateName('李四')
const { x, y } = useMouse()
</script>
<style lang="scss" scoped>
</style>