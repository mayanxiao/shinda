/*图片*/
window.onload=function(){
	var spics=$('banner_spic').getElementsByTagName('li');
	var bpics=$('banner_bar').getElementsByTagName('li');
	if (spics.length!=bpics.length) {return};
	for (var i = 0; i < spics.length; i++) {
		spics[i].id=i;
		spics[i].onclick=function(){
			for (var j = 0; j < spics.length; j++) {
    			spics[j].className='';
    			bpics[j].style.display='none';
    		};
    		this.className='select';
    		bpics[this.id].style.display='block';
		}
	};
	tabChage()
}