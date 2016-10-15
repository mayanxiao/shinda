<template>
  <div id="app">
    <top></top>
    <div class="middle">
    <router-view></router-view>
    <!-- <sidebar></sidebar> -->
    <router-view name="right"></router-view>
    <!-- <topictext></topictext> -->
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import top from './components/top.vue'
import list from './components/list.vue'
import bottom from './components/bottom.vue'
import sidebar from './components/sidebar.vue'
import topictext from './components/topictext.vue'
import topicon from './components/topicon.vue'
import signup from 'components/signup.vue'
import signin from 'components/signin.vue'
export default {
  components: {
    top,
    list,
    sidebar,
    bottom,
    topictext,
    topicon,
    signup,
    signin
  }
}
</script>

<style>
html {
  height: auto;
  
}
*{
  margin: 0; 
  padding: 0; 
  text-decoration: none; 
  list-style: none;
}
body {
  display: block;
  /*justify-content: center;*/
  height: 100%;
  width: 100%;
  background-color: #ccc;
  font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
}
.middle{
  clear: both;
  width: 1400px;
  height: auto;
  margin: 20px auto;
  display: block;
  position: relative;
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
