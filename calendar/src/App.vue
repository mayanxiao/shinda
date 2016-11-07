<template>
  <div id="app">
    <calendar></calendar>
  </div>
</template>

<script>
import calendar from 'components/calendar.vue'

export default {
  name: 'app',
  components: {
    calendar
  }  

}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
