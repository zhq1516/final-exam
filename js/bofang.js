$(init)
$(move)
$(vedio)
$(jindu)
var dahang_judge=true;
var bottom_judge=true;
var juqing_judge=true;
var choice_judge=false;
var vedio_judge=false;
var qingxidu_judge=false;
var yidong;
var yidong_fuben=0;
$(".juqing-introduce-bigbox").hide();
$(".dianzan-down").hide();
$(".control").hide();
function init(){
	$('.top-daohang').click(function(){
		if(dahang_judge){
		     $(".top-daohang").css("background","url(../img/daohang.png) no-repeat -1px -171px");
		     $(".top-daohang").css("height","55px");
		     $(".top-daohang").css("margin-top","-10px");
		     $(".daohang-box").css("visibility","visible");
		     dahang_judge=false;
	    }
	    else{
	    	 $(".top-daohang").css("background","url(../img/daohang.png) no-repeat -3px -118px");
		     $(".top-daohang").css("height","33px");
		     $(".top-daohang").css("margin-top","6px");
		     $(".daohang-box").css("visibility","hidden");
		     dahang_judge=true;
	    }
	})

    $('.choice-first-pianhua').click(function(){
        $('.choice-first-pianhua').css("border-bottom","2px solid #5aa700");
        $('.choice-first-xuanji').css("border-bottom","2px solid rgb(47,47,47)");
        $('.sanjiaokuang1').css("border-bottom","5px solid #5aa700");
        $('.sanjiaokuang').css("border-bottom","5px solid rgb(31,31,31)");
        $('.txt1').css("color","white");
        $('.txt1').css("font-weight","800");
        $('.txt').css("color","#ccc");
        $('.txt').css("font-weight","500");
        $('.pianhua-full').css("visibility","visible");
        choice_judge=true;
     })
    $('.choice-first-xuanji').click(function(){
        $('.choice-first-xuanji').css("border-bottom","2px solid #5aa700");
        $('.choice-first-pianhua').css("border-bottom","2px solid rgb(47,47,47)");
        $('.sanjiaokuang').css("border-bottom","5px solid #5aa700");
        $('.sanjiaokuang1').css("border-bottom","5px solid rgb(31,31,31)");
        $('.txt').css("color","white");
        $('.txt').css("font-weight","800");
        $('.txt1').css("color","#ccc");
        $('.txt1').css("font-weight","500");
        $('.pianhua-full').css("visibility","hidden");
        choice_judge=false;
     })

    $('.shouqi').click(function(){
        $('.box-out').css("width","895px");
        $('.box-out-choice').css("width","0");
        $('.box-out-choice').css("height","0");
        if(choice_judge){
             $('.pianhua-full').css("display","none");
         }
        $('.box-out-choice').css("display","none");
        $('.zhankai').css("display","block");
        $('.danmu-func').css("width","895px");
        $('.danmu-empty').css("width","5%");
    })
    $('.zhankai').click(function(){
        $('.box-out').css("width","1180px");
        $('.box-out-choice').css("width","285px");
        $('.box-out-choice').css("height","530");
        if(choice_judge){
             $('.pianhua-full').css("display","block");
         }
        $('.box-out-choice').css("display","block");
        $('.zhankai').css("display","none");
        $('.danmu-func').css("width","1180px");
        $('.danmu-empty').css("width","28%");
    })
    $('.danmu-bottom').click(function(){
        if(bottom_judge){
             $(this).css("background","url(../img/vedio-function.png) -40px -60px");
             bottom_judge=false;
        }
        else{
        	$(this).css("background","url(../img/vedio-function.png) 0px -60px");
        	bottom_judge=true;
        }
    })  

    $('.fenji-box').click(function(){
        $('.fenji-box').css("border","2px solid #2f2f2f");
        $('.fenji-box').css("color","#aaa");
        $('.fenji-box').css("background","#2f2f2f");
        $(this).css("border","2px solid #5aa700");
        $(this).css("color","#5aa700");
        $(this).css("background","rgb(40,37,44)");
    }) 
    
     $('.juqing-juqing-full').click(function(){
        if(juqing_judge){
            $('.juqing-xiala').css("visibility","hidden");
            $('.juqing-xiala2').css("visibility","visible");
            $('.juqing-xiala3').css("visibility","visible");
            $('.juqing-juqing-full-txt').css("color","#5aa700");
            $('.juqing-introduce-bigbox').slideDown('slow');
            juqing_judge=false;
        }
        else{
        	$('.juqing-xiala').css("visibility","visible");
            $('.juqing-xiala2').css("visibility","hidden");
            $('.juqing-xiala3').css("visibility","hidden");
            $('.juqing-juqing-full-txt').css("color","#999");
            $('.juqing-introduce-bigbox').slideUp('slow');
            juqing_judge=true;
        }
     })
}

