var guideflag=1;

//头部图片
$(".head-main-choose li").hover(function(){
	var i=$(this).index();   //鼠标触发的li下标
	$(".head-main-pic a").eq(i).show().siblings().hide();					
	$(".head-main-choose ul").children().removeClass("choose");
	$(this).addClass("choose");		
});

//搜索栏置顶
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 500){
            $(".head-top").css("position","fixed");
        }else{
        	$(".head-top").css("position","static");
        	$(".guide").css("display","none");
        	$(".head-top-cnt-guide").css("height","38px");
			$(".head-top-cnt-guide").css("background","url(pic/guide.png) no-repeat 0 0");
			guideflag=1;
        }
    });
    $(".baseToTop").click(function(){
        $('body,html').animate({scrollTop:0},100);
   	});
});

//回到顶部 意见反馈滑动效果
$(".baseToTop").hover(function(){
	$(".baseToTop-pic").css("background","url(pic/baseScroll.png) no-repeat -60px -20px");
	$(".baseToTop-words").css("color","#6CC900");
},function(){
	$(".baseToTop-words").css("color","#666666");
	$(".baseToTop-pic").css("background","url(pic/baseScroll.png) no-repeat 0 -20px");
});

$(".helpFeedback").hover(function(){
	$(".helpFeedback-pic").css("background","url(pic/baseScroll.png) no-repeat -60px -80px");
	$(".helpFeedback-words").css("color","#6CC900");
},function(){
	$(".helpFeedback-words").css("color","#666666");
	$(".helpFeedback-pic").css("background","url(pic/baseScroll.png) no-repeat 0 -80px");
});

//回到顶部隐藏出现和效果
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() < 200){
            $(".baseToTop").css("visibility","hidden");
            $(".helpFeedback").css("visibility","hidden");
            $(".head-top-cnt-guide").css("visibility","hidden");
        }else{
        	$(".baseToTop").css("visibility","visible");
        	$(".helpFeedback").css("visibility","visible");
        	$(".head-top-cnt-guide").css("visibility","visible");
        }
    });
    $(".baseToTop").click(function(){
        $('body,html').animate({scrollTop:0},100);
   	});
});

//导航点击事件：下拉栏
$(".head-top-cnt-guide").click(function(){
	if(guideflag==1){
		$(".head-top-cnt-guide").css("height","49px");
		$(".head-top-cnt-guide").css("background","url(pic/guide.png) no-repeat 0 -39px");
		$(".guide").css("display","flex");
		guideflag=0;
	}else{
		$(".head-top-cnt-guide").css("height","38px");
		$(".head-top-cnt-guide").css("background","url(pic/guide.png) no-repeat 0 0");
		$(".guide").css("display","none");
		guideflag=1;
	}
});

//热门泡泡
$(".body-hot-leftcnt ul li").hover(function(){
	var i=$(this).index();
	$(".body-hot-leftcnt ul li .popolist-info .popolist-info-name a").eq(i).css("color","#699F00");
},function(){
	$(".body-hot-leftcnt ul li .popolist-info .popolist-info-name a").css("color","#333");
});

//推广广告
	// $(".body").children().eq(i).children(".body-proadver-cnt").children(".body-proadver-cntmiddle")
	// .children(".body-proadver-cntmiddle-pic").children("a").eq(j).css("width","930px");
$(".body-proadver-cntmiddle-pic0 a").hover(function(){
	var i=$(this).index();
	$(".body-proadver-cntmiddle-pic0 a").eq(i).css("width","930px");
	$(".body-proadver-cntmiddle-pic0 a .proadver-picright").eq(i).css("opacity","1");
	if(i<4){
		for(var x=0;x<i;x++){
			$(".body-proadver-cntmiddle-pic0 a").eq(x).css("width","0");
			$(".body-proadver-cntmiddle-pic0 a").eq(x).css("margin","0");
		}
	}else{
		for(var x=1;x<i;x++){
			$(".body-proadver-cntmiddle-pic0 a").eq(x).css("width","0");
			$(".body-proadver-cntmiddle-pic0 a").eq(x).css("margin","0");
		}
	}
},function(){
	$(".body-proadver-cntmiddle-pic0 a").css("width","170px");
	$(".body-proadver-cntmiddle-pic0 a .proadver-picright").css("opacity","0");
	$(".body-proadver-cntmiddle-pic0 a").css("margin","0 10px");
});

