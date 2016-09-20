function $(id){
	 return typeof id==="string"?document.getElementById(id):id;
}


/*选项卡*/
var tabChange = function() {
	// 获取鼠标滑过或点击的标签或要切换内容的元素
    var titles=$('tab_label').getElementsByTagName('li');
    var divs=$('tab_con').getElementsByTagName('div');
    // alert(titles.length);
    if (titles.length!=divs.length) {return};
    //遍历titles下所有的li
    for (var i = 0; i < titles.length; i++) {
    	titles[i].id=i;
    	titles[i].onmouseover=function(){
    		//清除所有li上的class
    		for (var j = 0; j < titles.length; j++) {
    			titles[j].className='';
    			divs[j].style.display='none';
    		};
    		//设置当前变色
    		this.className='select';
    		divs[this.id].style.display='block';
    	}
    };
}