function move(){
	$('.upload').hover(function() {
		$(this).find('.xiala').css('border-top', '5px solid #5aa700');
		$('.shangchuan').css('background', 'url(../img/shuang-green.png)');
		$('.upload span').css('color','#5aa700');
	}, function() {
		$(this).find('.xiala').css('border-top', '5px solid #e4e4e4');
		$('.shangchuan').css('background', 'url(../img/shangchuan.png)');
		$('.upload span').css('color','white');
	});

	$('.text').hover(function() {
		$(this).find('.xiala').css('border-top', '5px solid #5aa700');
		$('.text span').css('color','#5aa700');
	}, function() {
		$(this).find('.xiala').css('border-top', '5px solid #e4e4e4');
		$('.text span').css('color','white');
	});

	$('.record').hover(function() {
		$(this).find('.xiala').css('border-top', '5px solid #5aa700');
		$('.record span').css('color','#5aa700');
	}, function() {
		$(this).find('.xiala').css('border-top', '5px solid #e4e4e4');
		$('.record span').css('color','white');
	});

	$('.dianzan').hover(function() {
		$('.dianzan-up').css('background', '#444');
		$('.dianzan-up').css('border-bottom', '1px solid #666');
		$('.dianzan-down').slideDown();
		$('.down-tubiao-up').css('background', 'url(../img/vedio-function.png) no-repeat -20px -40px');
	}, function() {
		$('.dianzan-up').css('background', 'rgb(31,31,31)');
		$('.dianzan-down').slideUp();
		$('.dianzan-up').css('border-bottom', '1px solid rgb(41,41,41)');
		$('.down-tubiao-up').css('background', 'url(../img/vedio-function.png) no-repeat 0px -20px');
	});

	$('.gongneng').hover(function() {
		$(this).find('.func a').css('color', ' #5aa700');
		$(this).find('.share').css('background', 'url(../img/vedio-function.png) no-repeat -160px -20px');
		$(this).find('.shoucang').css('background', 'url(../img/vedio-function.png) no-repeat -180px -20px');
		$(this).find('.phone').css('background', 'url(../img/vedio-function.png) no-repeat -200px -20px');
		$(this).find('.download').css('background', 'url(../img/vedio-function.png) no-repeat -220px -20px');
		$(this).find('.game').css('background', 'url(../img/vedio-function.png) no-repeat -240px -20px');
	}, function() {
		$(this).find('.func a').css('color', ' #999');
		$(this).find('.share').css('background', 'url(../img/vedio-function.png) no-repeat -160px 0px');
		$(this).find('.shoucang').css('background', 'url(../img/vedio-function.png) no-repeat -180px 0px');
		$(this).find('.phone').css('background', 'url(../img/vedio-function.png) no-repeat -200px 0px');
		$(this).find('.download').css('background', 'url(../img/vedio-function.png) no-repeat -220px 0px');
		$(this).find('.game').css('background', 'url(../img/vedio-function.png) no-repeat -240px 0px');
	});
    
    $('.shouqi').hover(function() {
		$('.shoqi-baiozhi').css('background','url(../img/vedio-function.png) -20px 0');
	}, function() {
		$('.shoqi-baiozhi').css('background','url(../img/vedio-function.png)');
	});
	$('.zhankai').hover(function() {
		$('.zhankai-tubiao').css('background','url(../img/vedio-function.png) -60px 0');
		$(this).css('background','#666');
		$('.zhankai p').css('color', '#5aa700');
	}, function() {
		$('.zhankai-tubiao').css('background','url(../img/vedio-function.png) -40px 0');
		$(this).css('background','#444');
		$('.zhankai p').css('color', '#999');
	});
}

