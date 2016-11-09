<template>
  <div id="app">
    <picfade></picfade>
    <picslide></picslide>
  </div>
</template>

<script>
import picfade from './components/picfade.vue'
import picslide from './components/picslide.vue'
export default {
  name: 'app',
  components: {
    picfade,
    picslide
  }
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
