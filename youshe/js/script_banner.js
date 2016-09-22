

/*选项卡*/
window.onload=function() {
	// 获取鼠标滑过或点击的标签或要切换内容的元素
	function $(id){
	 return typeof id==="string"?document.getElementById(id):id;
}
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

/*图片*/
// var spics=$('banner_spic').getElementsByTagName('li');
// 	var bpics=$('banner_bar').getElementsByTagName('li');
// 	if (spics.length!=bpics.length) {return};
// 	for (var i = 0; i < spics.length; i++) {
// 		spics[i].id=i;
// 		spics[i].onclick=function(){
// 			for (var j = 0; j < spics.length; j++) {
//     			spics[j].className='';
//     			bpics[j].style.display='none';
//     		};
//     		this.className='select';
//     		bpics[this.id].style.display='block';
// 		}
// 	};
// 	tabChange()
	
// }