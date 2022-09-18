<template>
  <div>
    <n-button @click="toggle" type="info">toggle</n-button>
    <demo :age="age"></demo>
  </div>
</template>

<script setup lang="ts">
const age = ref(0)
const toggle = () => {
  age.value++
}
getUser()
</script>

<style lang="postcss" scoped>

</style>
