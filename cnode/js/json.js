$(function () {
	var jsondata=$.getJSON('https://cnodejs.org/api/v1/topics',
	    function(obj) {
			/*optional stuff to do after success */
        var arr=obj.data;
        var mydate = new Date();
	    var curtime=Date.parse(mydate);    
	    console.log(curtime);
        for (var i = 0; i < arr.length; i++) {
        	$("#topic_list").find('.cell').eq(i).find(".author_avatar").html("<img src="+arr[i].author.avatar_url+">");
        	$("#topic_list").find('.cell').eq(i).find(".reply_count").html(arr[i].reply_count);
        	$("#topic_list").find('.cell').eq(i).find(".visit_count").html(arr[i].visit_count);
        	$("#topic_list").find('.cell').eq(i).find(".topic_title").html(arr[i].title);
        	if (arr[i].top===true) {
                $("#topic_list").find('.cell').eq(i).find(".topic_title_box span").addClass('topic_top')
                .html("置顶")
        	} 
        	else if(arr[i].good===true){
                $("#topic_list").find('.cell').eq(i).find(".topic_title_box span").addClass('topic_good')
                .html("精华")
        	} 
        	else if(arr[i].tab==="share"){
        	    $("#topic_list").find('.cell').eq(i).find(".topic_title_box span").addClass('topic_share')
                .html("分享")}
            else if(arr[i].tab==="ask"){
            	$("#topic_list").find('.cell').eq(i).find(".topic_title_box span").addClass('topic_ask')
                .html("问答")
            }
            else if(arr[i].tab==="job"){
            	$("#topic_list").find('.cell').eq(i).find(".topic_title_box span").addClass('topic_job')
                .html("招聘")
            }
            else{$("#topic_list").find('.cell').eq(i).find(".topic_title_box span").addClass('topic_ask')
                .html("问答")};
            var timearr;
            timearr=arr[i].last_reply_at;
		    timearr=timearr.replace(/T/, " ");
		    timearr=timearr.replace(/Z/, "");
		    timearr=timearr.replace(/-/,"/");
		    timearr=timearr.replace(/-/,"/");
		    timearr=Date.parse(timearr);
            console.log(timearr);
            var diff=new Array();
            diff=curtime-timearr;
            
            

            if (diff>=31536000000) {
            	diff[i]=parseInt(diff[i]/31536000000);
                $("#topic_list").find('.cell').eq(i).find(".last_reply span").html(diff[i]+" 年前");
            } 
            else if(diff>=2592000000){
                diff=parseInt(diff/2592000000);
                $("#topic_list").find('.cell').eq(i).find(".last_reply span").html(diff+" 月前");
                console.log(diff);
            }
            else if(diff>=86400000){
            	diff=parseInt(diff/86400000);
                $("#topic_list").find('.cell').eq(i).find(".last_reply span").html(diff+" 天前");
                
            }
            else if(diff>=3600000){
            	diff=parseInt(diff/3600000);
                $("#topic_list").find('.cell').eq(i).find(".last_reply span").html(diff+" 小时前");
                
            }
            else if(diff>=60000){
            	diff=parseInt(diff/60000);
                $("#topic_list").find('.cell').eq(i).find(".last_reply span").html(diff+" 分钟前");
                
            }
            else if(diff>=1000){
            	$("#topic_list").find('.cell').eq(i).find(".last_reply span").html("十几秒前");
            	
            }
            else{null};

        };
        
    
    





	});
        
});











	





	