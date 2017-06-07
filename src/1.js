var canvas=document.getElementById("ui-body"),
	image1= document.getElementById("ui-body-picture");
var ImageArray=new Array(15);
ImageArray[0]="../image/018.jpg";
ImageArray[1]="../image/001.jpg";
ImageArray[2]="../image/002.jpg";
ImageArray[3]="../image/003.jpg";
ImageArray[4]="../image/004.jpg";
ImageArray[5]="../image/005.jpg";
ImageArray[6]="../image/008.jpg";
ImageArray[7]="../image/009.jpg";
ImageArray[8]="../image/010.jpg";
ImageArray[9]="../image/011.jpg";
ImageArray[10]="../image/012.jpg";
ImageArray[11]="../image/013.jpg";
ImageArray[12]="../image/014.jpg";
ImageArray[13]="../image/015.jpg";
ImageArray[14]="../image/016.jpg";
ImageArray[15]="../image/017.jpg";
var i=0;
function ImageMove()
{
	if(i==15)
    {
      i=0;
    }
    else{
	i++;
	}
	if(i>1){
		$(".ui-body-smallpicture img").css("border-style","none");	
		$(".ui-body-smallpicture img").eq(i-1).css("border-style","solid");
	}
	else if(i==1){
		$(".ui-body-smallpicture img").css("border-style","none");	
		$(".ui-body-smallpicture img").eq(i-1).css("border-style","solid");	
	}
	else if(i==0){
		$(".ui-body-smallpicture img").css("border-style","none");	
		$(".ui-body-smallpicture img").eq(15).css("border-style","solid");	
	}
	image1.src=ImageArray[i];
}
$(".ui-body-smallpicture img").mouseover(function(event) {
		i=$(this).index();
		if(i==15){
			image1.src=ImageArray[0];
		}
		else{
			image1.src=ImageArray[i+1];	
		}
		$(".ui-body-smallpicture img").css("border-style","none");
		$(".ui-body-smallpicture img").eq(i).css("border-style","solid");	
});
//导航按钮
	var d=0;
	$("#ui-head-daohang img").click(function(event) {
		/* Act on the event */
		if(d==0){
			d=1;
			$("#ui-head-daohang img").css("top","-174px");
		}
		else{
			d=0;
			$("#ui-head-daohang img").css("top","-106px");	
		}
	});

//小图片滑动
$(".ui-body-leftshift img").mouseover(function() {
	$(".ui-body-leftshift img").attr ('src',"../image/leftshift.png");
});
$(".ui-body-leftshift img").mouseout(function() {
	$(".ui-body-leftshift img").attr ('src',"../image/leftshift1.png");
});
$(".ui-body-rightshift img").mouseover(function() {
	$(".ui-body-rightshift img").attr ('src',"../image/rightshift.png");
});
$(".ui-body-rightshift img").mouseout(function() {
	$(".ui-body-rightshift img").attr ('src',"../image/rightshift1.png");
});
ImageMove();
var j=0;
$('.ui-body-rightshift').click(function () { 
	if(j<6){
     	if(j==0)
   	   	$('.ui-body-smallpicture ul').css("margin-left","180px")
   	   	if(j==1)
   	   	$('.ui-body-smallpicture ul').css("margin-left","80px")
   		if(j==2)
   	   	$('.ui-body-smallpicture ul').css("margin-left","-19px")
   		if(j==3)
   	   	$('.ui-body-smallpicture ul').css("margin-left","-120px")
   		if(j==4)
   	   	$('.ui-body-smallpicture ul').css("margin-left","-221px")
   		if(j==5)
   	   	$('.ui-body-smallpicture ul').css("margin-left","-322px")
   	   	j++;
   	}
   	else{
   		$('.ui-body-smallpicture ul').css("margin-left","285px")
   		j=0;
   	}
  })  
$('.ui-body-leftshift').click(function () { 
    if(j<7){
     	if(j==1)
   	   	$('.ui-body-smallpicture ul').css("margin-left","285px")
   	   	if(j==2)
   	   	$('.ui-body-smallpicture ul').css("margin-left","180px")
   		if(j==3)
   	   	$('.ui-body-smallpicture ul').css("margin-left","80px")
   		if(j==4)
   	   	$('.ui-body-smallpicture ul').css("margin-left","-19px")
   		if(j==5)
   	   	$('.ui-body-smallpicture ul').css("margin-left","-120px")
   		if(j==6)
   	   	$('.ui-body-smallpicture ul').css("margin-left","-221px")
   	   	if(j>0)
   	   	j--;
   	}     	
})    

