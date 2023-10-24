;(function($){
  $(function(){

$('#main_2 .slider').bxSlider({auto:true,
                              pager:false});


$('#main_tab').tabmenu({action:'class'});
$('#board .tab_menu').tabmenu();
$('.open_menu').clickToGiveClass({class:'open_side',
                                  target:'#page-wrap'
});
$('.open_search').clickToGiveClass({class:'open_form',
                                button:'.search_bg'
});
});
})(jQuery);
