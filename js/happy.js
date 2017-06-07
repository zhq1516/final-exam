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
		$(".head-top-cnt-guide").css("background","url(../imgs/guide.png) 0 -39px");
		guideflag=0;
	}else{
		$(".head-top-cnt-guide").css("height","33px");
		$(".head-top-cnt-guide").css("background","url(../imgs/guide.png)");
		guideflag=1;
	}
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

