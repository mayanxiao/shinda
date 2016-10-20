<template>
  <div class="sign_body">
    <div class="signleft">
       <div class="signtitle">
         <p><router-link to='/'>首页</router-link> /登陆</p>
       </div>
       <div class="signcon">
         <ul>
           <p class="signwarn" v-if="tokenjudge">请输入正确的36位token!!!</p>
           <li>请输入token<input type="text" class="signbox" v-model="tokeninput" maxlength="36"></li>
         </ul>
         <p class="btnbox">
            <span class="signbtn"  @click="tokenpost">登陆</span>
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
      tokeninput: '',
      tokenjudge: false
    }
  },
  methods: {
    tokenpost() {
      console.log(this.tokeninput)
      if (this.tokeninput.length!==36) {
          this.tokenjudge = true
          return false
      } else{
          // this.$http.post()
      };
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.sign_body {
  clear: both;
	display: block;
	width: 100%;
	height: auto;
  margin: 10px auto;
  padding-bottom: 685px;
}
.signleft {
  float: left;
  width: 77%;
  height: auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 3px;
}
.signright {
  float: right;
  width: 19%;
  height: auto;
  padding: 10px;
  background-color: #fff;
  border-radius: 3px;
}
.signtitle {
  background-color: #f6f6f6;
  p {
    color: #ccc;
    font-size: 14px;
  }
  a {
    color: #80bd01;
    &:hover {
      text-decoration: underline;
    }
  }
}
.signcon {
  padding: 50px 0;
  .signwarn {
    display: inline-block;
    padding: 10px 50px;
    background-color: #FF8C00;
    margin-left: 20%;
  }
  li {
    text-align: right;
  }
}
.signbox {
  display: inline-block;
  margin: 10px 520px 10px 20px;
  width: 290px;
  height: 20px;
  padding: 4px 6px;
  border: 1px solid #ccc;
  border-radius:3px;
  font-size: 14px;
  line-height: 20px;
}
.btnbox {
  margin-left: 30%;
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
.rightcon {
  p {
    margin: 10px 0;
    font-size: 14px;
  }
  li {
    list-style: disc;
    margin-left: 25px;
    font-size: 13px;
    margin-bottom: 5px;
  }
}
</style>