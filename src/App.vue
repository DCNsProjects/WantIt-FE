<template>
  <div id="App">
    <vueHeader />
    <RouterView name="top" />
    <RouterView />
    <vueFooter />
  </div>
</template>

<script>
import vueHeader from './components/global/Header.vue'
import vueFooter from './components/global/Footer.vue'

export default {
  name: 'App',
  components: {
    vueHeader,
    vueFooter,
  }
}
</script>

<style></style> 