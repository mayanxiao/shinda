<template>
  <div class="picfade">
  	
  	 <ul class="piczone">
        <transition name="fade" mode="out-in">
  	 	    <li v-if="fadeid == id" v-for="(pic,id) in picData"><span>{{pic.name}}</span><img :src="pic.url"></li>
        </transition>
  	 </ul>
  	
  	 <div class="fadepoint">
  	 	<template v-for="(pic,id) in picData">
	  	 	<span :class="{'active': fadeid == id}" @click="fade(id)"></span>
	  	</template>
  	 </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      picData:[
    		{name:'1',url: require("assets/bg.jpg")},
    		{name:'2',url: require("assets/bg1.jpg")},
    		{name:'3',url: require("assets/bg2.jpg")},
    		{name:'4',url: require("assets/bg3.jpg")}
      ],
      fadeid: 0   
    }
  },
  methods: {
    fade: function (id) {
        this.fadeid = id;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

.picfade {
	width: 40%;
	height: auto;
	margin: 0 auto;
}
.piczone {
	width: 400%;
    height: 100px;
    li{ 
    	position: relative;
		display: inline-block;
		width: 25%;
        height: 100%;
        float: left;
        span {
            position: absolute;
            font-size: 20px;
            top: 40%;
            left: 49%;
        }
		img {
	        width: 100%;
	        height: 100%;
	    }
	}
}
.fadepoint {
    width: 100%;
    height: 20px;
	    span {
	    	background-color: #D3D3D3;
	   	    display: inline-block;
	   	    width: 5px;
	   	    height: 5px;
	   	    margin: 13px;
	   	    border-radius: 50%;
	   	    transition: background-color 500ms ease;
	   	    cursor: pointer;
	   	    &:hover {
	   	    	background-color: #696969;
	   	    }

	   	}
}
.fadepoint span.active {
  background-color: #000;
}
.fade-enter {
  opacity: 0.3;
} 
.fade-enter-active {
  transition: opacity .7s;
}
.fade-leave-active {
  transition: opacity .7s;
}

.fade-leave {
  opacity: 0;
}
</style>