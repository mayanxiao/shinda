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

<style lang="less">
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
  background-color: #ccc;
  font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,sans-serif!important;
}
.middle{
  clear: both;
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  height: auto;
  margin: 20px auto;
  display: block;
  position: relative;
}

</style>
