<template>
  <div id="haha">
    <p>
    	<router-link to="/foo">Go to Foo</router-link>
      <router-link to="/nima">nima</router-link>
    </p>
    <router-view></router-view> 
  </div>
</template>

<script>


export default {
  data () {
    return {
      msg: 'ddfdf'
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
