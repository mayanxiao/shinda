<template>
	<div class="calendar">
		<input type="text" v-model="mytime" class="inputarea" @click="showcal()">
		<div class="cal-wrap">
			<div class="date_top">
				<div class="arrow" @click="yearchange(-1)">&lt;</div>
				<div class="yearmonth">
				   <span class="year">{{curtime.getFullYear()}}年</span>
				</div>
				<div class="arrow" @click="yearchange(1)">&gt;</div>
				<div class="arrow" @click="monthchange(-1)">&lt;</div>
				<div class="yearmonth">
				   <span class="month">{{curtime.getMonth()+1}}月</span>
				</div>
				<div class="arrow" @click="monthchange(1)">&gt;</div>
			</div>
			<table class="calendar_con">
			  <thead>	
			  	<tr >
				  <th v-for="weekday in week">{{weekday}}</th>
				</tr>
			  </thead>
			  <tbody>
			  	<tr v-for="a in 6">
			  	  <td v-for="b in 7" :class="{'thismonth': dayData[(a-1) * 7 + (b-1)].sub === 'thismonth'}" @click="choosemydate((a-1) * 7 + (b-1))"><span :class="{'selected': dayData[(a-1) * 7 + (b-1)].sub === 'selected'}">{{dayData[(a-1) * 7 + (b-1)].text}}</span></td>
			  	</tr>
			  </tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
  name: 'calendar',
  data() {
    return {
      curtime: new Date(),
      dayData: [],
      week: ['日','一','二','三','四','五','六'],
      mytime: '',
      selected: false,
      show: false
    }
  },
  created: function() {
  	this.dayUpdate();
  },
  watch: {
    curtime() {
    	this.dayUpdate();
    }
  },
  methods: {
    formatDate: function(year,month,day) {
        var y  = year;
        var m = month;
        if(m<10) {
          m = "0" + m;
        }
        var d = day;
        if(d<10) {
          d = "0" + d;
        }
        return y+"-"+m+"-"+d
    },
    showcal: function() {
    	this.show = true;
    },
    dayUpdate: function() {
    	var arr = [];       
        var time = this.curtime;
        time.setMonth(time.getMonth(),1);
        var firstday = time.getDay();
        firstday === 0&&(firstday = 7);
        time.setDate(0);
        var prevday = time.getDate();
        for (var i = firstday; i > 0; i--) {
        	arr.push({
        		text: prevday - i +1,
        		time: new Date(time.getFullYear(),time.getMonth(),prevday-i+1),
        		sub: 'othermonth'
        	})
        };
        time.setMonth(time.getMonth()+2,0);
        var this_month = time.getDate();
        time.setDate(1);
        for (var j = 1; j <= this_month; j++) {
        	arr.push({
        		text: j,
        		time: new Date(time.getFullYear(),time.getMonth(),j),
        		sub: 'thismonth'
        	})
        };
        var k = 1;
        while (arr.length < 42) {
        	arr.push({
        		text: k,
        		time: new Date(time.getFullYear(),time.getMonth()+1,k),
                sub: 'othermonth'
        	});
        	k++;
        };
        this.dayData = arr;
    },
    yearchange: function(num) {
        this.curtime.setFullYear(this.curtime.getFullYear() + num);
        this.curtime = new Date(this.curtime);
    },
    monthchange: function(num) {
    	this.curtime.setMonth(this.curtime.getMonth() + num);
    	this.curtime = new Date(this.curtime);
    },
    choosemydate: function(id) {
    	this.show = false;
    	this.curtime= new Date(this.dayData[id].time);
    	this.mytime = this.formatDate(this.curtime.getFullYear(),this.curtime.getMonth()+1,this.curtime.getDate());
    	this.dayData[id].sub = 'selected';
    	return this.mytime; 
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@black = #000;
.cal-wrap {
  display: block;
  position: absolute;
  top: 18%;
  left: 20%;
  width: 18%;
  height: auto;
  background-color: #00BFFF;
  border-radius: 5px;
  box-shadow: 3px 3px 2px 2px #ccc;
}
.date_top {
  display: flex;
  justify-content: space-around;
  background-color: #1E90FF;
  padding: 10px 2px 7px 2px;
  border-radius: 5px;
  box-shadow: 0 3px 2px 1px #87CEFA;
  color: #f5f5f5;
  .arrow {
    padding: 0 5px;
    color: black;
    font-weight: bold;
    &:hover {
    	color: #f5f5f5;
    }
  }
}
.calendar_con {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: center;
  font-size: 16px;
	th {
	  height: 30px;
	  color: #F8F8FF;
	  font-family: "幼圆";
	}
	td {
		height: 40px;
		color: #f5f5f5;
		font-family: "Tahoma";
		border-radius: 50%;
	  	span {
	  	    display: inline-block;
	  	    width: 20px;
	  	    height: 20px;
            padding: 5px;
            border-radius: 50%;
		       &:hover {
				background-color: #f0f0f0;
				color: black;
			   }
		}
  }
  .thismonth {
    color: black;
  }
}
.inputarea {
  position: fixed;
  top: 10%;
  left: 20%;
  width: 150px;
  height: 25px;
  font-size: 16px;
  padding: 0 5px;
}
.selected {
	background-color: #f0f0f0;
	color: black;
}
</style>