init();
function init(){
	$('.main-left-body4').hide();
	addTitleItemHover();
}
function addTitleItemHover(){
	$('.main .title-list li').eq(0).on('click',function(){
		$('.main-left-body4').hide();
		$('.main-left-body3').show();
	});
	$('.main .title-list li').eq(1).on('click',function(){
		$('.main-left-body3').hide();
		$('.main-left-body4').show();
	});
}