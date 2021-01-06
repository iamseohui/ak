$(function(){
	/* bx Slider */
	$('.bxslider').bxSlider({
		mode: 'fade',
		captions: true,
		auto:true,
		speed:1000,
	});
	
	/* menu */
	$('#nav .menu_list>li').on('mouseenter focus', function(){
		$('#nav .menu_list>li ul').stop().slideDown();
	});
	$('#nav .menu_list>li').on('mouseleave blur', function(){
		$('#nav .menu_list>li ul').stop().slideUp();
	});
});