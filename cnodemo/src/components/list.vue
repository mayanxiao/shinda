<template>
 <div class="main_body">
    <div class="main_box">
        <div class="main_nav">
            <ul v-for="(tag, index) in tagData" >
                <li><a href="#" class="origin" @click="changetab(index)" :class="{'newcolor': index==tagDataIndex}">{{tag.name}}</a></li>
            </ul>
        </div>
        <div id="topic_list">
            <div class="cell" v-for="item in listData">
				<a href="#" class="author_avatar fl"><img :src="item.author.avatar_url"></a>
                <span class="reply_box fl">
	                <span class="reply_count" >{{item.reply_count}}</span><span>/</span><span class="visit_count" >{{item.visit_count}}</span>
	                <span id="topic_top"v-if="item.top">置顶</span><span id="topic_good" v-if="item.good&&!item.top">精华</span>
	                <span class="topic_normal" v-else v-if="item.tab==='share'&&!item.top&&!item.good">分享</span>
	                <span class="topic_normal" v-if="item.tab==='ask'&&!item.top&&!item.good">问答</span>
	                <span class="topic_normal" v-if="item.tab==='job'&&!item.top&&!item.good">招聘</span>
                </span>
                <div class="topic_title_box">

                    <router-link :to="{name:'topic', params:{id: item.id}}">{{item.title}}</router-link>
                    <!--  to= "{ path: '/users', query: { foo: 'bar' }}" -->
                </div>
                <div class="last_reply fr">
                    <span class="last_reply_time">{{item.last_reply_at|timediff}}</span>
                </div>
            </div>
        </div>
        <div class="main_page">
            <ul>
                <li><a href="#"  class="pageAarowL" @click="pageprev">«</a></li>
                <li class="pageOmitN">...</li>
                <li v-for="(num,index) in pageDataLimit"><a class="pageBox" href="#" @click="changepage(index)" 
                    :class="{'newNum': index==pageDataIndex}">{{num.page}}</a></li>
                <li class="pageOmit">...</li>
                <li><a href="#" class="pageAarowR" @click="pagenext">»</a></li>
                
            </ul>
        </div>
        <router-view></router-view>
    </div>
</div>

</template>
<script>
export default {
    data () {
		return {
            tagData : [
               {name: '全部', api: 'all'},
               {name : '精华', api: 'good'},
               {name : '分享', api: 'share'},
               {name: '问答', api: 'ask'},
               {name: '招聘', api: 'job'},
            ],
            tagDataIndex:0,
            pageData : [
               {page:'一', api:1},
               {page:'二', api:2},
               {page:'三', api:3},
               {page:'四', api:4},
               {page:'五', api:5},
               {page:'六', api:6},
               {page:'七', api:7},
               {page:'八', api:8},
               {page:'九', api:9},
               {page:'十', api:10},
               {page:'十一', api:11},
               {page:'十二', api:12},
               {page:'十三', api:13},
            ],
            pageDataIndex: 0,
            minus: 0,
            plus: 0,
            topnum: 0,
            endnum: 0,
            listData : []
        }    	
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
    },
    methods: {
        changetab : function(index) {
            this.tagDataIndex=index
              
            // var api=this.tagData[this.tagDataIndex].api
            this.$http.get('https://cnodejs.org/api/v1/topics'+'?tab='+this.tagData[this.tagDataIndex].api).then((json) => {
                this.listData=json.data.data
                                
            }, (json) => {
                console.log(json.data)
                })
       },
        changepage: function(index) {
            this.pageDataIndex=index
            this.$http.get('https://cnodejs.org/api/v1/topics'+'?tab='+this.tagData[this.tagDataIndex].api+'&page='+this.pageData[this.pageDataIndex].api).then((json) => {
                this.listData=json.data.data
                
            }, (json) => {
                console.log(json.data)
                })
            console.log(this.pageDataIndex)
        },
        pagenext: function() {
            this.pageDataIndex++
            this.plus=this.pageDataIndex
            if (this.plus<this.pageData.length) {
                this.$http.get('https://cnodejs.org/api/v1/topics'+'?tab='+this.tagData[this.tagDataIndex].api+'&page='+this.pageData[this.plus].api).then((json) => {
                this.listData=json.data.data
                
            }, (json) => {
                console.log(json.data)
                })
            } 
            else{
                this.plus=this.pageDataIndex=this.pageData.length-1
                this.$http.get('https://cnodejs.org/api/v1/topics'+'?tab='+this.tagData[this.tagDataIndex].api+'&page='+this.pageData[this.plus].api).then((json) => {
                this.listData=json.data.data
                
            }, (json) => {
                console.log(json.data)
                })
            };
            console.log(this.pageDataIndex)
           
        },
        pageprev: function() {
            this.pageDataIndex--
            this.minus=this.pageDataIndex
            if (this.minus>0) {
                this.$http.get('https://cnodejs.org/api/v1/topics'+'?tab='+this.tagData[this.tagDataIndex].api+'&page='+this.pageData[this.minus].api).then((json) => {
                this.listData=json.data.data
                
            }, (json) => {
                console.log(json.data)
                })
            } 
            else{
                this.minus=this.pageDataIndex=0
                this.$http.get('https://cnodejs.org/api/v1/topics'+'?tab='+this.tagData[this.tagDataIndex].api+'&page='+this.pageData[this.minus].api).then((json) => {
                this.listData=json.data.data
                
            }, (json) => {
                console.log(json.data)
                })
            };
            console.log(this.pageDataIndex)
        }
    },
    computed: {
        pageDataLimit: function () {
            
                return this.pageData.slice(0,5)
                        
        }
    },
    watch: {}
    

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fl{float: left;}
.fr{float: right;}
.main_body {
    width: 1105px;
    height: auto;
}    

.main_box {
    width: 1095px;
    min-height: 400px;
    padding: 5px;
    background-color: #fff;
    border-radius: 5px;

}

.main_nav ul li {
    float: left;
    display: inline-block;
    padding: 5px;
    margin: 0 5px;
    border-radius: 5px;
}

.origin {
    color: #80db01;
    font-size: 14px;
}
.origin:hover {
    color: #005580;
}

.newcolor {
    background-color: #80db01;
    color: #fff;
    padding: 2px 3px;
    border-radius: 4px;
}
.newcolor:hover {
    color: #fff;
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
.main_page {
    clear: both;
    width: 1095px;
    background-color: #fff;
    height: 40px;
}
.main_page ul{
    margin-top: 20px;
    margin-left: 20px;
}
.main_page ul li {
    float: left;
}
.main_page ul li:hover{
    background-color: #f5f5f5;
}
.pageAarowL,.pageBox,.pageAarowR,.pageOmitN,.pageOmit {
    border: 1px solid #ccc;
    color: #ccc;
    display: inline-block;
}
.pageAarowL,.pageBox,.pageAarowR {
    color: #778087;
}
.pageOmitN,.pageOmit,.pageBox,.pageAarowR{
    border-left: none;
}
.pageOmitN,.pageOmit {
    padding: 3px;
}
.pageAarowL,.pageAarowR{
    padding: 3px 10px;
}
.pageBox{
    padding: 3px 10px;
}
.pageAarowL{
    border-radius: 5px 0 0 5px;
}
.pageAarowR{
    border-radius: 0 5px 5px 0;
}
.newNum{
    color: #d92000;
}
.newNum:hover{
    color: #778087;
    background-color: #fff;
}

.router-link-active {
  color: red;
}
</style>
