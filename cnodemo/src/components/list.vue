<template>
 <div class="main_body">
    <div class="main_box">
        <div class="main_nav">
            <ul>
                <li style="background-color: #80bd01"><a href="#" style="color: #fff">全部</a></li>
                <li><a href="#">精华</a></li>
                <li><a href="#">分享</a></li>
                <li><a href="#">问答</a></li>
                <li><a href="#">招聘</a></li>
            </ul>
        </div>
        <div id="topic_list">
            <div class="cell" v-for="item of listData">
				<a href="#" class="author_avatar fl"><img :src="item.author.avatar_url"></a>
                <span class="reply_box fl">
	                <span class="reply_count" >{{item.reply_count}}</span><span>/</span><span class="visit_count" >{{item.visit_count}}</span>
	                <span id="topic_top"v-if="item.top">置顶</span><span id="topic_good" v-if="item.good">精华</span>
	                <span class="topic_normal" v-if="item.tab==='share'&&item.top===false&&item.good===false">分享</span>
	                <span class="topic_normal" v-if="item.tab==='ask'&&item.top===false&&item.good===false">问答</span>
	                <span class="topic_normal" v-if="item.tab==='job'&&item.top===false&&item.good===false">招聘</span>
                </span>
                <div class="topic_title_box">

                    <a href="#" class="topic_title">{{item.title}}</a>
                </div>
                <div class="last_reply fr">
                    <span class="last_reply_time">{{item.last_reply_at|timediff}}</span>
                </div>
            </div>
        </div>
        <div id="main_page">
        </div>
    </div>
</div>

</template>
<script>
export default {
	data () {
		return {
			listData : []
		}
	},
	filters : {
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
		}
       
       	   
	},
    created() {
            // GET /someUrl
            this.$http.get('https://cnodejs.org/api/v1/topics').then((json) => {
                this.listData=json.data.data
            }, (json) => {
                // error callback
                console.log(json.data)
            })
        }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fl{float: left;}
.fr{float: right;}
.main_body {
    width: 1400px;
    min-height: 400px;
    max-height: 2000px;
    margin: 0 auto;
    margin-top: 20px;
}

.main_box {
    width: 1095px;
    min-height: 400px;
    padding: 5px;
    background-color: #fff;
}

.main_nav ul li {
    float: left;
    display: inline-block;
    padding: 5px;
    margin: 0 5px;
    border-radius: 5px;
}

.main_nav ul li a {
    color: #80db01;
    font-size: 14px;
}

.cell {
    clear: both;
    font-size: 14px;
    padding: 10px;
    position: relative;
    width: 1075px;
    height: 25px;
    line-height: 30px;
}

.author_avatar img {
    width: 30px;
    height: 30px;
    border-radius: 3px;
}

.reply_box {
    padding: 0 5px;
}

.reply_count {
    color: #9e78c0;
    font-size: 15px;
}
.visit_count{
	color: #b4b4b4;
	font-size: 12px;
}
#topic_list{clear: both;}

.topic_title {
    font-size: 16px;
    color: #000;
    display: inline-block;
    width: 750px;
    height: 32px;
    overflow: hidden;
}

.topic_title:hover {
    text-decoration: underline;
}

#topic_top,
#topic_good {
    display: inline-block;
    font-size: 12px;
    background-color: #80bd01;
    height: 12px;
    line-height: 12px;
    color: #fff;
    padding: 2px 2px;
    border-radius: 2px;
}

.topic_normal {
    display: inline-block;
    font-size: 12px;
    background-color: #e5e5e5;
    height: 12px;
    line-height: 12px;
    color: #999;
    padding: 2px 2px;
    border-radius: 2px;
}

.last_reply_time {
    font-size: 12px;
    position: absolute;
    right: 0;
    top: 12px;
    font-family: "mircosoft yahei";
    color: #ccc;
}
</style>
