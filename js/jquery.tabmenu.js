
/*
1) 탭메뉴 클릭시 <li>에 클래스(tab-active)가 부여됨.
2) 해당 컨텐츠에는 클래스(tab-active)가 부여됨.

first속성
  처음 보여지는 탭메뉴(기본값:1)

random속성
  처음 보여지는 탭이 랜덤하게 결정됨(기본값:false)

eventing속성
  'click'(기본값) : 클릭시 변동
  'hover' : 마우스 오버시 변동

action속성
  'none'(기본값) : 해당컨텐츠를 제외하고는 모두 사라짐.
  'class' : 클래스만 부여됨.
  'fade' : 자연스럽게 사라지고 나타남.

clicking메소드
	clicking:function(_tabmenu,_tabcontents){
		:클릭하는 순간 진행됨.
		_tabmenu(클릭한 버튼객체)
		_tabcontents(탭에 의해 선택된 컨텐츠객체)
	}
*/
;(function($){

  $.fn.tabmenu = function(options){
    //플러그인 기본값
    var _def = {
                //옵션:옵션기본값
                first : 1,
                random : false,
                class : 'tab-active',
                eventing : 'click',
                action : 'none',
                clicking:function(_tabmenu,_tabcontents){}
                }

    //플러그인 기본값에서 새로 설정한 옵션값 합치기
    _def = $.extend(_def, options);

    return this.each(function(){

      //플러그인 실행내용
      var $tab = $(this);
      var $btn = $tab.find('a');//메뉴안에 있는 모든 a
      var $tab_li = $tab.find('li');
      var _i = $tab_li.length-1;
      if(_def.random) _def.first = Math.floor(Math.random()*_i+1);

      var $li = $tab_li.eq(_def.first-1);//첫번째 li
      var _target = $li.find('a').attr('href');//#clock

      var _class = _def.class;

      $li.addClass(_class);
      var _siblings = '.'+$(_target).attr('class');
      $(_target).addClass(_class);
      if(_def.action != 'class') $(_target).siblings(_siblings).hide();

      if(_def.eventing != 'hover') $btn.click(tab_action);
	    else $btn.mouseover(tab_action);

      function tab_action(e){
        e.preventDefault();
        var $this = $(this);//내가 클릭한 a
        _target = $this.attr('href');

        $this.parent('li').addClass(_class).siblings().removeClass(_class);
        $(_target).addClass(_class).siblings(_siblings).removeClass(_class);

        _def.clicking($this,$(_target));

        if(_def.action == 'none'){
            $(_target).show().siblings(_siblings).hide();
        }else if(_def.action == 'fade'){
          $(_siblings).stop().fadeTo(400, 0, function() {
              $(_target).stop().fadeTo(400, 1);
  				});
        }
      }//end:tab_action
    });//end:each
  }//end:plog-in

})(jQuery);
