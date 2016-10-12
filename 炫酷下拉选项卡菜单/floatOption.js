
$(function(){
	var heads = $('.menu>li');

	heads.each(function(){
		$(this).siblings().children('li').each(function(){
			if ($(this).index() % 2 == 0) {
				$(this).css("left",-200);
			} else{
				$(this).css("left",200);
			}
		});

		var flag = true;
		$(this).find('h3').click(function(){
			$(this).siblings().children('li').each(function(){
				if (flag) {
					$(this).stop().animate({left:0,opacity:100},'slow');
				} else {
					if ($(this).index() % 2 ==0) {
						$(this).stop().animate({left:-200,opacity:0},'slow');
					} else {
						$(this).stop().animate({left:200,opacity:0},'slow');
					}
				}
			});

			flag = !flag;
		});

	});
		
		
})