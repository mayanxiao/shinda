<template>
  <div class="sidebar">
    <div class="login">
    	<p class="login_title">CNode：Node.js专业中文社区</p>
    	<p class="login_con">您可以<a href="#">登录</a>或<a href="#">注册</a>，也可以<br/>
    	   <a href="#"><span class="loginbtn">通过 Git Hub 登录</span></a></p>
    </div>
    <div class="sidead">
    	<a href="https://bearychat.com/?hmsr=cnodejs&hmpl=&hmcu=&hmkw=&hmci=" target="_blank"><img src="../assets/bearychat.jpg"></a>
    	<a href="https://bearychat.com/?hmsr=cnodejs&hmpl=&hmcu=&hmkw=&hmci=" target="_blank"><img src="../assets/update.jpg"></a>
    	<a href="https://bearychat.com/?hmsr=cnodejs&hmpl=&hmcu=&hmkw=&hmci=" target="_blank"><img src="../assets/a2p.jpg"></a>
    	<a href="https://bearychat.com/?hmsr=cnodejs&hmpl=&hmcu=&hmkw=&hmci=" target="_blank"><img src="../assets/alisolve.jpg"></a>
    </div>
    <div class="no_reply">
    	<p>无人回复的话题</p>
    	<ul>
    		<li class="lonelytopic" v-for="">{{}}</li>
        </ul>
    </div>
    <div class="scoreboard">
    	<p>积分榜 TOP 100 >></p>
        <ul>
        	<li class="dalao" v-for="item in filtered">{{item}}</li>
        </ul>
    </div>
    <div class="friend">
    	<p>友情社区</p>
    	<div class="fri_pic">
    		<a href="https://ruby-china.org/" target="_blank"><img src="../assets/rubychina.png" height="169" width="512"></a>
    		<a href="http://golangtc.com/" target="_blank"><img src="../assets/golang.png" height="58" width="256"></a>
    		<a href="https://laravel-china.org/" target="_blank"><img src="../assets/phphub.png" height="148" width="454"></a>
    		<a href="https://testerhome.com/" target="_blank"><img src="../assets/testerhome.png" height="200" width="569"></a>
    	</div>
    </div>
    <div class="QRcode">
    	<p>客户端二维码</p>
    	<div class="QRcode_con">
    	<p><img src="../assets/qrcode.jpg" height="200" width="200"></p>
    	<a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
        </div>
    </div>
   
  </div>
</template>

<script>
export default {
  data () {
    return {
      noreplyData:[],
      scoreboardData:[],
      filteredItems:[
          {item: 1},
          {item: 2},
          {item: 3},
          {item: 4},
          {item: 5}
      ]
    }
  },
  computed: {
    filtered: function () {
      return this.filteredItems.slice(0, 3)
    }
  },
  created() {
    this.$http.get('https://cnodejs.org/api/v1/topics').then((json) => {
                
            }, (json) => {
                // error callback
                console.log(json.data)
            })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@white: #fff;
.sidebar {
  width: 20%;
  position: absolute;
  right: 0;
  top: 0;
}
.login {
  padding: 10px;
  background-color: #fff;
  border-radius: 3px;
}
.login_title{
	font-size: 15px;
	color: #000;
  width: 100%;
  margin-bottom: 10px;
}
.login_con{
	font-size: 13px;
	color: #000;
  a {
     font-size: 13px;
     color: #005580;
     padding: 0 2px;
     &:hover {
      text-decoration: underline;
     };
  }
}
.loginbtn{
	display: inline-block;
	margin-top: 5px;
	padding: 7px 10px;
	background-color: #5bc0de;
	font-size: 14px;
	border-radius: 3px;
	color: @white;
}
.sidead{
  width: 15%;
	margin:10px 0;
	padding: 10px 10px 0 10px;
	width: 93%;
	background-color: @white;
  img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
}
.no_reply {
	background-color: @white;
	padding: 10px;
	font-size: 13px;
	border-radius: 3px;
  p {
    margin-bottom: 10px;
  }
}
.scoreboard {
	background-color: @white;
	padding: 10px;
	font-size: 13px;
	margin:10px 0;
	border-radius: 3px;
  p {
    margin-bottom: 10px;
  }
}
.friend {
	padding: 10px 10px 0 10px;
	width: 93%;
	background-color: @white;
  p {
    font-size: 13px;
  }
  img {
    width: 145px;
    height: 50px;
    margin-bottom: 10px;
  }
}
.QRcode{
	padding: 10px;
	background-color: @white;
	margin-top: 10px;
  p {
    font-size: 13px;
    margin-bottom: 10px;
  }
}
.QRcode_con {
	padding: 10px;
	vertical-align: middle;
	text-align:center;
  a {
    font-size: 13px;
    color: #778087;
    display: inline-block;
    &:hover {
      text-decoration: underline;
    }
    img {
      max-width: 90%;
      height: auto;
    }
  }
}
</style>