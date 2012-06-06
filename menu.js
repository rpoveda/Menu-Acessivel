$(function(){
	$(".lipai").mouseenter(function(){
		//$(this).find('.filho').stop().animate({opacity: "show", top: "-75"}, "slow");
		$(this).find('.filho').css({'display':'block'});
	}).mouseleave(function(){
		$(this).find('.filho').css({'display':'none'});
	});

	$('.lipai').focusin(function(){
		$(this).find('.filho').css({'display':'block'});
	}).focusout(function(){
		$(this).find('.filho').css({'display':'none'});
	});
});