var myVideo=document.getElementById("vedio-example");
function vedio(){
    $('.box-out-vedio').hover(function() {
		$('.control').fadeIn();
	}, function() {
		$('.control').fadeOut();
	});

	$('.vedio-btn').click(function(){
        if(!vedio_judge){
        	 $('.btn-play').css('visibility', 'hidden');
        	 $('.con-play').css('visibility', 'visible');
             myVideo.play(); 
             vedio_judge=true;
         }
         else{
         	$('.btn-play').css('visibility', 'visible');
        	$('.con-play').css('visibility', 'hidden');
            myVideo.pause(); 
            vedio_judge=false;
         }
     });

	myVideo.addEventListener('ended', function () {  
         $('.btn-play').css('visibility', 'visible');
         $('.con-play').css('visibility', 'hidden');
         vedio_judge=false;
    }, false)

    $('.vedio-btn').hover(function() {
		$('.btn-play').css('border-left', '15px solid #5aa700');
		$('.con-play').css('border-left','3px solid #5aa700');
		$('.con-play').css('border-right','3px solid #5aa700');
	}, function() {
		$('.btn-play').css('border-left', '15px solid #ababab');
		$('.con-play').css('border-left','3px solid #ababab');
		$('.con-play').css('border-right','3px solid #ababab');
	});

	$('.vedio-next').hover(function() {
		$('.btn-next').css('border-left', '15px solid #5aa700');
		$('.btn-next2').css('border-right','3px solid #5aa700');
	}, function() {
		$('.btn-next').css('border-left', '15px solid #ababab');
		$('.btn-next2').css('border-right','3px solid #ababab');
	});
   
    myVideo.onloadedmetadata = function () { 
        var vLength = myVideo.duration; 
        console.log(vLength);
        var minutes = parseInt(vLength / 60);
        var seconds = parseInt(vLength % 60);
        if(seconds<10){
        	if(minutes<10)
    	        $(".vedio-time-all").text("/0"+minutes+':0'+seconds);
    	    else
    	        $(".vedio-time-all").text("/"+minutes+':0'+seconds);	
        }
        if(seconds>=10){
        	if(minutes<10)
    	        $(".vedio-time-all").text("/0"+minutes+':'+seconds);
    	    else
    	    	$(".vedio-time-all").text("/"+minutes+':'+seconds);
        }
    }

    myVideo.ontimeupdate = function () { 
    var vTime = myVideo.currentTime; 
    console.log(vTime);
    var minutes = parseInt(vTime / 60, 10);
    var seconds = parseInt(vTime % 60);
    if(seconds<10){
        	if(minutes<10)
    	        $(".vedio-time-recent").text('0'+minutes+':0'+seconds);
    	    else
    	        $(".vedio-time-recent").text(minutes+':0'+seconds);	
        }
        if(seconds>=10){
        	if(minutes<10)
    	        $(".vedio-time-recent").text('0'+minutes+':'+seconds);
    	    else
    	    	$(".vedio-time-recent").text(minutes+':'+seconds);
        }
     var vLeng = myVideo.duration; 
     console.log(vLeng);
     var h1=vTime/vLeng*880.00;
     $('.jindutiao-white').css({'width':h1});
     if(h1-7<865){
     $('.jindutiao-bigradius').css({'margin-left':h1-7});
      }
     else{
     $('.jindutiao-bigradius').css({'margin-left':865});
     }
    }

    $('.stream_txt').hover(function() {
    	$('.stream_txt span').css('color','#82d900');
    }, function() {
    	$('.stream_txt span').css('color','#999');
    });

    $('.stream_txt').click(function() {
    	if(!qingxidu_judge){
    	    $('.qingxidu-choice').css('visibility','visible');
    	    qingxidu_judge=true;
    	}
    	else{
    		$('.qingxidu-choice').css('visibility','hidden');
    	    qingxidu_judge=false;
    	}
    })

    $('.qingxidu-choice-txt').click(function() {
    	var p=$(this).text();
    	$('.stream_txt span').text(p);
    	qingxidu_judge=true;
    });
    
    myVideo.volume=0.5;
    $('.sound').hover(function() {
    	$('.voice-box').css('visibility','visible');
    	jQuery(document).ready( function () {
             $('.voice-radius').mousedown( function (event) {
             var isMove = true; 
             var abs_y = event.pageY; 
             var top=parseInt($('.voice-radius').css('margin-top'));
             var heig=40;
             $(document).mousemove(function (event) {
                 if (isMove) { 
                     var obj = $('.voice-radius'); 
                     yidong=event.pageY - abs_y+top;
                     if(yidong>80){
                     	 yidong=80;
                     	 w_height=heig+yidong;
                         $('.voice-radius').css({'margin-top':yidong});
                         $('.voice-white').css({'height':yidong });
                         myVideo.volume=0;
                         $('.voice-tubiao').css('background','url(../img/vedio-tubiao.png) 0 4px');
                     }
                     if(yidong<0){
                     	 yidong=0;
                     	 w_height=heig+yidong;
                         $('.voice-radius').css({'margin-top':yidong}); 
                         $('.voice-white').css({'height':yidong});
                         myVideo.volume=1.0;
                         $('.voice-tubiao').css('background','url(../img/vedio-tubiao.png) -73px 4px');
                     }
                     if(yidong>=0&&yidong<=80){
                     	w_height=heig+yidong;
                     	$('.voice-radius').css({'margin-top':yidong}); 
                     	$('.voice-white').css({'height':yidong});
                     	myVideo.volume=(80-yidong)*0.0125;
                     	if(myVideo.volume>0&&myVideo.volume<=0.33){
                     		$('.voice-tubiao').css('background','url(../img/vedio-tubiao.png) -26px 4px');
                     	}
                     	if(myVideo.volume>0.33&&myVideo.volume<=0.67){
                     		$('.voice-tubiao').css('background','url(../img/vedio-tubiao.png) -50px 4px');
                     	}
                     	if(myVideo.volume>0.67&&myVideo.volume<1){
                     		$('.voice-tubiao').css('background','url(../img/vedio-tubiao.png) -73px 4px');
                     	}
                     }
                } 
             }).mouseup( function () {
                 isMove = false; 
                });
             });
       }); 

    }, function() {
    	$('.voice-box').css('visibility','hidden');
    });
}

function jindu(){
    $('.jindutiao').hover(function() {
    	$(this).css({'height':15, 'margin-top':-15});
    	$('.jindutiao-left').css('visibility','visible');
    	$('.jindutiao-rt').css('visibility','visible');
    	$('.jindutiao-bigradius').css('visibility','visible');
        
        jQuery(document).ready(function($) {
        	$('.jindutiao').click(function(event) {
        		var  x=event.pageX;  
        		var  abs_x=$('.jindutiao-left').offset().left;
        		var  _x=x-abs_x;
        		$('.jindutiao-white').css({'width':_x});
        		$('.jindutiao-bigradius').css({'margin-left':_x-7});
        		var vL = myVideo.duration; 
                console.log(vL);
        		myVideo.currentTime=_x/880.00*vL;
        	});
        });
    }, function() {
    	$(this).css({'height':3, 'margin-top':-3});
    	$('.jindutiao-left').css('visibility','hidden');
    	$('.jindutiao-rt').css('visibility','hidden');
    	$('.jindutiao-bigradius').css('visibility','hidden');
    });
}


