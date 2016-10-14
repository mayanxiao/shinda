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
				<li><a href="">{{ msg_f }}</a></li>
			</ul>
    </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      msg_a: '首页',
      msg_b: '新手入门',
      msg_c: 'API',
      msg_d: '关于',
      msg_e: '注册',
      msg_f: '登陆',

      msg_img: '../assets/cnodejs_light.svg'
    }
  },
  methods () {
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fl {float: left;}
.fr {float: right;}
.nav_bar {height: 50px; width: 1920px; background-color: #444; font-size: 13px; padding: 5px 0;}
.nav_inner {width: 1400px; height: 50px; margin: 0 auto;}
.logo_bar {padding: 3px 20px 3px 0; float: left; width: 140px; height: 22px;}
.nav_bar .nav_search {margin-top: 16px; float: left;}
.search_box {background-color: #ccc;
                 padding:3px 22px 3px 5px; margin-top: 0px; border-radius: 15px;}
.nav_con {float: right; margin-right: 10px;}
.nav_con li {padding: 5px 15px; float: left; height: 40px;}
.nav_con li a {line-height: 40px; color: #ccc;}
.nav_con li a:hover {color: #fff;}
</style>