$(".body-proadver-cntmiddle-pic1 a").hover(function(){
	var i=$(this).index();
	$(".body-proadver-cntmiddle-pic1 a").eq(i).css("width","930px");
	$(".body-proadver-cntmiddle-pic1 a .proadver-picright").eq(i).css("opacity","1");
	if(i<4){
		for(var x=0;x<i;x++){
			$(".body-proadver-cntmiddle-pic1 a").eq(x).css("width","0");
			$(".body-proadver-cntmiddle-pic1 a").eq(x).css("margin","0");
		}
	}else{
		for(var x=1;x<i;x++){
			$(".body-proadver-cntmiddle-pic1 a").eq(x).css("width","0");
			$(".body-proadver-cntmiddle-pic1 a").eq(x).css("margin","0");
		}
	}
},function(){
	$(".body-proadver-cntmiddle-pic1 a").css("width","170px");
	$(".body-proadver-cntmiddle-pic1 a .proadver-picright").css("opacity","0");
	$(".body-proadver-cntmiddle-pic1 a").css("margin","0 10px");
});

//爱奇艺号订阅
$(".body-aqyh-cnt .smallinfo").hover(function(){
	var i=$(this).parent().index();
	$(".body-aqyh-cnt .rowlist li").eq(i).children(".smallinfo").children(".smallinfo-word")
	.children(".smallicon-sub").css("visibility","visible");
},function(){
	$(".body-aqyh-cnt .smallinfo .smallicon-sub").css("visibility","hidden");
});
$(".body-game .smallinfo").hover(function(){
	var i=$(this).parent().index();
	$(".body-game .rowlist li").eq(i).children(".smallinfo").children(".smallinfo-word")
	.children(".smallicon-sub").css("visibility","visible");
},function(){
	$(".body-game .smallinfo .smallicon-sub").css("visibility","hidden");
});

//左右切换
$(".body-news-middle .body-news-middle-pic-right").click(function(){
	var i=$(this).parent().index();
	if(i==0){
		$(".body-news-middle .body-news-middle-pics").css("margin-left","-380px");
	}
	if(i==1){
		$(".body-news-middle .body-news-middle-pics").css("margin-left","0");
	}
});
$(".body-news-middle .body-news-middle-pic-left").click(function(){
	var i=$(this).parent().index();
	if(i==0){
		$(".body-news-middle .body-news-middle-pics").css("margin-left","-380px");
	}
	if(i==1){
		$(".body-news-middle .body-news-middle-pics").css("margin-left","0");
	}
});
$(".left").click(function(){
	var i=$(this).parent().parent().index();
	if(i==0){
		$(this).parent().parent().parent().css("margin-left","-380px");
	}
	if(i==1){
		$(this).parent().parent().parent().css("margin-left","0");
	}
});
$(".right").click(function(){
	var i=$(this).parent().parent().index();
	if(i==0){
		$(this).parent().parent().parent().css("margin-left","-380px");
	}
	if(i==1){
		$(this).parent().parent().parent().css("margin-left","0");
	}
});

//头部js
$(".login").click(function(){
	$(".bg").css("display","block");
	$(".headlogin").css("display","block");
});
$(".loginclose").click(function(){
	$(".bg").css("display","none");
	$(".headlogin").css("display","none");
	$(".headregister").css("display","none");
});
$(".register").click(function(){
	$(".bg").css("display","block");
	$(".headregister").css("display","block");
});
$(".fl").click(function(){
	$(".bg").css("display","block");
	$(".headlogin").css("display","none");
	$(".headregister").css("display","block");
});
$(".headregister .fr a").eq(0).click(function(){
	$(".bg").css("display","block");
	$(".headlogin").css("display","block");
	$(".headregister").css("display","none");
});

//忘记密码
$(".forget").hover(function(){
	$(".forgethover").css("display","block");
},function(){
	$(".forgethover").css("display","none");
});