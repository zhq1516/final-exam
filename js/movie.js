//主界面滚动
var curIndex=0, //当前index
    imgLen=$(".showpage-pic-imglist li").length; //图片总数

var autoChange=setInterval(function(){
	if(curIndex<imgLen-1){
		curIndex++;
	}else{
		curIndex=0;
	}
	changeTo(curIndex);
},5000);

$("#prev").hover(function(){
    clearInterval(autoChange);
},function(){
	autoChangeAgain();
});

$("#prev").click(function(){
	curIndex=(curIndex>0)?(--curIndex):(imgLen-1);
	changeTo(curIndex);
});

$("#next").hover(function(){ 
   clearInterval(autoChange);
 },function(){ 
   autoChangeAgain();
 });

$("#next").click(function(){ 
   curIndex=(curIndex<imgLen-1)?(++curIndex):0;
   changeTo(curIndex);
 });

$(".showpage-dots").find("li").each(function(item){
	$(this).hover(function(){
		clearInterval(autoChange);
		changeTo(item);
		curIndex=item;
	},function(){
		autoChangeAgain();
	});
});

function autoChangeAgain(){
	autoChange=setInterval(function(){
		if(curIndex<imgLen-1){
			curIndex++;
		}else{
			curIndex=0;
		}
		changeTo(curIndex);
	},5000);
}

function changeTo(num){
	var goLeft=num*1500;
	$(".showpage-pic-imglist").animate({left:"-"+goLeft+"px"},300);
	$(".showpage-points-infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
	$(".showpage-dots").find(".showpage-dots-dot").css('color','white').eq(num).css('color','#74B000');
}

//隐藏播放按钮
$(".mark-play").hide();


$(".imgbox").hover(function(){
	var x=$(".imgbox").index($(this));
	$(".mark-play").eq(x).show();
},function(){
	$(".mark-play").hide();
});


//电影滚动

$(".img-btn-right").hover(function(){
	var x=$(".img-btn-right").index($(this));
    var a=$(".banner").eq(x).position().left;
    if(x==0){
    	var b=3200+a;
    	var time=b/0.16;
	    $(".banner").eq(x).animate({left:"-3200px"},time,"linear");
    }
    else{
    	var b=3000+a;
    	var time=b/0.16;
    	$(".banner").eq(x).animate({left:"-3000px"},time,"linear");
    }
},function(){
	$(".img-btn-right").attr("src","../img/p-arrR-a_1.png");
	$(".banner").stop();
});


$(".img-btn-left").hover(function(){
	var x=$(".img-btn-left").index($(this));
    var a=$(".banner").eq(x).position().left;
    if(x==0){
    	var b=-a;
    	var time=b/0.16;
	    $(".banner").eq(x).animate({left:"0px"},time,"linear");
    }
    else{
    	var b=-a;
    	var time=b/0.16;
    	$(".banner").eq(x).animate({left:"0px"},time,"linear");
    }
},function(){
	$(".banner").stop();
});

//即将上映的时间轴
$(".newmovie-content-list").hover(function(){
	var y=$(".newmovie-content-list").index($(this));
	$(".imgbox-pic-dot").eq(y).css("width","18px");
	$(".imgbox-pic-dot").eq(y).css("height","25px");
	$(".imgbox-pic-dot").eq(y).css("top","-14px");
	$(".imgbox-pic-dot").eq(y).css("background-position","0 -19px");
},function(){
	$(".imgbox-pic-dot").css("width","16px");
	$(".imgbox-pic-dot").css("height","16px");
	$(".imgbox-pic-dot").css("top","-8px");
	$(".imgbox-pic-dot").css("background-position","0 0px");
});


//精彩连轴看动画收缩
var e=0;
$(".newmovie-content-list-intro").hover(function(){
	e=$(".newmovie-content-list-intro").index($(this));
	$(this).parent(".movieaxis-content-list").find(".intro-word").css("background","#FFFFFF");
	$(this).parent(".movieaxis-content-list").find(".intro-word").css("color","black");
	$(this).find(".intro-word").css("background","#78B600")
	$(this).find(".intro-word").css("color","white");
	$(this).parents(".movieaxis-content-list").find(".newmovie-content-list-intro").css("height","60px");
	$(".newmovie-content-list-intro").eq(e).css("height","153px");
},function(){
	$(".newmovie-content-list-intro").eq(e).find(".intro-word").css("background","#666666")
});
