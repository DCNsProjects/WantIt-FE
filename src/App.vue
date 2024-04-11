<template>
  <div id="App">
    <vueHeader></vueHeader>
  </div>
</template>

<script>
import vueHeader from './components/Header.vue'

export default {
  name: 'App',
  components: {
    vueHeader
  }
}
</script>

<style>
body {
  background-color: ivory;
}
</style>