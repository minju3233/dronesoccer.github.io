
$(function(){
$('.gnb .aco').click(function(){
          var openSub = $(this).parent().hasClass('aco');
          $('.sub').slideUp();
          $('.gnb li').removeClass('aco');
          if(!openSub){
            $(this).siblings('.sub').slideDown();
            $(this).parent().addClass('aco');
          }
        });

        /*selected_box*/
        $('#selected_wrap .btn').click(function(e){
              e.preventDefault();//태그가 가지는 본래의 기능을 하지 않음
              var openList =$(this).siblings('.list').css('display');

              $('.list').slideUp();
              if(openList=='none') $(this).siblings('.list').slideDown();

                });



        /*팝업보기*/
        $('.open_popup').click(function(){
          $('#popup').slideDown();
          $('.open_popup').css('opacity',1);
        });

        $('.popup_close').click(function(){
          $('#popup').slideUp();
          $('.popup_close').css('opacity',1);

        });

        $(function(){
            $('#main_view .slider').bxSlider({auto:true,
                                              mode:'fade',
                                              //슬라이드 된 직후에 실행
                                              onSlideAfter:function($slideElement,oldIndex,newIndex){
                                                  $slideElement.addClass('active');
                                              },
                                              //슬라이드되기 직전에 실행
                                              onSlideBefore:function($slideElement,oldIndex,newIndex){
                                                  $('#main_view .slider article').eq(oldIndex).removeClass('active');
                                              },
                                              //슬라이드가 로드된 직후 실행
                                              onSliderLoad:function(currentIndex){
                                                $('#main_view .slider article').eq(currentIndex).addClass('active');
                                              }
                                              });
          });







      });
