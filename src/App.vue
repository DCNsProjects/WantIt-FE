<template>
  <div id="App">
    <vueHeader></vueHeader>
    <mainCategories></mainCategories>
  </div>
</template>

<script>
import vueHeader from './components/common/Header.vue'
import mainCategories from './components/main/Categories.vue'

export default {
  name: 'App',
  components: {
    vueHeader,
    mainCategories
  }
}
</script>

<style>
</style>