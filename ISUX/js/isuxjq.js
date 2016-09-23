$(function(){
   $(".pic_grow").children().hover(function() {
   	$(".border_01,.border_03").stop().animate({width:285}, 300)
    $(".border_02,.border_04").stop().animate({height:312}, 300)
    $(".pic_info").stop().animate({top:160}, 300)
    
   }, function() {
   	$(".pic_info").stop().animate({top:200}, 300)
    $(".border_01,.border_03").stop().animate({width:0}, 300)
    $(".border_02,.border_04").stop().animate({height:0}, 300)
   });
});


// $(function(){
// 	$(".pic_grow").children().hover(function() {
// 		$(".pic_mask_01").stop().animate({width: 284,height: 290}, 500)
// },function() {
//         $(".pic_mask_01").stop().animate({width: 1,height: 1}, 500)
//     });
// });


$(function(){
   $(".img_sd a").hover(function() {
     $(this).addClass('shadow');
   }, function() {
     $(this).removeClass('shadow');
   });
});