<template>
  <div class="sign_body">
    <div class="signleft">
       <div class="signtitle">
         <p><router-link to='/'>首页</router-link> /登陆</p>
       </div>
       <div class="signcon">
         <ul>
           <li>用户名<input type="text" class="signbox" v-model="userData.name"></li>
           <li>密码<input type="password" class="signbox" v-model="userData.password"></li>
         </ul>
         <p class="btnbox">
            <span class="signbtn"  @click="">登陆</span>
            <span class="signbtn" @click="">通过 Git Hub 登录</span></p>
       </div>
    </div>
    <div class="signright">
    	 <div class="signtitle"><span>关于</span></div>
       <div class="rightcon">
         <p>CNode：Node.js专业中文社区</p>
         <p>在这里你可以：</p>
         <ul>
           <li>向别人提出你遇到的问题</li>
           <li>帮助遇到问题的人</li>
           <li>分享自己的知识</li>
           <li>和其它人一起进步</li>
         </ul>
         
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userData:[]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sign_body {
  clear: both;
	display: block;
	width:1400px;
	height: auto;
  margin: 10px auto;
  padding-bottom: 685px;
}
.signleft {
  float: left;
  width: 1075px;
  height: auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 3px;
}
.signright {
  float: right;
  width: 270px;
  height: auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 3px;
}
.signtitle {
  background-color: #f6f6f6;

}
.signtitle p {
  color: #ccc;
}
.signtitle span {
  font-size: 13px;
}
.signtitle a {
  color: #80bd01;
}
.signtitle a:hover {
  text-decoration: underline;
}
.signcon {
  padding: 50px 0;
}
.signcon li {
  text-align: right;
}
.signbox {
  display: inline-block;
  margin: 10px 520px 10px 20px;
  width: 270px;
  height: 20px;
  padding: 4px 6px;
  border: 1px solid #ccc;
  border-radius:3px;
  font-size: 14px;
  line-height: 20px;
}
.signbox:before {
  content: "233"
}
.btnbox {
  margin-left: 251px;
}
.signbtn{
  display: inline-block;
  margin-top: 30px;
  margin-left: 20px;
  padding: 7px 10px;
  background-color: #5bc0de;
  font-size: 14px;
  border-radius: 3px;
  color: #fff;
}
.rightcon p {
  margin: 10px 0;
  font-size: 14px;
}
.rightcon li {
  list-style: disc;
  margin-left: 25px;
  font-size: 13px;
  margin-bottom: 5px;
}
</style>