<template>
	<div id="footer">
        <div id="footer_con">
        	<div class="links">
        		<a href="#">RSS</a>
        		|
        		<a href="https://github.com/cnodejs/nodeclub/">源码地址</a>
        	</div>
        	<div class="footer_text">
        		<p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
        		<p>服务器赞助商为
	    			<a href="http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo" target="_blank" class="ucloud"><img src="../assets/ucloud.jpg"></a>
        			，存储赞助商为<a href="http://www.qiniu.com/?ref=cnode" target="_blank" class="nananiu"><img src="../assets/nananiu.jpg"></a>
        			,由<a href="https://alinode.aliyun.com/?ref=cnode" target="_blank" class="alinode"><img src="../assets/alinode.jpg"></a>提供性能服务。
        		</p>
        		<p>新手搭建 Node.js 服务器，推荐使用无需备案的
                   <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank">DigitalOcean(https://www.digitalocean.com/)</a>
        		</p>
        	</div>
        </div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'ddfdf'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
	clear: both;
	background-color: #fff;
	width: 100%;
	margin-top: 20px;	
}
#footer_con {
	width: 1400px;
	margin: 0 auto;
	padding: 20px 0;
	font-size: 13px;
	line-height: 2em;
	
}

.links,.links a{
	color: #000;
}
.links a:hover{
	color: #005580;
}
.footer_text p{
	font-size: 14px;
	color: #ababab;
	margin-bottom: 10px;
}
.footer_text p a {
    color: #08c;
}
.footer_text p a:hover{
	color: #005580;
    text-decoration: underline;
}
.ucloud img{
	width: 92px;
	height: 19px;
	vertical-align: middle;
}
.nananiu img{
	width: 115px;
	height: 43px;
	vertical-align: middle;
}
.alinode img{
	width: 166px;
	height: 54px;
	vertical-align: middle;
}
</style>