//              遮罩层
// $(function(){
// 	$("#mid_info_sec a").hover(function() {
// 			/* Act on the event */
// 		$(this).find('i').stop(0).fadeOut('slow')
// 	}, function(){
// 		$(this).find('i').stop(0).fadeIn(500, function() {
// 			console.log('callback')
// 		});
// 	});
// });


//          直接改变透明度
$(function(){
	$("#mid_info_sec a").hover(function(){
		$(this).stop(0).fadeTo('100', 1);
	},function(){
		$(this).stop(0).fadeTo('100', 0.4, function() {
			console.log('callback');
		});
	});
});
   

//       返回顶部小按钮
$(function(){
    $(window).scroll(function () {
		var top=$(window).scrollTop();
		
        if (top==0) {$("#totop a").css("display", "block").fadeOut('slow');}
        else {$("#totop a").css("display", "block").fadeIn('fast');}
//   广告
        if (top>=2059) {$(".ad_06").addClass('classfixed');}
        else{$(".ad_06").removeClass('classfixed');};
//   广告        
    });    
    $("#totop a").hover(function(){
       $(this).find('span').stop(0).fadeIn('fast');
	},function(){
		$(this).find('span').stop(0).fadeOut('fast',function(){
			// console.log('callback')
		});
	});
});
//    导航栏
$(function  () {
	$("#sh_btn").mouseover(function() {
		
		$("#share").animate({right:0},200);
	});
    $("#share").mouseleave(function() {
    	/* Act on the event */
        $(this).animate({right:-230},200);        
	});
	$("#sh_btn").click(function() {
		/* Act on the event */
       $("#share").animate({right:-230},400);
	
	});
})

//   图片
$(function(){
    $(".banner_small").find('li').on('click', function() {
      var index=$(this).index();  
      console.log(index)
      $(".banner_big li").eq(index).fadeIn(300).siblings().fadeOut(100);
      
      $(".span_vanish span").eq(index).fadeIn(300).siblings().fadeOut(300);
    }); 
  
  });   

$(function(){
		$("#pic_prev").hover(function(){
		$(this).stop(0).fadeTo('100', 1);
	},function(){
		$(this).stop(0).fadeTo('100', 0.4, function() {
			console.log('callback')
		});
	});
})

$(function(){
		$("#pic_next").hover(function(){
		$(this).stop(0).fadeTo('100', 1);
	},function(){
		$(this).stop(0).fadeTo('100', 0.4, function() {
			console.log('callback')
		});
	});
})

















//
 // function PicChange() {
 //  	var goLeft = num*790;
 //    $(".banner_bpic").animate({left: "-" + goLeft + "px"},500);}
 //    // $(".banner_small").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
 //    // $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
 
// var auto=setInterval(function(){ 
//       if(curindex < length-1){ 
//         curindex ++; 
//       }else{ 
//         curindex = 0;
//       }
//       //调用变换处理函数
//       PicChange(curindex); 
//     },500);






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

