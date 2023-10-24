/*
	옵션
	target : 버튼에 의하여 클래스를 부여받는 요소
	
	class : 부여되는 클래스 명(기본값:active)
			   
	button : 추가 동작되는 버튼
*/
;(function($){
	$.fn.clickToGiveClass = function(options){
		
		options = $.extend({target:'none', class:'active',button:''},options);
		
		return this.each(function(){
			var btn = $(this);
			var btns = $(options.button);
			var target = btn.attr('href');
			
			target = (options.target == 'none') ? target : target+', '+options.target;
			
			btn.click(function(e){
				if(!btn.hasClass(options.class)){			   
					btn.addClass(options.class);
					$(target).addClass(options.class);
					btns.addClass(options.class);
				}else{
					removeTargetClass();	
				}
				e.preventDefault();
			});
			
			btns.click(function(e){
				if(!btn.hasClass(options.class)){			   
					btn.addClass(options.class);
					$(target).addClass(options.class);
					btns.addClass(options.class);
				}else{
					removeTargetClass();	
				}
				e.preventDefault();
			});
			
			function removeTargetClass(){
				btn.removeClass(options.class);
				$(target).removeClass(options.class);
				btns.removeClass(options.class);
			};
			
		});
	}	
})(jQuery);