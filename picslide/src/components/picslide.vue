<template>
  <div class="picslide">
  	 <div class="wraper">
  	  <ul class="slidezone" :style="{'transform' : 'translate(' + moveleft + 'px,0)'}">
        
  	 	    <li v-for="(pic,id) in picData"><span>{{pic.name}}</span><img :src="pic.url"></li>
        
  	  </ul>
  	 </div>
  	 <div class="pic-point">
  	 	<template v-for="(pic,id) in picData">
	  	 	<span :class="{'active': pointid == id}" @click="point(id)"></span>
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
    		{name:'1',url: require("assets/bg.jpg"),index:'0'},
    		{name:'2',url: require("assets/bg1.jpg"),index:'1'},
    		{name:'3',url: require("assets/bg2.jpg"),index:'2'},
    		{name:'4',url: require("assets/bg3.jpg"),index:'3'}
      ],
      pointid: 0,
      moveleft: 0
    }
  },
  methods: {
    point: function (id) {
        this.pointid = id;
        this.moveleft = this.pointid*(-screen.width*.4);
    }
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.picslide {
	  width: 40%;
	  height: auto;
	  margin: 3% auto;
    position: relative;
    overflow: hidden;
}
.pic-point {
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
.slidezone {
    width: 400%;
    height: 100px;
    transition: all .5s ease;
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

.pic-point span.active {
  background-color: #000;
}
</style>