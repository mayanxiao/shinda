<template>
  <div>
    <top></top>
    <list></list>

  </div>
</template>

<script>

import top from './components/top.vue'
import list from './components/list.vue'
import footer from './components/footer.vue'
import sidebar from './components/sidebar.vue'
export default {
  components: {
    top,
    list
  }
}
</script>

<style>
html {
  height: 100%;
}
*{
  margin: 0; 
  padding: 0; 
  text-decoration: none; 
  list-style: none;
}
body {
  display: flex;
  /*justify-content: center;*/
  height: 100%;
  width: 100%;
  background-color: #ccc;
}

/*#app {
  color: #2c3e50;
  margin-top: 0px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}*/
</style>
