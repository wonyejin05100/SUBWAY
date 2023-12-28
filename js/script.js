$(function () {
    // 풀메뉴
    $('nav>ul>li').mouseenter(function () {
        $('.submenu, .bg').stop().slideDown(); //부드럽게 펼쳐줌
    });
    $('nav>ul>li').mouseleave(function () {
        $('.submenu, .bg').stop().slideUp(); //슬라이드되며숨겨짐
    });


});
// 문서가 로드될 때 실행되는 이벤트 핸들러
document.addEventListener('DOMContentLoaded', function () {
    // 모든 탭과 탭 콘텐츠를 가져옴
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    // 각 탭에 대한 이벤트 리스너를 등록
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function () {
            // 모든 탭 콘텐츠를 숨김
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            // 클릭한 탭에 해당하는 콘텐츠를 표시
            // 클릭한 탭에 해당하는 콘텐츠의 아이디를 가져옴
            const clickedContentId = tab.getAttribute('id').replace('tab', 'content');

            // 해당 아이디를 가진 콘텐츠 엘리먼트를 가져옴
            const clickedContent = document.getElementById(clickedContentId);

            // 만약 해당 콘텐츠 엘리먼트가 존재하면
            if (clickedContent) {
                // 해당 콘텐츠를 화면에 표시
                clickedContent.style.display = 'flex';
            }

        });
    });
});