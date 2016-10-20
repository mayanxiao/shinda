<template>
  <div class="nav_bar">
		<div class="nav_inner">
			<div class="logo_bar"><router-link to="/"><img src="../assets/cnodejs_light.svg"></router-link></div>
			<div class="nav_search"><input type="text" class="search_box"></div>
			<ul class="nav_con">
				<li><router-link to="/">{{ msg_a }}</router-link></li>
				<li><a href="">{{ msg_b }}</a></li>
				<li><a href="">{{ msg_c }}</a></li>
				<li><a href="">{{ msg_d }}</a></li>
				<li><router-link :to="{name:'signup'}">{{ msg_e }}</router-link></li>
				<li><router-link :to="{name:'signin'}">{{ msg_f }}</router-link></li>
			</ul>
    </div>
	</div>
</template>

<script>
require('../assets/less/top.less')

export default {
  data () {
    return {
      msg_a: '首页',
      msg_b: '新手入门',
      msg_c: 'API',
      msg_d: '关于',
      msg_e: '注册',
      msg_f: '登陆',
  
      
    }
  },
  methods () {
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.fl {
  float: left;
}
.fr {
  float: right;
}
.nav_bar {
  width: 100%; 
  height: auto;
  background-color: #444; 
  font-size: 13px; 
  padding: 5px 0;
}
.nav_inner {
  width: 90%; 
  max-width: 1400px;
  min-width: 960px;
  height: 40px; 
  margin: 0 auto;
  
}
.logo_bar {
  padding: 3px 20px 3px 0; 
  float: left;
  width: 140px; 
  height: 22px;
  img {
    height: 28px;
    vertical-align: center;
  }
}
.nav_bar .nav_search {
  margin-top: 16px; 
  float: left;
}
.search_box {
  float: left;
  background-color: #ccc;
  padding:3px 3px 3px 5px; 
  margin-top: -7px;
  border-radius: 15px;
}
.nav_con {
  float: right;
  margin-right: 10px;
  li {
    float: right;
    margin-right: 10px;
    padding: 5px 15px;
    float: left;
    a {
     line-height: 30px;
     color: #ccc;
     &:hover {
      color: #fff;
     }
    }
  }
}
</style>
