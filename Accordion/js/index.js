$(function(){
	$(".items ul li").each(function(){
		var tab = $(this).find(".tab");
		var content = $(this).find(".content");
		if(tab.is(":hidden")){
			$(this).width(680);
		}else{
			$(this).width(100);
		}
	});

	$(".items ul li").click(function(){
		var li_index = $(this).index();
		$(this).animate({width:680},200);
		$(this).find(".content").show();
		$(this).find(".tab").hide();
		$(this).siblings().animate({width:100},200);
		$(this).siblings().find(".content").hide();
		$(this).siblings().find(".tab").show();
	});
})
