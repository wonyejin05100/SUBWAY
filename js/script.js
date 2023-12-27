$(function(){
    // 풀메뉴
    $('nav>ul>li').mouseenter(function(){
        $('.submenu, .bg').stop().slideDown(); //부드럽게 펼쳐줌
    });
    $('nav>ul>li').mouseleave(function(){
        $('.submenu, .bg').stop().slideUp(); //슬라이드되며숨겨짐
    });

   
});