$(".ui-head a").mouseover(function() {
	$(this).css('color','#5eae06');
});
$(".ui-head a").mouseout(function() {
	$(this).css('color','#c5cbb8');
});
$(".ui-page a").mouseover(function() {
	$(this).css('color','#5eae06');
});
$(".ui-page a").mouseout(function() {
	$(this).css('color','#4a3e3b');
});
$(".ui-page-zhuifan-time div").eq(0).mouseover(function(event) {
	/* Act on the event */
	$(".ui-page-zhuifan-time div").css("border-width","1px");
	$(".ui-page-zhuifan-time div").css("border-color","#e3e5e9");
	$(this).css("border-width","3px");
	$(this).css("border-color","#5eae06");
	$(".ui-page-zhuifan-fanju2").css("display","none");
	$(".ui-page-zhuifan-fanju1").css("display","inline");
	$(".ui-page-zhuifan-fanju3").css("display","none");
	$(".ui-page-zhuifan-fanju4").css("display","none");
	$(".ui-page-zhuifan-fanju5").css("display","none");
	$(".ui-page-zhuifan-fanju6").css("display","none");
	$(".ui-page-zhuifan-fanju7").css("display","none");
});
$(".ui-page-zhuifan-time div").eq(1).mouseover(function(event) {
	/* Act on the event */
	$(".ui-page-zhuifan-time div").css("border-width","1px");
	$(".ui-page-zhuifan-time div").css("border-color","#e3e5e9");
	$(this).css("border-width","3px");
	$(this).css("border-color","#5eae06");
	$(".ui-page-zhuifan-fanju1").css("display","none");
	$(".ui-page-zhuifan-fanju2").css("display","inline");
	$(".ui-page-zhuifan-fanju3").css("display","none");
	$(".ui-page-zhuifan-fanju4").css("display","none");
	$(".ui-page-zhuifan-fanju5").css("display","none");
	$(".ui-page-zhuifan-fanju6").css("display","none");
	$(".ui-page-zhuifan-fanju7").css("display","none");
});
$(".ui-page-zhuifan-time div").eq(2).mouseover(function(event) {
	/* Act on the event */
	$(".ui-page-zhuifan-time div").css("border-width","1px");
	$(".ui-page-zhuifan-time div").css("border-color","#e3e5e9");
	$(this).css("border-width","3px");
	$(this).css("border-color","#5eae06");
	$(".ui-page-zhuifan-fanju1").css("display","none");
	$(".ui-page-zhuifan-fanju3").css("display","inline");
	$(".ui-page-zhuifan-fanju2").css("display","none");
	$(".ui-page-zhuifan-fanju4").css("display","none");
	$(".ui-page-zhuifan-fanju5").css("display","none");
	$(".ui-page-zhuifan-fanju6").css("display","none");
	$(".ui-page-zhuifan-fanju7").css("display","none");
});
$(".ui-page-zhuifan-time div").eq(3).mouseover(function(event) {
	/* Act on the event */
	$(".ui-page-zhuifan-time div").css("border-width","1px");
	$(".ui-page-zhuifan-time div").css("border-color","#e3e5e9");
	$(this).css("border-width","3px");
	$(this).css("border-color","#5eae06");
	$(".ui-page-zhuifan-fanju1").css("display","none");
	$(".ui-page-zhuifan-fanju4").css("display","inline");
	$(".ui-page-zhuifan-fanju3").css("display","none");
	$(".ui-page-zhuifan-fanju2").css("display","none");
	$(".ui-page-zhuifan-fanju5").css("display","none");
	$(".ui-page-zhuifan-fanju6").css("display","none");
	$(".ui-page-zhuifan-fanju7").css("display","none");
});
$(".ui-page-zhuifan-time div").eq(4).mouseover(function(event) {
	/* Act on the event */
	$(".ui-page-zhuifan-time div").css("border-width","1px");
	$(".ui-page-zhuifan-time div").css("border-color","#e3e5e9");
	$(this).css("border-width","3px");
	$(this).css("border-color","#5eae06");
	$(".ui-page-zhuifan-fanju1").css("display","none");
	$(".ui-page-zhuifan-fanju5").css("display","inline");
	$(".ui-page-zhuifan-fanju3").css("display","none");
	$(".ui-page-zhuifan-fanju4").css("display","none");
	$(".ui-page-zhuifan-fanju2").css("display","none");
	$(".ui-page-zhuifan-fanju6").css("display","none");
	$(".ui-page-zhuifan-fanju7").css("display","none");
});
$(".ui-page-zhuifan-time div").eq(5).mouseover(function(event) {
	/* Act on the event */
	$(".ui-page-zhuifan-time div").css("border-width","1px");
	$(".ui-page-zhuifan-time div").css("border-color","#e3e5e9");
	$(this).css("border-width","3px");
	$(this).css("border-color","#5eae06");
	$(".ui-page-zhuifan-fanju1").css("display","none");
	$(".ui-page-zhuifan-fanju6").css("display","inline");
	$(".ui-page-zhuifan-fanju3").css("display","none");
	$(".ui-page-zhuifan-fanju4").css("display","none");
	$(".ui-page-zhuifan-fanju5").css("display","none");
	$(".ui-page-zhuifan-fanju2").css("display","none");
	$(".ui-page-zhuifan-fanju7").css("display","none");
});
$(".ui-page-zhuifan-time div").eq(6).mouseover(function(event) {
	/* Act on the event */
	$(".ui-page-zhuifan-time div").css("border-width","1px");
	$(".ui-page-zhuifan-time div").css("border-color","#e3e5e9");
	$(this).css("border-width","3px");
	$(this).css("border-color","#5eae06");
	$(".ui-page-zhuifan-fanju1").css("display","none");
	$(".ui-page-zhuifan-fanju7").css("display","inline");
	$(".ui-page-zhuifan-fanju3").css("display","none");
	$(".ui-page-zhuifan-fanju4").css("display","none");
	$(".ui-page-zhuifan-fanju5").css("display","none");
	$(".ui-page-zhuifan-fanju6").css("display","none");
	$(".ui-page-zhuifan-fanju2").css("display","none");
});