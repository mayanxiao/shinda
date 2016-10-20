<template>
<div class="main_body">
	<div class="main_box">
		<div class="main_title">
			<span v-if="contentData.top">置顶</span>
			<span v-if="contentData.good&&!contentData.top">精华</span>
			<h1>{{contentData.title}}</h1>
			<div class="title_note">
				<span>发布于 {{contentData.create_at|timediff}}</span>
				<!-- <span>作者 {{contentData.author.loginname}}</span> -->
				<span>{{contentData.visit_count}} 次浏览</span>
				<span>来自 <span v-if="contentData.tab=='share'">分享</span>
					       <span v-if="contentData.tab=='ask'">问答</span>
					       <span v-if="contentData.tab=='job'">招聘</span>
			    </span>
			</div>
		</div>
		<div class="topictext markdown-body" v-html="contentData.content">
			
		</div>
        <div class="replies">
        	<div class="topblank">
        		<p><i>{{contentData.reply_count}}</i> 回复</p>
        	</div>
        	<div class="reply_li" v-for="(rp,index) of contentData.replies">
        		<img :src="rp.author.avatar_url">
                <div class="author_info">
                	<p>{{rp.author.loginname}} <span>{{index+1}}楼</span><span class="infotime">{{rp.create_at|timediff}}</span></p>
                </div>
                <div class="replycon markdown-body" v-html="rp.content">
                                     
                </div>
        	</div>
        </div>
	</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      contentData: []
    }
  },
  created() {
  	this.$http.get('https://cnodejs.org/api/v1/topic/'+this.$route.params.id).then((json) => {
                this.contentData=json.data.data
                console.log()
            }, (json) => {
                // error callback
                console.log(json.data)
            })
  },
  filters: {
		timediff: function(value){
			
            var diff;
            var curtime=Date.parse(new Date());
            diff=curtime-Date.parse(value)
            if (diff>31536000000) {
                diff=parseInt(diff/31536000000)
                return diff+" 年前"
            } 
            else if(diff>2592000000){
            	diff=parseInt(diff/2592000000)
                return diff+" 月前"
            }
            else if(diff>86400000){
            	diff=parseInt(diff/86400000)
                return diff+" 天前"
            }
            else if(diff>3600000){
            	diff=parseInt(diff/3600000)
                return diff+" 小时前"
            }
            else if(diff>60000){
            	diff=parseInt(diff/60000)
                return diff+" 分钟前"
            }
            else{
                return "十几秒前"
            };
		},
        // conhtml: function(value) {
        //     return parse(value)
        // }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
@import '../markdownbody/github-markdown.css';

.main_title {
	padding: 10px;
    border-radius: 2px 2px 0 0;
    background-color: #fff;
    margin-bottom: 1px;
}
.main_title>span {
    float: left;
    font-size: 12px;
    display: inline-block;
    padding: 2px;
    background-color: #80db01;
    border-radius: 3px;
    color: #fff;
}
.main_title h1{
	font-size: 18px;
	margin-left: 40px;
}
.title_note {
	font-size: 13px;
	padding: 15px 0 0 5px;
	color: #ccc; 
}
.title_note>span:before {
    content: "•";
}
.topictext {
	background-color: #fff;
	padding: 10px;
	border-radius: 0 0 3px 3px;
    overflow: hidden;
}
.replies {
	margin-top: 10px;
}
.topblank {
    padding: 10px;
    background-color: #f6f6f6;
    margin-bottom: 1px;
}
.topblank p{
	font-size: 14px;
}
.reply_li {
	padding:10px;
	background-color: #fff;
	margin-bottom: 1px;
}
.reply_li img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
    vertical-align: center;
    position: absolute;
}
.author_info {
	padding-right: 10px;
	margin-left: 40px;
}
.author_info p {
    font-size: 12px;
}
.author_info p span {
    color: #08c;
}
.infotime:before {
    content: "•"
}
.replycon {
    margin-left: 40px;
}
/*.markdown-text p {
    white-space:pre-wrap;
    word-wrap:break-word;
    line-height: 2em;
    margin: 1em 0;
}
.markdown-text>:last-child {
    margin-bottom: 1em;
}
.markdown-text>:first-child {
    margin-top: 0;
}
.markdown-text li {
    font-size: 14px;
    line-height: 2em;
}
.markdown-text li code,.markdown-text p code {
    color: #000;
    background-color: #fcfafa;
    padding: 4px 6px; 
}
.markdown-text img {
    cursor: pointer;
}
.markdown-text a {
    color: #08c
}*/
</style>